# ⚒️ Prevent duplicate webhook executions with AARI idempotency gate

> ⚡ **63 views** · ⚒️ [Engineering](../)

## Description

## Who this template is for

This template is for anyone running n8n workflows that receive webhooks and perform side effects such as payments, emails, database inserts, or API calls.

Webhook providers commonly use **at-least-once delivery**. If a webhook request times out or fails, the provider retries the same event. From n8n’s perspective this appears as a new trigger, which can cause the workflow to execute twice.

## How it works

This workflow adds an idempotency check before any side effect runs.

When the first event arrives, the workflow records its idempotency key and proceeds normally. If the same event arrives again within 24 hours, the gate returns a BLOCK decision and the workflow stops before any side effects execute.

The webhook responds immediately with a `200 OK` response., so providers do not retry due to workflow execution time. The idempotency gate then decides whether the workflow should proceed or stop.

This prevents duplicate executions such as:

- duplicate payments
- duplicate confirmation emails
- duplicate database rows
- duplicate external API calls

## How to set it up

Setup usually takes about **2 minutes**.

1. Create a free AARI API key at **api.getaari.com/n8n**
2. In n8n go to **Credentials → New → Header Auth**
3. Set the header name to `X-API-Key`
4. Paste your API key as the value
5. Select this credential in the **AARI idempotency gate** node
6. Replace the placeholder action node with your real workflow action (Stripe, Gmail, Postgres, etc.)

Detailed instructions are included in the sticky notes inside the workflow.

## Requirements

- n8n version 1.0 or later
- AARI API key (free tier available)

## Customization

You may need to adjust the `idempotency_key` depending on your webhook payload.

Examples:

- Stripe webhook events: {{ $json.id }}
- Shopify order events: {{ $json.order_id }}
- Generic events: combine stable fields such as {{ $json.type }}:{{ $json.created }}
(for example event type + creation time)

The key should uniquely identify the event so duplicates can be detected reliably.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
