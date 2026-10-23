# 💬 Answer Telegram customer FAQs with Gemini and Google Sheets

> ⚡ **35 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow listens for incoming Telegram messages, pulls an FAQ from Google Sheets, and uses Google Gemini to reply in the customer’s language while keeping short chat history. It classifies whether a human needs to step in, logs each exchange to Sheets, and alerts the owner on Telegram when needed.

## How it works
1. Triggers when a customer sends a message to your Telegram bot.
2. Loads your business details and reads the full FAQ table from Google Sheets.
3. Uses Google Gemini (with a 10-message chat memory per chat) to generate a reply strictly from the FAQ and business info, then sends the response back to the customer on Telegram.
4. Uses Google Gemini again to classify the exchange as “Answered” or “Needs a person” based on the customer message and the bot’s reply.
5. Appends the conversation details to a Google Sheets Log tab, marking whether human help is required.
6. If the message needs a person, sends a Telegram alert to the owner and logs the handoff to Google Sheets.

## Setup
1. Create a Telegram bot with @BotFather and add Telegram credentials for the Telegram Trigger and Telegram send-message nodes.
2. Add a Google Gemini API credential (from Google AI Studio) and connect it to both Gemini nodes.
3. Add Google Sheets credentials and create a spreadsheet with a “FAQ” tab (Question, Answer columns) and a “Log” tab (Time, Customer, Message, Reply, Needs a person columns).
4. In the workflow settings fields, fill in your owner Telegram chat ID plus the FAQ and Log Google Sheets document IDs.

## Requirements
- A Telegram bot created with @BotFather
- A Google Gemini API key (the free tier is enough to start)
- A Google account for Sheets, with a FAQ tab and a Log tab

## Customization
- Change the categories in Needs a person? to decide which messages reach you.
- Add or edit rows in the FAQ tab at any time; the next message already uses them, with no workflow edits.

## 🔗 Nodes Used

Google Sheets, Telegram, Telegram Trigger, AI Agent, Simple Memory, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
