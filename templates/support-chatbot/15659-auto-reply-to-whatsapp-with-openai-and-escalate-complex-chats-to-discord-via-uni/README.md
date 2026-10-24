# 💬 Auto-reply to WhatsApp with OpenAI and escalate complex chats to Discord via Unipile

> ⚡ **58 views** · 💬 [Support Chatbots](../)

## Description

## Who it's for

This workflow is for customer service teams, solopreneurs, and small businesses that receive WhatsApp inquiries and want to automate first-level responses while keeping a human in the loop for complex cases.

## How it works

1. Incoming WhatsApp messages are received via a Unipile webhook and filtered to ignore messages sent by the bot itself.
2. The full conversation history is fetched from the Unipile API to give the AI full context.
3. An OpenAI GPT model (via an AI agent with structured JSON output) analyzes the conversation and classifies it into one of four categories: Resolved, Needs Clarification, Dissatisfied, or Escalation — and drafts a reply accordingly.
4. A conditional branch evaluates the AI output: if no escalation is required, the reply is sent back to the WhatsApp chat via the Unipile API.
5. If escalation is needed, an alert with the customer's name and message is posted to a Discord channel for human follow-up.
6. A separate one-time setup flow registers the Unipile webhook with the correct URL, account ID, and name.

## How to set up

- [ ] Configure the **When WhatsApp Message Received** webhook node with your public n8n URL
- [ ] Add your **Unipile API key** to all HTTP Request nodes pointing to api22.unipile.com
- [ ] Set your **Unipile Account ID** in the Set Unipile Webhook Config node and run the setup flow once
- [ ] Add your **OpenAI API credentials** to the OpenAI GPT-5-Mini Model node
- [ ] Configure the **Send Escalation to Discord** node with your Discord bot token and target channel ID
- [ ] Customize the AI agent's system prompt with your brand name, tone, and support scope
- [ ] Review the **If Escalation Required** node conditions to match your escalation logic

## Requirements

- Unipile account with a connected WhatsApp number
- OpenAI API key
- Discord bot with access to a target channel
- n8n instance with a publicly accessible webhook URL

## How to customize

- Adjust the AI system prompt to match your brand voice, product catalog, or support boundaries.
- Swap Discord for Slack, email, or a CRM ticket to route escalations to your preferred tool.
- Add a memory or CRM lookup node to enrich the conversation with customer history before the AI responds.

## 🔗 Nodes Used

HTTP Request, Webhook, Discord, Filter, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
