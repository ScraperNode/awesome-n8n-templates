# 💬 Handle WhatsApp event bookings with OpenAI and Google Sheets

> ⚡ **39 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow receives inbound WhatsApp messages via a WAHA webhook, uses OpenAI with Postgres chat memory and Google Sheets tools to answer event and booking questions, and replies back over the WAHA API with either text or an image caption.

## How it works
1. Receives a POST webhook from your WAHA server for each WhatsApp message.
2. Loads the assistant’s system prompt from an n8n data table and validates the message is addressed to your business WhatsApp chat ID.
3. Stores either the customer’s message (excluding your own business chat) or your team’s outgoing message into a shared conversation context.
4. Uses OpenAI with Postgres-backed conversation memory and tools that read your Google Sheets event calendar, look up Instagram post details, analyze images via a sub-workflow, and append confirmed bookings to Google Sheets.
5. Parses the agent output into structured fields that indicate whether to reply, the reply text, and an optional image URL.
6. If a reply is required, sends either a text message or an image with a caption back to the customer via the WAHA API.

## Setup
1. Deploy and configure a WAHA server, then set the webhook URL to this workflow’s webhook endpoint.
2. Add your OpenAI API credentials (used for the agent and structured output auto-fix).
3. Add a Postgres credential and ensure a table named `whatsapp_chat_history` exists (or update the table name) for chat memory.
4. Add Google Sheets credentials and replace `YOUR_GOOGLE_SHEET_ID` with a spreadsheet that includes an `Event Cal` sheet (A:K) and a `Bookings` sheet.
5. Create an n8n data table containing a `Prompt` field, set its ID in the prompt loader, and fill in the WAHA API URL, API key, session name, and business WhatsApp chat ID in the config step.
6. Set the workflow IDs for the image analysis and Instagram lookup sub-workflows (or remove those tools if you don’t use them).

## 🔗 Nodes Used

HTTP Request, Webhook, AI Agent, OpenAI Chat Model, Structured Output Parser, Call n8n Workflow Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
