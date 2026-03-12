# 🤖 Create smart Telegram reminders with GPT-4 mini and Airtable cancel codes

> ⚡ **239 views** · 🤖 [AI Chatbots & Agents](../)

## Description

How It Works

User sends a reminder request via Telegram (e.g., “Remind me to clean the garage tomorrow at 12 pm”).

The request is parsed by AI Agent and stored in Airtable with a unique reminder code.

The reminder workflow checks Airtable at scheduled intervals and sends a Telegram notification when the reminder is due.

Each reminder includes a unique cancel code (e.g., Reply 4936 to stop this reminder).

If the user replies with the code, the bot searches Airtable, deletes the reminder, and confirms the deletion in Telegram.

If the code doesn’t exist, the bot replies “Code not found.”

⚡ Setup Steps

Create a Telegram Bot

Use BotFather
 on Telegram.

Run /newbot and copy your bot token.

Add the token in your Telegram Trigger and Telegram Send nodes in n8n.

Set Up Airtable

Create an Airtable base called REMINDER-TABLE.

Add a table with fields:

title (Text) – reminder text

due_at (Date/Time) – when the reminder is due

chat_id (Text) – user’s Telegram chat ID

code (Number/Text) – unique cancel code

Generate an API key / Personal Access Token and connect it in n8n.

Import This Workflow

In n8n, click Import Workflow.

Paste the JSON template.

Connect your Telegram and Airtable credentials.

Activate the Workflow

Start the workflow in n8n Cloud or Self-Hosted.

Send a test reminder in Telegram (e.g., “Remind me in 5 minutes to call mom”).

When notified, reply with the cancel code to test deletion.

Optional Customizations

Modify reminder frequency (Every 5 minutes node).

Change reminder message formatting in the Format Message node.

Add logging/analytics by connecting Google Sheets or another DB.

⚡ Result: You now have a fully automated AI-powered Telegram Reminder Bot with Airtable storage, cancel codes, and real-time notifications!

## 🔗 Nodes Used

Airtable, Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
