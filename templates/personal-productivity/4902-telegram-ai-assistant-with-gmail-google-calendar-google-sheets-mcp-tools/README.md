# ⚡ Telegram AI assistant with Gmail, Google Calendar, Google Sheets & MCP tools

> ⚡ **776 views** · ⚡ [Personal Productivity](../)

## Description

✨ What It Is
Automate your professional communication directly from Telegram using this powerful AI assistant built with n8n.

This no-code agent understands natural language and integrates seamlessly with:

Gmail (send, receive, draft emails)
Google Calendar (create, delete, get events)
Google Sheets (contact database)
MCP Tools (agent framework for dynamic tool routing)
Perfect for:

Virtual Assistants
Freelancers & Teams
Sales & Outreach Professionals
Calendar Managers
Customer Support Teams
🔧 What It Can Do
Just send a message like:

“Send email to Jane at Acme about pricing”
“Create a Zoom meeting with Victor next Friday at 3pm”
“Cancel meeting with Alex”
“Follow up with Sarah tomorrow”
✅ Features:

🔄 Understands natural language Telegram messages
📧 Sends or drafts emails using Gmail
📅 Creates/deletes/syncs calendar events with Google Calendar
📊 Fetches contact info from Google Sheets
🤖 Powered by a lightweight LLM (Gemini 2.0)
💼 Smart memory & session context via MCP tools
📥 Telegram replies with formatted confirmation (e.g., ✅, 📧, 📅)
🛠️ Setup Guide (Step-by-Step)

1. Prerequisites
An n8n.cloud or self-hosted n8n instance
Telegram Bot (create one via @BotFather)
Gmail, Google Calendar, and Google Sheets accounts
Access to MCP tools (optional: Daex AI Cloud or equivalent)
2. Authorize Accounts
Connect Gmail, Google Calendar, and Google Sheets credentials in n8n under "Credentials".
Authorize your Telegram bot via n8n's Telegram Trigger node.
3. Configure Your Google Sheet
Create a Google Sheet titled Contact Data with these columns:

Name
Email
Company
Role
Make sure the Google Sheets node points to the correct documentId and gid.

4. Connect MCP Tools (Optional)
If you're using Daex MCP, input the SSE path and trigger ID in the MCP Client Tool and MCP Server Trigger.

5. Enable Telegram Bot
Deploy your workflow in n8n
Send any command to your Telegram bot like:
“Send email to Lisa about invoice update”
The AI agent will understand the command, fetch the contact, and either send/draft an email or update the calendar accordingly.

6. Customize Prompts or Actions (Optional)
Edit the system prompt in the AI Agent node to:

Add company branding
Adjust supported commands
Modify language or tone
💬 Example Prompts

“Send email to Sam about project delay”
“Schedule call with Mabel next Monday at 10am”
“Delete event with Kevin”
“Follow up with Clara at noon tomorrow”
📦 What’s Included

🧠 Preconfigured n8n Workflow
🔗 Connected nodes: Telegram, Gmail, Google Calendar, Google Sheets, MCP Tools
🗂️ AI Memory Context (via MCP memory buffer)
✍️ Ready-to-use prompt template
🎯 Tested commands and use cases
🛍️ License

✅ Commercial use included
🚫 Do not resell the template without modifications

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, Simple Memory, Google Gemini Chat Model, MCP Client Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
