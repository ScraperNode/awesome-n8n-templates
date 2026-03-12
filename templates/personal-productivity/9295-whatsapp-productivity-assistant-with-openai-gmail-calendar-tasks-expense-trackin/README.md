# ⚡ WhatsApp productivity assistant with OpenAI, Gmail, Calendar, Tasks & Expense tracking

> ⚡ **1,828 views** · ⚡ [Personal Productivity](../)

## Description

## Who's it for
This template is designed for anyone who wants to use **WhatsApp as a personal AI assistant hub**. If you often juggle tasks, emails, calendars, and expenses across multiple tools, this workflow consolidates everything into one seamless AI-powered agent accessible right from your most-used messaging app.

## What it does
Jarvis listens to your WhatsApp messages (text or audio) and processes them with OpenAI. Based on your request, it can:
* ✅ **Manage tasks** (create, complete, or delete)
* 📅 **Handle calendar events** (schedule, reschedule, or check availability)
* 📧 **Send, draft, or fetch emails** with Gmail
* 👥 **Retrieve Google Contacts**
* 💵 **Log and track expenses**
* 🎤 **Process voice notes** and respond intelligently

All responses are returned directly to WhatsApp, giving you a unified command center that works on any device.

## How to set up
1. Clone this template into your n8n workspace.
2. Set up a **WhatsApp Business API** account (via Meta Business Suite or providers like Twilio, 360dialog, or MessageBird).
3. Configure the WhatsApp webhook to connect to your n8n instance.
4. Connect your Google accounts (Gmail, Calendar, Contacts, etc.).
5. Add your **OpenAI API key** in the Credentials section.
6. Test by sending a WhatsApp message like:
   * "Create a meeting tomorrow at 3pm"
   * "Add expense $50 for lunch"
   * "Draft a reply to that email from Steve"
   * "What's on my calendar this week?"

## Requirements
* **n8n instance** (cloud or self-hosted with public webhook URL)
* **WhatsApp Business API** credentials (not regular WhatsApp)
* **Gmail, Google Calendar, and Google Contacts** credentials (optional based on features)
* **OpenAI API key**
* **ElevenLabs API Key** (optional, for advanced audio note processing)

## How to customize
* **Swap email providers** by replacing the Gmail MCP node with Outlook, Exchange, or IMAP/SMTP.
* **Add more integrations** like Notion, Slack, Todoist, or your CRM.
* **Adjust AI personality** by modifying the system prompt in the OpenAI node.
* **Control context memory** to determine how much conversation history Jarvis remembers.
* **Add automation rules** like auto-categorizing expenses or auto-scheduling recurring meetings.
* **Multi-language support** by configuring OpenAI to respond in different languages.

## Key advantages of WhatsApp version
* 🌍 **Universal access** - WhatsApp works everywhere, including international numbers
* 📱 **Cross-platform** - Seamlessly works on mobile, web, and desktop
* 🔒 **End-to-end encryption** for sensitive task and email data
* 👥 **Familiar interface** - No need to learn a new app
* ✅ **Read receipts** - Know when Jarvis has processed your request

With this template, you can transform WhatsApp into your **all-in-one AI productivity assistant**, simplifying workflows and saving hours every week—all from the app you're already using daily.

## 🔗 Nodes Used

HTTP Request, WhatsApp Business Cloud, Filter, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
