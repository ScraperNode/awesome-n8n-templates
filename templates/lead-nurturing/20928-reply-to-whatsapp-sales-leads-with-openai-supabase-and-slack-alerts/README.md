# 💬 Reply to WhatsApp sales leads with OpenAI, Supabase, and Slack alerts

> ⚡ **3 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow receives WhatsApp Cloud API messages, uses OpenAI to generate grounded sales replies, logs and scores each lead in Supabase, and notifies your team in Slack when a lead is hot or needs a human.

## How it works
1. Receives WhatsApp Cloud API webhook calls for inbound messages and handles Meta’s one-time webhook verification challenge.
2. Normalizes the incoming WhatsApp payload into a clean customer message record and ignores non-message status callbacks.
3. Checks Supabase to deduplicate by WhatsApp message ID, then looks up (or creates) the customer record by phone number and pulls recent conversation history.
4. Loads the product catalog from Supabase and sends the customer message, recent history, and business info to an OpenAI-backed agent to classify intent and draft a short reply.
5. Applies rule-based lead scoring to label the conversation Cold/Warm/Hot and prepares the final response payload.
6. Sends the AI reply back to the customer on WhatsApp, saves the conversation in Supabase, updates the customer CRM fields, and posts a Slack alert when the lead is Hot or the agent flags that a human is needed.

## Setup
1. Configure Meta WhatsApp Cloud API to call the workflow’s webhook URL and set the same verify token in Meta and in the webhook verification response logic.
2. Add credentials for Supabase, OpenAI, and Slack, and ensure the Slack OAuth connection can post to your chosen channel.
3. Create Supabase tables for customers, conversations, and products (including fields used for phone, message_id, timestamps, product_name, and any stored prices), then populate products with your catalog.
4. Update the client-specific values in the business configuration (business name, WhatsApp phone number ID, Slack channel ID, and delivery/payment/returns/hours/contact details).

## Requirements
- WhatsApp Business API access: a Meta Business account with the WhatsApp Cloud API enabled, a phone number ID, an access token, and the webhook set to your n8n URL with the messages field subscribed and a verify token.
- Supabase project: the three tables (customers, conversations, products) created with whatsapp_sales_agent_setup.sql, plus a Supabase credential in n8n.
- Products and business facts: the client’s product list (name, price, description, features, stock) in the products table. Their delivery, payment, return and hours details go in Client Config.
- OpenAI API key: an OpenAI credential in n8n. The agent uses gpt-4o-mini.
- Slack alerts: a Slack app invited to the sales channel, plus that channel’s ID, so Hot leads and human requests reach the client’s team.

## Customization
- Business details: edit Client Config for the business name, phone number ID, Slack channel, delivery areas and time, payment methods, return policy and hours.
- Reply style: edit the system prompt in AI Sales Agent to change the tone, language (English, Hindi, Telugu, Hinglish), reply length, emojis or the sign-off.
- Lead scoring: edit the points and the Hot/Warm/Cold cut-offs (70 and 40 by default) in AI Lead Scoring. Add the client’s own buying keywords.
- Alert rules: change the condition in Hot Lead or Human Needed?, for example alert only on Hot, or on every purchase intent. Swap Slack for email or WhatsApp if the client prefers.
- Catalog size: the workflow loads only the first 30 products. For a bigger catalog, add a filter on the customer’s product interest or the search words in their message.

## 🔗 Nodes Used

Slack, Webhook, Supabase, WhatsApp Business Cloud, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
