# 💬 Score and reply to new leads using OpenRouter, Gmail and Google Sheets

> ⚡ **1 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow receives website leads via webhook, uses OpenRouter to score the enquiry and draft a short reply, then sends the response through Gmail and logs the lead (and any errors) to Google Sheets.

## How it works
1. Receives a lead submission via a POST webhook.
2. Normalizes the incoming fields (name, email, phone, message), adds a timestamp, and applies business-specific settings.
3. Sends the lead details to OpenRouter to classify the lead as hot/warm/cold, summarize the need, and generate a concise email reply.
4. Parses and validates the JSON returned by OpenRouter, falling back to safe defaults if parsing fails.
5. If the lead includes an email address, sends the drafted reply via Gmail and appends the lead details, score, and “Reply Sent” status to a Google Sheets “Leads” tab.
6. If no email is provided, skips sending and still appends the lead details and “email not supplied” status to the Google Sheets “Leads” tab.
7. If the lead is scored as hot, emails the business owner via Gmail with the lead details, and if any step errors, logs the failure to a Google Sheets “Errors” tab and alerts the owner by email.

## Setup
1. Create an OpenRouter credential in n8n and ensure the selected model (stealth/space-bunny-alpha) is available for your account.
2. Connect a Gmail account in n8n for sending both lead replies and owner alerts.
3. Connect Google Sheets credentials in n8n and set the Google Sheet document ID in the workflow settings field used for logging.
4. In the workflow’s settings step, fill in the owner email address and confirm the business name.
5. In your Google Sheet, create two tabs named “Leads” and “Errors” with headers matching the columns the workflow appends.
6. Copy the webhook Production URL and configure your form tool to POST lead data (for example: name, email, phone, and message) to that endpoint.

## 🔗 Nodes Used

Google Sheets, Webhook, Gmail, Basic LLM Chain, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
