# 🧾 Match vendor invoices to PO and GRN with OpenAI, Gmail, Sheets and Slack

> ⚡ **32 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow ingests vendor invoices from Gmail, uses OpenAI to extract invoice fields, matches invoices against Purchase Orders and GRNs stored in Google Sheets, and routes approvals via Slack, while archiving files to Google Drive and generating a weekly bank-upload CSV payment batch.

## How it works
1. Triggers hourly when Gmail receives an email with attachments under the `invoices` label that is not yet marked `processed`.
2. Splits PDF/image attachments, uploads each invoice file to Google Drive, and sends the document to OpenAI to extract structured invoice data (vendor, GSTINs, PO, line items, and taxes).
3. Loads vendor master data, purchase orders, GRNs, and the existing AP ledger from Google Sheets and performs 3-way matching with GST/TDS validation and duplicate detection.
4. Writes the evaluated invoice (status, exceptions/warnings, approval token, and Drive link) back to the AP Ledger tab in Google Sheets.
5. Posts a Slack FYI for auto-approved invoices, sends a Slack approval message with approve/reject links for invoices needing approval, or drafts a vendor query email in Gmail and posts a hold notification to Slack for invoices that fail checks.
6. Accepts approve/reject link clicks via a webhook, validates the one-time token against the AP ledger in Google Sheets, updates the invoice status, and posts the decision to Slack.
7. Every Friday at 11:00 IST, reads approved invoices due in the next seven days from Google Sheets, groups them by vendor, generates a NEFT/RTGS bulk-upload CSV, uploads it to Google Drive, marks invoices as scheduled in the ledger, and posts a payment-run summary to Slack.

## Setup
1. Add credentials for Gmail, Google Sheets, Google Drive, Slack, and OpenAI (OpenAI API key and Google/Slack OAuth connections).
2. In Gmail, create an `invoices` label and a rule to apply it to vendor invoice emails (and optionally add a `processed` label if you want to mirror post-processing in Gmail).
3. Create a Google Sheet with tabs named `Vendors`, `Purchase Orders`, `GRN`, and `AP Ledger`, and update the workflow’s Google Sheet ID plus ensure the required columns exist (e.g., `po_number`, `vendor_code`, `gstin`, `unit_price`, `qty_received`, `invoice_key`, `status`).
4. Create Google Drive folders for invoice archives and payment batches, then replace `REPLACE_WITH_AP_INVOICES_FOLDER_ID` and `REPLACE_WITH_PAYMENT_BATCHES_FOLDER_ID`.
5. Replace `REPLACE_WITH_SLACK_CHANNEL_ID`, set your buyer GSTIN, approval thresholds, and webhook base domain in the matching configuration so the Slack approve/reject links resolve to your n8n instance.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, Google Drive, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
