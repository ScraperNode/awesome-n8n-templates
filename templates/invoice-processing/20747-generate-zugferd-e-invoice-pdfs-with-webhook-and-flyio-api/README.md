# 🧾 Generate ZUGFeRD e-invoice PDFs with webhook and Fly.io API

> ⚡ **1 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow receives invoice data via a webhook, sends it to a Fly.io-hosted ZUGFeRD/XRechnung generation API, and returns a generated PDF/A-3 invoice (with embedded ZUGFeRD XML) directly in the webhook response.

## How it works
1. Receives a POST request with invoice JSON data via a webhook endpoint.
2. Sends the received JSON to the Fly.io API endpoint `https://e-rechnung-api.fly.dev/v1/invoice/generate` with an `X-API-Key` header.
3. Receives the generated invoice PDF as a binary file from the API.
4. Returns the PDF in the webhook response as a downloadable file named `e-rechnung.pdf` with `Content-Type: application/pdf`.

## Setup
1. Deploy/verify access to the ZUGFeRD generation API at `https://e-rechnung-api.fly.dev/v1/invoice/generate` and obtain an API key.
2. Set the `ZUGFERD_API_KEY` environment variable in n8n (or replace the `X-API-Key` header value) so the HTTP request authenticates against the API.
3. Activate the workflow and copy the webhook URL, then configure your source system to POST the invoice JSON to `/generate-zugferd-invoice`.

## 🔗 Nodes Used

Send Email, HTTP Request, Webhook, Stripe Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
