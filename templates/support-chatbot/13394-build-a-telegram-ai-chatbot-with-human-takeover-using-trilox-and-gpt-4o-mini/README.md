# 💬 Build a Telegram AI chatbot with human takeover using Trilox and GPT-4o-mini

> ⚡ **257 views** · 💬 [Support Chatbots](../)

## Description

![telegramhumantakeover.jpeg](fileId:4389)
&gt; ⚠️ This template uses the Trilox community node (n8n-nodes-trilox) and requires self-hosted n8n.

## Who is this for

n8n developers building Telegram chatbots who need to take over from the bot when it fails — without the customer getting double replies.

## How it works

1. Customer sends a message on Telegram (text or voice)
2. The message is recorded to Trilox and the handler status is checked
3. If the bot is in control → the AI Agent responds with a structured escalation flag
4. After the AI responds, the handler is checked again — catching the race condition where a human took over while the AI was thinking
5. If the AI decides a human is needed → the conversation is escalated and the customer is notified
6. A human takes over from the Trilox inbox → the bot goes completely silent
7. The human replies from Trilox → the reply is forwarded to Telegram
8. Human hands back → bot resumes automatically

## How to set up

1. Install the Trilox community node (Settings → Community Nodes → Install `n8n-nodes-trilox`)
2. Create a free account at [trilox.io](https://trilox.io)
3. Create a Project → App (inbox) → API Key in Trilox
4. Create a Telegram bot via [@BotFather](https://t.me/botfather) and get the API token
5. Set up credentials for Trilox, Telegram, and OpenAI in n8n
6. In all Trilox nodes, select your App from the dropdown
7. Update the AI Agent system prompt with your business info and escalation rules
8. Activate the workflow

## Requirements

- Self-hosted n8n (community nodes required)
- Trilox account ([trilox.io](https://trilox.io)) — free plan available
- Telegram Bot (via [@BotFather](https://t.me/botfather))
- OpenAI API key (or any LLM provider)

## How to customize

- **Escalation rules:** Edit the system prompt to define when `is_human_required` should be true (refunds, complaints, billing)
- **Different LLM:** Replace OpenAI with OpenRouter, Anthropic, or any compatible model
- **Add channels:** The Channel Router has placeholders for WhatsApp, Messenger, Instagram, Widget, and API
- **Remove voice:** Delete the voice branch if you don't need it
- **Add knowledge base:** Give the AI Agent tools (Google Docs, Notion, vector store)

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model, Simple Memory, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
