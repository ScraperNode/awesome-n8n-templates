# 💬 Answer WhatsApp gold chain enquiries with Google Sheets, Twilio, and OpenAI

> ⚡ **1 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow receives incoming WhatsApp messages via Twilio, looks up matching gold chain items in a Google Sheets price list, and replies with the last approved prices and available quantities; it can optionally use an OpenAI-compatible model to extract the requested style/karat/length/quantity and records opt-outs back to sheet.

## How it works
1. Receives an incoming WhatsApp message from Twilio via a webhook (or runs a built-in demo message set with the manual trigger).
2. Loads the stock list from Google Sheets (or falls back to built-in demo stock if no sheet is configured).
3. Extracts what the customer wants (style, karat, length, quantity, and opt-out/handoff intent) using keyword rules, optionally refining the extraction with an OpenAI-compatible chat endpoint.
4. Builds a customer reply from the stock list using the last published price and list date, or asks clarifying questions when the message is too vague.
5. Routes bulk/order/custom/complaint/payment-related enquiries to the owner with an alert message while acknowledging the customer.
6. Sends replies and owner alerts through Twilio WhatsApp, or outputs a preview instead when sending is disabled.
7. If the customer opts out (for example, “STOP”), updates the Customers tab in Google Sheets to mark the WhatsApp number as opted out (live mode only).

## Setup
1. Create a Google Sheet with Stock and Customers tabs as expected by the workflow, then add Google Sheets credentials in n8n and set SHEET_ID (and tab names if changed) in the config.
2. Add Twilio credentials in n8n, set TWILIO_WHATSAPP_FROM and OWNER_WHATSAPP in the config, and configure Twilio’s incoming WhatsApp webhook to POST to the n8n webhook URL.
3. (Optional) Add an OpenAI API key (or compatible endpoint) and set AI_API_KEY/AI_BASE_URL/AI_MODEL in the config to enable AI-assisted message parsing.
4. Choose your run mode in the config (preview/test/live) by setting TEST_RUN and optionally TEST_WHATSAPP before enabling the workflow.

## Customization
- Part 1 of 2 parts Gold Chain Catalogue Engine

## 🔗 Nodes Used

Google Sheets, HTTP Request, Twilio, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
