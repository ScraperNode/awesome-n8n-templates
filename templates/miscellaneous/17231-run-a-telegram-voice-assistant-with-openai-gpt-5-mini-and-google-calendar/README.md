# 🔧 Run a Telegram voice assistant with OpenAI GPT-5 Mini and Google Calendar

> ⚡ **21 views** · 🔧 [Miscellaneous](../)

## Description

## Quick overview
This workflow turns a Telegram bot into a personal assistant that accepts text or voice notes, transcribes audio with OpenAI, uses a memory-enabled AI agent for replies and calculations, and creates Google Calendar reminder events from natural-language requests.

## How it works
1. Triggers whenever a new Telegram message is received by your bot.
2. Routes the message based on type, sending text directly to the assistant, voice notes to transcription, and other message types to a fallback reply.
3. For voice notes, downloads the audio from Telegram and transcribes it to text using OpenAI.
4. Sends the user’s text (typed or transcribed) to an OpenAI chat model powered agent that remembers the last 15 messages per chat and can use a calculator tool.
5. When the user asks for a reminder or event, the agent creates a Google Calendar event with AI-generated title and start/end times.
6. Sends the agent’s final response back to the originating Telegram chat.

## Setup
1. Create a Telegram bot with @BotFather, add a Telegram credential in n8n, and enable updates for the Telegram Trigger.
2. Add an OpenAI credential with access to the chat model and audio transcription used in the workflow.
3. Add a Google Calendar OAuth credential and ensure the target calendar (default: primary) is accessible for event creation.
4. Update the “Your Settings (EDIT ME)” values (assistant name, owner name, and timezone) to match your preferences.

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model, Simple Memory, Calculator

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
