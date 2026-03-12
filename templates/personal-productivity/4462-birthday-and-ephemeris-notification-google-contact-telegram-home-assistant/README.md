# ⚡ Birthday and ephemeris notification (Google Contact, Telegram & Home Assistant)

> ⚡ **3,130 views** · ⚡ [Personal Productivity](../)

## Description

How it works:
- **Schedule Trigger** on a daily basis (configured at 7.30 am)
- **Connects Google Contacts** to get personal information from them
- **Field Checker** on birthday date & firstnames. And see if there is any celebration for today
- **Send a Telegram Notification** and display the message on a Google Home Speaker via Home Assistant if any celebration has matched

Set up steps:
- **Download** the workflow and **import** it into your n8n instance
- **Configure accounts** for Google Contacts, Telegram and Home Assistant
- And you will be good to go

## 🔗 Nodes Used

HTTP Request, Telegram, Google Contacts, Home Assistant, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
