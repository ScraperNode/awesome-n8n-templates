# 🎣 Qualify inbound WhatsApp leads with Wafly and OpenAI GPT-4o-mini

> ⚡ **18 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow receives inbound WhatsApp messages via Wafly, uses OpenAI (GPT-4o-mini) with per-phone memory to classify each lead as hot/warm/cold, replies to the sender, and sends hot leads as a handoff message to a configured sales phone number.

## How it works
1. Receives an inbound WhatsApp message through an n8n webhook configured for Wafly.
2. Filters out non-customer traffic by ignoring echoes (fromMe), group chats, non-ReceivedCallback events, and empty messages.
3. Sends the message text to OpenAI (GPT-4o-mini) with conversation memory keyed by the sender’s phone number to produce a JSON qualification (intent, budget/deadline flags, temperature, and a short reply).
4. Parses the model output defensively and falls back to a safe “warm” classification and neutral reply if the JSON is malformed.
5. Sends the generated reply back to the lead via Wafly WhatsApp messaging.
6. If the lead is marked hot, sends a WhatsApp handoff message to the configured sales phone number with the lead details; otherwise it ends without escalation.

## Setup
1. Self-host n8n and install the community node package `n8n-nodes-wafly` (this template does not run on n8n Cloud).
2. Create and select Wafly API credentials and an OpenAI API credential for the OpenAI Chat Model node.
3. Set the target `salesPhone` number (international format, digits only) in the Config step.
4. Activate the workflow, copy the webhook Production URL, and register it in Wafly (or use the Wafly “Set Webhook” operation if available in your node version).

## Requirements
- Self-hosted n8n with the n8n-nodes-wafly community node, a Wafly instance with an inbound webhook, an OpenAI API key, and a WhatsApp number to receive sales handoffs. The workflow does not run on n8n Cloud.

## Customization
- Replace the placeholder salesPhone in Config. Edit the qualification prompt, temperature criteria, and reply text for your business. You can send hot-lead handoffs to a CRM instead of a phone. Test with your own number before activating the production webhook.

## Additional info
Step-by-step setup (Portuguese): https://wafly.com.br/solucoes/qualificar-leads-whatsapp-ia-n8n/?utm_source=n8n&utm_medium=workflow_template&utm_campaign=lead_qualification&utm_content=creator_description . This community workflow uses Wafly’s QR-connected WhatsApp API, not Meta’s Official WhatsApp API.

## 🔗 Nodes Used

Webhook, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
