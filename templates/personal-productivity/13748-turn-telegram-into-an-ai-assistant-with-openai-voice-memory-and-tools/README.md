# ⚡ Turn Telegram into an AI assistant with OpenAI voice, memory and tools

> ⚡ **32 views** · ⚡ [Personal Productivity](../)

## Description

## Who this template is for

This workflow is for users who want to turn Telegram into a personal AI-powered assistant capable of handling everyday tasks through natural language. It's ideal for solo founders, operators, or professionals who want to manage communication, scheduling, calculations, and information retrieval from a single chat interface.

No advanced n8n knowledge is required, and the workflow is designed to be easily extended with additional tools.

## What this workflow does

This workflow creates a Telegram-based AI assistant that can receive text or voice messages, understand user intent, and respond with text or audio. The assistant can reason about requests and use multiple tools such as contacts lookup, email drafting, calendar management, research, messaging, and calculations.

Voice messages are automatically transcribed, processed like text input, and answered accordingly.

## How it works

1. The workflow listens for incoming Telegram messages and validates the sender
2. It detects whether the message is text or voice — voice messages are transcribed using OpenAI before being passed to the AI agent
3. The AI agent processes the request using a chat model, short-term memory, and a set of productivity tools (contacts, email, calendar, research, messaging, calculator)
4. The response is cleaned and formatted, then split into multiple chat bubbles with natural delays for a more human-like delivery
5. Depending on the output type, the response is sent as plain text or converted into audio and returned to the user in Telegram

## How to set up

1. Create a Telegram bot and connect it to the Telegram Trigger node
2. Add your Telegram user ID to the authorization fields
3. Connect your OpenAI credentials for chat, transcription, and text-to-speech
4. Activate the workflow and start chatting with your assistant

## Requirements

- Telegram account and bot token
- OpenAI API credentials
- n8n instance (cloud or self-hosted)

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, Basic LLM Chain, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
