# 💬 Answer Telegram booking requests with Gemini, Google Calendar and Sheets

> ⚡ **35 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow replies to incoming Telegram messages using a Gemini agent that references your business settings, checks and books appointments in Google Calendar, logs each interaction to Google Sheets, and alerts the owner in Telegram when a human handoff is needed.

## How it works
1. Triggers when a new message is received by your Telegram bot.
2. Loads your business settings (name, language, knowledge base, appointment length, and owner chat ID) and passes the customer message to a Gemini agent with 12-turn conversation memory.
3. When the customer asks to book, the agent checks real availability in Google Calendar and creates an event after the customer confirms a time.
4. The agent appends a CRM-style log entry to Google Sheets with the time, customer, message, outcome, and whether a human is needed.
5. The workflow removes the internal handoff token from the reply, sends the customer response back in Telegram, and notifies the owner in Telegram if the agent flagged the conversation for human follow-up.

## Setup
1. Create and connect credentials for Telegram, Google Gemini, Google Calendar, and Google Sheets.
2. In “Your settings”, fill in your business name, default language, appointment length, knowledge text (hours/services/prices/policies), and your owner Telegram chat ID.
3. Set the Google Sheet URL and sheet name for logging, and ensure the sheet has columns for Time, Customer, Message, Outcome, and Needs Human.
4. Confirm the Google Calendar to use (for example, the primary calendar) and test by messaging your Telegram bot to verify replies, booking, logging, and owner alerts.

## Requirements
- A Telegram bot token from BotFather (free)
- A Google account with Google Calendar and Google Sheets
- A Google Gemini API key (free tier is enough to start)

## Customization
- Swap the Telegram trigger and send nodes for WhatsApp Cloud API - the agent and its tools stay the same
- Rewrite the knowledge box in Your settings to serve a dental clinic, a garage or a restaurant
- Change the appointment length, or the 12-turn window in Conversation memory for longer chats

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, Simple Memory, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
