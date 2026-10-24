# 🧾 Extract invoice data into CSV files and Google Sheets using OCR.space

> ⚡ **1 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow receives invoice PDFs or images via a webhook, extracts text using OCR.space, parses key invoice fields and line items with deterministic rules, and then saves the results as a CSV file and optionally appends them to Google Sheets before returning the extracted data as JSON.

## How it works
1. Receives an HTTP POST webhook request containing an uploaded invoice file (PDF/image) in a binary field.
2. Sends the uploaded file to the OCR.space API to convert the document into extracted text.
3. Checks whether OCR.space processed the file successfully and returns a 422 JSON error response if OCR fails.
4. Parses the OCR text to extract vendor, invoice number, invoice date, subtotal, tax, total, and line items, and generates flags for any missing fields or line-item calculation mismatches.
5. Converts the extracted fields into a CSV file and writes it to disk.
6. Optionally appends the extracted record to a Google Sheets worksheet.
7. Returns the extracted invoice data (including flags and raw OCR text) as the webhook response.

## Setup
1. Create an OCR.space API key and add it to an n8n Header Auth credential (header name "apikey") used by the OCR request.
2. Send invoices to the webhook endpoint by copying the production webhook URL from the "Invoice Upload" trigger and posting a file in the binary field named "invoice".
3. Ensure n8n has write access to the configured output path (default: ./output/) or update the CSV file path to match your environment.
4. (Optional) Add a Google Sheets OAuth credential, set the target Spreadsheet ID and sheet name, and ensure the header row matches the workflow’s output fields before enabling the Google Sheets append step.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Read/Write Files from Disk, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
