# 🧾 Block duplicate vendor invoice payments with Google Sheets, Slack, and Gmail

> ⚡ **10 views** · 🧾 [Invoice Processing](../)

## Description

## Quick Overview
This workflow receives vendor invoices via a webhook, normalizes key fields into a fingerprint, checks Google Sheets for prior payments to block duplicates, and then logs results, notifies Slack, and emails a Gmail approver for high-value invoices.

## How it works
1. Receives invoice submissions via an HTTP POST webhook endpoint.
2. Parses and normalizes vendor, invoice number, and amount to create a fingerprint for each invoice and drops incomplete records.
3. Looks up the fingerprint in a Google Sheets register of previously paid invoices to detect duplicates.
4. If a duplicate is found, posts a Slack alert and appends an audit entry to a Google Sheets “DuplicateLog” sheet.
5. If no duplicate is found, calculates an approval status and due date, then appends the invoice to a Google Sheets “PaidInvoices” sheet.
6. Emails a manager via Gmail when the amount meets the approval threshold, otherwise posts a Slack “cleared” notice.
7. Returns a JSON response to the webhook caller indicating the invoice number and whether it was flagged as a duplicate.

## Setup
1. Copy the webhook URL from the Invoice Intake Webhook node and configure your AP/OCR/source system to POST invoice payloads to it.
2. Create a Google Sheet with “PaidInvoices” and “DuplicateLog” tabs (including columns such as fingerprint, vendorName, invoiceNumber, amount, currency, paid_date, and payment_ref) and replace YOUR_GOOGLE_SHEET_ID in the Google Sheets nodes.
3. Add a Google Sheets OAuth credential in n8n for the lookup and append operations.
4. Add a Slack credential and replace YOUR_SLACK_CHANNEL_ID with the channel where duplicate/cleared notifications should be posted.
5. Add a Gmail credential and set YOUR_APPROVER_EMAIL for manager notifications, and adjust the approval threshold (currently 5,000) if needed.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
