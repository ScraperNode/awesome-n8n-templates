# 💬 Send AI travel quotations via WhatsApp with Gemini, Google Sheets and Docs

> ⚡ **157 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick Overview
This workflow responds to incoming WhatsApp messages with AI-generated travel package quotations by looking up clients in Google Sheets, loading pricing from Google Docs, generating a structured reply with Google Gemini, logging the interaction, and sending the response back via WhatsApp.

## How it works
1. Triggers when a new WhatsApp message is received and continues only for text messages.
2. Looks up the sender in a Google Sheets client list and creates a new client record if none exists.
3. Retrieves the latest travel packages and pricing content from a Google Docs document.
4. Sends a WhatsApp typing/read indicator via the Facebook Graph API and uses a Google Gemini-powered agent with Redis chat memory to generate a structured quotation.
5. Logs the user message, AI reply, suggested package, and confidence score to a Google Sheets log and then sends the AI reply back to the customer on WhatsApp.

## Setup
1. Connect your WhatsApp Business (Meta) credentials for the WhatsApp trigger, the WhatsApp send message step, and the Facebook Graph API HTTP request.
2. Add Google service account credentials and point the Google Sheets and Google Docs steps to your client spreadsheet, log spreadsheet, and pricing document.
3. Add Google Gemini (PaLM) API credentials for the chat model used by the AI agent.
4. Set up Redis and configure the Redis credentials so chat history is stored per WhatsApp contact (wa_id).
5. Update the WhatsApp Phone Number ID, Graph API URL/version, and any sheet column names to match your environment.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Docs, WhatsApp Business Cloud, AI Agent, Redis Chat Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
