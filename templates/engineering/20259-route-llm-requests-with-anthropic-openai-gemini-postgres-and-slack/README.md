# ⚒️ Route LLM requests with Anthropic, OpenAI, Gemini, Postgres, and Slack

> ⚡ **18 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
This workflow exposes a POST webhook that sends a prompt through a resilient LLM fallback chain (Anthropic, OpenAI, then Google Gemini), validates outputs against deterministic rules/JSON schema, logs all attempts to Postgres with a circuit breaker, and posts a Slack alert when failover or degraded responses occur.

## How it works
1. Receives a POST request on the n8n webhook (or runs manually for testing) with an LLM prompt and optional validation settings.
2. Normalizes the request by applying defaults, coercing types, and generating a prompt hash used for stale-cache fallback.
3. Reads provider health from Postgres and builds an ordered provider chain (optionally honoring a preferred provider and skipping providers with an open circuit).
4. Calls Anthropic, OpenAI, or Google Gemini via HTTP, then normalizes the response and validates it (status codes, empty/truncated/blocked/refusal output, length/keyword rules, and optional JSON parsing plus schema checks).
5. Logs each attempt to Postgres and updates circuit-breaker state, then either retries with backoff/repair hints, switches providers, or exhausts the chain.
6. If all providers fail, looks up a recent successful response for the same prompt hash in Postgres and returns it, otherwise returns a static degraded message with HTTP 503.
7. Saves the final result to Postgres, posts a Slack alert only when fallback/degraded mode is used, and responds to the webhook with the final JSON payload.

## Setup
1. Create HTTP Header Auth credentials for Anthropic (x-api-key), OpenAI (Authorization: Bearer …), and Google Gemini (x-goog-api-key) and attach them to the three HTTP Request nodes.
2. Add a Postgres credential, run the provided database schema (tables for llm_requests, llm_attempts, and llm_provider_health), and confirm the workflow’s queries match your schema name.
3. Add a Slack credential and set the target channel name in the configuration (for example, #llm-alerts).
4. Review and update the fallback policy in the configuration values (provider order, models, timeouts, retry/backoff, circuit breaker thresholds, cache window, and degraded message).
5. Copy the webhook URL from the Webhook trigger and configure your calling app to send POST requests to /llm-fallback-chain with the expected JSON payload.

## 🔗 Nodes Used

HTTP Request, Postgres, Slack, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
