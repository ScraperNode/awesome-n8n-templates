# 💬 Schedule and manage pet clinic visits with WhatsApp, Gemini, and HighLevel

> ⚡ **101 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
Youtube Video: https://youtu.be/81QSPEr5Yio?si=4EeaBFVofW0dK2Z_

This workflow handles pet clinic appointment conversations over WhatsApp, using Google Gemini for replies, Redis for chat memory, and GoHighLevel (LeadConnector) to look up or create contacts, save visit notes, and book, cancel, or reschedule calendar appointments.

## How it works
1. Triggers when a new WhatsApp message is received.
2. Validates the sender and ignores unsupported message types.
3. Searches GoHighLevel for an existing contact that matches the sender’s WhatsApp phone number.
4. Uses Google Gemini with Redis chat history and the contact context to chat with the owner, capture the pet’s issue, and save it as notes in GoHighLevel.
5. Fetches available GoHighLevel calendar free slots for the requested weekday date range and presents times to the user.
6. Creates or updates the GoHighLevel contact if required, then books the selected appointment, or fetches upcoming appointments to cancel or reschedule when explicitly confirmed.
7. Sends the assistant’s formatted response back to the owner via WhatsApp.

## Setup
1. Connect WhatsApp Cloud API credentials for both the WhatsApp Trigger and WhatsApp send action, and set your WhatsApp Phone Number ID.
2. Connect your GoHighLevel (HighLevel OAuth2) account and replace the placeholder calendarId and locationId values in all GoHighLevel/LeadConnector requests.
3. Add a Google Gemini (Google PaLM) API credential for the chat model.
4. Add a Redis credential and ensure Redis is reachable to store per-sender conversation history.
5. If using the webhook-based WhatsApp trigger, copy the trigger webhook URL into your WhatsApp app/webhook configuration and subscribe to message updates.

## 🔗 Nodes Used

HighLevel, WhatsApp Business Cloud, AI Agent, Redis Chat Memory, WhatsApp Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
