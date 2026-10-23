# 🤝 Turn call, chat, and email transcripts into sales records with Claude, Sheets, and Gmail

> ⚡ **15 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow accepts a call, chat, or email transcript via an n8n form or a webhook, uses Anthropic Claude to extract structured sales fields and a follow-up message, logs the results to Google Sheets, and sends urgent conversations to a Gmail recipient.

## How it works
1. Receives a transcript and channel either from an n8n form submission or a POST request to a webhook endpoint.
2. Normalizes the incoming payload into a consistent structure with source, channel, timestamp, and transcript text.
3. Sends the transcript to Anthropic Claude to extract strict JSON fields such as summary, contact, company, needs, intent, budget, timeline, objections, urgency, next action, and a follow-up message.
4. Parses Claude’s JSON output and builds a human-readable text view, falling back to a manual-review record if parsing fails.
5. Appends the structured fields to a Google Sheets tab named “Conversations” for ongoing record-keeping.
6. If the extracted urgency is high, sends the readable summary and follow-up via Gmail to the configured alert recipient.
7. Returns results as structured JSON to webhook callers or displays the readable results page to form users.

## Setup
1. Add an Anthropic credential and select a Claude model in the Anthropic/Claude language model node.
2. Connect your Google Sheets account and set the target spreadsheet (document ID) and ensure it has a sheet/tab named “Conversations”.
3. Connect your Gmail account for sending email alerts.
4. Replace the placeholder email in the alert recipient field (currently you@example.com) with your real distribution address.
5. If using the webhook intake, copy the webhook URL for the /analyze-conversation endpoint and configure your source system to POST transcript and channel fields.

## Requirements
- A Google account with access to Google Sheets and Gmail
- An Anthropic API key

## Customization
- Edit the extraction fields in the Claude prompt and the Google Sheets columns to match your sales pipeline
- Change the urgency condition to match your escalation rules
- Swap the Gmail alert for Slack, or point the webhook response at your CRM

## Additional info
Tested end to end with the built-in form. To try it after import, open the form, paste any call or chat transcript, and submit. The webhook accepts POST requests with transcript and channel fields for system integrations.

## 🔗 Nodes Used

Google Sheets, Webhook, Gmail, Basic LLM Chain, Anthropic Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
