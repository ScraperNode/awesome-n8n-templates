# 🎣 Verify AppsMax lead webhooks and forward new leads to an external HTTPS API

> ⚡ **1 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview

This workflow verifies AppsMax application webhooks with HMAC-SHA256 and forwards only new `application.created` leads to an external HTTPS API. AppsMax receives success only after the destination returns `2xx`.

## How it works

1. The Webhook node receives a POST request from AppsMax and preserves the raw request body.
2. Crypto calculates HMAC-SHA256 for the raw payload. Code compares it with the lowercase-hex `X-Appsmax-Signature` header.
3. An invalid signature returns `401` without processing the payload.
4. The event filter accepts only `application.created`. Other valid events, including `application.test`, return `204` without calling the destination.
5. Edit Fields selects the minimum lead data and creates a stable idempotency key from the event and application state.
6. HTTP Request posts the JSON payload with `Idempotency-Key` and `X-Appsmax-Event` headers.
7. A downstream `2xx` returns `200` to AppsMax. A `4xx`, `5xx`, timeout, or network failure returns `502`, allowing the AppsMax delivery policy to retry.

## Setup

1. In AppsMax, enable an outgoing application webhook and copy the n8n production webhook URL into its endpoint setting.
2. Replace the placeholder webhook path with a long random value, then update the URL in AppsMax.
3. Create an n8n Crypto credential, put the AppsMax webhook secret only in its HMAC Secret field, and attach it to the HMAC node.
4. Replace `example.invalid` with an HTTPS endpoint you control. Configure destination authentication through an n8n credential, not in the URL or workflow JSON.
5. Make the destination handle `Idempotency-Key` atomically and return `2xx` for both a newly accepted event and an already accepted replay.
6. Before activation, test a valid event, an invalid signature, `application.test`, a downstream failure, and a replay with synthetic data.

## Requirements

- An AppsMax project with an outgoing application webhook enabled
- n8n with the standard Webhook, Crypto, Code, If, Edit Fields, HTTP Request, and Respond to Webhook nodes
- A controlled HTTPS endpoint that accepts JSON and deduplicates repeated requests

## Customization

- Extend Edit Fields when the destination needs more application attributes.
- Add routing by lead source or status after the signature and event checks.
- Replace the generic HTTP destination with a CRM, ERP, help desk, or internal API while preserving the idempotency and response gates.

## Additional info

This free template uses only standard n8n nodes; it is not a native AppsMax node. It contains no credential IDs, tokens, webhook secrets, or client data. Keep the workflow inactive until the test matrix passes. The AppsMax-side steps are documented in the [AppsMax n8n guide](https://appsmax.ru/kb/kak-podklyuchit-appsmax-k-n8n/).

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
