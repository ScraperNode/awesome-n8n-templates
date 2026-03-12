# 💬 Notify customers on WhatsApp when Stripe payment succeeds with MoltFlow

> ⚡ **2 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## How it works

1. Stripe fires a checkout.session.completed webhook when a payment succeeds
2. Customer name, phone, email, and payment amount are extracted
3. If the customer has a phone number, a WhatsApp receipt is sent via MoltFlow
4. Payments without phone numbers are logged and skipped

## Set up steps (~5 min)

1. Create a MoltFlow account at molt.waiflow.app and connect your WhatsApp
2. Generate an API key in MoltFlow (Sessions page &gt; API Keys tab)
3. Activate this workflow and copy the webhook URL
4. In Stripe Dashboard &gt; Developers &gt; Webhooks, add the n8n URL for checkout.session.completed
5. Set YOUR_SESSION_ID in the Format Receipt code node
6. Add your MoltFlow API Key as Header Auth credential (header name: X-API-Key)

## Prerequisites

- MoltFlow account with active WhatsApp session
- Stripe account with webhook access
- Customer phone numbers collected during checkout (Stripe customer_details.phone)

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
