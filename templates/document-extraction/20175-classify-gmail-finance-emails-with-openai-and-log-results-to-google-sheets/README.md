# 🔬 Classify Gmail finance emails with OpenAI and log results to Google Sheets

> ⚡ **45 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs hourly to read unread Gmail messages, uses OpenAI to classify them, and then files expenses, sales orders, and settlements to Google Sheets with supporting PDFs stored in Google Drive, while labeling and marking processed emails as read and sending error alerts to Gmail and Discord.

## How it works
1. Runs every hour and fetches all unread emails from Gmail.
2. Uses OpenAI to classify each email as sales, expense, settlement, transaction, notification, or other based on the subject and body.
3. For expense emails, OpenAI extracts invoice fields, the workflow downloads any PDF attachment from Gmail, uploads it to Google Drive, appends an expense row to Google Sheets with the Drive link, then labels the email and marks it as read.
4. For sales emails, OpenAI extracts order details, the workflow generates a PDF with PDFBolt, uploads it to Google Drive, appends a sales row to Google Sheets with the Drive link, then labels the email and marks it as read.
5. For settlement emails, OpenAI extracts payout details, the workflow downloads any PDF attachment from Gmail, uploads it to Google Drive, appends a settlement row to Google Sheets with the Drive link, then labels the email and marks it as read.
6. For transaction, notification, and other emails, the workflow only applies the corresponding Gmail label and marks the message as read.
7. If any step errors, an n8n Error Trigger sends the error to OpenAI for a plain-language summary and posts alerts via Gmail and Discord with a link to the failed execution.

## Setup
1. Connect credentials for Gmail OAuth2, OpenAI, Google Sheets OAuth2, Google Drive OAuth2, Discord OAuth2, and PDFBolt.
2. Update the Google Sheets document ID and sheet names for the Expense, Sales, and Settlement tabs and ensure the columns match the fields being appended.
3. Select the Google Drive folder IDs where expense/settlement attachments and generated sales PDFs should be uploaded.
4. Create or choose the Gmail labels for expense, sales, settlement, transaction, notification, and other, then replace the label IDs used in the workflow.
5. Set the recipient email address for the Gmail error notification and choose the Discord server/channel for error alerts.

## 🔗 Nodes Used

Google Sheets, Google Drive, Discord, Gmail, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
