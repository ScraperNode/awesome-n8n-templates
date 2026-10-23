# 🧾 Create KSeF invoices from completed Sellf purchases via KSeF Gateway

> ⚡ **6 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow receives signed Sellf purchase webhooks, validates the HMAC signature, and when the buyer requests an invoice with a NIP it builds a KSeF-ready invoice and submits it to a self-hosted KSeF Gateway, capturing the returned KSeF number or an error.

## How it works
1. Receives a POST webhook from Sellf with the raw request body and the X-Sellf-Signature header.
2. Verifies the webhook signature using HMAC-SHA256 and rejects the request with a 401 response if the signature is invalid.
3. Responds immediately with a JSON OK response and continues processing in the background.
4. Filters the event to purchase.completed and extracts the customer, order, and invoice details from the webhook payload.
5. Continues only if the customer requested an invoice and provided a non-empty NIP.
6. Builds a KSeF invoice payload using your seller details and the purchase data, then posts it to your KSeF Gateway /ksef/invoice endpoint with an X-Api-Key header.
7. Stores the KSeF submission result by extracting the ksefNumber and status on success, or capturing the returned error details on failure.

## Setup
1. Set up Sellf webhooks to send purchase.completed events to this workflow’s production webhook URL and copy the webhook signing secret.
2. Deploy and configure a KSeF Gateway instance and note its base URL and API key.
3. Update the workflow’s configuration values (gateway URL, gateway API key, seller details, default VAT rate, and Sellf webhook secret).
4. If self-hosting n8n, set NODE_FUNCTION_ALLOW_BUILTIN=crypto and restart n8n so the signature verification code can use the Node.js crypto module.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
