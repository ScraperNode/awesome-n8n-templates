# 🔬 Extract purchase order data to Excel via Telegram using OCR and Google Gemini

> ⚡ **305 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow accepts purchase order PDFs or images via Telegram, extracts text using PDF parsing or Tesseract OCR, uses Google Gemini to convert the text into structured JSON, validates key fields, and appends the results to a Microsoft Excel table in OneDrive, then notifies the sender.

## How it works
1. Triggers when a new Telegram message arrives with a document or photo attachment.
2. Detects whether the attachment is a PDF or an image and immediately replies in Telegram that processing has started (or sends an invalid-file message if unsupported).
3. Downloads the file from Telegram and extracts text using built-in PDF text extraction for PDFs or Tesseract OCR for images.
4. Cleans the extracted text and sends it to Google Gemini with instructions to return purchase order fields and line items as valid JSON.
5. Parses the Gemini response into JSON and validates that the PO number exists and the total amount is numeric.
6. If valid, formats the data for a Microsoft Excel table, appends it to the selected workbook/table in OneDrive, and sends a success message in Telegram.
7. If invalid, sends a Telegram message listing the validation errors.

## Setup
1. Connect your Telegram Bot credential and start a chat with the bot so it can receive PDFs/images and reply to your chat.
2. Add a Google Gemini (PaLM) API credential and ensure the model ID in the prompt node matches an available Gemini model in your account.
3. Connect Microsoft Excel OAuth2 credentials, then select the target OneDrive workbook, worksheet, and table where rows should be appended.
4. (Optional) Adjust the Gemini prompt fields, validation rules, and the Excel column mappings to match your purchase order format and table schema.

## 🔗 Nodes Used

Telegram, Telegram Trigger, Microsoft Excel 365, Extract from File, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
