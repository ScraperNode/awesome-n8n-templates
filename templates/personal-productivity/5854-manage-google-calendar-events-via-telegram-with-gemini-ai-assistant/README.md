# ⚡ Manage Google Calendar events via Telegram with Gemini AI assistant

> ⚡ **88 views** · ⚡ [Personal Productivity](../)

## Description

## Who is this for?
This workflow is for businesses and individuals who want to automate calendar management via Telegram using n8n. It’s ideal for appointment-based services, consultants, and anyone who needs to streamline event scheduling, updates, or cancellations through a simple chat interface.

## What problem is this workflow solving?
Manually managing calendar events is time-consuming and error-prone, especially when clients communicate through messaging apps like Telegram. This workflow solves the problem by connecting Telegram to Google Calendar, enabling users to manage events directly via chat, reducing administrative overhead and response times.

## What this workflow does
This workflow enables Telegram-based interaction with Google Calendar. Users can:
- Create new events
- Update existing events
- Delete events
- Retrieve a list of scheduled events

Optionally, AI (like ChatGPT or Gemini) can be used to interpret natural language inputs, making the interaction even smoother.

## Setup
1. Add credentials:
   - Telegram: Connect your Telegram API.
   - Google Calendar: Add your Google account credentials to allow calendar access.
   - AI (optional): Add credentials for ChatGPT, Gemini, or another language model if using AI for natural language parsing.
2. Import the workflow into n8n and review all nodes.
3. Test the WhatsApp webhook to ensure it’s receiving messages correctly.
4. Connect to your Google Calendar and test event creation and retrieval.

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, Simple Memory, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
