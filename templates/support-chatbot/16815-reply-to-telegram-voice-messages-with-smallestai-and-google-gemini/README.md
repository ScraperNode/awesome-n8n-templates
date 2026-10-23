# 💬 Reply to Telegram voice messages with Smallest.ai and Google Gemini

> ⚡ **11 views** · 💬 [Support Chatbots](../)

## Description

## Quick Overview
This workflow listens for Telegram bot messages, detects voice audio, downloads the audio file, transcribes it with Smallest.ai, and uses a Google Gemini–powered AI agent to draft a helpful reply that is sent back to the same Telegram chat.

## How it works
1. Triggers when a new message is received by your Telegram bot.
2. Checks whether the incoming message contains a voice/audio attachment.
3. Downloads the audio file from Telegram using the message’s file ID.
4. Sends the audio to Smallest.ai Speech-to-Text to generate a transcription.
5. Passes the transcription and chat ID to a LangChain AI agent backed by Google Gemini to generate a suggested reply.
6. Sends the formatted response back to the originating Telegram chat.

## Setup
1. Create a Telegram bot with BotFather, then add your Telegram credentials/token to the Telegram Trigger, file download, and Telegram reply tool nodes.
2. Add your Smallest.ai API credentials to the transcription step.
3. Add your Google Gemini (Google AI) credentials to the chat model used by the AI agent.
4. Start the workflow and message your Telegram bot with a voice note to test the end-to-end transcription and reply.

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
