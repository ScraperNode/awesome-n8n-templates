# 🤝 Send WooCommerce new order notifications via WhatsApp with MoltFlow

> ⚡ **33 views** · 🤝 [CRM & Sales Operations](../)

## Description

## How it works

1. WooCommerce fires a webhook when a new order is placed
2. Order details are extracted: customer name, items, total, and status
3. A WhatsApp notification is sent to the store owner via MoltFlow
4. If the customer provided a phone number, an order confirmation is also sent to them

## Set up steps (~5 min)

1. Create a MoltFlow account at molt.waiflow.app and connect your WhatsApp
2. Activate this workflow and copy the webhook URL
3. In WooCommerce, go to Settings &gt; Advanced &gt; Webhooks and add a webhook for "Order created" pointing to the n8n URL
4. Set YOUR_SESSION_ID and OWNER_PHONE in the Format Order code node
5. Add your MoltFlow API Key as Header Auth credential (header name: X-API-Key)

## Prerequisites

- MoltFlow account with active WhatsApp session
- WooCommerce store with webhook access
- WordPress admin access to configure webhooks

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
