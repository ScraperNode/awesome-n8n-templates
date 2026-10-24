# 💬 Handle ManyChat WhatsApp leads with OpenAI, Brevo CRM, and Slack alerts

> ⚡ **10 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow receives a ManyChat webhook, instantly returns a 200 OK to avoid ManyChat’s 10-second timeout, then asynchronously generates a WhatsApp reply with OpenAI, syncs the lead to Brevo CRM, and optionally notifies an SDR team in Slack for hot leads.

## How it works
1. Receives a POST webhook request from ManyChat and immediately responds with an HTTP 200 JSON handshake.
2. Extracts subscriber details and message context from the ManyChat payload and calculates a lead score and tier.
3. Sends the lead context to OpenAI (Chat Completions, gpt-4o-mini) to generate a short WhatsApp-ready reply.
4. Upserts the contact into Brevo CRM with lead attributes (score, tier, interest, budget, and WhatsApp ID).
5. Pushes the generated reply back to the user by calling ManyChat’s sendContent API for a WhatsApp callback message.
6. If the lead is scored as HOT, sends an escalation alert to Slack via an incoming webhook with a direct wa.me chat link.

## Setup
1. Create environment variables (or replace placeholders in the requests) for MANYCHAT_API_KEY, OPENAI_API_KEY, BREVO_API_KEY, and SLACK_WEBHOOK_URL.
2. Copy the production webhook URL from the ManyChat webhook trigger and configure it in your ManyChat external request/webhook step.
3. Ensure your Brevo account has the contact attributes used by the workflow (e.g., WHATSAPP_ID, LEAD_SCORE, LEAD_TIER, INTEREST, BUDGET) or adjust the payload to match your schema.
4. Confirm your ManyChat channel supports sendContent for your WhatsApp setup and that subscriber_id and phone are present in the webhook payload.
5. Customize the lead scoring rules and the OpenAI prompt to match your qualification criteria and brand voice.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
