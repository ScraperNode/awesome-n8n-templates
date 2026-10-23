# ⚙️ Protect external API calls with a webhook circuit breaker and Redis

> ⚡ **1 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow exposes a webhook-based circuit breaker that routes requests to approved external APIs, tracks failures per service in Redis, and temporarily blocks calls when failure thresholds are exceeded, optionally sending an alert to a Slack-compatible webhook.

## How it works
1. Receives a POST webhook request with a service name plus the target path, method, and payload.
2. Validates the service against a configured allowlist, builds the target URL, and rejects unknown services or unsafe paths with a 404 response.
3. Reads the service’s circuit state from Redis and either allows the call, rejects immediately with 503 and a Retry-After header, or enters a half-open state after the cool-down.
4. If half-open, claims a single probe slot in Redis so only one request tests recovery while others receive 503.
5. Calls the external API with a configured timeout and classifies failures as network/timeout errors, HTTP 5xx, or HTTP 408 (while other 4xx responses do not count as service failures).
6. On success, returns the upstream response and closes the circuit in Redis if the request was a half-open probe.
7. On failure, increments a Redis failure counter, opens the circuit when the threshold is reached (or on a failed probe), optionally posts an alert via an HTTP webhook, and returns a 502 response describing the failure and circuit status.

## Setup
1. Configure Redis credentials for every Redis step and ensure your Redis instance is reachable from n8n.
2. Update the service registry in the configuration (service name to base URL, with optional per-service thresholds and open duration) so only approved APIs can be called.
3. Adjust default thresholds and timeouts (failure threshold/window, open duration, request timeout) to match your reliability requirements.
4. If you want notifications, set an alertWebhookUrl for a Slack-compatible incoming webhook endpoint.
5. Copy the production webhook URL for the circuit breaker endpoint and update your calling workflows/apps to send POST requests with { service, path, method, payload }.

## 🔗 Nodes Used

HTTP Request, Redis, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
