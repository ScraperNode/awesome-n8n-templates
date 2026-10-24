# 💬 Match lost and found items with OpenAI, SendGrid and Google Sheets

> ⚡ **41 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow accepts lost-and-found item reports via a webhook or a 20-minute schedule, uses OpenAI to generate an empathetic notification message, then sends the email through SendGrid and logs each processed case to Google Sheets.

## How it works
1. Triggers when a new item report is received via webhook POST or every 20 minutes on a schedule.
2. Normalizes incoming fields (description, location, contact, itemType, timestamp, and preferences) into a consistent item-report schema.
3. Runs a Python step to classify and validate the report and set a flag indicating whether it is a valid item to process.
4. Filters out invalid reports and waits briefly to rate-limit requests before continuing.
5. Sends the cleaned item report to OpenAI (GPT-4.1-mini) to generate a concise, empathetic notification with recovery steps and match details when applicable.
6. Formats the AI output and then emails the notification to the reporter via the SendGrid Mail Send API while appending the case details to a Google Sheets tracker.

## Setup
1. Add an OpenAI API credential for the OpenAI Chat Model used by the AI matching step.
2. Configure SendGrid authorization for the SendGrid Mail Send API request and replace the "from" email address used in the email payload.
3. Connect Google Sheets (OAuth2) and replace YOUR_SHEET_ID (and sheet/range if needed) in the Google Sheets append request.
4. If using webhook intake, copy the webhook URL from n8n and configure your reporting source to POST JSON fields like description, location, and contact to that endpoint.

## 🔗 Nodes Used

HTTP Request, Webhook, Schedule Trigger, Filter, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
