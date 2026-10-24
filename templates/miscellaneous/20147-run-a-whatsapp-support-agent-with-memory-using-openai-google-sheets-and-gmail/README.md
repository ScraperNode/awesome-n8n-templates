# 🔧 Run a WhatsApp support agent with memory using OpenAI, Google Sheets and Gmail

> ⚡ **31 views** · 🔧 [Miscellaneous](../)

## Description

## Quick Overview
This workflow receives WhatsApp webhooks from Meta, stores conversation history in Google Sheets per phone number, generates short context-aware replies with OpenAI, and supports a “sticky” human handoff by emailing a teammate and stopping bot responses for that contact.

## How it works
1. Receives a POST webhook from Meta WhatsApp and parses the event into phone number, message text, and message type.
2. Filters out non-message webhook events (such as delivery/read receipts) so only real inbound messages continue.
3. Loads prior conversation rows for the sender from Google Sheets, rebuilds the last N turns of history, and logs the incoming message with a bot/human status.
4. Routes the conversation to either a human-handoff reply, an unsupported-media reply (when no text is available), or an OpenAI-generated reply that can only use the configured knowledge base and conversation history.
5. Sends the chosen reply back to the user via the Meta Graph API and appends an outgoing log entry to Google Sheets.
6. If the user asked for a human, sends a single notification email via Gmail with the message and recent history.

## Setup
1. Configure your Meta WhatsApp webhook to point to this workflow’s production webhook URL and ensure your Meta app is sending events for your WhatsApp number.
2. Add an HTTP Header Auth credential for Meta Graph API (Authorization: Bearer <YOUR_META_ACCESS_TOKEN>) and set the correct Meta phone number ID in the workflow configuration.
3. Connect Google Sheets credentials, create a spreadsheet with a “Conversations” sheet containing the required headers (Timestamp, Phone, Name, Direction, Message, Status), and update the spreadsheet ID in all Google Sheets steps.
4. Add OpenAI credentials for the Chat model used to generate replies and update the business name, knowledge base text, and history length settings as needed.
5. Connect Gmail credentials and set the handoff notification email address and handoff keywords that should trigger human escalation.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Gmail, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
