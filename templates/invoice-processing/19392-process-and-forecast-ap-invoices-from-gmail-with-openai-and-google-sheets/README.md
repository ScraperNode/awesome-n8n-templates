# 🧾 Process and forecast AP invoices from Gmail with OpenAI and Google Sheets

> ⚡ **12 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow watches Gmail for unread invoice emails with PDF attachments, extracts invoice details with OpenAI, logs them to Google Sheets, calculates month-to-date and upcoming cash needs, and sends Gmail alerts for high-value invoices plus a weekly accounts-payable digest.

## How it works
1. Triggers when an unread Gmail message arrives with an attachment and downloads the attached invoice file.
2. Extracts text from the PDF invoice attachment.
3. Uses OpenAI (GPT-5-mini) to extract structured invoice fields, categorize the expense, and generate a one-sentence summary.
4. Normalizes the extracted data, assigns a High or Normal priority based on the invoice total, and records sender and receipt timestamp.
5. Appends the invoice record to Google Sheets, reads the full invoice log, and calculates month-to-date spend and amounts due in the next 30 days.
6. Sends a Gmail email notification with the cash-flow metrics, using a separate high-value approval alert when priority is High.
7. Every Monday at 9am, reads all invoices from Google Sheets, builds an HTML weekly digest (totals, category breakdown, and invoices due in 7 days), and emails it via Gmail.

## Setup
1. Connect Gmail OAuth2 credentials for both the Gmail trigger and the outgoing Gmail email actions.
2. Connect an OpenAI API credential and ensure the OpenAI Chat Model node is set to the model you want to use (default: gpt-5-mini).
3. Connect Google Sheets OAuth2 credentials, then select the target spreadsheet and sheet tab in all Google Sheets nodes (append/read).
4. Ensure your Google Sheet has headers that match the logged fields (for example: vendor, invoice_number, invoice_date, due_date, currency, total_amount, tax_amount, category, priority, summary, email_from, received_at).
5. Set the recipient address(es) for the alert, logged-notice, and weekly digest emails, and adjust the high-value threshold in the prioritization step if needed (default: 1000).

## 🔗 Nodes Used

Google Sheets, Gmail, Gmail Trigger, Schedule Trigger, OpenAI Chat Model, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
