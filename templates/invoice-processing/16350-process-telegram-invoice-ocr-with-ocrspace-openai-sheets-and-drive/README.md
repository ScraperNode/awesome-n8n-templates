# 🧾 Process Telegram invoice OCR with OCR.space, OpenAI, Sheets and Drive

> ⚡ **113 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow accepts invoice files via a Telegram bot, extracts text with OCR.space, uses OpenAI to turn the OCR output into structured invoice fields, appends the data to Google Sheets, archives the original file in Google Drive, and sends a confirmation message back to Telegram.

## How it works
1. Triggers when a user sends an invoice image (JPG/PNG) or PDF to your Telegram bot.
2. Downloads the file from Telegram, detects its MIME type, and continues only for JPG, PNG, or PDF invoices.
3. Sends the invoice file to OCR.space to extract the raw text content.
4. Uses OpenAI to convert the OCR text into structured invoice JSON and validates the output against a predefined schema.
5. Formats item lines into newline-separated fields and appends the invoice details to a Google Sheets worksheet.
6. Uploads the original invoice file to a specified Google Drive folder and generates a short confirmation message with key details and your database link.
7. Sends the confirmation message back to the same Telegram chat.

## Setup
1. Create a Telegram bot, add the Telegram credentials in n8n, and start a chat with the bot so it can receive messages.
2. Add an OCR.space API key using HTTP Header Auth credentials and connect it to the OCR request step.
3. Add OpenAI API credentials for the model used to extract structured invoice data and write the confirmation message.
4. Connect Google Sheets and Google Drive OAuth credentials, then set the Google Sheet ID and Drive folder ID in the workflow variables.
5. Create a Google Sheet (for example, “Sheet1”) with the required column headers used by the append step and update the sheet name if different.
6. Set the invoice database link in the workflow variables so it can be included in the Telegram confirmation.

## Requirements
- Telegram Bot (created via BotFather)
- OpenAI API key
- OCR.space API key (free tier available at ocr.space)
- Google Sheets OAuth2 credentials
- Google Drive OAuth2 credentials

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Telegram Trigger, Google Drive, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
