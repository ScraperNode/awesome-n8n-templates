# 🧾 Extract PDF invoice data from Gmail into Google Sheets using OpenAI GPT-4o-mini

> ⚡ **94 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow polls Gmail for unread emails with PDF attachments, extracts invoice text, uses OpenAI to pull key invoice fields, and appends the results as a structured row in a Google Sheets “Invoices” ledger.

## How it works
1. Polls Gmail every 5 minutes for unread emails that include a PDF attachment and downloads the attachment.
2. Extracts text from the attached PDF file.
3. Sends the extracted text to OpenAI (gpt-4o-mini) to extract vendor, invoice number, dates, amounts, and currency in a strict schema.
4. Appends a new row to the Google Sheets “Invoices” tab with the extracted fields plus email metadata (received date, sender, and filename).

## Setup
1. Connect Gmail, OpenAI, and Google Sheets credentials in n8n.
2. Create or choose a Google Sheets document with an “Invoices” sheet and columns like ReceivedDate, FromEmail, Vendor, InvoiceNumber, InvoiceDate, DueDate, Net, Tax, Total, Currency, and FileName.
3. Replace YOUR_GOOGLE_SHEET_ID in the Google Sheets append step with your target spreadsheet ID and confirm the sheet name is set to “Invoices”.

## Requirements
- Gmail, Google Sheets and OpenAI accounts (credentials connected in n8n); works with born-digital PDFs that have a text layer

## Customization
- Narrow the Gmail search query (sender, label, subject) or add fields to the extraction schema (PO number, line items) - both are single settings

## Additional info
The extraction prompt is strict by design: the model never invents values - absent fields come back empty, amounts come back as plain numbers. Parsing a typical invoice with gpt-4o-mini costs well under $0.001. Need scanned-PDF OCR, rows posted into QuickBooks/Xero, duplicate detection or an approval step? I build extended versions with async delivery - contact links in my creator profile.

## 🔗 Nodes Used

Google Sheets, Gmail Trigger, OpenAI Chat Model, Extract from File, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
