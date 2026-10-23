# 🧾 Extract Turkish invoice data from Gmail PDFs with Google Gemini and Sheets

> ⚡ **20 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow monitors Gmail for PDF attachments, uploads them to Google Drive, extracts invoice text from PDFs, uses Google Gemini to detect and parse Turkish invoice fields into structured data, and logs both invoice headers and line items into Google Sheets.

## How it works
1. Runs every hour and triggers on new Gmail messages that contain PDF attachments.
2. Splits the email’s attachments into individual items and loops through each PDF.
3. Uploads each PDF to a specified Google Drive folder, then downloads it and extracts text from the PDF.
4. Uses Google Gemini to decide whether the extracted text is an invoice.
5. If it is not an invoice, deletes the uploaded file from Google Drive.
6. If it is an invoice, uses Google Gemini with a structured JSON schema to extract invoice details and line items from the PDF text.
7. Appends the invoice header fields to a Google Sheets “Faturalar” sheet and appends each invoice line item to a “Kalem Detay” sheet.

## Setup
1. Connect your Gmail OAuth2 account and ensure the Gmail query filter (filename:pdf has:attachment) matches the emails you want to process.
2. Connect your Google Drive OAuth2 account and set the target Drive folder ID where PDFs are uploaded.
3. Add a Google Gemini (Google PaLM) API credential for the two Gemini chat model nodes.
4. Connect your Google Sheets OAuth2 account and update the spreadsheet ID and sheet tabs/columns for both the invoice header (“Faturalar”) and line item (“Kalem Detay”) sheets.

## 🔗 Nodes Used

Google Sheets, Google Drive, Gmail Trigger, AI Agent, Basic LLM Chain, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
