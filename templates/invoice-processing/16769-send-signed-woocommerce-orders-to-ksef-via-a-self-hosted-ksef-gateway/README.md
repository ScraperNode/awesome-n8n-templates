# 🧾 Send signed WooCommerce orders to KSeF via a self-hosted KSeF Gateway

> ⚡ **9 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow receives WooCommerce order webhooks, verifies the WooCommerce signature, converts eligible orders into a KSeF invoice payload, and submits them to a self-hosted KSeF Gateway API, skipping consumer orders that do not include a buyer NIP.

## How it works
1. Receives a WooCommerce order webhook request and keeps the raw request body for signature validation.
2. Verifies the `X-WC-Webhook-Signature` HMAC against your shared webhook secret and rejects invalid requests with a 401 response.
3. Extracts the buyer NIP from WooCommerce order meta data and maps the order (seller, buyer, line items, VAT rates, and payment details) into a KSeF invoice payload.
4. Skips processing and responds to WooCommerce with a success message when the order has no buyer NIP (consumer purchase).
5. Sends the invoice payload to your self-hosted KSeF Gateway endpoint over HTTP with an `X-Api-Key` header.
6. Responds to WooCommerce with the resulting KSeF number (when available) or an error from the gateway.

## Setup
1. Deploy a KSeF Gateway instance and note its base URL.
2. Update the workflow configuration values for the gateway URL and API key, seller NIP/name/address, and the WooCommerce webhook secret.
3. In WooCommerce, add a checkout field that saves the buyer NIP into order meta (for example `_billing_nip` or `billing_nip`) and create an order webhook pointing to this workflow’s Production webhook URL using the same secret.
4. If you self-host n8n, allow the built-in `crypto` module for the signature-checking code by setting `NODE_FUNCTION_ALLOW_BUILTIN=crypto` and restarting n8n.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
