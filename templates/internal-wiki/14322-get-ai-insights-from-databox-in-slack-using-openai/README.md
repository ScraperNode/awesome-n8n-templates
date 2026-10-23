# 📖 Get AI insights from Databox in Slack using OpenAI

> ⚡ **28 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

Stop switching between Slack and your analytics dashboards. Mention the bot in any Slack channel, ask a business question, and get an AI-powered answer from Databox in seconds - without leaving Slack.

## Who's it for

- **Marketing and growth teams** who want instant data answers during standups
- **Managers** who need quick metric checks without logging into dashboards
- **Anyone using Slack** who wants to query Databox data conversationally

## How it works

1. @mention the bot in Slack with a business question
2. Slack Trigger captures the message and passes it to the AI Agent
3. AI Agent queries Databox via MCP in real time
4. Answer is posted back to the same Slack channel

## Requirements

- **[Databox account](https://databox.com/?ref=n8n)** (free plan works)
- OpenAI API key (or Anthropic)
- Slack account with a custom Slack app (setup guide in the sticky notes)

## How to set up

Setup takes around 15 minutes. The main step is creating a custom Slack app:

1. Go to [api.slack.com/apps](https://api.slack.com/apps) - create an app - add `app_mentions:read` and `chat:write` scopes
2. Copy the **Bot Token** (xoxb-) and **Signing Secret** - add as a Slack API credential in n8n
3. Click **Databox MCP Tool** - set Authentication to OAuth2 and authorize
4. Add your **OpenAI API key** to the Chat Model node
5. Activate - paste the webhook URL into Slack Event Subscriptions
6. Invite the bot to your channel with `/invite @BotName`

## 🔗 Nodes Used

Slack, AI Agent, OpenAI Chat Model, Slack Trigger, MCP Client Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
