# ⚒️ Run a distributed priority job queue with Redis and Anthropic

> ⚡ **4 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
This workflow implements a distributed priority job queue in n8n using Redis for storage, lane-based scheduling, and worker wakeups, with optional Anthropic LLM execution and outbound HTTPS calls, plus webhook endpoints for enqueueing jobs, checking queue/job status, and cancelling queued or delayed jobs.

## How it works
1. Receives a POST request on the `/webhook/queue-enqueue` webhook, validates the job (type, priority, payload size, delay, attempts), and generates a job record with a token for deduping and fencing.
2. Checks Redis for an existing `job:{jobId}` record to make enqueueing idempotent, returning a duplicate response if the job already exists.
3. Stores the job record in Redis with a TTL and either pushes it to `queue:scheduled` (delayed) or to the appropriate priority lane list (`queue:critical`, `queue:high`, `queue:normal`, `queue:low`) and publishes a Redis pub/sub notification to wake workers.
4. Wakes workers via a Redis Trigger notification or a 10-second schedule, then polls Redis lanes in priority order (with an anti-starvation rotation every N polls) and atomically pops the next available message.
5. Loads and validates the job record in Redis using the message token, claims the job by writing a lease and registering it in `queue:processing`, and then executes the handler (Anthropic Messages API for `llm`, an outbound HTTPS request for `http`, or a no-op echo for `noop`).
6. Records the outcome back to Redis only if the worker still holds the lease, then either completes the job, schedules a retry with exponential backoff by pushing to `queue:scheduled`, or dead-letters it to `queue:dead`, repeating until the per-run job limit is reached.
7. Runs a 20-second maintenance loop that promotes due scheduled jobs back into their priority lanes and requeues or dead-letters processing jobs whose leases have expired, publishing notifications so workers pick them up.
8. Exposes `/webhook/queue-status` for queue depth stats or job lookup by `jobId`, and `/webhook/queue-cancel` to cancel jobs that are still queued or scheduled.

## Setup
1. Add a Redis credential and select it on all Redis and Redis Trigger nodes so the workflow can store job records, manipulate lists, and publish/subscribe to notifications.
2. Add an Anthropic API key as an HTTP Header Auth credential (using the `x-api-key` header) for the node that executes `llm` jobs against the Anthropic Messages API.
3. Update the configuration values in the Producer, Worker, and Maintenance configuration steps (lane order, batch sizes, lease/backoff/retention, allowed HTTP hosts, Anthropic API URL, and model catalog/pricing if you use cost tracking).
4. Run n8n in queue mode with one or more workers (for example, `EXECUTIONS_MODE=queue` and `n8n worker --concurrency=...`) so the Redis notification trigger runs on the main instance and job executions scale across workers.
5. If you plan to run `http` jobs, set `allowedHttpHosts` to the exact hostnames you permit and ensure targets are reachable over HTTPS using only GET/POST as enforced by the workflow.

## 🔗 Nodes Used

HTTP Request, Redis, Webhook, Redis Trigger, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
