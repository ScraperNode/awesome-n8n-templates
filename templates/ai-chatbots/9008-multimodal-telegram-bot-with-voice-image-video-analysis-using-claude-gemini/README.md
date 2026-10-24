# 🤖 Multimodal telegram bot with voice, image & video analysis using Claude & Gemini

> ⚡ **1,856 views** · 🤖 [AI Chatbots & Agents](../)

## Description

## Quick overview
This is a starting point for building a Telegram AI agent. The base handles four input types: voice, pictures, video, and text, through the AI models of your choice. From here you connect tools to expand what the agent can do inside your n8n workflows.

## How it works
1. **Input:** a message sent to the bot chat.
2. A Switch node sorts the message by type:
3. Voice message
4. Picture message
5. Video message
6. Text message
7. It currently uses OpenAI and Gemini to analyze voice, photos, and video, but you can swap in other models. The model reads the message, generates a response from the system prompt, and sends it back as a Telegram message.

## Setup
1. **Create the Telegram bot.** In Telegram, search for "BotFather", send `/newbot`, follow the prompts, and copy the access token.
2. **Add the Telegram credential in n8n.** Open the Telegram trigger node, create a credential, paste the access token, and save.
3. **Add the LLM credentials.** Add your OpenAI and Gemini keys (and any other model you prefer) to the LLM nodes, then pick your model, and make sure each account has credits. Guides: OpenAI (voice) → https://winflowai.com/blog/get-openai-api-key/ and Google Gemini (images and video) → https://winflowai.com/blog/get-gemini-api-key/

## Requirements
- Telegram bot access token
- OpenAI API key (voice)
- Google Gemini API key (pictures and video)
- n8n instance (Cloud or self-hosted)

## Customization
- Adjust the system prompt to shape the agent's output, and add tools to take it beyond conversation.

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, Anthropic Chat Model, Simple Memory, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
