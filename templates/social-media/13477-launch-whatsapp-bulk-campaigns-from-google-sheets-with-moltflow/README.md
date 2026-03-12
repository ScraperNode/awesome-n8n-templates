# 📱 Launch WhatsApp bulk campaigns from Google Sheets with MoltFlow

> ⚡ **38 views** · 📱 [Social Media & Email Marketing](../)

## Description

## How it works

Send personalized WhatsApp campaigns to hundreds of contacts imported directly from a Google Sheet. This workflow creates a contact group in MoltFlow, launches a bulk send job with smart anti-spam delays, and reports campaign progress — all in one click.

1. You click "Execute" when ready to launch a campaign
2. Contacts are read from your Google Sheet (phone, name, and optional custom message per contact)
3. A custom group is created in MoltFlow with all valid contacts
4. A bulk send job is launched — MoltFlow handles message delivery with smart delays to protect your WhatsApp number
5. After 30 seconds, the workflow checks progress and shows a summary (sent, failed, remaining)

## Set up steps

Setup takes about 5 minutes:

1. Create a [MoltFlow](https://molt.waiflow.app) account and connect your WhatsApp by scanning the QR code
2. Generate an API key from **Sessions &gt; API Keys** tab (select the "Outreach" scope preset)
3. Prepare your Google Sheet with columns: `phone`, `name`, `message_override` (optional)
4. In n8n, connect your **Google Sheets OAuth2** credential and your **MoltFlow API Key** (Header Auth with header name `X-API-Key`)
5. Open the **Read Contacts from Sheet** node and paste your Google Sheet URL
6. Open the **Format Contacts** code node and replace `YOUR_SESSION_ID` with your MoltFlow session ID
7. Customize the default message template if needed
8. Click **Execute Workflow** to launch

## Google Sheet format

Your sheet needs these columns (headers in row 1):
- **phone** — phone number with country code, digits only (e.g. 1234567890)
- **name** — contact name
- **message_override** — (optional) custom message for this contact; if empty, the default template is used

## Prerequisites

- A [MoltFlow](https://molt.waiflow.app) account with a connected WhatsApp session
- A Google Sheet with contact data
- MoltFlow API key with `custom-groups:manage`, `bulk-send:manage`, `bulk-send:read` scopes

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
