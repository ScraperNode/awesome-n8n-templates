# 💬 Handle e-commerce support, orders and inventory with Claude, Shopify and Slack

> ⚡ **44 views** · 💬 [Support Chatbots](../)

## Description

Creates an AI-powered sales and support agent connected to live store data from Shopify/WooCommerce. MCP ensures controlled access to inventory and order systems. Automatically handles customer queries, stock alerts, and refund logic to reduce manual workload.

## How it works

1. **Trigger** — Listens for incoming customer support requests via Webhook (chat, email, or API)
2. **Fetch context** — Retrieves live order status and inventory data from Shopify in parallel
3. **AI reasoning** — Claude AI analyzes the query with full store context and decides action
4. **Route intent** — Classifies into: Order Inquiry, Inventory Check, Refund Request, or General Support
5. **Act** — Processes refunds, sends stock alerts, or responds to customer automatically
6. **Log & notify** — Saves interaction to PostgreSQL and notifies team via Slack for escalations

## Setup steps

1. **Shopify / WooCommerce** — Add your store API credentials to the HTTP Request nodes
2. **Claude AI** — Set your Anthropic API key in the AI node credentials
3. **PostgreSQL** — Create a `support_interactions` table to log all AI-handled tickets
4. **Slack** — Add your incoming webhook URL to the Slack notification node
5. **Email** — Configure SMTP credentials for customer-facing response emails
6. **Test** — Send a test webhook payload, verify all branches, then activate

### Intent branches the AI handles:

ORDER_INQUIRY → Tracks shipment, shows order details
REFUND_REQUEST → Auto-processes eligible refunds via Shopify API
INVENTORY_CHECK → Detects low-stock (≤5 units) and fires Slack alert
PRICING_INQUIRY / GENERAL_SUPPORT → Smart contextual response

### Before activating, update these placeholders:

YOUR-STORE.myshopify.com + YOUR_SHOPIFY_ACCESS_TOKEN
YOUR_SLACK_WEBHOOK_URL (appears in 3 nodes)
SMTP credentials + support@yourstore.com
PostgreSQL credentials (create a support_interactions table)



**Explore More LinkedIn & Social Automation:**  
[Contact us](https://www.oneclickitsolution.com/contact-us/) to design AI-powered lead nurturing, content engagement, and multi-platform reply workflows tailored to your growth strategy.

## 🔗 Nodes Used

Send Email, HTTP Request, Postgres, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
