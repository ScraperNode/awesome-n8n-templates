# ⚒️ Prevent duplicate payment transactions with webhook, Postgres, and HTTP API

> ⚡ **18 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
This workflow exposes a payment webhook that uses Postgres as an idempotency store to prevent duplicate charges, calling an external payment provider API only once per Idempotency-Key and replaying the stored result for retries, mismatches, and in-progress requests.

## How it works
1. Receives a POST request on a webhook endpoint with an Idempotency-Key header and a JSON payment payload.
2. Ensures the required Postgres idempotency_keys table and indexes exist to track request status and stored responses.
3. Validates the request, scopes the Idempotency-Key by client ID, and computes a SHA-256 fingerprint of a canonicalized payload.
4. Atomically claims the idempotency key in Postgres (or reads the existing record) to decide whether to execute, replay a completed response, reject a key reused with different payload, or return an “in progress”/duplicate-order error.
5. For newly claimed keys, calls the configured payment provider endpoint via HTTP and forwards the same Idempotency-Key header.
6. Classifies the provider response as completed (replayable success/decline) or failed (retryable timeout/5xx/429), stores the outcome back to Postgres, and responds to the webhook with Idempotency-Key and Idempotent-Replayed headers.

## Setup
1. Add Postgres credentials and ensure the database user has permissions to create tables/indexes and read/write the idempotency_keys table.
2. Update the providerUrl (and any policy values like leaseSeconds, providerTimeoutMs, maxAmount, and allowedCurrencies) in the validation/fingerprinting code to match your payment provider.
3. Activate the workflow, copy the production webhook URL, and configure your client or upstream service to send POST requests with an Idempotency-Key header (and optional X-Client-Id) plus the required fields in the JSON body.

## 🔗 Nodes Used

HTTP Request, Postgres, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
