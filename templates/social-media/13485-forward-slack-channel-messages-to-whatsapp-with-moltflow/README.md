# 📱 Forward Slack channel messages to WhatsApp with MoltFlow

> ⚡ **2 views** · 📱 [Social Media & Email Marketing](../)

## Description

## How it works

1. Slack sends an outgoing webhook when a message is posted in a channel
2. The message text, sender, and channel name are extracted
3. A formatted message is forwarded to your WhatsApp number via MoltFlow
4. Empty messages and Slack URL verification challenges are handled automatically

## Set up steps (~5 min)

1. Create a MoltFlow account at molt.waiflow.app and connect your WhatsApp
2. Activate this workflow and copy the webhook URL
3. In Slack, configure an outgoing webhook or Event Subscription pointing to the n8n URL
4. Set YOUR_SESSION_ID and YOUR_PHONE in the Format Message code node
5. Add your MoltFlow API Key as Header Auth credential (header name: X-API-Key)

## Prerequisites

- MoltFlow account with active WhatsApp session
- Slack workspace with webhook or Events API access
- Tip: filter by channel or keywords in the code node to limit forwarding

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
