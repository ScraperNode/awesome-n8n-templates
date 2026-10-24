# 🤖 Multimodal Slack AI assistant with voice, image & video processing

> ⚡ **818 views** · 🤖 [AI Chatbots & Agents](../)

## Description

## Quick overview
This is a starting point for building a Slack AI agent. The base handles four input types: voice, pictures, video, and text, through the AI model of your choice. From here you connect tools to expand what the agent can do inside your n8n workflows.

## How it works
1. **Input:** a Slack message that mentions the bot in a channel.
2. A Switch node sorts the message by type:
3. Voice message
4. Picture message
5. Video message
6. Text message
7. It currently uses OpenAI and Gemini to analyze voice, photos, and video, but you can swap in other models. The model reads the message, generates a response from the system prompt, and posts it back to Slack.

## Setup
1. **Create the Slack bot and token.** At https://api.slack.com/apps/ create an app from scratch. Add these Bot Token Scopes: app_mentions:read, channels:history, channels:join, channels:read, chat:write, files:read, links:read, links:write. Enable Event Subscriptions with your n8n webhook URL, install the bot to your workspace, and add it to the channel.
2. **Add the Slack credential in n8n.** Open the Slack trigger node, create a credential, and paste the Bot User OAuth token.
3. **Add the bot token to the HTTP Request nodes.** On the HTTP Request nodes, add the token under Header Parameters as `Bearer [your bot token]`.
4. **Configure the Slack nodes.** Point all Slack nodes at the correct workspace and channel.
5. **Add the LLM credentials.** Add your OpenAI and Gemini keys (and any other model you prefer) to the LLM nodes, then pick your model, and make sure each account has credits. Guides: OpenAI (voice) → https://winflowai.com/blog/get-openai-api-key/ and Google Gemini (images and video) → https://winflowai.com/blog/get-gemini-api-key/

## Customization
- Adjust the system prompts to shape the agent's behavior
- Add tools (calendars, databases, and more) to expand what it can do

## 🔗 Nodes Used

HTTP Request, Slack, AI Agent, Anthropic Chat Model, Simple Memory, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
