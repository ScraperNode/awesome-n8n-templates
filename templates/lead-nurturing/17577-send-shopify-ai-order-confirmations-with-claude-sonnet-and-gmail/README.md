# 💬 Send Shopify AI order confirmations with Claude Sonnet and Gmail

> ⚡ **26 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow triggers on new Shopify orders, uses Anthropic Claude to generate a personalized HTML order confirmation with one relevant upsell suggestion, then emails the customer via Gmail and logs the order details and upsell note to an n8n Data Table.

## How it works
1. Triggers when Shopify creates a new order.
2. Extracts and normalizes key order fields like order number, customer name, email, total, and line items.
3. Sends the normalized order details to Anthropic Claude to generate a JSON response containing an email subject, an HTML confirmation message, and an internal upsell note.
4. Combines the AI-generated content with the original order fields and adds a timestamp for logging.
5. Logs the order details and upsell note to an n8n Data Table.
6. Sends the generated confirmation email to the customer using Gmail.

## Setup
1. Connect your Shopify access token credentials and ensure the workflow can register the orders/create webhook in your Shopify store.
2. Add an Anthropic credential for Claude and adjust the prompt or temperature if you want a different tone.
3. Connect a Gmail OAuth2 credential and confirm the sender mailbox you want to use for customer confirmations.
4. Create or select an n8n Data Table named order_log (or update the Data Table reference) to store order_number, customer_name, email, total, items, upsell_note, and logged_at.

## Requirements
- n8n instance with the Data Table feature enabled
- Shopify store + Access Token (the trigger registers the webhook automatically)
- Anthropic API key (Claude)
- Gmail account connected via OAuth2

## Customization
- Add branches for orders/cancelled, refunds/create, or orders/fulfilled to cover the full order lifecycle
- Route high-value orders into a VIP flow (handwritten note, priority packing)
- Tie the AI upsell to a real discount code or a "frequently bought together" list
- Deliver confirmations via Klaviyo/Brevo, or push order data to a warehouse/CRM
- Feed the order table into a dashboard to track which upsells convert

## Additional info
App-event trigger: Shopify fires the workflow the moment an order is created.
Claude confirms the real cart and total, then makes ONE genuinely relevant product suggestion — no pushy discounts, no fake scarcity  and never invents shipping dates or tracking numbers.
Fits any Shopify merchant across every product category.

## 🔗 Nodes Used

Shopify Trigger, Gmail, AI Agent, Anthropic Chat Model, Structured Output Parser, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
