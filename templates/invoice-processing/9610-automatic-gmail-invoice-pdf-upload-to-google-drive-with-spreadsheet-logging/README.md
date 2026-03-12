# 🧾 Automatic Gmail invoice PDF upload to Google Drive with spreadsheet logging

> ⚡ **825 views** · 🧾 [Invoice Processing](../)

## Description

## Sort invoice PDFs from Gmail to Google Drive and Google Sheets

## Who’s it for

Freelancers, finance teams, and small businesses that receive invoice PDFs by email and want them automatically saved to Google Drive and logged in Google Sheets—without manual downloading or copy-pasting.

## How it works / What it does

This workflow watches your Gmail inbox for unread messages that match an invoice pattern (e.g., `subject:invoice filename:pdf`). For each email, it checks for attachments, uploads each PDF to a chosen Google Drive folder, and appends a new row to a Google Sheet with useful metadata: received time, sender, subject, filename, Drive link, and IDs. Finally, it marks the original email as read to avoid duplicates.

## How to set up

1. Open the **Config (Set)** node and fill in:

   * `drive_folder_id` (or leave blank for root)
   * `spreadsheet_id` (from the Sheet URL)
   * `sheet_name` (e.g., `Invoices`)
2. Connect credentials for **Gmail**, **Google Drive**, and **Google Sheets** in each node.
3. Adjust the Gmail search query if needed (language/vendor terms).
4. Run once manually to verify data mapping, then activate.

## Requirements

* n8n with valid credentials for Gmail, Google Drive, and Google Sheets.
* A Google Sheet with appropriate headers (or let the workflow write new columns).

## How to customize the workflow

* Replace Gmail with **IMAP** or **Microsoft Outlook** if you don’t use Gmail; remove the “mark as read” step accordingly.
* Add parsing (e.g., extract invoice totals or vendor names via PDF/AI nodes) before the Sheets step.
* Route based on vendor: create subfolders dynamically in Drive and write to different tabs.
* Notify your team by adding Slack/Email nodes after logging to Sheets.

## 🔗 Nodes Used

Google Sheets, Google Drive, Gmail, Gmail Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
