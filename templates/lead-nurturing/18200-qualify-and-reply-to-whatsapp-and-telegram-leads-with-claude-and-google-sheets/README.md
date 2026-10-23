# 💬 Qualify and reply to WhatsApp and Telegram leads with Claude and Google Sheets

> ⚡ **9 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow receives WhatsApp/Telegram messages, pulls your knowledge base and the lead’s history from Google Sheets, and sends it to Claude — which auto-detects the customer’s language and replies in it (not a fixed list), qualifies the lead, logs updates, and notifies you on hot leads.

## How it works
1. Receives incoming messages via Telegram and WhatsApp webhooks (including a separate WhatsApp verification webhook response).
2. Normalizes each message into a common format and ignores non-text events by returning an immediate OK response.
3. Loads the latest knowledge base content from Google Docs and retrieves any existing lead record and conversation history from Google Sheets by chat ID.
4. Builds a structured Claude prompt that includes disclosure rules, qualification flow, product placeholders, and the prior conversation context.
5. Calls the Anthropic Messages API (Claude) and parses the reply to extract lead status and fields (name, contact, product, source, call time) while removing control tags from the user-facing response.
6. Appends or updates the lead row in Google Sheets with the latest status and conversation history, and sends a Telegram notification to the owner for hot/warm/manager-requested leads when contact details are present.
7. Sends Claude’s cleaned reply back to the user on Telegram or WhatsApp and responds to the webhook request with OK.

## Setup
1. Create and connect credentials for Anthropic (Claude), Google Docs OAuth2, Google Sheets OAuth2, Telegram, and a WhatsApp Business Cloud API access token (HTTP Header Auth).
2. Create a Google Doc for your knowledge base and a Google Sheet with a “Leads” tab, then replace YOUR_GOOGLE_DOC_ID and YOUR_GOOGLE_SHEET_ID in the Google Docs/Sheets nodes.
3. Configure Telegram by creating a bot with @BotFather, adding the Telegram credential in n8n, and setting the bot webhook URL to this workflow’s Telegram webhook endpoint.
4. Configure WhatsApp Business Cloud webhooks to point to this workflow’s WhatsApp endpoints, and replace YOUR_WHATSAPP_PHONE_NUMBER_ID in the Meta Graph API send-message URL.
5. Update the prompt placeholders in the context-building code (assistant name, company details, products, pricing ranges, website, privacy policy URL, and support email) and set YOUR_TELEGRAM_CHAT_ID for owner notifications.

## Requirements
- An n8n instance, an Anthropic (Claude) API key, a Google account (Docs + Sheets), a Telegram bot, and WhatsApp Business Cloud API access.

## Customization
- The disclaimer and opening question are pre-written in English, French, and Russian as a starting example — add more languages the same way. Add more products, adjust the lead-scoring thresholds, or extend the call-time detection patterns for languages beyond English/Russian.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Telegram, Google Docs

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
