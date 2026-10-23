# 🧾 Extract invoice data with Google Gemini, Google Sheets, and Telegram

> ⚡ **178 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow accepts invoice PDFs or images from an n8n Form or Telegram, uses Google Gemini to OCR and extract structured invoice fields and line items, appends the results to Google Sheets, and sends a success or rejection notification via Telegram.

## How it works
1. Receives an invoice file upload either from an n8n Form or from a Telegram bot message.
2. Validates that the incoming file exists and is a supported PDF or image format, otherwise prepares a rejection message.
3. Uploads the file to Google Gemini and routes it to Gemini document analysis for PDFs or image analysis for images.
4. Parses Gemini’s JSON response, normalizes dates and numeric fields, and ensures line items are present as an array.
5. Splits the extracted line items into rows and appends the invoice data to an Invoices worksheet in Google Sheets.
6. Builds a processing summary and sends a Telegram notification for success, or sends the prepared rejection message for invalid files.

## Setup
1. Add a Google Gemini (PaLM) API credential and select a Gemini model (for example, models/gemini-2.5-flash) in the Gemini nodes.
2. Add a Google Sheets OAuth2 credential and replace REPLACE_WITH_GOOGLE_SHEET_ID with your spreadsheet ID, ensuring an Invoices sheet exists.
3. Add a Telegram bot credential, set REPLACE_WITH_TELEGRAM_CHAT_ID, and (optionally) message your bot once so it can send you notifications.
4. If using the n8n Form entry point, open the form URL for the “invoice” path and use it as the upload page for PDF/image invoices.

## 🔗 Nodes Used

Google Sheets, Telegram, Telegram Trigger, n8n Form Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
