# 🔬 File and classify Gmail invoices, orders, and payouts with OpenAI and Google Sheets

> ⚡ **9 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs hourly to process unread Gmail messages, uses OpenAI to classify them (sales, expense, settlement, transaction, notification, other), extracts key fields for expenses/sales/settlements, uploads supporting PDFs to Google Drive, logs results in Google Sheets, and labels/marks emails as read, with Discord and Gmail alerts on failures.

## How it works
1. Runs every hour on a schedule and fetches all unread messages from Gmail.
2. Sends each email’s subject and body to OpenAI to classify it as sales, expense, settlement, transaction, notification, or other.
3. For expense emails, OpenAI extracts invoice fields (vendor, invoice number, GST split, amounts, payment details) and the workflow fetches any PDF attachment from Gmail, uploads it to Google Drive, and appends a linked row to the Expense tab in Google Sheets.
4. For sales emails, OpenAI extracts order details, the workflow generates an HTML sales confirmation, renders it to PDF with PDFBolt, uploads it to Google Drive, and appends a linked row to the Sales tab in Google Sheets.
5. For settlement emails, OpenAI extracts payout details, the workflow fetches any PDF attachment from Gmail, uploads it to Google Drive, and appends a linked row to the Settlement tab in Google Sheets.
6. For transaction, notification, and other emails, the workflow adds the corresponding Gmail label and marks the message as read.
7. If any step fails, an error trigger uses OpenAI to translate the technical error into plain language and sends alerts via Discord and Gmail with a link to the failed execution.

## Setup
1. Connect credentials for Gmail OAuth2, OpenAI, Google Sheets OAuth2, Google Drive OAuth2, Discord OAuth2, and PDFBolt (and install the `n8n-nodes-pdfbolt` community node on self-hosted n8n).
2. Update the Google Sheets document ID and ensure it contains tabs/sheets named Expense, Sales, and Settlement with columns matching the fields used in the append-row steps.
3. Set the target Google Drive folder IDs for expense, sales, and settlement uploads (or update the upload steps to the folders you want).
4. Create Gmail labels for each category and replace the label IDs in the Gmail “add label” steps.
5. Set the recipient address for the failure-notification email and confirm the Discord server/channel selection for error alerts.

## 🔗 Nodes Used

Google Sheets, Google Drive, Discord, Gmail, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
