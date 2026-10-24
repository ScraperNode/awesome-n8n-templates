# 🧾 Screen supplier invoices for duplicates and PO mismatches with Gmail, Sheets and OpenAI

> ⚡ **7 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow monitors a Gmail inbox for PDF invoices, extracts key fields with OpenAI, and cross-checks them against Google Sheets supplier, purchase order, and ledger registers to detect duplicates, bank-detail changes, and PO/receiving mismatches, then routes the invoice for approval or hold and emails daily exceptions.

## How it works
1. Triggers every 5 minutes when a Gmail message arrives with a PDF attachment and loads configuration values like the Google Sheet ID, approver emails, and thresholds.
2. Reads the Suppliers, Purchase orders, and Ledger tabs from Google Sheets once and reuses those registers for all invoices in the email batch.
3. Splits each email into one item per PDF attachment so each invoice is processed independently.
4. Extracts text from each PDF and uses OpenAI (gpt-4o-mini) to pull structured invoice fields such as supplier, invoice number, dates, totals, PO number, and IBAN.
5. Validates invoice consistency (date parsing, totals arithmetic, implied VAT rate, and IBAN checksum) and then checks for prior payment, bank-detail changes versus the supplier master, and PO/received-amount mismatches using the Sheets registers.
6. Routes the outcome by emailing finance to hold blocked invoices, sending a Gmail approval request that waits up to 3 days for higher-risk or higher-value invoices, auto-clearing small clean invoices, or flagging unreadable invoices for manual keying, and then appends or updates a row in the Google Sheets Ledger.
7. Runs every weekday at 08:00 to scan the Ledger for unanswered approvals, unresolved holds, upcoming/overdue due dates, and possible duplicate billing, and emails a consolidated exception report.

## Setup
1. Create a Google Sheet with tabs named Suppliers, Purchase orders, and Ledger, and ensure the Ledger has an invoice_key column used for append-or-update matching.
2. Add Gmail credentials for reading invoice emails and sending hold/approval/report notifications.
3. Add Google Sheets credentials and set your Sheet ID in the Settings node and in the weekday “Read the ledger” step (which is hard-coded to YOUR_SHEET_ID).
4. Add an OpenAI credential and ensure the workflow can use the gpt-4o-mini model for information extraction.
5. Update the approver and finance email addresses, thresholds (auto approval limit, manager limit, tolerances, duplicate window), and any default currency/date-order settings in the Settings node.

## 🔗 Nodes Used

Google Sheets, Gmail, Gmail Trigger, Schedule Trigger, OpenAI Chat Model, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
