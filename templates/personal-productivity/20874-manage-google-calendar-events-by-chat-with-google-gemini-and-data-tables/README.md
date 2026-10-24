# ⚡ Manage Google Calendar events by chat with Google Gemini and data tables

> ⚡ **0 views** · ⚡ [Personal Productivity](../)

## Description

## Quick Overview
This workflow lets you manage Google Calendar via an n8n chat, using Google Gemini to interpret requests, store reusable color categories in an n8n data table, and create, update, delete, list, and color-code events.

## How it works
1. Receives a message in an n8n chat trigger.
2. Creates (or attempts to create) a “Categories” n8n data table to store category names and Google Calendar color IDs.
3. Fetches details for your primary Google Calendar via the Google Calendar API.
4. Uses a Google Gemini chat model with conversation memory to interpret your request and decide the needed actions.
5. Reads, adds, or deletes category records in the “Categories” data table to map category names to Google Calendar color IDs.
6. Uses Google Calendar to list events to find the correct event ID, then creates, updates/moves, deletes, and/or recolors events based on your message.
7. Returns the assistant’s reply, falling back to a clarification message if no response is produced.

## Setup
1. Add a Google Calendar OAuth2 credential with access to the calendar you want to manage.
2. Add a Google Gemini (PaLM) API credential for the Gemini chat model.
3. Ensure your n8n instance has Data Tables enabled so the workflow can create and use the “Categories” table.
4. Activate the workflow and use the built-in chat (“Open chat”) to send requests in natural language.

## 🔗 Nodes Used

HTTP Request, AI Agent, Simple Memory, Chat Trigger, Google Gemini Chat Model, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
