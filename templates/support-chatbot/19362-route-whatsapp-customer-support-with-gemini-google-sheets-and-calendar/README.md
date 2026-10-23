# 💬 Route WhatsApp customer support with Gemini, Google Sheets, and Calendar

> ⚡ **61 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow receives WhatsApp messages via Evolution API, uses Google Gemini multi-agent routing with Redis conversation memory to generate specialist replies, optionally schedules meetings in Google Calendar, logs qualified leads to Google Sheets, and sends the response back to WhatsApp.

## How it works
1. Receives an inbound `messages.upsert` webhook from Evolution API with the WhatsApp message payload.
2. Normalizes the payload to extract the chat ID, phone number, sender name, message text, and a flag indicating if the message was sent by the bot.
3. Ignores messages sent by the bot or events without message text to prevent loops and unnecessary processing.
4. Uses a Google Gemini-based orchestrator with Redis-backed memory to categorize the request and either answer directly or call a specialist tool (Sales, Support, or Finance) and optionally a Google Calendar scheduling tool.
5. Parses the orchestrator result into a structured object containing `replyText`, category, lead details, and a `shouldLog` flag.
6. When `shouldLog` is true, appends or updates the lead in Google Sheets by matching on the phone number.
7. Sends `replyText` back to the customer through Evolution API’s sendText endpoint.

## Setup
1. Configure Evolution API to send the `messages.upsert` webhook event to this workflow’s Production webhook URL, and create an HTTP Header Auth credential with header name `apikey` set to your Evolution API key.
2. Add a Google Gemini (PaLM) API credential and assign it to the orchestrator and the three specialist agents.
3. Provide a Redis credential for the orchestrator and each specialist agent memory node.
4. Add Google Sheets OAuth2 credentials, create a sheet with the expected columns, and set the spreadsheet ID and tab name in the Config values.
5. Add Google Calendar OAuth2 credentials and set the calendar ID and timezone in the Config values so the agent can create meetings when requested.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, AI Agent, Redis Chat Memory, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
