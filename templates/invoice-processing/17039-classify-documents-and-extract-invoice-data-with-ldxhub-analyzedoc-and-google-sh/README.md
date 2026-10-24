# 🧾 Classify documents and extract invoice data with LDXhub AnalyzeDoc and Google Sheets

> ⚡ **640 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow collects uploaded PDFs or images, classifies each document type using LDXhub AnalyzeDoc, and routes it accordingly; invoices get high-detail field extraction and are appended as a new row in Google Sheets.

## How it works
1. Receives a file upload through an n8n form for a PDF, JPG, or PNG business document.
2. Sends the file to LDXhub AnalyzeDoc (low-detail) to classify it as invoice, receipt, business_card, contract, blank, or other.
3. Parses the returned JSON and routes the execution based on the detected document_type.
4. For invoices, reattaches the original uploaded file and runs LDXhub AnalyzeDoc (high-detail) to extract key invoice fields in structured JSON.
5. Flattens the extracted fields and appends them as a new row in a selected Google Sheets worksheet.
6. For receipts, business cards, and other types, sends the item to placeholder routes where you can add your own processing.

## Setup
1. Create an LDXhub account, generate an API key, and configure an LDXhub API credential in n8n for both AnalyzeDoc steps.
2. Connect a Google Sheets OAuth2 credential and select the target spreadsheet and worksheet in the append step.
3. Ensure the first row of your sheet contains headers matching the extracted invoice fields (invoice_number, issue_date, due_date, vendor_name, vendor_address, vendor_tax_id, bill_to, subtotal, tax, total, currency, payment_terms).

## Additional info
The receipt, business card, and other branches are intentional extension points (No-Op placeholders) — the invoice branch is the complete, ready-to-run path. Add your own processing to the other branches as needed.

## 🔗 Nodes Used

Google Sheets, n8n Form Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
