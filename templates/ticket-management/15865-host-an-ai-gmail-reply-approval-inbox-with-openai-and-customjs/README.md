# 🎫 Host an AI Gmail reply approval inbox with OpenAI and CustomJS

> ⚡ **34 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
Build super flexible and customizable Human-in-the-Loop (HITL) processes with n8n and [CustomJS](https://www.customjs.space). Instead of letting AI reply autonomously, this workflow fetches data, drafts responses, and hosts interactive approval pages via CustomJS—ensuring full human quality control over your automations with optional custom domain hosting.

## How it works
1. **Trigger**: Set to run manually (or scheduled on a cron job).
2. **Fetch Emails**: Pulls unread messages from your Gmail inbox.
3. **Filter**: Discards standard no-reply and notification addresses.
4. **AI Generation**: OpenAI analyzes the email text and subject line to write a suggested reply.
5. **Build Dashboard**: A Code node merges the dataset into a premium HTML template.
6. **Upsert Page**: The CustomJS node hosts the generated HTML instantly.

## Setup
1. **Configure the Base URL**: Open the **Build Approval Page** Code node, locate the configuration section (around line 22), and replace the placeholder with your actual n8n instance URL:
2. **Connect CustomJS**: Add your [CustomJS API](https://www.customjs.space) token to your n8n to allow the workflow to automatically push and host the generated process pages.
3. **Activate Webhook**: Ensure your n8n webhook node is set to "Production" so it can reliably receive the approval and rejection signals from your hosted page.

## Requirements
- **n8n Instance**: A running self-hosted or cloud instance of n8n to manage the automation logic and webhooks.
- **CustomJS Account**: A [CustomJS](https://www.customjs.space) active account to handle the automated deployment of your frontend code.
- **Workflow Data Source**: Connected credentials (e.g., Gmail, database, CRM) for the system you want to monitor and control.

## Additional info
This workflow utilizes the CustomJS HTML [Hosting Service](https://www.customjs.space/products/html-hosting/) to host and publish your custom human-in-the-loop process steps instantly as a clean HTML page.

## 🔗 Nodes Used

Webhook, Gmail, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
