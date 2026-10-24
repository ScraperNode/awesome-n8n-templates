# 🧾 Process invoices from Gmail and Drive using Google Gemini, Slack, and Sheets

> ⚡ **54 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow monitors Gmail and a Google Drive folder for new invoice/receipt files, uses Google Gemini to extract structured invoice data and classify expense categories, logs results to Google Sheets, and routes higher-value invoices to Slack for approve/reject decisions with automatic ledger updates.

## How it works
1. Triggers every minute for unread Gmail messages with invoice/receipt attachments and for new files created in a specified Google Drive folder.
2. Filters incoming files to PDFs or images, marking unsupported Gmail messages as read and notifying a Slack channel when a file type is skipped.
3. Sends each supported document to Google Gemini to extract invoice fields as JSON, then parses and validates the output and posts to Slack when extraction is incomplete or totals don’t reconcile.
4. Checks Google Sheets for an existing row with the same invoice number and, if found, skips logging and notifies Slack about the duplicate.
5. Uses Google Gemini to assign an expense category, then determines whether the invoice requires approval based on a total amount threshold.
6. Appends the invoice to a Google Sheets ledger as Approved for under-threshold totals, or as Pending Review and sends a Slack message with Approve/Reject buttons for over-threshold totals.
7. Waits up to three days for the Slack decision and then updates the matching Google Sheets row to Approved, Rejected, or No Response, while posting a Slack alert if the workflow errors.

## Setup
1. Add credentials for Gmail, Google Drive, Google Sheets, Google Gemini (PaLM API), and Slack.
2. Create/select a Google Sheets document with an `invoices` sheet and columns matching the fields this workflow writes (for example: vendor_name, invoice_number, invoice_date, due_date, subtotal, tax, total, currency, category, source, needsApproval, status) and set the document in all Google Sheets nodes.
3. Choose the Google Drive folder to watch and set the target Slack channel in each Slack node.
4. For Slack approvals, configure a Slack app with interactivity enabled, set the Request URL to your n8n waiting webhook endpoint, and provide the bot token and signing secret in the Slack credential.
5. In n8n workflow settings, set this workflow as the error workflow (or ensure the Error Trigger is enabled) so failures post to Slack, then activate the workflow.

## 🔗 Nodes Used

Google Sheets, Slack, Google Drive, Gmail, Google Drive Trigger, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
