# 🎫 Triage support tickets with OpenAI, HubSpot, Slack, Linear, and Google Sheets

> ⚡ **2 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow receives support tickets via a webhook, normalizes and validates the payload, deduplicates against a Google Sheets audit log, enriches the requester in HubSpot, and uses OpenAI to classify and draft replies, then routes escalations to Linear and Slack or creates Gmail drafts with full audit logging.

## How it works
1. Receives a support ticket payload via a POST webhook.
2. Normalizes common ticket fields (email, subject, message, URL) and assigns an SLA profile including a VIP-domain flag.
3. Rejects tickets missing required fields, posts an intake error to Slack, and returns a 422 response to the webhook caller.
4. Looks up a deduplication key in Google Sheets and, if a match is found, posts a duplicate notice to Slack and returns a duplicate response.
5. Searches HubSpot for the requester’s contact record and sends the ticket plus HubSpot context to OpenAI to generate category, priority, sentiment, SLA risk notes, and a reply draft.
6. Escalates urgent/VIP/security/billing or keyword-risky tickets by creating a Linear issue and posting an alert to Slack.
7. For non-escalations, posts low-confidence or AI-failure cases to a Slack human-review queue, otherwise creates a Gmail reply draft, then appends the decision to Google Sheets and returns a final JSON response to the webhook caller.

## Setup
1. Create credentials for Slack, Google Sheets, Gmail, and supply API tokens/keys for HubSpot (private app token), OpenAI, and Linear.
2. Replace the placeholder values for the Google Sheet ID, HubSpot token, OpenAI API key, Linear API key, and Linear team ID in the workflow.
3. Create a Google Sheets spreadsheet with a "Support Audit Log" sheet that includes a dedupeKey column used for lookups and supports appending the audit fields.
4. Update the Slack channels (#support-ops, #support-triage, and #support-escalations) to match your workspace and permissions.
5. Copy the production webhook URL and configure your helpdesk or form tool to POST ticket events to the /ai-support-triage endpoint with the expected fields.

## Requirements
- OpenAI API key; HubSpot private app token; Slack, Google Sheets, Gmail, and Linear credentials; a Support Audit Log sheet with a dedupeKey column

## Customization
- Replace Linear with Jira/Asana, change VIP domains and SLA thresholds in the normalization code, and tune the OpenAI prompt categories to match your support taxonomy

## Additional info
Built for production-style support operations: validation, deduplication, vendor-failure fallback, AI confidence gating, urgent/VIP escalation, customer-reply drafting, and audit logging are documented with sticky notes on the canvas.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
