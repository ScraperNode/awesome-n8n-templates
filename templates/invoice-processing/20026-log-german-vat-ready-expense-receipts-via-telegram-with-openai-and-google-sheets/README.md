# 🧾 Log German VAT-ready expense receipts via Telegram with OpenAI and Google Sheets

> ⚡ **1 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow lets you send receipt photos to a Telegram bot, extracts key fields with OpenAI Vision, stores the image in Google Drive, and logs a German tax-ready expense row to Google Sheets with deductible amount and VAT handling, including optional voice-note refinements and duplicate detection.

## How it works
1. Triggers on incoming Telegram messages or button callbacks and allows only chat IDs listed in the workflow’s Config.
2. When you send a receipt photo, it downloads the image from Telegram and uses OpenAI (GPT-4o-mini vision) to extract structured receipt data such as merchant, date, gross/net, VAT, currency, and payment method.
3. If the receipt is unreadable or missing required fields, it sends an error back to Telegram asking for a clearer photo.
4. For readable receipts, it creates a descriptive filename, uploads the image to Google Drive, and calls OpenAI again to classify the expense into a cost center with German tax notes, deductibility, and VAT recoverability flags.
5. It calculates deductible amounts and VAT fields in-code using German rules (for example, net vs. gross deduction base and VAT blocking cases), generates a tracking ID, and checks Google Sheets for likely duplicates.
6. If a duplicate is suspected, it posts a Telegram warning with “Add anyway” or “Ignore”; otherwise it appends the row to the Ausgaben tab in Google Sheets and sends a confirmation message with buttons.
7. When you tap buttons or reply with a voice note, it can prompt for context, transcribe the voice note with OpenAI Whisper, reclassify/update the existing Google Sheets row, or delete the row and edit the Telegram message accordingly.

## Setup
1. Create a Telegram bot with BotFather, add the Telegram credentials in n8n, and start a chat with the bot so it can receive your messages.
2. Add an OpenAI API credential (used for both GPT-4o-mini vision/classification and Whisper transcription).
3. Add Google Sheets OAuth credentials and select a spreadsheet that contains an Ausgaben sheet with the columns expected by the workflow’s mapping.
4. Add Google Drive OAuth credentials and choose the target Drive and folder where receipt images should be uploaded.
5. In the ⚙️ Config node, set owner_chat_ids to your Telegram chat ID(s) and set sheet_url to the Google Sheet link used by the “View Sheet” buttons.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Telegram Trigger, Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
