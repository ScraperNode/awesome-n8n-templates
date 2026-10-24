# 🧾 Process Gmail invoices with OpenAI, Google Sheets, and Slack reminders

> ⚡ **19 views** · 🧾 [Invoice Processing](../)

## Description

## Quick Overview
This workflow monitors Gmail for invoice emails with PDF attachments, uses OpenAI to extract key invoice fields, logs them to a Google Sheets tracker with duplicate detection, and sends daily payment reminder emails and Slack notifications based on due dates.

## How it works
1. Triggers every hour when a Gmail message arrives in Inbox with an attachment and a subject containing “invoice” or “bill.”
2. Downloads the email attachment, extracts text from the PDF, and sends it to OpenAI to return structured JSON with vendor name, invoice number, amount, and due date.
3. Searches Google Sheets for an existing row matching the extracted invoice number to detect duplicates.
4. If the invoice already exists, sends a duplicate invoice alert message to a Slack channel.
5. If the invoice is new, appends it to a Google Sheets invoice tracker with a default “Pending” status and a created timestamp.
6. Runs daily at 9:00 to load invoice records from Google Sheets, calculate days remaining until due date, and assign a reminder type and priority.
7. For invoices that require action, sends a payment reminder via Gmail (to a configured recipient) and posts a reminder message to Slack.
8. Updates the invoice status in Google Sheets (for example, marking overdue invoices as OVERDUE).

## Setup
1. Connect Gmail credentials for both the Gmail trigger (monitoring incoming invoices) and Gmail send permissions (sending reminders).
2. Add an OpenAI API credential and ensure the model selection in the OpenAI step matches your account access.
3. Connect Google Sheets OAuth credentials and update the spreadsheet ID and sheet (tab) used for the invoice tracker.
4. Create/verify the invoice tracker sheet columns used by the workflow (vendor_name, Invoice_number, amount, due_date, status, created_at) and ensure row_number is available for updates.
5. Connect Slack credentials and set the target channel for duplicate alerts and reminder notifications.
6. Update the reminder recipient email address in the Gmail reminder step and adjust the daily schedule time if needed.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Gmail Trigger, Schedule Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
