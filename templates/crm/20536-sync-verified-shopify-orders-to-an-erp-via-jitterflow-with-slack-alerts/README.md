# 🤝 Sync verified Shopify orders to an ERP via Jitterflow with Slack alerts

> ⚡ **12 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow verifies Shopify orders/create webhooks, transforms each order into an ERP import payload, and queues it in Jitterflow for rate-limited delivery with retries and idempotency, then posts a daily Slack summary of orders that ended up in Jitterflow’s dead-letter queue.

## How it works
1. Receives a Shopify orders/create webhook request and keeps the raw request body for signature verification.
2. Computes the Shopify HMAC signature and rejects the request with a 401 response if the signature does not match the x-shopify-hmac-sha256 header.
3. Maps the Shopify order data into an ERP-friendly payload including order identifiers, customer and shipping details, totals, and line items.
4. Sends the mapped order to Jitterflow with an idempotency key based on the Shopify order ID, then responds 200 to Shopify only after the order is successfully queued.
5. Runs every morning at 8:00 to list unresolved items in the Jitterflow dead-letter queue and keeps only those originating from Shopify.
6. Aggregates the failed Shopify orders into a single list and posts a Slack message summarizing which orders did not reach the ERP and the associated HTTP status or failure reason.

## Setup
1. Install the n8n-nodes-jitterflow community node and create a Jitterflow API credential in n8n.
2. In Jitterflow, create an endpoint that targets your ERP’s order-import URL, configure its delivery cadence to match the ERP rate limit, and copy the endpoint key into the workflow.
3. Create a Crypto credential in n8n with your Shopify webhook signing secret and select it for the HMAC computation step.
4. Add a Slack credential, set the target channel (for example, orders-ops), and ensure the workflow has permission to post messages.
5. Activate the workflow and register its production webhook URL in Shopify for the orders/create topic using JSON format.

## Requirements
- A Jitterflow account and API key (the free Developer plan works). The n8n-nodes-jitterflow node, which is verified and available on n8n Cloud. Shopify admin access to add an orders/create webhook and copy its signing secret. A Slack workspace for the failure alerts.

## Customization
- Change the fields in Map order to ERP format to match your ERP's import schema. Set Target Identifier to the shop domain to pace each store separately. Send the daily alert to email or Microsoft Teams instead of Slack.

## 🔗 Nodes Used

Slack, Webhook, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
