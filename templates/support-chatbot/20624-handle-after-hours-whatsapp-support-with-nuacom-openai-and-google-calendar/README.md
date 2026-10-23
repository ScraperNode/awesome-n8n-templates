# 💬 Handle after-hours WhatsApp support with NUACOM, OpenAI and Google Calendar

> ⚡ **6 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow triggers on incoming NUACOM WhatsApp messages, only responds after hours, and uses an OpenAI-powered agent with an n8n Data Table knowledge base plus Google Calendar tools to answer questions, manage appointments, or hand off chats to a NUACOM human team.

## How it works
1. Triggers when NUACOM receives a WhatsApp message.
2. Filters messages to only process those sent to a specific WhatsApp number and normalizes key fields like sender number, message text, and message ID.
3. Checks the current time in Europe/Dublin against configured opening and closing times to decide whether it is outside business hours.
4. If outside business hours, assigns the conversation to a designated NUACOM AI user and sends the message (with recent conversation context) to an OpenAI chat model.
5. The AI agent answers business questions by querying an n8n Data Table knowledge base first, and it can check, book, reschedule, or cancel appointments by calling Google Calendar.
6. If the customer explicitly agrees to a handoff, the agent assigns the conversation to a NUACOM group for a human agent to follow up.
7. Sends the agent’s reply back to the customer over WhatsApp via NUACOM.

## Setup
1. Add NUACOM API credentials, ensure WhatsApp is enabled on your NUACOM number, and set the NUACOM assignees (AI user ID and human group) used for conversation assignment.
2. Update the allowed receiver number filter (or remove it) and confirm the business hours and timezone values match your organization.
3. Create and populate the n8n Data Table used as the WhatsApp chatbot knowledge base, and point the workflow to the correct table.
4. Add OpenAI credentials (or n8n AI Gateway access) and select the chat model you want the agent to use.
5. Connect Google Calendar OAuth2 credentials and select the target calendar where appointments are checked, booked, rescheduled, and cancelled.

## 🔗 Nodes Used

Filter, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
