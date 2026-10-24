# 🎣 Capture and clean inbound web form leads with an authenticated webhook

> ⚡ **19 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow receives inbound web form submissions via an n8n webhook, validates requests using a shared secret header, and cleans and standardizes lead fields (name, email, message, timestamps) so you can reliably pass a structured record into your CRM.

## How it works
1. Receives a POST request from your web form via an n8n webhook endpoint.
2. Validates the request by checking the `x-perly-key` header against the `PERLY_WEBHOOK_SECRET` variable and rejects unauthorized traffic.
3. Normalizes the lead payload by trimming values, lowercasing the email, splitting the full name into first/last name, validating the email format, and adding a received timestamp.
4. Hands off the cleaned lead record to a placeholder step where you connect your CRM or storage destination.

## Setup
1. Set `PERLY_WEBHOOK_SECRET` as an environment variable (self-hosted) or as an n8n Variable (n8n Cloud).
2. Copy the webhook URL from the Webhook trigger and configure your form to POST to it with the header `x-perly-key: <your secret>`.
3. Replace the placeholder “Connect your CRM here” step with your desired integration (for example HubSpot, Pipedrive, Airtable, or Google Sheets) and map the cleaned fields.

## Requirements
- n8n (Cloud or self-hosted). No external service, API key or AI credits needed.

## Customization
- All cleaning rules live in a single Code node, so you can add fields, change the normalisation or plug in your own validation without touching the rest of the flow.

## 🔗 Nodes Used

Google Sheets, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
