# 🧾 Generate and email PDF invoices from Google Sheets with Orshot and Gmail

> ⚡ **0 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow runs every 15 minutes to find invoices marked Ready in Google Sheets, builds totals from matching line items, renders a PDF invoice with Orshot, emails it via Gmail, saves a copy to Google Drive, and writes the delivery status and links back to the spreadsheet.

## How it works
1. Runs every 15 minutes on a schedule.
2. Reads invoice rows from Google Sheets where the Status column is set to Ready and loads the invoice line items from a second sheet.
3. Matches line items to each invoice by invoice number, calculates subtotal/tax/total and due date, and flags any missing or invalid data as an Error.
4. Renders a PDF invoice using an Orshot Studio template populated with the calculated invoice fields.
5. Downloads the rendered PDF, emails it to the client using Gmail, and uploads the PDF to Google Drive.
6. Updates the original invoice row in Google Sheets with Sent or Error status, timestamps, and the Orshot PDF and Google Drive links.

## Setup
1. Add the invoice template to your Orshot workspace ([See example template](https://orshot.com/templates/2470)), add your Orshot API key as a credential and pick the template in Render invoice PDF. Change colors, fonts or add your logo in the Orshot editor.
2. Add Google Sheets credentials and set the Spreadsheet ID and sheet names for the Invoices sheet (filtered by Status) and the Line items sheet.
3. Add Gmail and Google Drive credentials and choose the target Google Drive folder where PDFs should be saved.
4. Update the company name, address, payment details, footer text, and any defaults (like payment terms and maximum line items) in the invoice-building code step.
5. Create a sheet with an Invoices tab (Invoice number, Client name, Client email, Client address, Issue date, Due date, Tax rate %, Currency, Notes, Status, PDF link, Drive link, Sent at, Error) and a Line items tab (Invoice number, Description, Quantity, Unit price), then set a row's Status to Ready.

## Requirements
- An Orshot API key from [Orshot](https://orshot.com/?utm_source=n8n&utm_medium=template&utm_campaign=sheets-invoices). The free plan includes 100 credits every month, no card needed
- Google Sheets, Gmail and Google Drive credentials

## Customization
- Start from a Stripe trigger or a form instead of the sheet to invoice on every payment or order
- Pick a folder in Save PDF to Google Drive to keep invoices together
- Leave Issue date or Due date empty to use today and 14 days from today

## Additional info
What the PDF looks like: [sample invoice](https://storage.orshot.com/cloud/w-131/renders/images/sample-invoice-inv-1001-ThfzsgBXDh1.pdf). More ways to automate invoices, including with n8n: [Automated invoice generation](https://orshot.com/blog/automated-invoice-generation?utm_source=n8n&utm_medium=template&utm_campaign=sheets-invoices)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
