# 💬 Answer WhatsApp gold chain enquiries using Google Sheets and Twilio

> ⚡ **0 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow receives incoming Twilio WhatsApp messages, looks up gold chain availability and last-approved prices from Google Sheets (or built-in demo stock), optionally uses an OpenAI-compatible model to parse what the customer wants, and replies with matching in-stock items or escalates complex requests to the owner.

## How it works
1. Receives an inbound WhatsApp message via a Twilio webhook (or uses built-in demo messages when run manually).
2. Loads the current catalogue from a Google Sheets Stock tab, or falls back to the workflow’s demo stock data if no sheet is configured.
3. Parses the customer’s text to extract style, karat, length, and quantity using keyword rules, optionally refining those fields with an OpenAI-compatible chat completion request.
4. Builds a response based on the sheet data: confirms opt-out requests, escalates bulk/orders/custom/complaints to the owner, or returns up to three closest in-stock matches with quantities and list prices.
5. Routes messages based on mode (preview/test/live) and sends replies and owner alerts through Twilio WhatsApp, or outputs a preview when sending is disabled.
6. If the customer opted out and live writing is enabled, updates the Google Sheets Customers tab to mark the WhatsApp number as opted out.

## Setup
1. Create a Twilio WhatsApp sender and configure Twilio’s “A message comes in” webhook to POST to this workflow’s webhook URL.
2. Add Twilio credentials in n8n and set your WhatsApp sender number in `TWILIO_WHATSAPP_FROM` and your escalation number in `OWNER_WHATSAPP` in the config.
3. Create a Google Sheet with Stock and Customers tabs (and the expected columns), add Google Sheets credentials in n8n, and set `SHEET_ID` in the config.
4. (Optional) Add an OpenAI API key (or compatible endpoint) and set `AI_API_KEY`, `AI_BASE_URL`, and `AI_MODEL` in the config to improve message parsing.
5. Choose your run mode by setting `TEST_RUN` and (optionally) `TEST_WHATSAPP` in the config before switching to live sending and writing.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Twilio, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
