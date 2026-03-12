# 🧾 Automate payment receipts: Email, archive, and track with Stripe and Google Workspace

> ⚡ **213 views** · 🧾 [Invoice Processing](../)

## Description

## Description
This workflow automates the process of retrieving Stripe invoices, validating API responses, generating payment receipts, sending them via email, storing PDFs in Google Drive, and appending details to a Google Sheet ledger. It also includes an error logging system to capture and record workflow issues, ensuring financial operations are both automated and reliable.

## What This Template Does (Step-by-Step)
- 📋 Manual Trigger – Start the workflow manually by clicking Execute workflow.
-  🔗 Fetch Invoices – Authenticates with Stripe and retrieves the 5 most recent invoices (includes customer info, amounts, statuses, and invoice URLs).
-  ✅ Check API Response – Ensures the Stripe API response contains a valid data[] array. If not, errors are logged.
-  📂 Expand List – Splits Stripe’s bundled invoice list into individual invoice records for independent processing.
-  💳 IF (Paid?) – Routes invoices based on payment status; only paid invoices move forward.
-  📧 IF (Already Receipted?) – Skips invoices where a receipt has already been generated (receipt_sent = true).
-  📑 Download File – Downloads the hosted invoice PDF from Stripe for use in emails and archiving.
-  ✉️ Send Receipt Email – Emails the customer a payment receipt with the PDF attached, using invoice details (number, amount, customer name).
-  ☁️ Upload Invoice PDF – Uploads the invoice PDF to a specific Google Drive folder, named by invoice number.
-  📊 Append to Ledger – Updates a Google Sheet with invoice metadata (date, invoice number, Drive file ID, link, size).
-  ⚠️ Error Logging – Logs workflow issues (failed API calls, missing data, etc.) into a dedicated error tracking sheet.

## Prerequisites
- Stripe API key (with invoice read permissions)
- Google Drive (destination folder for invoices)
- Google Sheets with:
- Receipts Ledger Sheet
- Error Logging Sheet
- Gmail OAuth2 account for sending receipts

## Key Benefits
 ✅ Automates customer receipt delivery with attached PDFs
 ✅ Builds a permanent ledger in Google Sheets for finance
 ✅ Archives invoices in Google Drive for easy retrieval
 ✅ Prevents duplicates by checking receipt_sent metadata
 ✅ Includes error logging for smooth monitoring and debugging

## Perfect For
- Finance/accounting teams needing automated receipt handling
- SaaS businesses managing recurring Stripe invoices
- Operations teams requiring error-proof automation
- Any business needing audit-ready receipts + logs

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
