# 🧾 Scan receipt images from Google Drive with Gemini and log to Google Sheets

> ⚡ **243 views** · 🧾 [Invoice Processing](../)

## Description

## Who is this for

Freelancers, small business owners, and accountants who want to automate receipt management without manual data entry.

## What this workflow does

This workflow monitors a Google Drive folder for new receipt images or PDFs. When a file is detected, it downloads and sends it to the Gemini AI API for OCR processing. Gemini extracts key details — date, store name, total amount, tax, payment method, and expense category — as structured JSON. The parsed data is appended to a Google Sheets spreadsheet, and the processed file is automatically moved to a separate folder. If more files remain, the workflow loops until all receipts are processed.

## How to set up

1. Create two folders in Google Drive: one for unprocessed receipts and one for processed files
2. Create a spreadsheet with columns: date, store_name, total_amount, tax_amount, payment_method, category, source_file, original_file_id
3. Add your Gemini API key in n8n Settings → Variables as `GEMINI_API_KEY`
4. Connect Google Drive and Google Sheets OAuth2 credentials
5. Set folder IDs in the **Watch Drive Folder**, **Check Remaining Files**, and **Move to Processed** nodes
6. Set your spreadsheet ID in the **Append to Sheet** node

## Requirements

- Google account with Drive and Sheets access
- Gemini API key (free tier available at Google AI Studio)

## How to customize

- Edit the prompt in the **Gemini OCR** node to add or change extracted fields
- Adjust the polling interval in the **Watch Drive Folder** node
- Modify expense categories in the prompt to match your accounting needs

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Google Drive Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
