# 💬 Handle restaurant bookings via Telegram with DeepSeek, Airtable, and Google Calendar

> ⚡ **60 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
An AI-powered Telegram assistant that manages restaurant bookings end-to-end: shares your menu, checks real-time availability via Google Calendar, confirms or cancels reservations, logs every conversation to Airtable, notifies staff instantly, and escalates tricky requests to a human when needed.

## How it works
1. Triggers when a guest sends a Telegram message to your bot.
2. Uses a DeepSeek-powered AI agent with chat memory to interpret the request, ask for missing booking details, and decide whether to answer a menu question, create a reservation, cancel a reservation, or escalate.
3. For menu questions, searches the Menu table in Airtable and replies only with items returned by Airtable.
4. For new reservations, checks Google Calendar free/busy for the requested 90-minute slot, creates a Google Calendar event if available, then saves the confirmed booking to Airtable and notifies staff via Telegram.
5. For cancellations, searches Airtable for the matching booking, deletes the associated Google Calendar event, updates the Airtable booking status to Cancelled, and notifies staff via Telegram.
6. For out-of-scope requests, creates a gotoHuman review request (if configured) so a staff member can follow up.
7. Logs the guest message and agent response to an Airtable Call Log table and sends the AI agent’s reply back to the guest in Telegram.

## Setup
1. Create a Telegram bot with @BotFather and add your Telegram credentials in n8n.
2. Add a DeepSeek API key credential for the AI agent.
3. Replace the Airtable base/table ID placeholders in the Airtable tool nodes and HTTP request URLs
4. Connect Google Calendar OAuth2 credentials, enable the Google Calendar API, and set the Calendar field on all Calendar tools to your actual calendar email address.
5. (Optional) Add a gotoHuman API key and replace the form ID used for escalations.

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, AI Agent, Simple Memory, DeepSeek Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
