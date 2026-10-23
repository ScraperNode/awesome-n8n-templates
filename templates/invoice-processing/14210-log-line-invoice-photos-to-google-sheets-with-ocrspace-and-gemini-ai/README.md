# 🧾 Log LINE invoice photos to Google Sheets with OCR.space and Gemini AI

> ⚡ **123 views** · 🧾 [Invoice Processing](../)

## Description

## Who is this for

Freelancers, small business owners, and accounting teams in Japan who receive invoices and want to eliminate manual data entry into spreadsheets.

## What this workflow does

Send an invoice photo to your LINE bot and the rest is automatic. The workflow fetches the image via LINE Messaging API, runs it through OCR.space to extract raw text, then passes that text to a Gemini AI Agent to parse the key fields — invoice number, date, due date, vendor name, subtotal, tax, and total. The result is appended as a new row in your Google Sheets ledger and a confirmation is sent back to LINE. If the image is not an invoice, a friendly error message is returned instead.

## How to set up

1. Create a LINE Messaging API channel and get your Channel Access Token
2. Get a free OCR.space API key at ocr.space/ocrapi/freekey
3. Get a free Gemini API key at aistudio.google.com
4. Set up Google Sheets OAuth2 credentials in n8n
5. Enter your LINE token, OCR key, and Spreadsheet ID in the Variables node
6. Set the Webhook URL in LINE Developers to your n8n instance URL
7. Activate the workflow and send an invoice photo to your LINE bot

## Requirements

- LINE Messaging API channel and channel access token
- OCR.space API key (free tier: 25,000 requests/month)
- Google Gemini API key (free tier: 1,500 requests/day)
- Google Sheets with OAuth2 credentials configured in n8n

## How to customize

Change `SHEET_NAME` in the Variables node to file invoices by month. Edit the Gemini prompt to capture extra fields like bank details or line items. Swap OCR.space for Google Cloud Vision API if you need better accuracy on complex layouts.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
