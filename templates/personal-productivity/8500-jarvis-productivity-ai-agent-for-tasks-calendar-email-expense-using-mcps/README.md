# ⚡ Jarvis: productivity AI agent for tasks, calendar, email & expense using MCPs

> ⚡ **37,384 views** · ⚡ [Personal Productivity](../)

## Description

## Who’s it for
This template is designed for anyone who wants to use **Telegram as a personal AI assistant hub**.  
If you often juggle tasks, emails, calendars, and expenses across multiple tools, this workflow consolidates everything into one seamless AI-powered agent.

## What it does
Jarvis listens to your Telegram messages (text or audio) and processes them with OpenAI.  
Based on your request, it can:
- ✅ Manage tasks (create, complete, or delete)  
- 📅 Handle calendar events (schedule, reschedule, or check availability)  
- 📧 Send, draft, or fetch emails with Gmail  
- 👥 Retrieve Google Contacts  
- 💵 Log and track expenses  

All responses are returned directly to Telegram, giving you a unified command center.

## How to set up
1. Clone this template into your n8n workspace.  
2. Connect your accounts (Telegram, Gmail, Google Calendar, Contacts, etc.).  
3. Add your OpenAI API key in the **Credentials** section.  
4. Test by sending a Telegram message like “Create a meeting tomorrow at 3pm” or “Add expense $50 for lunch.”  or "Draft a reply with a project proposal to that email from Steve"

## Requirements
- n8n instance (cloud or self-hosted)  
- Telegram Bot API credentials  
- Gmail, Google Calendar, and Google Contacts credentials (optional, if using those features)  
- OpenAI API key  
- ElevenLabs API Key (optional, if you need audio note support)

## How to customize
- Swap Gmail with another email provider by replacing the Gmail MCP node.  
- Add additional MCP integrations (e.g., Notion, Slack, CRM tools).  
- Adjust memory length to control how much context Jarvis remembers.  

With this template, you can transform Telegram into your **all-in-one AI assistant**, simplifying workflows and saving hours every week.

## 🔗 Nodes Used

Telegram, Telegram Trigger, Filter, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
