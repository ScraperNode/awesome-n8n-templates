# 🧾 Generate and email PDF invoices from Google Sheets with Acrewity and Gmail

> ⚡ **257 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow watches for new order rows in Google Sheets, generates a styled HTML invoice, converts it to a PDF using Acrewity, emails the PDF via Gmail, archives it in Google Drive, and updates the order row status so successful and failed rows are clearly tracked.

## How it works
1. Triggers every minute when a new row is added to the selected Google Sheets Orders worksheet.
2. Applies your invoice settings (company name, logo URL, tax rate, currency, and email subject prefix) and builds invoice HTML from the row data.
3. Validates required fields (including a valid customer email and a JSON array in the Items column) and writes an error message back to the sheet for invalid rows.
4. Converts valid invoice HTML to a PDF using the Acrewity HTML-to-PDF API and turns the result into a binary file attachment.
5. Sends the PDF invoice to the customer using Gmail.
6. Uploads the PDF to a chosen Google Drive folder and updates the corresponding Google Sheets row with Status = Invoiced.

## Setup
1. Install the community node package `@acrewity/n8n-nodes-acrewity` and add an Acrewity API credential.
2. Add Google Sheets, Gmail, and Google Drive credentials in n8n.
3. Create an Orders sheet with headers that match the workflow (including Order Number, Customer Email, Items, and Status), and store Items as a JSON array (for example `[{"name":"Widget","quantity":2,"price":9.99}]`).
4. Select the target spreadsheet and worksheet in the Google Sheets trigger and update nodes, and choose the Google Drive folder where invoices should be archived.
5. Update the Workflow configuration values (company name, logo URL, tax rate, currency symbol, and email subject prefix) to match your business.

## 🔗 Nodes Used

Google Sheets, Google Drive, Gmail, Google Sheets Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
