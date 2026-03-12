# 💬 Build a WhatsApp assistant for text, audio & images using GPT-4o & Evolution API

> ⚡ **3,561 views** · 💬 [Support Chatbots](../)

## Description

Build an intelligent WhatsApp assistant that automatically responds to customer messages using AI. This template uses the Evolution API community node for WhatsApp integration and OpenAI for natural language processing, with built-in conversation memory powered by Redis to maintain context across messages.

&gt; ⚠️ **Self-hosted requirement:** This workflow uses the Evolution API community node, which is only available on self-hosted n8n instances. It will not work on n8n Cloud.

## What this workflow does

1. Receives incoming WhatsApp messages via Evolution API webhook
2. Filters and processes text, audio, and image messages
3. Transcribes audio messages using OpenAI Whisper
4. Analyzes images using GPT-4 Vision
5. Generates contextual responses with conversation memory
6. Sends replies back through WhatsApp

## Who is this for?

- Businesses wanting to automate customer support on WhatsApp
- Teams needing 24/7 automated responses with AI
- Developers building multimodal chat assistants
- Companies looking to reduce response time on WhatsApp

## Setup instructions

1. **Evolution API**: Install and configure Evolution API on your server. Create an instance and obtain your API key and instance name.
2. **Redis**: Set up a Redis instance for conversation memory. You can use a local installation or a cloud service like Redis Cloud.
3. **OpenAI**: Get your API key from platform.openai.com with access to GPT and Whisper models.
4. **Webhook**: Configure your Evolution API instance to send webhooks to your n8n webhook URL.

## Customization options

- Modify the system prompt in the AI node to change the assistant's personality and responses
- Adjust the Redis TTL to control how long conversation history is retained
- Add additional message type handlers for documents, locations, or contacts
- Integrate with your CRM or database to personalize responses

## Credentials required

- Evolution API credentials (self-hosted)
- OpenAI API key
- Redis connection

## 🔗 Nodes Used

Redis, Webhook, Filter, AI Agent, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
