# 🧾 Send WhatsApp payment reminders automatically with MoltFlow

> ⚡ **8 views** · 🧾 [Invoice Processing](../)

## Description

## How it works

This workflow automates WhatsApp payment reminders using the MoltFlow API. No more chasing clients manually — reminders go out every morning at 9 AM with personalized messages.

1. A schedule trigger fires daily at 9 AM
2. A code node builds your contact list with names, amounts, and due dates
3. Each contact receives a personalized WhatsApp reminder via MoltFlow
4. Results are logged — you can see which messages succeeded and which failed

## Set up steps

Setup takes about 3 minutes:

1. Create a free [MoltFlow](https://molt.waiflow.app) account and connect your WhatsApp by scanning the QR code
2. Generate an API key from **Sessions → API Keys** tab (select the "Messaging" scope preset)
3. In n8n, add a **Header Auth** credential — set header name to `X-API-Key` and paste your MoltFlow API key as the value
4. Open the **Prepare Contacts** code node and replace `YOUR_SESSION_ID` with your MoltFlow session ID
5. Edit the contacts array with your actual client data (phone, name, amount, due date)
6. Customize the message template if needed
7. Activate the workflow — reminders will go out every morning

## Prerequisites

- A [MoltFlow](https://molt.waiflow.app) account (free tier available)
- A connected WhatsApp session
- MoltFlow API key with `messages:send` scope

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
