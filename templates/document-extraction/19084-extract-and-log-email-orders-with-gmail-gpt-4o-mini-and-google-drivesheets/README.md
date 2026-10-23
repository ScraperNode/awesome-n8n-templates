# 🔬 Extract and log email orders with Gmail, GPT-4o-mini, and Google Drive/Sheets

> ⚡ **7 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow watches Gmail for incoming order emails, extracts structured order and line-item data using OpenAI (vector stores and GPT-4o-mini), then exports the results as CSV files to Google Drive and logs each order to Google Sheets.

## How it works
1. Triggers every minute on new Gmail messages and routes emails based on MIME type to handle messages with attachments versus other formats.
2. For attachment-based orders, downloads attachments from Gmail, uploads them to OpenAI Files, creates an OpenAI vector store, and attaches the uploaded files to it.
3. Polls OpenAI until vector store file processing completes, then asks GPT-4o-mini (with file search against the vector store) to extract order header details and all line items as structured JSON.
4. Splits the extracted items into individual rows, converts the structured output into a CSV, and uploads the CSV to a specified Google Drive folder.
5. If the AI extraction indicates an error, calls the OpenAI Chat Completions API as a fallback to parse the order from the available content, converts the parsed items to CSV, uploads the CSV to Google Drive, and logs the order link and customer/order fields to Google Sheets.
6. In a second pipeline, triggers on forwarded iPaper order emails in Gmail, parses the email text with custom logic to extract customer details and line items, converts them to CSV, uploads the CSV to Google Drive, and appends an order log row to Google Sheets.

## Setup
1. Add Gmail OAuth2 credentials and adjust the Gmail trigger filters/labels/subjects to match the order emails you want to process (including forwarded iPaper messages).
2. Add an OpenAI API credential for the OpenAI Files, vector stores, and Chat Completions API requests used for extraction and fallback parsing.
3. Add Google Drive OAuth2 credentials and replace `YOUR_DRIVE_FOLDER_ID` in each Google Drive upload step with your target folder.
4. Add Google Sheets OAuth2 credentials and replace `YOUR_GOOGLE_SHEET_ID` and the sheet/tab reference so the Append Row steps write to your intended spreadsheet.
5. Ensure your Google Sheet has columns matching the workflow’s appended fields (for example name, email, phone, address/county, Order REF, PO Number, Order Date, and Google File Link).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Gmail, Gmail Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
