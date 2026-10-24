# 🧾 Extract invoice data from Gmail PDFs to Google Drive, Sheets, and OpenAI

> ⚡ **18 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow checks Gmail for emails with PDF invoice attachments, saves each PDF to a month-based Google Drive folder, uses OpenAI to extract key invoice fields, and appends qualifying invoices to a month-named tab in Google Sheets.

## How it works
1. Triggers hourly from Gmail (or can be run manually to backfill a date range) and downloads email attachments.
2. Filters out emails from unwanted senders and extracts only PDF attachments from each message.
3. Finds the current month’s folder in Google Drive, then uploads each PDF and builds shareable file and folder links.
4. Extracts text from the PDF and sends it to an OpenAI-powered agent that returns structured invoice fields as strict JSON, retrying with an auto-fixing parser when needed.
5. Checks whether Sales Tax or VAT is present and appends the invoice details (including PDF URL and Drive folder link) to a Google Sheets tab named for the current month.
6. Waits briefly and continues processing the next PDF attachment.

## Setup
1. Connect Gmail, Google Drive, and Google Sheets credentials, and add an OpenAI API key for both OpenAI chat model connections.
2. Update the Google Sheets document ID and ensure the target spreadsheet has columns that match the mapped fields (Company Name, Invoice Number, taxes, totals, links, and capture date).
3. In Google Drive, set the parent folder ID in the Drive search step and create monthly subfolders named like YYYY-MM (for example, 2026-04).
4. Edit the unwanted sender filter (or disable it) to match the email addresses you want to ignore.

## 🔗 Nodes Used

Google Sheets, Google Drive, Gmail, Gmail Trigger, Filter, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
