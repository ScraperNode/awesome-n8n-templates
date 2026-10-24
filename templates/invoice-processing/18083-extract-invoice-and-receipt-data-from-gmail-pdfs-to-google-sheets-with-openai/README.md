# 🧾 Extract invoice and receipt data from Gmail PDFs to Google Sheets with OpenAI

> ⚡ **100 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
Emails with PDF attachments are parsed automatically: AI extracts vendor, invoice number, dates and amounts into Google Sheets — validated in code (net + tax vs total), deduplicated against the sheet, and doubtful extractions are emailed to you flagged "Needs review". Bookkeeping that fills itself, safely.

## How it works
1. Gmail is polled for emails with attachments; a guard keeps only real PDFs, so newsletters and calendar invites never cost an AI call.
2. The PDF's text is extracted right inside n8n — no OCR service, no per-page fees.
3. AI returns strict JSON with vendor, invoice number, dates, document type, currency, net, tax and total — plus its own confidence score.
4. A Code node validates the answer: currency normalized, and net + tax checked against the total.
5. The invoice number is looked up in your sheet before writing, so a forwarded copy or reminder email is never logged twice.
6. Doubtful extractions — low confidence, broken arithmetic, missing total — are emailed to you and logged as "Needs review"; clean ones log as "Auto". One sheet, full audit trail.

## Setup
1. Connect your Gmail account in When Invoice Email Received and Send Manual Review Alert, and put your own address in the review node's To field.
2. Connect an OpenAI (or compatible) credential in AI Invoice Analyzer.
3. Create a spreadsheet with columns Date, Vendor, Invoice number, Invoice date, Type, Currency, Net, Tax, Total, Status, Email subject and select it in Read Invoice Number from Sheets and Append Invoice to Sheets Log.
4. Activate the workflow and email yourself a PDF invoice to watch the first row appear.

## Requirements
- Gmail account; OpenAI (or compatible) API key; a Google Sheet with columns Date, Vendor, Invoice number, Invoice date, Type, Currency, Net, Tax, Total, Status, Email subject.

## Customization
- Narrow the Gmail search filter to invoice senders; tune the confidence threshold and arithmetic tolerance for stricter review; add fields (IBAN, VAT id, line items) to the JSON schema + sheet; insert an OCR step for photo-scanned PDFs; swap Sheets for Xero/QuickBooks/DB.

## Additional info
Nothing is logged twice — the invoice number is looked up in the sheet before every write, so forwarded copies and reminder emails don't double-book. Non-PDF attachments are filtered before any AI cost, and every row carries an Auto / Needs review status for a full audit trail.

## 🔗 Nodes Used

Google Sheets, Gmail, Gmail Trigger, Basic LLM Chain, OpenAI Chat Model, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
