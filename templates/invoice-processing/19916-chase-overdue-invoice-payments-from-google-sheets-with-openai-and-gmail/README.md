# 🧾 Chase overdue invoice payments from Google Sheets with OpenAI and Gmail

> ⚡ **2 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow runs daily at 9am, reads invoices from Google Sheets, uses OpenAI to draft an overdue-payment reminder with escalating tone based on days overdue, creates a Gmail draft to the client, and updates the sheet with the latest chase timestamp.

## How it works
1. Runs every day at 9am on a schedule.
2. Reads all invoice rows from the “Invoices” tab in Google Sheets.
3. Filters for unpaid invoices that are past due and not chased in the last three days, and assigns a reminder tier (polite, firmer, or final) based on days overdue.
4. Sends the invoice details and tier instructions to OpenAI to generate a short reminder email body.
5. Creates a Gmail draft addressed to the client with the generated text and, for final notices, appends the payment link from the sheet.
6. Updates the matching invoice row in Google Sheets to set “Last chased” to the current timestamp.

## Setup
1. Connect Google Sheets, Gmail, and OpenAI credentials.
2. Select your spreadsheet document in both the Google Sheets read and update steps, and ensure it contains an “Invoices” tab.
3. Ensure the sheet has the required columns: Invoice #, Client, Client email, Due, Amount, Status, Payment link, and Last chased, and mark paid invoices with Status = PAID.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
