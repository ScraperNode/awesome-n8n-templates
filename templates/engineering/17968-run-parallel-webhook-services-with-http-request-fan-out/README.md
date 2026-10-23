# ⚒️ Run parallel webhook services with HTTP Request fan-out

> ⚡ **7 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
This workflow fans out three concurrent HTTP POST requests to internal n8n webhook endpoints, simulates independent service runtimes, and returns a report showing timing, ordering, and whether the tasks overlapped to confirm they ran in parallel.

## How it works
1. Starts manually and prepares three items that each contain a target webhook URL and a payload.
2. Combines the three items into a single list and sends them as concurrent HTTP POST requests using n8n’s HTTP Request node with batching disabled.
3. Each webhook endpoint (service-1, service-2, service-3) starts its own execution, records a start timestamp, and simulates work by waiting for a different duration.
4. Each service responds to the original HTTP request with JSON containing the service name, startedAt, endAt, and the executionId.
5. Aggregates all service responses and calculates overlap and timing metrics (wall time vs summed durations), plus arrival and finish order, to verify parallelism.

## Setup
1. Replace `https://YOUR-N8N-URL` in the three service definitions with your n8n instance base URL so the HTTP requests reach your webhook endpoints.
2. Activate the workflow so the production `/webhook/service-1`, `/webhook/service-2`, and `/webhook/service-3` endpoints are available.
3. (Optional) Adjust the wait durations and the HTTP Request timeout to match your real tasks when you swap the simulated waits for actual work.

## Additional info
### Need help?
If you're facing any issues using this workflow, [join the community discussion on the n8n forum](https://community.n8n.io/t/run-tasks-in-parallel-with-http-request-fan-out-and-webhooks/309304).

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
