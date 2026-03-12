# 💬 Send WhatsApp follow-up when a new lead submits a form with MoltFlow and log to Sheets

> ⚡ **24 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## What this template does

Instantly reach new leads on WhatsApp when they submit a form (Typeform, JotForm, Google Forms, or any webhook-enabled form) using MoltFlow (https://molt.waiflow.app). Leads are also logged to Google Sheets for CRM tracking.

## How it works

1. A form submission triggers this webhook
2. Contact info is extracted (name, phone, interest)
3. A personalized WhatsApp message is sent via MoltFlow
4. The lead is logged to Google Sheets for follow-up tracking

## Set up steps

1. Create a MoltFlow account (https://molt.waiflow.app) and connect your WhatsApp number
2. Generate an API key in MoltFlow (Sessions page, API Keys tab)
3. Activate this workflow in n8n and copy the webhook URL
4. Configure your form tool to POST submissions to this webhook URL
5. Map your form field names in the Parse Form Data code node (name, phone, email, interest)
6. Set YOUR_SESSION_ID in the Parse Form Data code node
7. Add your MoltFlow API key as an HTTP Header Auth credential (Header Name: X-API-Key)
8. Optional: Connect Google Sheets to log leads automatically

## Prerequisites

- MoltFlow account with an active WhatsApp session
- Any form tool that supports webhooks (Typeform, JotForm, Google Forms, Tally, etc.)
- Optional: Google Sheets for lead tracking

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
