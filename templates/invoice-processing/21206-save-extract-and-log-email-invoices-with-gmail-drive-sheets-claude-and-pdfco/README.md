# 🧾 Save, extract, and log email invoices with Gmail, Drive, Sheets, Claude, and PDF.co

> ⚡ **16 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow checks Gmail for invoice emails, saves PDF invoices to Google Drive in automatically created YYYY/YYYY-MM folders, extracts key invoice fields with Anthropic Claude, and logs each invoice in a monthly Google Sheets spreadsheet stored in the same month folder.

## How it works
1. Triggers every 15 minutes from Gmail for messages matching the invoice/receipt search and not yet labeled `invoices-processed`, downloading any attachments.
2. Determines the target year and month from the email date (optionally filing to the previous month) and tries to detect an invoice/receipt link in the email body.
3. Finds or creates the corresponding year (YYYY) and month (YYYY-MM) folders in Google Drive under your chosen root invoices folder.
4. Collects invoice PDFs from email attachments, or downloads the detected invoice link and either uploads the returned PDF or renders an invoice web page to PDF using PDF.co.
5. Sends each invoice PDF to Anthropic Claude to extract supplier name, VAT/tax ID, issue date, amount, and currency.
6. Uploads the PDF to the month folder in Google Drive and appends a row with the extracted fields to an “Invoices YYYY-MM” Google Sheets file in the same folder (creating and moving the sheet there if needed).
7. Adds the `invoices-processed` label to the Gmail message so it is not processed again.

## Setup
1. Connect Gmail OAuth2 and create/select a Gmail label named `invoices-processed` for the label step.
2. Connect Google Drive OAuth2 and set `invoicesFolderId` in the Settings step to the ID of your root invoices folder.
3. Connect Google Sheets OAuth2 so the workflow can create the monthly spreadsheet and append rows.
4. Add an Anthropic credential (or n8n AI Gateway credits) for the Claude document extraction step.
5. Optional: add a PDF.co API key/credential and set `renderLinkDomains` (comma-separated) if you only want to render invoice links from specific domains.
6. Review and adjust the Gmail search query in the trigger to match the senders/subjects you receive invoices from.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Gmail, Gmail Trigger, Anthropic

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
