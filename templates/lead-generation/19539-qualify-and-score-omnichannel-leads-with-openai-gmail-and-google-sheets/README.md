# 🎣 Qualify and score omnichannel leads with OpenAI, Gmail, and Google Sheets

> ⚡ **49 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow captures inbound leads from Gmail or a webhook, uses OpenAI to extract qualification signals, scores and classifies each lead, logs it to Google Sheets, and creates a personalized Gmail draft for HOT leads to review before sending.

## How it works
1. Triggers when a new unread email arrives in Gmail or when a POST request is received on the webhook endpoint.
2. Normalizes the incoming email/webhook payload into a consistent lead format and checks that required fields (sender email and message) are present.
3. Loads existing leads from Google Sheets and stops processing if the incoming lead matches an existing Source Record ID.
4. Uses OpenAI to extract structured lead details (for example intent, urgency, company, and missing information) from the enquiry.
5. Calculates a weighted lead score from the extracted signals, classifies the lead as HOT/WARM/LOW based on configured thresholds, and appends the lead record to Google Sheets.
6. For HOT leads, uses OpenAI to draft a tailored reply, appends your configured signature, and creates a Gmail draft addressed to the sender (threaded for Gmail-sourced leads).

## Setup
1. Add Gmail credentials for the Gmail trigger and Gmail draft actions, and optionally narrow which emails qualify via the Gmail trigger search/filter settings.
2. Add Google Sheets credentials, create/copy a lead-tracking spreadsheet, and paste its URL and tab name into the workflow configuration.
3. Add an OpenAI credential and select the chat model used for analysis and response writing.
4. Update the CONFIGURE section with your business details, scoring weights/thresholds, signature, and optional booking link.
5. If using the webhook intake, copy the webhook URL and configure your form/app to send lead data as JSON to it (including at least email and message).

## Requirements
- n8n Cloud or self-hosted n8n
- OpenAI API access and available API credits
- Gmail account
- Google Sheets account
- A Google Sheet using the required PF-001 lead database columns

## Customization
- Business name, description and services
- HOT/WARM scoring thresholds
- Individual scoring weights
- Maximum qualification questions
- Business email signature
- Optional booking link
- Gmail Search filter for shared inboxes
- OpenAI model selection
- Webhook integration with external forms, websites or apps

## 🔗 Nodes Used

Google Sheets, Webhook, Gmail, Gmail Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
