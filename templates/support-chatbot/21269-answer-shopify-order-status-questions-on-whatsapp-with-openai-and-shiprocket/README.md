# 💬 Answer Shopify order status questions on WhatsApp with OpenAI and Shiprocket

> ⚡ **15 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow answers WhatsApp “Where’s my order?” questions using an OpenAI agent with live Shopify order lookups and Shiprocket tracking, logs each turn to Google Sheets, and hands the conversation to a human via Slack with a one-click link to resume the bot.

## How it works
1. Triggers when a new WhatsApp message is received and extracts the sender phone number, name, message type, and text.
2. Looks up the phone number in a Google Sheets “WISMO Conversations” tab to decide whether the chat is currently in bot mode, human mode, or unsupported (non-text) mode.
3. If the chat is in human mode, forwards the customer’s message to a Slack channel for an agent to handle.
4. If the message is unsupported, replies on WhatsApp asking the customer to type their order number or question.
5. If the chat is in bot mode, uses an OpenAI agent with chat memory to fetch recent Shopify orders by phone, optionally look up an order by number (with ownership verification), pull live Shiprocket tracking by AWB, and reference a built-in return policy tool.
6. Applies guardrails to the agent output, sends the reply on WhatsApp, and logs the message/reply, intent, sentiment, and handoff status to a Google Sheets “WISMO Log” tab.
7. If a human handoff is needed, updates the conversation state in Google Sheets, posts a Slack handoff card with context and a “resume bot” link, and the resume webhook validates a one-time token before switching the chat back to bot mode.

## Setup
1. Connect WhatsApp Business Cloud credentials (trigger and send), an OpenAI API credential, a Google Sheets OAuth credential, and a Slack OAuth credential.
2. Create a Shopify custom app with `read_orders` access and configure HTTP Header Auth with `X-Shopify-Access-Token`, then replace `REPLACE_STORE` with your Shopify store domain in both Shopify GraphQL requests.
3. Create Shiprocket credentials for HTTP Custom Auth (login email/password), and ensure the workflow can call the Shiprocket auth and AWB tracking endpoints.
4. Create a Google Sheet with “WISMO Conversations” and “WISMO Log” tabs, set `REPLACE_WITH_GOOGLE_SHEET_ID`, and ensure the Conversations tab includes the columns used for state (phone, human_mode, human_until, resume_token, consecutive_fails, last_order).
5. Set `REPLACE_WITH_SLACK_CHANNEL_ID`, `REPLACE_WITH_WHATSAPP_PHONE_NUMBER_ID`, and `REPLACE-N8N-DOMAIN` (used in the Slack resume link), then customize the return policy text and returns URL in the return policy tool.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, WhatsApp Business Cloud, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
