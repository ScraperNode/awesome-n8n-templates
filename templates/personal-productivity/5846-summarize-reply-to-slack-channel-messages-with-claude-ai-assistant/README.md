# ⚡ Summarize & reply to Slack channel messages with Claude AI assistant

> ⚡ **673 views** · ⚡ [Personal Productivity](../)

## Description

## ✨ What It Does

**Mello** is a Claude-powered Slack assistant that helps you stay on top of unread messages across all your channels.

It:
- Summarizes conversations contextually using Claude AI.
- Generates reply suggestions and sends them as private (ephemeral) Slack messages.
- Lets you respond instantly with one-click AI-suggested replies.

Perfect for busy teams, founders, and anyone looking to reduce Slack noise and save hours each week.

---

## 🔧 Setup Instructions

1. **Create a Slack App**
   - Go to [Slack API → Your Apps](https://api.slack.com/apps)
   - Click **Create New App** and set it up for your workspace
   - Under **OAuth & Permissions**, add:
     - **Bot Token Scopes**: `commands`, `chat:write`, `channels:history`, `users:read`
     - **User Token Scopes**: `channels:history`, `chat:write`
   - Enable **Interactivity**, and point the Request URL to your n8n webhook (e.g. `/slash-summarize`)

2. **Add Claude API**
   - Get an API key from [Claude (Anthropic)](https://www.anthropic.com/)
   - In n8n, set up the Claude API credential (or switch to OpenAI)

3. **Import This Workflow**
   - Go to your n8n instance, click **Import**, and paste this template
   - Update any placeholders (Slack app, Claude key, webhook URLs)
   - Follow the inline sticky notes for guidance

4. **Test It**
   - Type `/summarize` in any Slack channel
   - Mello will fetch unread messages, summarize them, and show reply buttons in a private message

⏱ Setup time: ~10 minutes

---

## 🛠 Workflow Highlights

- Slash command trigger (`/summarize`)
- Slack API integration to fetch messages
- Claude AI for contextual summaries
- Reply suggestions with smart buttons
- Private Slack delivery (ephemeral messages)
- Designed to be easily extended (e.g. add support for OpenAI, custom storage)

---

## 🔒 Note

This is a **lite preview** of the full Mello workflow.

✅ The full version includes:
- Slack reply buttons with thread context
- Full OAuth flow with token storage
- MongoDB integration
- Custom Claude/OpenAI configuration
- Hosted version with onboarding, branding & support

💡 Want access to the complete version?  
📩 Email **nina@baloon.dev**

## 🔗 Nodes Used

HTTP Request, Webhook, Basic LLM Chain, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
