# 🧾 Generate monthly invoice PDFs from Google Sheets with Gmail, Drive, Slack, and Emitforge

> ⚡ **15 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow runs monthly to read billable line items from Google Sheets, generate one PDF invoice per client via Emitforge, archive each invoice to Google Drive, email it to the client using Gmail, and post a per-invoice summary message to Slack.

## How it works
1. Runs on a schedule on the 1st of each month.
2. Loads invoice defaults (company name, tax rate, and payment terms) and reads billable line items from Google Sheets.
3. Groups the rows by client, calculates subtotals/tax/total for the previous month, and builds the invoice line-item table HTML for each client.
4. Sends the invoice HTML and data to the Emitforge PDF API and retrieves a signed URL for the rendered PDF.
5. Downloads the rendered PDF file and archives it to Google Drive.
6. Emails the PDF invoice to each client via Gmail and posts a summary (invoice number, client, total, and line count) to a Slack channel.

## Setup
1. Add Google Sheets credentials and select the spreadsheet and sheet containing columns like `client`, `client_email`, `description`, `qty`, and `unit_price`.
2. Add an HTTP Header Auth credential for the Emitforge API (for example, `Authorization: Bearer <API_KEY>`) and confirm the PDF endpoint URL if you use a different renderer.
3. Add Google Drive credentials and choose the target Drive and folder where PDFs are archived.
4. Add Gmail credentials and ensure the sender mailbox is allowed to send invoices to your clients.
5. Add Slack credentials and select the channel where invoice summaries are posted.
6. Update the company name, tax rate, payment terms, and the monthly trigger time to match your billing rules.

## Requirements
- Google Sheets, Google Drive, Gmail and Slack credentials.
- An API key for an HTML-to-PDF service. The workflow points at emitforge, which has a free tier and needs no card; any renderer that accepts HTML and returns a file works by changing one node.

## Customization
- Swap Google Sheets for Airtable, Postgres or your billing system — only the first node changes.
- Change the schedule to bill weekly or fortnightly instead of monthly.
- Edit the invoice styling in the template, but keep thead { display: table-header-group } and tr { break-inside: avoid }: they repeat the column headers on every page and stop a line item being cut in half at a page break. Verified on a 45-line invoice across two pages.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Google Drive, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
