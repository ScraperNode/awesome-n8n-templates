# 💬 Voice & text control for Home Assistant using Telegram, Whisper & Gemini

> ⚡ **1,171 views** · 💬 [Support Chatbots](../)

## Description

## 📝 Workflow Description

This workflow creates a conversational bridge between Telegram / n8n Chat and Home Assistant.
It allows users to control smart home devices or request information using natural language (text or voice).

⸻

## 🔑 Key Features
- Multi-channel input: Works with both Telegram and n8n’s chat interface.
- Voice support: Telegram voice messages are transcribed to text using OpenAI Whisper.
- AI-driven assistant: Google Gemini processes queries in natural language.
- Home Assistant integration: Uses MCP client tools to execute actions like turning devices on/off, adjusting lights, or broadcasting messages.
- Memory management: Short-term memory keeps context within conversations.
- Smart reply routing: Responses are automatically sent back to the correct channel (Telegram or chat).
- Message formatting: Telegram replies are beautified (bold, bullet points, inline code, links).

⸻

## 📌 Node Overview
- Telegram Trigger: Captures incoming Telegram messages (text or voice).
- Bot Is Typing: Sends a “typing…” action to indicate the bot is working.
- Voice or Text: Separates voice and text inputs.
- Get Voice File → Speech to Text → Transcription to ChatInput: Handles Telegram voice notes by downloading the file, transcribing it, and preparing it for the chat pipeline.
- When Chat Message Received: Captures messages from n8n’s built-in chat interface.
- Process Messages: Normalizes incoming data (input text, source, session ID, voice flag).
- Home Agent: Main AI agent that processes queries.
- Google Gemini Chat Model: Language model for intent understanding and conversation.
- Simple Memory & Simple Memory1: Buffer memories to preserve conversation context.
- Home Assistant Connector: MCP client node that executes smart home actions (turn on/off devices, adjust lights, etc.).
- Reply Router: Routes the assistant’s response either to Telegram or to the n8n chat webhook.
- Telegram Message Beautifier → Telegram Send: Formats and sends responses back to Telegram.
- Respond to Webhook: Sends responses to n8n chat.

⸻

## 🚀 Example Use Cases
- Send “Turn on the living room lights” via Telegram → Bot triggers Home Assistant action.
- Ask “What’s the temperature in the bedroom?” → Response comes back formatted in Telegram.
- Record a voice note “Goodnight mode” → Automatically transcribed and executed by Home Assistant.
- Use n8n chat to quickly trigger automations or check device statuses.

⸻

## ⚡️ Benefits
- Unified chat & voice control for Home Assistant.
- AI-powered natural language understanding.
- Works seamlessly across platforms (Telegram & n8n chat).
- Extensible: new tools or intents can be added easily.

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, Simple Memory, Chat Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
