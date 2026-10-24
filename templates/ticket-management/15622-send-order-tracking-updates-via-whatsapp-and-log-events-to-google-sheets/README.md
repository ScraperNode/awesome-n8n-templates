# 🎫 Send order tracking updates via WhatsApp and log events to Google Sheets

> ⚡ **211 views** · 🎫 [Ticket Management & Triage](../)

## Description

This workflow automatically delivers real-time order updates to customers via WhatsApp — covering every stage from order confirmation through final delivery.

### Who's it for
• E-commerce stores processing 50+ orders/day
• Logistics teams managing last-mile delivery
• Businesses wanting to reduce support tickets about order status

### How it works / What it does
1. Receives order event via webhook (new order, shipped, out for delivery, delivered)
2. Extracts and normalises order + customer data
3. Detects the event type using JavaScript logic
4. Selects the matching WhatsApp message template
5. Sends the formatted message via WhatsApp Business API
6. Logs delivery receipt and audit trail to Google Sheets

### Message Templates
• Order Confirmed: Order #ID confirmed with total amount
• Shipped: Tracking number + expected delivery date
• Out for Delivery: Same-day delivery alert
• Delivered: Thank-you confirmation message

### How to set up
1. Import this workflow into n8n
2. Configure credentials: WhatsApp Business API, Google Sheets OAuth2
3. Replace YOUR_SHEET_ID with your actual Google Sheet ID
4. Replace YOUR_WHATSAPP_PHONE_NUMBER_ID with your Meta phone number ID
5. Set WHATSAPP_ACCESS_TOKEN in your n8n credentials
6. Activate the workflow and point your order system to the webhook URL

### Requirements
• Meta WhatsApp Business API access (approved account)
• Google Sheets (for audit logging)
• Order management system capable of sending webhooks
• n8n instance (cloud or self-hosted)

### How to customise
• Edit message text in the JS - Build Message Payload node
• Add new event types in the JS - Detect Order Event node
• Change sheet columns in Update Google Sheet Tracker
• Add error notification (e.g. Slack/email) in the Error Handler node

## 🔗 Nodes Used

HTTP Request, Webhook, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
