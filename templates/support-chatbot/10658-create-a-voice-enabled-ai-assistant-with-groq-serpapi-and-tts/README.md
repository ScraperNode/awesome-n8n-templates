# 💬 Create a voice-enabled AI assistant with Groq, SerpAPI and TTS

> ⚡ **272 views** · 💬 [Support Chatbots](../)

## Description

#  What It Does

Build your own AI Chatbot that listens, thinks, searches, and speaks — all inside n8n.
This template combines Groq AI, LangChain Agent, SerpAPI, and StreamElements TTS to create a chatbot that:

- Understands natural language input
- Searches the web for real-time answers
- Remembers previous messages (context memory)
- Replies with a realistic AI voice

# How It Works

- Chat Trigger: The workflow activates whenever a new message is received.
- Groq AI Agent: Processes user input, performs reasoning, and integrates with SerpAPI for live web results.
- Memory Node: Keeps the chat context for a natural conversation flow.
- TTS Node: Converts AI responses into realistic voice replies using StreamElements API.

# Setup Steps

- Connect your Groq, SerpAPI, and StreamElements credentials (no coding required).
- Customize the chatbot behavior directly inside n8n.
- Deploy instantly and chat via webhook or UI widget.

# Use Cases

- Voice-enabled customer-support bots
- AI chat widgets for websites
- Personal assistants that talk and search the web

## 🔗 Nodes Used

HTTP Request, AI Agent, Simple Memory, SerpApi (Google Search), Chat Trigger, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
