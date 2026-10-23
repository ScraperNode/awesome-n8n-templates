# ⚙️ Protect downstream APIs with a circuit breaker using Data Tables

> ⚡ **2 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
Stop n8n workflows from repeatedly calling an unavailable API by opening a circuit after consecutive failures, enforcing a cooldown, and allowing a controlled half-open recovery trial.

## How it works
1. Receives a POST request on the `/webhook/circuit-breaker-check` endpoint with a `service_key` to decide whether a downstream API call should proceed.
2. Looks up the service’s circuit state in the `service_circuits` n8n Data Table and evaluates whether to allow, block, or start a half-open trial based on the current state and cooldown window.
3. Creates or updates the circuit record when entering half-open, then responds with `allow_request`, the current `state`, and `retry_after_seconds` for the caller.
4. Receives a POST request on the `/webhook/circuit-breaker-result` endpoint with the `service_key` plus `success` and optional `error` to record the outcome of an allowed call.
5. Updates the `service_circuits` record to close the circuit on success or increment failures and open the circuit (with `open_until`) when the failure threshold is reached or a half-open trial fails, then returns a confirmation response.

## Setup
1. Create an n8n Data Table named `service_circuits` with the columns listed in the template (including `service_key`, `state`, `failure_count`, `failure_threshold`, and the timestamp fields) and select it in each Data Table step.
2. Copy the two webhook URLs from n8n and configure your calling service to POST to `/webhook/circuit-breaker-check` before an external API call and to `/webhook/circuit-breaker-result` after each allowed call.
3. Update the circuit breaker defaults in the configuration step (for example `failure_threshold` and `cooldown_minutes`) to match your reliability requirements.

## Requirements
-  Data Tables enabled
- No credentials or paid services are required.

## Customization
- Use a separate service_key for each provider or endpoint.
- Adjust thresholds for critical or rate-limited services.
- Route blocked requests to a queue, fallback response, or retry workflow.
- Replace Data Tables with PostgreSQL for strict concurrency guarantees.

## 🔗 Nodes Used

Webhook, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
