# 🧾 Extract and validate invoice PDFs with OpenAI, Google Sheets, and Gmail

> ⚡ **53 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow collects an invoice PDF via an n8n Form, extracts text from the PDF, uses OpenAI to convert it into structured invoice JSON, logs invoice headers and line items to Google Sheets, validates totals, and emails a formatted extraction report via Gmail.

## How it works
1. Receives an invoice submission through an n8n Form that includes the uploader’s name, email address, currency, notes, and a PDF file.
2. Extracts text content from the uploaded PDF.
3. Sends the extracted text to OpenAI (Chat Completions) to return invoice fields and all line items as a strict JSON object.
4. Parses and validates the returned JSON, enriching it with the form metadata and stopping the run if key fields (like invoice number or line items) are missing.
5. Appends a single invoice “header” row to the Invoices tab in Google Sheets.
6. Splits the extracted line items, adds per-line metadata and a unique key, and appends each line item as a row to the Line Items tab in Google Sheets.
7. Aggregates all line items, verifies that their summed totals match the invoice total within a tolerance, builds an HTML report, and emails it to the submitter via Gmail.

## Setup
1. Add an OpenAI API credential and ensure the OpenAI model configuration in the HTTP request node matches your account access.
2. Add a Google Sheets OAuth2 credential, set the Google Sheet ID (replace `YOUR_INVOICE_LOG_SHEET_ID`), and create two tabs named Invoices and Line Items with the expected columns.
3. Add a Gmail OAuth2 credential and ensure the account is allowed to send email to external recipients if required by your Google Workspace settings.
4. Activate the workflow, open the Form URL for the “invoice-processor” path, and submit a test invoice PDF to confirm logging and email delivery.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, n8n Form Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
