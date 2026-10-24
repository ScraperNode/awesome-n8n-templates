# 💬 Sell clothing on Facebook Messenger with Gemini, Stripe, and an admin app

> ⚡ **23 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
>
> <a href="https://scrapernode.com/facebook"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow turns Facebook Messenger messages into a clothing sales flow powered by Google Gemini, with carts and orders stored in n8n Data Tables, payments handled via Stripe Checkout, customer memory stored in Postgres, and an embedded admin dashboard for products, orders, escalations, and configuration.

## How it works
1. Receives Meta webhook requests for a Facebook Page, verifies the webhook handshake, immediately acknowledges events, and filters for real customer messages.
2. De-duplicates incoming messages, briefly waits to combine multiple quick messages from the same customer, and records the customer’s latest activity in n8n Data Tables.
3. Looks up or creates the customer record and finds (or creates) the customer’s current open cart order in the Sales Orders table.
4. Uses a Google Gemini agent with Postgres chat memory plus tools backed by n8n Data Tables to list/search products (via a pgvector index), fetch live product details, manage cart items, and save delivery details.
5. When the customer confirms the order, re-validates prices, variants, stock, and delivery details, then creates a Stripe Checkout Session and sends a “Pay Now” button in Facebook Messenger.
6. On Stripe webhook events or the payment return page, verifies the Stripe signature, marks the order as Paid, records order line items, reduces inventory stock, and sends a payment confirmation message back in Messenger.
7. If the agent escalates a question, it creates an escalation record for the admin inbox and later delivers admin answers in chat; nightly cleanup removes old message IDs, stale cart lines, and marks old Draft orders as Abandoned.

## Setup
1. Add credentials for Google Gemini (PaLM API), Postgres (for chat memory and the pgvector product index), and Google Drive OAuth2 (for hosting product photos).
2. Publish the workflow and set it as its own error workflow in the workflow settings. Open your-n8n-url/webhook/shop-admin and press Create database and first login. Sign in with admin / admin, then choose your own username and password straight away.
3. In the admin dashboard, configure your Meta app (App ID, App Secret, Verify Token) and connect a Facebook Page so it subscribes to the workflow’s /webhook/chat endpoint.
4. In the admin dashboard, connect Stripe with a restricted or secret key so the workflow can create Checkout Sessions and receive events on /webhook/shop-stripe-webhook.
5. Add products (including price, stock, sizes/colors, and images) and run a full re-sync so the pgvector search index is populated for semantic product search. Test with a Messenger tester account: send a test order and pay with Stripe test card 4242 4242 4242 4242. Use a live Stripe key only after a full test order works.

## Requirements
- n8n reachable over https (n8n Cloud, or self-hosted with a public URL)
- Supabase project (Postgres with pgvector); the free plan is enough
- Google Gemini API key (the free key allows only about 20 requests a day, so enable billing for real customers)
- Google Drive account (OAuth2) for product photos, optional
- Meta developer app (Business type) and a Facebook Page you manage
- Stripe account (test mode is fine to start)

## Customization
- Change store name, tone, language and shop information (hours, delivery charge, returns) on the Assistant page.
- Change how long the workflow waits to group quick messages on the Wait For More Messages node.
- Change the nightly cleanup rules.
- Replace the Gemini chat model with another chat model, keeping the tools and memory connected.

## Additional info
Walkthrough video (2 min): https://drive.google.com/file/d/1HchY8S2IfqyadX-hvK1-ZiTB1pnUUkCl/view?usp=sharing
The admin website has a built-in Setup guide page with live status. Facebook and Stripe are connected from that website, so they need no n8n credential. While your Meta app is in Development mode only app admins, developers and testers can chat with the bot. Messenger only allows replies within 24 hours of the customer's last message.

## 🔗 Nodes Used

HTTP Request, Postgres, Webhook, Google Drive, Execute Sub-workflow, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
