# 🧾 Extract invoice data from Google Drive PDFs with Mistral OCR and Sheets

> ⚡ **20 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow watches a Google Drive folder for new invoice PDFs, extracts key invoice fields from the document text via Mistral OCR (free), writes the structured data to Google Sheets, and then moves the processed file to a separate Google Drive folder.

## How it works
1. Triggers every minute when a new file is created in a specific Google Drive folder.
2. Downloads the newly uploaded PDF from Google Drive.
3. Extracts text content from the PDF. Use Mistral OCR for better results, free API keys are available.
4. Parses the extracted text to identify invoice details like invoice number, issue date, due date, customer/seller, amounts, and days left to pay.
5. Appends the extracted invoice fields as a new row in a Google Sheets spreadsheet and marks the invoice as unpaid.
6. Moves the processed PDF into a “Processed Invoices” Google Drive folder.

## Setup
1. Connect your Google Drive OAuth2 credentials and set the source “UPLOAD Invoices” folder ID and destination “Processed Invoices” folder ID.
2. Connect your Google Sheets OAuth2 credentials and set the target spreadsheet and sheet tab, ensuring the columns match the fields being written.
3. Create a Mistral API key and input that Bearer token in the three HTTP calls to Mistral for the request to succeed.
4. Upload PDF invoices with consistent formatting to improve extraction accuracy, or replace the built-in PDF text extraction with the included Mistral OCR HTTP requests and add your Mistral API key as an HTTP Header Auth credential.

## Requirements
- (Free) Mistral API Key
- Google Drive
- Google Sheets

## Customization
- Either use the default "Extract from PDF" node or use Mistral OCR for better results.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Google Drive Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
