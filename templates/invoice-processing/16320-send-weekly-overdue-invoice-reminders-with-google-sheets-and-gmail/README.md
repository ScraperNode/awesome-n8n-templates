# 🧾 Send weekly overdue invoice reminders with Google Sheets and Gmail

> ⚡ **6 views** · 🧾 [Invoice Processing](../)

## Description

## Quick Overview
This workflow runs every Monday at 08:00, reads invoices from Google Sheets, filters for unpaid invoices with no prior follow-up and more than 7 days overdue, sends an HTML reminder email via Gmail, and updates the sheet to mark the invoice as followed up.

## How it works
1. Runs every Monday at 08:00 on a schedule.
2. Reads all invoice rows from a Google Sheets spreadsheet.
3. Keeps only invoices where the status is “Impayé” and the “Date de relance” field is empty, then calculates the number of days overdue from the invoice date.
4. Filters to invoices that are more than 7 days overdue.
5. Sends a formatted HTML payment reminder email via Gmail with the invoice date, amount, and days overdue.
6. Updates the matching Google Sheets row to set the status to “Relancé” and writes today’s follow-up date.

## Setup
1. Add Google Sheets credentials and ensure the target spreadsheet contains columns like Statut, Date de relance, Date_Facture, Client, and Montant.
2. Add Gmail credentials for the mailbox that sends reminders.
3. Update the Google Sheets document URL/sheet selection and set the recipient address in the Gmail “sendTo” field (and optionally adapt the subject/body text).

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
