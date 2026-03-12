# 🤝 Automate digital product delivery & sales tracking with Stripe, Email, Notion & Telegram

> ⚡ **109 views** · 🤝 [CRM & Sales Operations](../)

## Description

Overview

This workflow automates the end-to-end delivery of digital products after a successful Stripe checkout. It eliminates manual fulfillment, keeps a structured sales log in Notion, and optionally notifies you in Telegram.

It’s designed for template sellers, coaches, course creators, and micro-SaaS owners who want to professionalize their delivery process without custom code.

Workflow Logic

Webhook Trigger (Stripe)

Listens for the checkout.session.completed event.

Path: /stripe-webhook

Method: POST

Response Mode: onReceived

HTTP Request – Get Checkout Session

Fetches full session details from Stripe API.

URL: https://api.stripe.com/v1/checkout/sessions/{{$json.body.data.object.id}}

Authentication: Header Auth (Authorization: Bearer YOUR_STRIPE_SECRET_KEY)

IF Node – Check Product

Evaluates line_items.data[0].description from Stripe response.

Routes flow depending on which product was purchased (e.g., Notion Template A vs Notion Template B).

Email Send Nodes

Sends product delivery emails with personalized greeting and download link.

To: {{$json.customer_details.email}}

Subject: Your Elegant Template is Ready ✨

Body text includes product-specific link.

Notion Node – Log Sale

Creates a page in your Sales Log database.

Properties:

Name → {{$json.customer_details.name}}

Email → {{$json.customer_details.email}}

Product → {{$json.line_items.data[0].description}}

Date → {{$now}}

Status → Delivered

Telegram Notify Node (Optional)

Sends you a private message:

💸 New Sale!  
Product: {{ $json.line_items.data[0].description }}  
Buyer: {{ $json.customer_details.name }}  


Requires YOUR_TELEGRAM_CHAT_ID and bot token.

Node List

Webhook (Stripe)

HTTP Request (Stripe API)

IF (Check Product)

Email Send (Product Delivery)

Notion (Create Page)

Telegram (Send Message)

Setup Instructions

Stripe:

Create a webhook endpoint in your Stripe dashboard.

Subscribe to checkout.session.completed.

Add your secret key into the HTTP Request node (YOUR_STRIPE_SECRET_KEY).

Notion:

Create a Sales Log database.

Share with your Notion API integration.

Replace YOUR_NOTION_DATABASE_ID with the correct ID.

Email:

Configure SMTP credentials or Gmail OAuth in the Email Send node.

Update sender email (fromEmail).

Telegram (Optional):

Create a bot with BotFather.

Get your chat ID.

Add your token and YOUR_TELEGRAM_CHAT_ID in the node.

Why It’s Gallery-Ready

✅ Clear business use case (digital delivery, sales tracking).

✅ Proper variable usage ($json syntax, no hardcoded customer data).

✅ No exposed API keys (placeholders provided).

✅ Markdown-based documentation with H2 headings.

✅ Broad but specific: works for any digital seller (Notion, PDFs, Canva, courses).

Example Use Cases

Auto-deliver Notion templates or digital kits after Stripe checkout.

Log all sales in a Notion database for tracking/reporting.

Send instant Telegram notifications so you never miss a new customer.

Replace manual fulfillment with a professional automation pipeline.

✨ With this workflow, you’ll never have to manually email files again. Customers are delighted with instant delivery, your sales records stay organized, and you gain real-time visibility on every transaction.

## 🔗 Nodes Used

Send Email, HTTP Request, Webhook, Telegram, Notion

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
