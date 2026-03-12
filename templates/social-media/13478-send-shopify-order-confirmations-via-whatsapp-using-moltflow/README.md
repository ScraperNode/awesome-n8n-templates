# 📱 Send Shopify order confirmations via WhatsApp using MoltFlow

> ⚡ **28 views** · 📱 [Social Media & Email Marketing](../)

## Description

## What this template does

Sends instant WhatsApp order confirmation messages to customers when they place an order on your Shopify store, powered by MoltFlow (https://molt.waiflow.app).

## How it works

1. Shopify webhook fires on new order creation
2. Parse order data — extracts customer name, phone, order number, items, and total
3. Check phone — skips orders without a phone number
4. Send WhatsApp confirmation — delivers a personalized message via MoltFlow API
5. Log result — records success or skip for tracking

## Set up steps

1. Create a MoltFlow account (https://molt.waiflow.app) and connect your WhatsApp number
2. Generate an API key in MoltFlow (Sessions page, API Keys tab)
3. Activate this workflow in n8n and copy the webhook URL
4. In Shopify Admin, go to Settings, Notifications, Webhooks and add the n8n URL for Order creation
5. Set YOUR_SESSION_ID in the Format Order Message code node
6. Add your MoltFlow API key as an HTTP Header Auth credential (Header Name: X-API-Key)

## Prerequisites

- MoltFlow account with an active WhatsApp session
- Shopify store with webhook access
- Customer phone numbers must include country code

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
