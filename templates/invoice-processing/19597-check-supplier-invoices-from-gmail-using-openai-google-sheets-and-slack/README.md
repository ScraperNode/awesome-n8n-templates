# 🧾 Check supplier invoices from Gmail using OpenAI, Google Sheets and Slack

> ⚡ **18 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
Watches a Gmail label for supplier invoice PDFs, reads the fields with OpenAI, then runs eight checks against supplier, purchase order and ledger data in Google Sheets. Clean invoices post to the ledger, large ones go to Slack for sign off, and failures are sent back to the supplier.

## How it works
1. Triggers when a new email with attachments arrives in Gmail under a specified label.
2. Filters the email attachments to keep only PDFs and extracts the PDF text.
3. Uses OpenAI to convert the invoice text into structured fields like supplier, invoice number, PO number, dates, currency, totals, and line items.
4. Loads supplier records, open purchase orders, and already-posted invoices from Google Sheets and applies checks for duplicates, totals/tax validity, PO matching, and invoice date sanity.
5. If all checks pass and the amount is within the approval limit, appends the invoice record to the Google Sheets Ledger.
6. If all checks pass but the amount exceeds the approval limit, posts a Slack message to request human sign-off.
7. If any check fails, appends the invoice to the Google Sheets Exceptions sheet and emails the supplier with a numbered list of issues.

## Setup
1. Connect Gmail Trigger credentials and set the Gmail label ID where supplier invoices arrive, ensuring attachments are enabled.
2. Add an OpenAI credential for the extraction step.
3. Connect Google Sheets credentials and replace the spreadsheet URL placeholders, ensuring the sheet names SupplierMaster, OpenPurchaseOrders, Ledger, and Exceptions exist with appropriate columns.
4. Connect Slack credentials and set the accounts payable channel name/ID for approval requests and error alerts.
5. Populate SupplierMaster (including supplier_name, supplier_email, po_required, default_approver) and OpenPurchaseOrders (including po_number, remaining_value, currency, approver_email) so the checks can run correctly.

## Requirements
- A Gmail account receiving supplier invoices, with a label you can filter on. An OpenAI credential for the extraction step. One Google Sheets spreadsheet with four tabs: SupplierMaster (supplier_name, supplier_email, default_approver, po_required), OpenPurchaseOrders (po_number, remaining_value, currency, approver_email), Ledger and Exceptions. A Slack workspace and a channel for accounts payable.

## Customization
- Every threshold sits at the top of the Code node: the rounding tolerance on subtotal plus tax, how far above a purchase order an invoice may go, how old an invoice may be, the approval limit, and the valid tax rates, which ship set to 0 and 5 for the UAE. Change VALID_TAX_RATES for your country. Add or remove checks by pushing to the failures array, and anything you push becomes a line in the email the supplier receives. Swap Slack for Teams or email, and swap the Google Sheets nodes for your accounting system's own nodes.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Gmail Trigger, Filter, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
