# 💬 Answer Telegram customer messages with Ollama, OpenAI, or Anthropic

> ⚡ **30 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow replies to incoming Telegram bot messages using an Ollama, OpenAI, or Anthropic chat model constrained by your business notes, and falls back to a predefined message when it can’t answer or the AI call fails.

## How it works
1. Triggers when your Telegram bot receives a new message.
2. Loads recent conversation turns for the Telegram chat from n8n’s workflow static data to provide context.
3. Builds a provider-specific chat request (Ollama, OpenAI, or Anthropic) by injecting your business name, knowledge notes, conversation history, and the new message into a JSON-only prompt.
4. Sends the request to the selected AI endpoint via HTTP.
5. Parses the AI response as JSON and only uses the model’s reply when it marks the question as answerable, otherwise it uses your predefined fallback message.
6. Sends the chosen reply back to the customer in Telegram and appends both the customer and bot messages to the stored chat log.
7. If the AI request errors, sends the fallback message to Telegram so the customer still gets a response.

## Setup
1. Create a Telegram bot with BotFather and connect your Telegram credentials in the Telegram Trigger and Telegram send-message nodes.
2. In the Settings node, fill in business_name, knowledge (one fact per line), and optionally customize cannot_answer_message, ai_provider, and ai_model.
3. If using Ollama, ensure Ollama is running and reachable at ollama_url and that the selected model is pulled locally.
4. If using OpenAI or Anthropic, configure header-based authentication on the HTTP Request node with your API key credential and set ai_provider and ai_model accordingly.

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
