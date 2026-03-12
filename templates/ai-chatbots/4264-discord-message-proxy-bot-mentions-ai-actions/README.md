# 🤖 🤖 Discord message proxy: Bot mentions → AI actions

> ⚡ **536 views** · 🤖 [AI Chatbots & Agents](../)

## Description

Need help? Want access to this workflow + many more paid workflows + live Q&A sessions with a top verified n8n creator?

[Join the community](https://www.skool.com/beyond-nodes-automation-lab-2006/about)

🔍 What It Does

    Listens for @mentions of your bot in Discord channels (without a native trigger).

    Filters noise: Only processes messages:

        From authorized users (configurable).

        That mention your bot.

        Sent today (skips old messages).

    Forwards cleaned messages to any webhook (e.g., your AI agent, like the GitHub MCP Server).

    Replies in Discord with the webhook’s response.

🛠️ Key Features

    ⚡ No Community Nodes: Uses official n8n nodes only (security-first!).

    🔒 Role-Based Access: Restrict bot usage to specific users.

    🗑️ Deduplication: Avoids processing the same message twice.

    🔄 Scheduled Checks: Runs every X minutes (adjustable in the Schedule Trigger).

🚀 Use Cases

    Chat with your AI bot via Discord mentions.

    Moderate channels: Auto-flag messages or ping moderators.

    Build custom commands: Trigger workflows by mentioning your bot.

⚙️ Setup Guide

    🤖 Update Credentials: Ensure your Discord bot has Read Messages and Send Messages permissions.

    🔧 Configure Variables: In the "Set Values" node:

        discordServerId: Your server’s ID.

        botId: Your bot’s user ID.

        authorizedUser: Who can trigger the bot (user ID).

    🌐 Webhook Target: Point the HTTP Request node to your AI/webhook endpoint.

    ⏱️ Adjust Polling: Change the Schedule Trigger interval (default: every minute).

Note: This polls channels instead of true event-based triggers—tradeoffs time for security!

## 🔗 Nodes Used

HTTP Request, Discord, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
