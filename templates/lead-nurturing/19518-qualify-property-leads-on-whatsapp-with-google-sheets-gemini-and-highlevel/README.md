# 💬 Qualify property leads on WhatsApp with Google Sheets, Gemini, and HighLevel

> ⚡ **14 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
Youtube Video: https://youtu.be/zuvs-7xHKNs

This workflow replies to incoming WhatsApp messages, de-duplicates and debounces them with Redis, pulls a property inventory from Google Sheets, and uses Google Gemini to qualify the lead and recommend matching listings, optionally sharing an autofilled Cal.com scheduling link.

## How it works
1. Triggers when a new WhatsApp message is received and extracts the sender, message ID, type, and text.
2. If the message is not text, it replies in WhatsApp asking the user to send a text message instead.
3. Uses Redis to ignore duplicate message IDs, buffer multiple messages from the same phone number for a short window, and only continue when the latest message is stable.
4. Acquires a short Redis lock to prevent parallel processing, combines the buffered messages into one prompt, and clears the buffer.
5. Looks up the contact in HighLevel and upserts the lead into HighLevel if it does not already exist.
6. Reads the full property inventory from Google Sheets, aggregates it, and sends the user’s combined message plus the inventory to a Google Gemini-powered AI agent with Redis chat memory.
7. Parses the agent’s JSON output and sends either a qualifying follow-up message or a property recommendation message in WhatsApp, replacing any Cal.com link with an autofilled scheduling URL when provided, then releases the Redis lock.

## Setup
1. Connect WhatsApp Cloud API credentials for both the WhatsApp trigger and WhatsApp send actions, and set your Phone Number ID.
2. Provide a Redis connection and ensure your instance allows key TTL/expire operations for the dedup, buffer, timestamp, lock, and chat memory keys.
3. Add a Google Service Account credential and update the Google Sheets document ID and sheet tab to point to your property inventory.
4. Add a Google Gemini (PaLM) API credential for the chat model used by the AI agent.
5. Add a HighLevel OAuth2 credential and update the HighLevel locationId and contact upsert settings to match your account.
6. If you want scheduling, ensure the AI returns a valid Cal.com link and that your Cal.com event accepts the prefill query parameters used in the autofilled URL.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Redis, HighLevel, WhatsApp Business Cloud, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
