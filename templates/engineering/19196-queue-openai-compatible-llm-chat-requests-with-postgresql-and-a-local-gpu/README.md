# ⚒️ Queue OpenAI-compatible LLM chat requests with PostgreSQL and a local GPU

> ⚡ **5 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
An n8n-first, durable FIFO gateway for a local OpenAI-compatible language model. It accepts ordinary Chat Completions requests, queues them in PostgreSQL, runs one inference at a time, and supports human retrieval commands, automatic waiting by shell-capable AI harnesses, and OpenAI-compatible SSE response framing.

## How it works
1. Receives OpenAI-style requests on a POST `/v1/chat/completions` webhook secured with header authentication.
2. Validates and classifies the request as a new submission or a control command (get result/wait, cancel, or list queue), then stores new jobs in a PostgreSQL queue table.
3. Looks up, cancels, or lists queued/running jobs in PostgreSQL and returns an OpenAI-compatible JSON response or an OpenAI SSE-framed response when `stream: true` is requested.
4. Exposes a GET `/v1/queue/tasks/:taskId` webhook to return the durable status, queue position, and any stored error details for a specific task.
5. Exposes a GET `/v1/models` webhook to return the configured comma-separated model identifiers without calling the upstream LLM.
6. Runs every 5 seconds to recover expired leases, claim the oldest eligible queued job under PostgreSQL locks, call the upstream chat completions URL, and persist the success result or schedule a bounded retry back into PostgreSQL.

## Setup
1. Add a PostgreSQL credential, point all PostgreSQL nodes to it, and run the manual setup trigger once to create the `llm_queue_jobs` table and indexes.
2. Configure header authentication on all three webhooks (`/v1/chat/completions`, `/v1/queue/tasks/:taskId`, and `/v1/models`) and deploy behind TLS.
3. Update the dispatcher configuration values (upstream chat completions URL, timeout, lease minutes, and retry base seconds) and set any required upstream authentication in the HTTP Request node.
4. Update the gateway configuration values (max attempts and the wait/poll limits) and set the model IDs returned by `/v1/models`.
5. Copy the webhook URLs and configure your OpenAI-compatible client or gateway to use them as its base URL and auth header.

## Additional info
## API

### Chat Completions

`POST /v1/chat/completions`

The body is the ordinary OpenAI Chat Completions request. Both `stream: false` and `stream: true` are accepted. The original body is stored in PostgreSQL; the dispatcher forces the upstream request to `stream: false` and removes `stream_options` so the result can be persisted reliably.

```bash
curl -sS "$OPENAI_BASE_URL/chat/completions" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H 'Content-Type: application/json' \
  -d '{
    "model": "queued-local-model",
    "messages": [{"role": "user", "content": "Explain transactional queues."}],
    "stream": false,
    "max_tokens": 800
  }' | jq
```

For SSE-compatible mode:

```bash
curl -sS -N "$OPENAI_BASE_URL/chat/completions" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H 'Content-Type: application/json' \
  -d '{
    "model": "queued-local-model",
    "messages": [{"role": "user", "content": "Explain transactional queues."}],
    "stream": true,
    "stream_options": {"include_usage": true},
    "max_tokens": 800
  }'
```

### Streaming semantics

When `stream: true`, successful Chat Completions responses use `Content-Type: text/event-stream`. The gateway converts its queue acknowledgement, synthetic waiting tool call, or stored completion into OpenAI `chat.completion.chunk` events and terminates the response with `data: [DONE]`.

This is **SSE protocol compatibility**, not live GPU-token streaming. The initial request still returns promptly after enqueueing. After a shell-capable harness reports that waiting has completed, the stored answer is replayed as SSE chunks. If `stream_options.include_usage` is true, a final usage chunk with an empty `choices` array is emitted before `[DONE]`.

### Task status

`GET /v1/queue/tasks/:taskId`

```bash
curl -sS "$OPENAI_BASE_URL/queue/tasks/task_REPLACE_ME" \
  -H "Authorization: Bearer $OPENAI_API_KEY" | jq
```

### Model discovery

`GET /v1/models`

## Human flow

A normal prompt returns immediately:

```text
Your request is queued as task_....
Check it with /result task_....
```

The following messages are handled by the gateway and do not use GPU tokens:

- `/result task_ID` or `/wait task_ID`: retrieve status or the completed OpenAI response
- `/cancel task_ID`: cancel a task that is still queued
- `/queue`: list up to 50 active tasks

## Harness flow

If the request advertises a supported function tool with a string command argument, the gateway returns an OpenAI-compatible synthetic tool call. Supported names are:

- `exec_command`
- `run_command`
- `bash`
- `shell`
- `terminal`
- `exec`

Supported string arguments are `cmd`, `command`, and `script`.

The generated command:

1. Checks for `curl` and `jq`.
2. Runs one internal shell loop that polls the task-status route without creating repeated harness tool calls.
3. Uses the interval and attempt limit from **Configure Chat Gateway** (defaults: five seconds and 720 attempts, approximately one hour).
4. Returns a small completion marker to the harness.
5. Exits non-zero when the task fails, is cancelled, expires, or times out.

When the harness posts the shell tool result back to Chat Completions, the gateway recognizes the reserved `queue_wait_task_...` tool-call ID and returns the stored model completion directly. It does not schedule a second inference.

The harness must expose the shell tool in the original request and must preserve the tool-call ID in its continuation. If it does not, the workflow falls back to the human command response.

## Queue and recovery behavior

- FIFO order is `created_at, id`.
- Only one non-expired `running` task is permitted.
- An advisory transaction lock prevents concurrent dispatcher executions from claiming two tasks during the same instant.
- Each claim has a two-hour lease.
- HTTP 408, 425, 429 and 5xx responses retry with exponential backoff.
- Default maximum attempts: 3.
- If the HTTP Request node terminates before classification, the lease-recovery query eventually requeues the task.
- Completed responses are stored as JSONB and returned without model-side transformation.

## Important limitations

- This is structurally OpenAI-compatible but intentionally asynchronous in behavior: the first completion may be a queue acknowledgement or shell tool call.
- SSE mode replays constructed or stored responses; it does not relay tokens live from the GPU.
- Clients requiring a single long-lived connection from queue admission through token generation need a dedicated streaming relay outside this n8n-only template.
- Automatic waiting depends on a compatible shell tool and on `curl + jq` being installed.
- A running request cannot be cancelled at the upstream inference server; only queued requests are cancelled.
- The included authentication model is one shared Header Auth credential and one shared queue. It does not provide tenant isolation.
- Network-level failures in the upstream HTTP node recover when the lease expires rather than immediately.
- The template does not automatically delete historical prompts or results.

## 🔗 Nodes Used

HTTP Request, Postgres, Webhook, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
