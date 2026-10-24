# 💬 Reply to Telegram text and voice messages with an OpenAI GPT-4o-mini chatbot and memory

> ⚡ **346 views** · 💬 [Support Chatbots](../)

## Description

## Quick Overview
This workflow listens for incoming Telegram messages, sends each message to an OpenAI chat model via an AI agent with per-chat memory, and replies in the same Telegram conversation with a concise, language-matched response.

## How it works
1. Triggers when a new Telegram message is received by your bot.
2. Sends the message text to an AI chatbot agent configured with a system prompt to respond concisely in the user’s language.
3. Uses the OpenAI GPT-4o-mini chat model to generate the response and a per-chat memory buffer keyed by Telegram chat ID to retain recent context.
4. Posts the generated reply back to the originating Telegram chat.

## Setup
1. Create a Telegram bot with BotFather, then add your Telegram bot credentials to the Telegram Trigger and Telegram reply nodes.
2. Add your OpenAI credentials and select the desired model in the OpenAI chat model node.
3. Ensure the workflow has access to store conversation context and adjust the memory window length or system message if needed.

## 🔗 Nodes Used

Google Sheets, Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
