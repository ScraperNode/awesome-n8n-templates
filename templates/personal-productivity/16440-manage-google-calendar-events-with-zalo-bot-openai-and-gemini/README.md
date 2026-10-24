# ⚡ Manage Google Calendar events with Zalo Bot, OpenAI, and Gemini

> ⚡ **387 views** · ⚡ [Personal Productivity](../)

## Description

## Quick Overview
This workflow lets users manage Google Calendar by sending text or voice messages to a Zalo Official Account bot, transcribing voice notes with Google Gemini and using an OpenAI-powered agent to create, update, list, or delete events, then replying in Zalo with the result.

## How it works
1. Receives an incoming text or voice message through a Zalo Bot trigger.
2. Sends a typing indicator back to the Zalo chat and normalizes key message fields (chat ID, type, text, and voice URL).
3. If the message is a voice note, sends the audio URL to Google Gemini to transcribe it into text.
4. Sends the combined text/transcription to an OpenAI chat model agent that interprets the request in Vietnamese and decides whether to list, create, update, or delete a Google Calendar event.
5. Uses Google Calendar tools to get events and then create, update, or delete the targeted event based on the agent’s extracted parameters.
6. Sends the agent’s Markdown-formatted response back to the user in Zalo, and posts an error message to Zalo if the agent run fails.

## Setup
1. Install the community node package `n8n-nodes-zalo-bot-official` and restart n8n if required.
2. Connect your Zalo Bot API credentials and configure the Zalo webhook URL in your Zalo Official Account so incoming messages reach this workflow.
3. Add a Google Calendar OAuth2 credential and set the target calendar account (currently configured as `toannguyen96vn@gmail.com`) for all calendar operations.
4. Add a Google Gemini (PaLM) API credential for audio transcription and ensure voice messages include a reachable `voice_url`.
5. Add an OpenAI API credential, select the chat model you want to use (currently `gpt-5-mini`), and adjust the system prompt/tone if needed.

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
