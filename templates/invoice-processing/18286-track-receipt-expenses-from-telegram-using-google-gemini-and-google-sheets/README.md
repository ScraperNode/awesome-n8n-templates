# 🧾 Track receipt expenses from Telegram using Google Gemini and Google Sheets

> ⚡ **25 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
Youtube Video: https://youtu.be/7GqvPmAHm1A

This workflow captures receipt photos sent to a Telegram bot, uses Google Gemini (via an AI agent) to extract structured expense details, checks Google Sheets for duplicates by message ID, and either warns about duplicates or appends the expense and replies with a confirmation summary.

## How it works
1. Triggers when a new message is received by your Telegram bot.
2. Normalizes the incoming Telegram payload and checks whether the message includes a receipt photo.
3. If no photo is attached, sends a Telegram reply asking the user to upload a clear receipt image.
4. If a photo is attached, downloads the image from Telegram and sends it to Google Gemini to extract receipt fields as JSON.
5. Parses and validates the extracted data (including a confidence score) and flags the receipt for review if key fields are missing or uncertain.
6. Looks up the Telegram message ID in a Google Sheets “Expenses” sheet to detect whether the receipt has already been logged.
7. If it is a duplicate, sends a duplicate notice via Telegram; otherwise appends the expense to Google Sheets and sends a formatted summary back to the user.

## Setup
1. Create a Telegram bot with BotFather, add your Telegram credentials in n8n, and ensure the workflow is allowed to receive messages from your bot.
2. Add Google Gemini (Google PaLM) API credentials for the Google Gemini chat model used by the AI agent.
3. Add Google Sheets OAuth2 credentials and set the target spreadsheet and “Expenses” sheet in the Google Sheets nodes.
4. Ensure your “Expenses” sheet includes a column named `messageId` (and optionally the other mapped columns like `merchant`, `receiptDate`, `total`, and `receiptId`) so duplicate detection and appends work correctly.

## 🔗 Nodes Used

Google Sheets, Telegram, Telegram Trigger, Google Drive, Filter, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
