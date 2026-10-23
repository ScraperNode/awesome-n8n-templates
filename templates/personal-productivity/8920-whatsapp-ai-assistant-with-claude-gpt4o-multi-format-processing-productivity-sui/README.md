# ⚡ WhatsApp personal AI assistant with voice, image, and PDF support

> ⚡ **1,416 views** · ⚡ [Personal Productivity](../)

## Description

**📺 Full walkthrough video: https://youtu.be/-kpt0BwjKls**

## Who it's for

This workflow is for professionals and power users who want a personal AI assistant accessible directly via WhatsApp, capable of managing their emails, calendar, files, and online searches through natural conversation — including voice messages.

## How it works

1. A WhatsApp Trigger receives incoming messages and routes them by input type: text, audio, image, or PDF document.
2. Audio messages are downloaded and transcribed via OpenAI Whisper. Images are downloaded and analyzed by GPT-4o mini. PDF files are validated, downloaded, and text-extracted.
3. All input types are normalized into a unified text field before being passed to the AI agent.
4. A personal assistant agent powered by Claude Sonnet processes the request using a full tool suite: Gmail (send/search), Google Calendar (create/read events), Google Drive (search), Airtable (contact email database), SerpAPI (web search), Discord (direct messages), and a calculator.
5. If the original input was a voice message, the agent's response is converted to audio via OpenAI TTS and sent back as a WhatsApp audio message. Otherwise, a text reply is sent.

## How to set up

- [ ] Connect your WhatsApp Business API credentials to the trigger and all send nodes
- [ ] Add OpenAI API credentials to the transcription, image analysis, and TTS nodes
- [ ] Add Anthropic API credentials to the Claude Sonnet model node
- [ ] Connect Gmail OAuth2 credentials to the send and search email tool nodes
- [ ] Connect Google Calendar OAuth2 credentials to the create and get events tool nodes
- [ ] Connect Google Drive OAuth2 credentials to the search tool node
- [ ] Connect Airtable credentials and configure the base/table IDs for the email database
- [ ] Add SerpAPI credentials to the web search tool node
- [ ] Add Discord bot credentials and configure the target user ID for direct messages
- [ ] Set the correct phone number ID and recipient number in all WhatsApp send nodes

## Requirements

- WhatsApp Business API account
- OpenAI API account
- Anthropic API account
- Google account (Gmail, Calendar, Drive) with OAuth2
- Airtable account with a contacts/email base
- SerpAPI account
- Discord bot with direct message permissions

## How to customize

- Add or remove tools from the Personal Assistant Agent node to expand or restrict capabilities (e.g. add a Notion or Slack tool).
- Adjust the memory window size in the Conversation Memory Buffer node to control how much conversation history the agent retains.
- Edit the agent's system prompt to change its persona, language, or restrict it to a specific scope (e.g. a customer support assistant).

## 🔗 Nodes Used

HTTP Request, WhatsApp Business Cloud, AI Agent, Anthropic Chat Model, Simple Memory, Calculator

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
