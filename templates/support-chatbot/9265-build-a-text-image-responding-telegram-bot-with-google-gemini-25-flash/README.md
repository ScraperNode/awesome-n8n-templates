# 💬 Build a text & image responding Telegram bot with Google Gemini 2.5 Flash

> ⚡ **1,812 views** · 💬 [Support Chatbots](../)

## Description

# Telegram AI Bot Workflow

An intelligent Telegram bot powered by Google Gemini AI that provides smart responses to both text messages and images.

## Features

- **Multi-Modal Input**: Handles both text messages and image uploads
- **AI-Powered Responses**: Uses Google Gemini 2.5 Flash for intelligent reply generation
- **Image Analysis**: Automatically analyzes uploaded images and responds with descriptions
- **Conversation Memory**: Maintains context across 20 messages per conversation
- **Formatted Output**: Delivers well-structured, Telegram-friendly responses

## How It Works

1. User sends a message (text or image) to the Telegram bot
2. Workflow routes the input based on message type
3. Images are downloaded and analyzed using Gemini Vision AI
4. AI agent processes the input with conversation context
5. Formatted response is sent back to the user instantly

## Requirements

- Telegram Bot Token (from @BotFather)
- Google Gemini API Key
- n8n instance with webhook capability

Perfect for building interactive AI assistants, customer support bots, or educational tools on Telegram.

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, Simple Memory, Google Gemini Chat Model, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
