# 🔒 Triage scam messages and alert family with Claude and Google Sheets

> ⚡ **20 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick overview
This workflow analyzes suspicious calls, WhatsApp messages, and emails using AI to detect scams, explain risks simply, suggest safe actions, alert trusted family members about high-risk fraud, and maintain a history of suspicious activity.

## How it works
1. Receives a suspicious message submission through an HTTP webhook (with defaults for testing if fields are missing).
2. Scans the message text for common scam keywords (urgency, payment methods, secrecy, threats, impersonated authority) to produce heuristic flags and a heuristic risk score.
3. Sends the message context to Anthropic Claude to assess whether it is likely a scam, identify the scam type, return red flags, and provide an AI risk score and confidence.
4. Stops and responds to the webhook asking for more detail if the AI confidence is too low to assess the message reliably.
5. Calculates a composite 0–100 risk score and risk tier by blending the heuristic score, the AI risk score, and the number of AI-identified red flags, then asks Anthropic Claude to generate calm, plain-language next steps and (when needed) a family alert message.
6. Appends a summary row for the check to a Google Sheets log via the Google Sheets API.
7. If the case requires escalation, sends a SendGrid email to the trusted family contact and returns the guidance with confirmation; otherwise, returns the guidance directly in the webhook response without sending an alert.

## Setup
1. Create an Anthropic API credential in n8n and select it for both Anthropic Claude chat model connections.
2. Add a SendGrid API key and replace the placeholder bearer token in the SendGrid HTTP request, and set a valid from address/domain in the email body.
3. Configure Google Sheets OAuth2 (or an OAuth2 API credential) for the Google Sheets API request and replace YOUR_SHEET_ID with your spreadsheet ID.
4. Create a Google Sheet tab named ScamCheckLog with columns that match the appended row values (report ID, recipient name, channel, claimed identity, scores/tier, scam fields, recommendation, alert flag, timestamp).
5. Copy the production webhook URL for the POST endpoint and send JSON fields like messageText and trustedFamilyContactEmail from your intake form/app (or rely on the built-in defaults for testing).

## 🔗 Nodes Used

HTTP Request, Webhook, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
