# 🧾 Block duplicate vendor invoice payments with Google Sheets, Slack, and Gmail

> ⚡ **22 views** · 🧾 [Invoice Processing](../)

## Description

## Quick Overview
This workflow receives vendor invoices via a webhook, normalizes them into a fingerprint, checks Google Sheets for previously paid matches, and then blocks duplicates with Slack alerts and an audit log while registering unique invoices and optionally requesting manager approval via Gmail.

## How it works
1. Receives invoice data from a POST webhook endpoint.
2. Parses and normalizes vendor, invoice number, and amount into a consistent fingerprint and drops incomplete invoices.
3. Looks up the fingerprint in a Google Sheets register of paid invoices to detect whether a matching invoice already exists.
4. If a duplicate is found, posts a blocked-payment alert to Slack and appends the incident to a Google Sheets “DuplicateLog” tab.
5. If no duplicate is found, calculates an approval status based on the invoice amount and registers the invoice in the Google Sheets “PaidInvoices” tab.
6. If the invoice exceeds the threshold, emails the approver via Gmail; otherwise it posts a cleared notice to Slack.
7. Responds to the webhook caller with a JSON result indicating the invoice number and whether it was treated as a duplicate.

## Setup
1. Create a Google Sheets spreadsheet with “PaidInvoices” and “DuplicateLog” tabs and include a fingerprint column (and optional paid_date and payment_ref fields for match details).
2. Add Google Sheets credentials in n8n and replace YOUR_GOOGLE_SHEET_ID in the lookup and append actions.
3. Add Slack credentials and set YOUR_SLACK_CHANNEL_ID for both the duplicate alert and cleared notice messages.
4. Add Gmail credentials, set YOUR_APPROVER_EMAIL, and confirm the amount threshold (currently 5000) used to require manager approval.
5. Copy the webhook URL for /ap/invoice-intake and configure your AP system/OCR or intake form to POST invoice payloads to it.

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
