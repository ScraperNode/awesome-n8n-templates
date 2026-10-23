# 💬 Handle order tracking and FAQ requests with Telegram, Gemini, and Google Sheets

> ⚡ **31 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
Youtube Video: https://youtu.be/Y1OYeENJUn4

This workflow responds to Telegram customer messages by using Google Gemini to detect whether the user wants an order status update or an FAQ answer, pulls the relevant data from Google Sheets, logs the conversation to Google Sheets, and replies back in Telegram.

## How it works
1. Receives an incoming Telegram message.
2. Uses Google Gemini to classify the message intent (order status vs. FAQ) and extract an order ID when applicable.
3. If the intent is order status, looks up the order in Google Sheets (ORDERS) by order_id and formats a status/tracking reply (or a not-found prompt).
4. If the intent is FAQ, reads the FAQ entries from Google Sheets (FAQ) and uses Google Gemini to generate an answer based on the stored questions and answers.
5. Writes the timestamp, chat ID, customer message, detected intent, order ID, and reply to a Google Sheets conversation log (CONVERSATION).
6. Sends the prepared reply back to the customer via Telegram.

## Setup
1. Create a Telegram bot, add your Telegram credentials in n8n, and start a chat with the bot so it can receive and reply to messages.
2. Add a Google Gemini (Google PaLM) API credential and select the model for both the intent detection and FAQ answering steps.
3. Add Google Sheets service account credentials, share your spreadsheet with the service account email, and ensure it contains ORDERS, FAQ, and CONVERSATION sheets.
4. Update the spreadsheet ID (and sheet names/columns if different) so order lookups use an order_id column and the conversation log has columns like timestamp, chat_id, customer_message, intent, order_id, and reply.

## 🔗 Nodes Used

Google Sheets, Telegram, Telegram Trigger, Basic LLM Chain, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
