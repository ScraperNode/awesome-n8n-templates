# 💬 Handle Telegram booking and support chats with Gemini, Calendar and Sheets

> ⚡ **9 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow uses a Telegram bot, Google Gemini, Google Calendar, and Google Sheets to automatically reply to customers, answer FAQ/price questions, and create appointments in Google Calendar, while notifying the business owner when an appointment is booked or human support is needed.

## How it works
1. Triggers when a new Telegram message is received.
2. Extracts the Telegram chat ID, message text, and sender name and passes them to a Google Gemini-powered AI agent with short-term conversation memory.
3. Depending on intent, the AI agent queries Google Calendar for availability and creates a Google Calendar event when the user confirms a time, or searches a Google Sheets FAQ/pricing document to draft a concise answer.
4. Sends the AI-generated reply back to the customer on Telegram, removing internal tags from the visible message.
5. If the reply indicates an appointment was created, sends a Telegram notification to the business owner with the customer details.
6. If the reply indicates a complaint or a need for human support, sends a Telegram alert to the business owner with the message details.

## Setup
1. Create and connect Telegram credentials, then enable the Telegram Trigger so your bot can receive messages.
2. Add Google Calendar OAuth2 credentials, ensure the target calendar (for example, "primary") is correct, and confirm the workflow has permission to read availability and create events.
3. Add Google Sheets OAuth2 credentials and replace `GOOGLE_SHEETS_FAQ_DOC_ID` and the target sheet name with your FAQ/pricing spreadsheet details.
4. Add Google Gemini (Google AI) credentials for the chat model used by the AI agent.
5. Replace `BUSINESS_OWNER_TELEGRAM_CHAT_ID` with the Telegram chat ID that should receive appointment and complaint notifications.

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, Simple Memory, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
