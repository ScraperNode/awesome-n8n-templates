# 💬 Build a voice & text Telegram Bot with GPT-4.1-Mini and Gemini transcription

> ⚡ **264 views** · 💬 [Support Chatbots](../)

## Description

**How it works:**
This Telegram automation works with voice and text messages given to the Telegram bot, and it returns the response in voice form if the input is in voice form. If the input is in text form, it will return a response in text form.

**Use Cases:**
- Customer Support
- Personal Chatbot

**Prerequisites:**
- OpenAI API Key
- Gemini API Key
- Telegram Bot built by BotFather
- Telegram Bot's API Key

**Target Audience:**
AI Automation learners who want to learn how to build and set up a basic Telegram Bot using n8n.

**How to set up:**

1. Create a telegram bot using BotFather, and the BotFather will give you an API key
2. Copy the API key and set it up in a Telegram node inside n8n
3. Get a free gemini api from https://aistudio.google.com/
4. Set up the Gemini API in the Transcribe recording node
5. Get an OpenAI API key from https://platform.openai.com/docs/overview and make sure to top up your credits
6. Copy the API key from the OpenAI platform and set it up in any OpenAI Chat Model, and it will be configured for all other nodes automatically by n8n

That's it! Now you can activate the workflow and test it by sending a simple message to your Telegram bot

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model, Simple Memory, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
