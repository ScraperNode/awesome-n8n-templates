# 🧾 Extract invoice data into Google Sheets with LDX hub AnalyzeDoc Gemini

> ⚡ **84 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow collects an invoice PDF or image through an n8n form, uses LDX hub AnalyzeDoc (Gemini) to extract key invoice fields as JSON, and appends the results as a new row in Google Sheets.

## How it works
1. Receives an invoice file upload (PDF/JPG/PNG) through an n8n form submission.
2. Sends the uploaded document to LDX hub AnalyzeDoc (google/gemini-3.5-flash) with a prompt that extracts invoice metadata, parties, dates, and amounts into a JSON schema.
3. Parses the extracted JSON into structured fields for downstream use.
4. Appends the extracted invoice fields as a new row in the selected Google Sheets spreadsheet and worksheet.

## Setup
1. Install the community node package `n8n-nodes-ldxhub` and create an LDXhub API credential (API key) for the AnalyzeDoc node.
2. Add a Google Sheets OAuth2 credential and select the target spreadsheet and sheet in the Google Sheets append step.
3. Create a header row in your Google Sheet that matches the extracted fields (invoice_number, issue_date, due_date, vendor_name, vendor_address, vendor_tax_id, bill_to, subtotal, tax, total, currency, payment_terms) so auto-mapping writes to the correct columns.

## 🔗 Nodes Used

Google Sheets, n8n Form Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
