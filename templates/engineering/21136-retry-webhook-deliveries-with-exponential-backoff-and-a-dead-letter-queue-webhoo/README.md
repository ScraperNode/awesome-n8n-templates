# ⚒️ Retry webhook deliveries with exponential backoff and a dead-letter queue webhook

> ⚡ **0 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
Receives a JSON payload on an n8n Webhook, forwards it to your target URL, retries network errors, 408, 429 and 5xx with exponential backoff and jitter, and hands payloads that still fail, or get any other non-2xx status, to a dead-letter queue webhook.

## How it works
1. Receives an incoming POST request on an n8n Webhook endpoint and immediately returns n8n's default acknowledgement. The caller is not told whether delivery later succeeded; a final failure only reaches the dead-letter queue.
2. Sets configuration values (target URL, dead-letter queue URL, retry limits) and captures the incoming request body as the payload.
3. Sends the payload to the configured target endpoint using an HTTP POST request and treats any 2xx response as successfully delivered.
4. When delivery fails, retries only network errors (including timeouts), 408, 429 and 5xx responses. Any other non-2xx status is not retried and goes straight to the dead-letter queue.
5. Computes an exponential backoff delay (2 second base by default, doubling per attempt) with up to 25% jitter and a 300-second cap, waits, then retries the POST. By default there are 5 attempts in total.
6. After the last attempt, or on a non-retryable status, posts the payload and failure metadata (attempts, last status, error, reason) to the dead-letter queue webhook URL. If that hand-off itself fails, the payload can be lost.

## Setup
1. Before activating, set Header Auth on the incoming Webhook node with a long random secret: the webhook is unauthenticated by default. (Header Auth was not part of the 2026-10-13 test.)
2. In the Config node, replace the example.invalid placeholders: target_url (where to forward) and dlq_url (your dead-letter queue webhook, for example the companion template "Store failed webhook events in an n8n Data Table as a dead-letter queue").
3. Review and adjust base_delay_seconds and max_attempts to match your delivery and latency requirements.
4. If your dead-letter queue webhook is protected, configure the "Send to Dead Letter Queue" HTTP request to include the required authentication (for example, by selecting the appropriate n8n credential).

## Requirements
- n8n with Webhook, HTTP Request, Code and Wait nodes. Tested headless on self-hosted n8n 2.35.7 (2026-10-13); not tested on n8n Cloud or via editor import.
- A target HTTP endpoint that accepts a JSON POST.
- A dead-letter queue webhook to receive final failures, for example the companion dead-letter queue template from the same repo.

## Customization
- Change max_attempts and base_delay_seconds in the Config node.
- Change the jitter, the 300-second cap or which statuses are retried in the Compute Backoff Code node.
- The target call is always a POST with the incoming body as JSON and a 15-second timeout; edit the Call Target node to add auth headers or change this.

## Additional info
Manual tests (curl commands) and the full record of the 2026-10-13 test (TESTING.md): https://github.com/claude-farm-hq/n8n-webhook-reliability. License: MIT. Built and operated by Martin Minkov with AI agents. Contact: mminkov@aubian.net. This template was written by an AI agent working for Martin, who owns it and is accountable for it.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
