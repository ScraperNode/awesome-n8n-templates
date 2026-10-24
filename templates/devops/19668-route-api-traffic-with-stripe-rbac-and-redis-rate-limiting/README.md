# ⚙️ Route API traffic with Stripe RBAC and Redis rate limiting

> ⚡ **2 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow exposes a single n8n webhook as an API gateway that authenticates requests against Stripe customer metadata, authorizes access with role-based permissions, enforces per-role rate limits using Redis, and forwards allowed requests to internal n8n webhook endpoints.

## How it works
1. Receives a POST request on the n8n webhook with an API key, target route, method, and payload.
2. Looks up the Stripe customer whose metadata contains the provided API key and resolves the requester role from Stripe customer metadata.
3. Rejects unauthenticated requests with a 401 JSON response when no matching Stripe customer is found.
4. Checks the requested route against a configured route-to-roles permission map and rejects disallowed access with a 403 JSON response.
5. Increments a per-API-key counter in Redis for the current time window and compares it to the configured per-role limit.
6. Rejects over-limit requests with a 429 JSON response and a Retry-After header, or forwards allowed requests to the mapped internal n8n webhook URL.
7. Returns the internal workflow response to the client and includes X-RateLimit-Limit and X-RateLimit-Remaining headers.

## Setup
1. Add Stripe API credentials with permission to search customers and ensure each Stripe customer includes metadata.apiKey and metadata.role (admin, user, or readonly).
2. Add Redis credentials and ensure your Redis instance is reachable from n8n.
3. Update the gateway configuration to match your API design, including routePermissions, rateLimits, rateLimitWindowSeconds, and internalWorkflowMap URLs.
4. Configure your internal workflows to expose the target webhook endpoints and accept the forwarded payload (including the _gateway context object).
5. Copy the webhook URL for this workflow’s /gateway endpoint and point your client applications to it instead of calling internal workflows directly.

## 🔗 Nodes Used

HTTP Request, Redis, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
