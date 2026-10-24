# 🧾 Match vendor invoices with POs and GRNs in Google Sheets and notify Finance via Gmail

> ⚡ **122 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow collects vendor invoices via an n8n form, checks Google Sheets for duplicates, performs a PO/GRN/invoice 3-way match against Google Sheets reference data, updates the invoice status, and sends payment-ready or exception notifications to Finance via Gmail.

## How it works
1. Receives a vendor invoice submission through an n8n form.
2. Normalizes key fields (like Vendor ID, Invoice Number, PO, GRN, and item code) and creates a unique invoice key.
3. Searches the Google Sheets “Invoice Register” for an existing row with the same Vendor ID and Invoice Number and blocks duplicates by emailing the submitter via Gmail.
4. For non-duplicate submissions, appends the invoice to the Google Sheets “Invoice Register” with a PENDING_MATCH status.
5. Looks up the corresponding Purchase Order and Goods Receipt in Google Sheets (by PO/GRN number and item code) and runs 3-way matching checks for approvals, receipt status, vendor/item/currency consistency, and quantity/price/total validation.
6. Updates the invoice row in the Google Sheets “Invoice Register” to READY_FOR_PAYMENT (and emails Finance via Gmail) or to PAYMENT_HOLD with exception reasons (and emails Finance via Gmail).

## Setup
1. Add Google Sheets credentials and replace YOUR_GOOGLE_SHEET_ID with your spreadsheet ID for the Invoice Register, Purchase Orders, and Goods Receipts queries and updates.
2. Ensure your Google Sheets file has three tabs named “Invoice Register”, “Purchase Orders”, and “Goods Receipts” with columns matching the workflow lookups (for example: vendorId, invoiceNumber, poNumber, grnNumber, itemCode, unitPrice, orderedQuantity, receivedQuantity, poStatus, and receiptStatus).
3. Add Gmail credentials for sending email notifications.
4. Set the finance recipient address in the workflow configuration value (financeEmail) and confirm the submitter email is collected in the form.

## 🔗 Nodes Used

Google Sheets, Gmail, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
