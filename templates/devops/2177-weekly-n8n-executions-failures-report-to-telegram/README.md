# ⚙️ Weekly n8n executions failures report to Telegram

> ⚡ **1,467 views** · ⚙️ [DevOps & CI/CD](../)

## Description

# How it works
- Weekly triggered
- Fetches all previous executions of a given workflow
- Filter for failures and aggregate them into a single report
- Sends them to a given Telegram chat.

# Set up steps
- Create a new N8N api token in the settings panel.
- Add new N8N credentials in the credentials panel.
- Add new Telegram credentials in the credentials panel.
- Select N8N credentials and select the workflow ID in the "Get all previous executions" node.
- Select Telegram credentials and enter the chat-id in the "Telegram" node.

## 🔗 Nodes Used

Telegram, n8n, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
