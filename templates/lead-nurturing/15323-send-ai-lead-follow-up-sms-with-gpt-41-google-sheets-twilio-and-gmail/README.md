# 💬 Send AI lead follow-up SMS with GPT-4.1, Google Sheets, Twilio and Gmail

> ⚡ **220 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## How it works
- Triggered when a lead submits your website contact form via webhook
- Logs the lead's Name, Phone, Email, and Interest to Google Sheets
- GPT-4.1 generates a personalised SMS and sends it instantly via Twilio
- Waits 2 hours, then checks if the lead has replied (via Google Sheets)
- If replied: notifies you via Gmail. If not: sends an AI follow-up SMS

## Set up steps
- Add your OpenAI API key to both OpenAI nodes (model: GPT-4.1)
- Connect your Twilio account (Account SID + Auth Token) in both SMS nodes
- Link Google Sheets via OAuth and set your sheet with columns: Name, Phone, Email, Interest, Replied
- Connect Gmail via OAuth for owner notifications
- Paste the webhook URL into your website contact form as the POST endpoint
- Manually update the `Replied` column to `Yes` in Google Sheets when a lead responds

## 🔗 Nodes Used

Google Sheets, Twilio, Webhook, Gmail, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
