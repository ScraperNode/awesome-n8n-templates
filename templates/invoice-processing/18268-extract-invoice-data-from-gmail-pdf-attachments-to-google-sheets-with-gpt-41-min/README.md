# 🧾 Extract invoice data from Gmail PDF attachments to Google Sheets with GPT-4.1-mini

> ⚡ **62 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow checks Gmail everyday for emails with invoice-related keywords and PDF attachments, extracts the PDF text, uses OpenAI (gpt-4.1-mini) to turn the content into structured invoice fields, normalizes the result, and appends the invoice data to a Google Sheets tracker.

## How it works
1. Runs every hour and searches Gmail for messages that have attachments and match the query `invoice OR bill OR receipt`.
2. Skips emails with no attachments and splits each email into individual items so each attachment is processed separately.
3. Extracts text from each PDF attachment.
4. Sends the extracted PDF text to an OpenAI-powered AI Agent (gpt-4.1-mini) to return invoice data as JSON.
5. Parses and normalizes the JSON into a consistent schema (for example invoice number, dates, vendor details, totals, and tax) and converts numeric values.
6. Appends the normalized invoice record to Google Sheets, using `invoice_number` as the matching column.

## Setup
1. Connect your Gmail OAuth2 credential and confirm the Gmail search query used by the trigger matches the invoices you want to process.
2. Add an OpenAI API credential with access to the `gpt-4.1-mini` model (or update the model selection to one you can use).
3. Connect your Google Sheets OAuth2 credential and select the target spreadsheet and sheet.
4. Create or update your Google Sheet headers to match the fields being appended (for example invoice_number, date, due_date, vendor_name, subtotal, tax, and grand_total).

## 🔗 Nodes Used

Google Sheets, Gmail, Gmail Trigger, AI Agent, OpenAI Chat Model, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
