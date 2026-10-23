# ⚙️ Manage adaptive API rate limiting with a webhook proxy and Redis

> ⚡ **14 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow exposes a webhook that proxies calls to approved upstream APIs and enforces per-service rate limits in Redis, dynamically adjusting limits based on 429/Retry-After and X-RateLimit-* headers while optionally delaying over-budget requests.

## How it works
1. Receives a POST webhook request with `{ service, path, method, payload }` to be executed against an upstream API.
2. Validates the requested service and path against an allowlisted service registry and returns a 404 for unknown services or unsafe paths.
3. Loads the service’s current limiter state from Redis, computes the effective request limit, and immediately returns a 429 with `Retry-After` if an upstream backoff period is still active.
4. Atomically increments a per-window request counter in Redis and either allows the request, delays it until the next window if it can wait, or returns a 429 when it is over budget.
5. Calls the target upstream API with an HTTP request and inspects the response status and rate-limit headers.
6. Updates the adaptive limiter state in Redis using AIMD rules and returns the upstream result (or an upstream 429) with rate-limit and throttle metadata.

## Setup
1. Add a Redis credential and select it on all Redis nodes used for reading/writing limiter state and window counters.
2. Update the service registry values (base URLs, limits, window seconds, optional headers, and max wait) in the configuration step to match the APIs you want to proxy.
3. Send callers to the workflow’s POST webhook URL (`/webhook/rate-limit-manager`) and include `{ service, path, method, payload }` in the request body.

## 🔗 Nodes Used

HTTP Request, Redis, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
