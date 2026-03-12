# 💬 Multilingual voice & text Telegram bot with ElevenLabs TTS and LangChain agents

> ⚡ **3,482 views** · 💬 [Support Chatbots](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.* 

# Telegram Voice AI Assistant
This n8n template creates a **multimodal Telegram bot** that dynamically responds to users:

- **Replies with voice** when receiving voice messages (using ElevenLabs TTS)

- **Replies with text** for text-based queries

- Supports **custom AI tools** (e.g., crypto APIs, databases, or custom functions)

Built with **LangChain Agents**, it can integrate any external API or data source into conversations.

## Key Features
🎙️ **Smart Response Logic**
- **Voice Query? → Voice Reply**
1. Transcribes audio via ElevenLabs STT
2. Processes with AI (Groq/Gemini)
3. Converts text response to natural speech (ElevenLabs TTS)

- **Text Query? → Text Reply**
Bypasses TTS/STT for faster responses

🛠️ **Extensible AI Tools**
Add your own tools:
- Database lookups
- Weather/stock APIs
- Custom Python functions
- RAG (document retrieval)

Supports **multi-step tool chaining** (e.g., "Get BTC price → analyze trends → summarize")

🌐 **Language & Context**
- Auto-detects user language (via Telegram’s *language_code*)
- Maintains **session memory** (remembers conversation history)

## Use Cases
- **Voice-first customer support**
- **Crypto/analytics assistants** (e.g., "What’s Ethereum’s current gas fee?")
- **Multilingual FAQ bots**
- **Educational tutors** (voice-interactive learning)

## Requirements
- **Telegram Bot Token**
- **ElevenLabs API Key** (For TTS/STT)
- **Groq API Key** or **Google Gemini API Key**

## Customization Tips
- **Change AI personality**: Modify the *systemMessage* in the Voice Assistant node
- **Add more models**: Swap Groq/Gemini for OpenAI, Anthropic, etc.
- **Extend functionality**: Add RAG (Retrieval-Augmented Generation) for document queries

Take this template to create a **Siri-like AI assistant** for Telegram in minutes! 🚀

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, AI Agent, Simple Memory, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
