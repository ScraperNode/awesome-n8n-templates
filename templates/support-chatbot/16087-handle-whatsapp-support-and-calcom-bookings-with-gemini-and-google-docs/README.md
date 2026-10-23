# 💬 Handle WhatsApp support and Cal.com bookings with Gemini and Google Docs

> ⚡ **63 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow answers WhatsApp support messages using Google Gemini with company context from Google Docs, and automatically creates Cal.com bookings when users provide enough scheduling details, then logs each conversation to Google Sheets.

## How it works
1. Triggers when a new WhatsApp message is received and normalizes the sender, message text, and timestamp.
2. If the message is outside the 24-hour WhatsApp reply window, sends an approved WhatsApp template to reopen the conversation.
3. Fetches company knowledge from a Google Docs document and compiles it into a concise context block.
4. Uses Google Gemini to extract booking intent plus name, email, date, time, timezone, and notes from the WhatsApp message, then normalizes the date/time into an ISO start timestamp.
5. If a complete booking request is detected, calls the Cal.com API to create a booking; otherwise, prepares a fallback reply asking for missing details or sharing a Cal.com booking link.
6. If no booking is created, uses Google Gemini (with short-term conversation memory) to generate a concise support reply grounded in the Google Docs context.
7. Sends the final response back via WhatsApp and appends the message, response, intent, and timestamp to Google Sheets.

## Setup
1. Connect WhatsApp Cloud API in n8n, set your WhatsApp Business Phone Number ID, and configure the trigger webhook in Meta to receive message events.
2. Add Google Docs OAuth credentials and replace the Google Docs document URL/ID used for the company knowledge source.
3. Add Google Gemini credentials (or configure the Google Gemini nodes) for both the booking extractor and support agent.
4. Configure Cal.com by setting your Cal API key, Cal event type ID, and the fallback booking link values (Cal username and event slug).
5. Add Google Sheets OAuth credentials and replace the spreadsheet ID and sheet name where conversation logs are appended.

## Requirements
- This workflow requires an n8n instance with WhatsApp Cloud API, Google Docs, Google Sheets, Google Gemini, and Cal.com API access configured. 
- You must provide an approved WhatsApp reopen template for conversations outside the 24‑hour window, a single Google Doc that acts as the company knowledge base, and at least one properly configured Cal.com event type (with valid event type ID, timezone, and attendee fields) for bookings.

## Customization
- You can swap the Google Doc used for knowledge, tune the Gemini prompts for both support and booking extraction, and adjust booking validation logic (required fields, time normalization, timezone rules) to match your process. 
- It also supports customizing WhatsApp message copy, Cal.com event type details, and the Google Sheets schema so you can log extra metadata like intent, booking status, or escalation flags

## Additional info
The workflow is structured into clear stages: WhatsApp intake and 24‑hour gate, knowledge loading from Google Docs, AI-based intent and booking extraction, booking request validation, Cal.com booking or fallback link, AI support response, and logging to Sheets. Each stage is annotated with sticky notes inside the workflow canvas so you can quickly understand and modify behavior without digging through every node.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Docs, WhatsApp Business Cloud, AI Agent, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
