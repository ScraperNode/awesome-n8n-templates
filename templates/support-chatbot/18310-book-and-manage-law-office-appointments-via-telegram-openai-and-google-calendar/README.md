# 💬 Book and manage law office appointments via Telegram, OpenAI and Google Calendar

> ⚡ **67 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow acts as a virtual legal secretary on Telegram, using OpenAI and Google Calendar to collect client details, check availability, book 30‑minute consultations, and message both the client and an internal secretary chat in Portuguese (Brazil).

## How it works
1. Triggers when a client sends a Telegram message to the bot.
2. Uses an OpenAI-powered agent with conversation memory to collect intake details, offer predefined time slots in the America/Porto_Velho timezone, and decide whether to reply, book, cancel, or escalate.
3. Checks Google Calendar availability (and can delete an existing event) when the agent requests calendar actions.
4. Parses the agent’s structured JSON output and routes the flow based on whether the action is a booking or a normal reply.
5. If booking is requested, creates a Google Calendar event with the client and consultation details, then sends a formatted confirmation to the client and notifies the secretary via Telegram.
6. If booking is not requested, sends the agent’s reply message back to the client via Telegram.

## Setup
1. Add Telegram bot credentials and ensure the Telegram Trigger is correctly connected to your bot.
2. Add an OpenAI API credential for the Chat Model used by the agent.
3. Add Google Calendar OAuth2 credentials and select the target calendar ID used for checking availability and creating/deleting events.
4. Set the secretary’s Telegram chat ID used for escalation and booking notifications.
5. Set the workflow (and Google Calendar) timezone to America/Porto_Velho to match the agent’s scheduling rules.

## 🔗 Nodes Used

Telegram, Telegram Trigger, Google Calendar, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
