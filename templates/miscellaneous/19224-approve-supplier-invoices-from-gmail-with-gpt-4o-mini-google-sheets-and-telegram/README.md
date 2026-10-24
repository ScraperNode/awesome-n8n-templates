# 🔧 Approve supplier invoices from Gmail with GPT-4o-mini, Google Sheets and Telegram

> ⚡ **0 views** · 🔧 [Miscellaneous](../)

## Description

## Quick Overview
This workflow monitors unread Gmail messages with PDF attachments, extracts invoice details with OpenAI GPT-4o-mini, checks vendors and duplicates in Google Sheets, and routes approvals via Telegram. It records outcomes in a Bills sheet, alerts finance on exceptions, and emails a weekly payment run summary.

## How it works
1. Triggers every minute when a new unread Gmail email with a PDF attachment is found and extracts text from the PDF.
2. Sends the email context and extracted PDF text to OpenAI (GPT-4o-mini) and parses the response into a fixed invoice JSON schema.
3. Looks up the supplier in a Google Sheets “Vendors” tab and checks the Google Sheets “Bills” tab for an existing record with the same vendor and invoice number.
4. Automatically approves invoices that are from a known vendor, under the configured auto-approve limit, not duplicates, and above the confidence threshold.
5. Flags duplicates and unknown vendors for review, and sends known-vendor invoices that exceed limits or have low confidence to Telegram for Approve/Reject with a 3-day timeout.
6. Appends the invoice, decision, and notes to the Google Sheets “Bills” tab, marks the Gmail email as read, and notifies finance on Telegram for any non-approved outcomes.
7. Every Monday at 08:00, reads approved unpaid bills in Google Sheets, selects those overdue or due within 7 days, emails an HTML payment run list via Gmail, and updates the Bills rows with a PaymentRun ID.

## Setup
1. Add credentials for Gmail, Google Sheets, OpenAI, and Telegram in n8n.
2. Create a Google Sheets spreadsheet with “Vendors” and “Bills” tabs and the required columns, then replace YOUR_SPREADSHEET_ID in all Google Sheets nodes.
3. Populate the Vendors tab with at least VendorName, VendorEmail, and AutoApproveLimit so the workflow can match suppliers and auto-approve thresholds.
4. Replace YOUR_TELEGRAM_CHAT_ID in the Telegram nodes with the approver/finance chat ID(s) you want to notify.
5. Set the recipient address in the Gmail “Email Payment Run” step (YOUR_FINANCE_EMAIL@example.com) and adjust the Gmail search query if you want to filter by label, alias, or mailbox.

## 🔗 Nodes Used

Google Sheets, Telegram, Gmail, Gmail Trigger, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
