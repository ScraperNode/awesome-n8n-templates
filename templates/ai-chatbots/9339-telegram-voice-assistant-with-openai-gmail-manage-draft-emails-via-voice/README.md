# 🤖 Telegram voice assistant with OpenAI & Gmail: manage & draft emails via voice

> ⚡ **1,100 views** · 🤖 [AI Chatbots & Agents](../)

## Description

## Telegram AI Voice & Email Assistant: Manage, Draft & Discuss Emails via Voice

### Who’s it for
This workflow is perfect for professionals and teams who want to manage email communications hands-free directly from Telegram. Simply send a voice message to your bot and seamlessly check your recent emails, draft or send a reply, and discuss email threads—all powered by OpenAI’s transcription and chat capabilities, with no third-party voice agent required.

### How it works / What it does
- Sends voice messages to a Telegram bot, which are then transcribed via OpenAI.
- Retrieves recent emails, drafts, or sends replies based on your commands.
- Engages the user in conversational discussion about email content using OpenAI chat.
- Responds in text or synthesized voice (OpenAI), creating a natural interactive experience.
- Automates email management from Telegram, keeping you efficient on the go.

### How to set up
1. Create a Telegram bot via @BotFather and obtain your API token.
2. Add the OpenAI API key and Gmail OAuth credentials to n8n.
3. Assign your credentials to the Telegram, OpenAI, and Gmail nodes (Draft/Send/Get Email).
4. Deploy and activate the workflow.
5. Interact with your Telegram bot: just send voice messages and let the assistant manage your emails!

### Requirements
- Telegram Bot Token
- OpenAI API Key
- Gmail OAuth Credentials

### How to customize the workflow
- Adjust the Switch node to route and handle new message types or responses.
- Integrate additional services such as Slack, Notion, or custom tools as needed.
- Fine-tune prompts or the OpenAI transcription settings for your specific use case.
- Modify email templates and memory/session nodes for advanced conversation flows.
- Embed video guides or extra sticky notes for enhanced onboarding and usability.

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model, Simple Memory, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
