# 🔬 Log receipt expenses in Notion with Gmail, Telegram, and OpenAI

> ⚡ **19 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow captures receipt attachments from Gmail and receipt photos from Telegram, extracts structured expense details with OpenAI (gpt-4o-mini), logs each expense as a new page in a Notion database, and sends a Telegram confirmation, with Slack and Telegram alerts on workflow errors.

## How it works
1. Triggers when a new Gmail message matching the receipt search filter arrives with an attachment.
2. Extracts the first email attachment, detects whether it is a PDF, and if it is a PDF extracts its text content.
3. Sends either the PDF text or the receipt image to OpenAI (gpt-4o-mini) to return receipt data as JSON (vendor, date, amount, currency, category, summary).
4. Triggers when a new Telegram message is received and continues only if it includes a photo.
5. Downloads the highest-resolution Telegram photo, converts it to a base64 data URL, and sends it to OpenAI (gpt-4o-mini) for JSON receipt extraction.
6. Parses the OpenAI response into normalized fields and creates a new expense entry in a Notion database.
7. Sends a Telegram message confirming the logged expense, and on any workflow error posts alerts to Slack and Telegram.

## Setup
1. Add credentials for Gmail OAuth2, Telegram Bot API, OpenAI, Notion, and Slack OAuth2 (for error alerts).
2. Replace `REPLACE_WITH_YOUR_NOTION_EXPENSES_DATABASE_ID` with your Notion expenses database ID and ensure the database has matching properties (Vendor, Amount, Currency, Date, Category, Source, Notes).
3. Set the Telegram chat IDs used for messages by replacing `REPLACE_WITH_YOUR_TELEGRAM_CHAT_ID` in the confirmation step and `YOUR_ADMIN_TELEGRAM_CHAT_ID` for error alerts.
4. Update the Slack channel selection for error alerts to the channel you want to receive workflow failure notifications.
5. Configure your Telegram bot with BotFather and start a chat with the bot so it can receive photos and send confirmations.
6. Activate both the Gmail and Telegram triggers.

## 🔗 Nodes Used

Airtable, Google Sheets, Slack, Telegram, Telegram Trigger, Notion

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
