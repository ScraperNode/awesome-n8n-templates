# 🎫 Collect student absence reasons via WhatsApp, Google Sheets, Gemini, and Redis

> ⚡ **13 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
Youtube Video: https://youtu.be/Bn1u3pc0Lpo

This workflow checks a Google Sheets attendance tracker every day and messages parents of absent students via WhatsApp, then uses Google Gemini plus Redis-based deduplication, buffering, and chat memory to interpret replies and write confirmed absence reasons back to Google Sheets.

## How it works
1. Runs every day at 10:30 AM and reads the attendance sheet in Google Sheets.
2. Filters to students marked absent who do not yet have a recorded reason, then sends a WhatsApp message to the parent and stores the outbound message in Redis chat history.
3. Triggers on incoming WhatsApp messages, extracts message details, and replies with a warning if the message is not text.
4. Uses Redis to ignore duplicate WhatsApp webhooks, buffer multiple parent messages for up to 5 minutes, and debounce rapid replies to keep only the latest message batch.
5. Acquires a short Redis lock per phone number, combines the buffered messages, and clears the buffer.
6. Looks up the student record in Google Sheets by the parent phone number and sends the conversation to Google Gemini (with Redis chat memory) to classify whether a valid absence reason was provided.
7. If a valid reason is detected, updates the student row in Google Sheets and sends a confirmation WhatsApp reply; otherwise, sends a clarification question, then releases the Redis lock.

## Setup
1. Connect WhatsApp Business Cloud API credentials (for both the WhatsApp Trigger and WhatsApp send actions) and configure the WhatsApp phone number ID.
2. Connect Google Sheets using a Google Service Account and update the spreadsheet and sheet references to your attendance tracker.
3. Provide a Redis credential and ensure your Redis instance is reachable for deduplication keys, message buffering, locks, and chat memory.
4. Add Google Gemini (Google PaLM) API credentials and confirm the model selection used by the agent.
5. Ensure your Google Sheet includes fields like ParentPhoneNumber, ParentName, StudentName, Reason, and got_reason so the workflow can match rows and write back results.

## 🔗 Nodes Used

Google Sheets, Redis, WhatsApp Business Cloud, Schedule Trigger, AI Agent, Redis Chat Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
