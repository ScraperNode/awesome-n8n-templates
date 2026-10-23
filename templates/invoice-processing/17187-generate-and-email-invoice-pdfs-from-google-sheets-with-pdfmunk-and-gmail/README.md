# 🧾 Generate and email invoice PDFs from Google Sheets with PDFMunk and Gmail

> ⚡ **9 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow watches a Google Sheets order sheet for new invoice rows, generates a unique invoice number, appends the normalized record to another sheet, converts an HTML invoice into a PDF via PDFMunk, and emails the PDF to the client using Gmail.

## How it works
1. Triggers when a new row is added to a specified Google Sheets worksheet.
2. Maps the incoming columns (client details, item, quantity, price, due date, and status) into a standardized structure and generates an invoice number.
3. Appends the invoice data, including the generated invoice number, into a second worksheet in Google Sheets.
4. Builds an HTML invoice template and calculates totals from quantity and unit price.
5. Sends the HTML to the PDFMunk API to generate a PDF link, then downloads the PDF file.
6. Sends the invoice to the client via Gmail with the PDF attached.

## Setup
1. Connect your Google Sheets OAuth credentials and select the correct spreadsheet and source/target worksheets for the trigger and append actions.
2. Create a PDFMunk API key (or equivalent header auth) and add it as HTTP Header Auth credentials for the PDF generation request.
3. Connect your Gmail OAuth2 credentials and confirm the email subject/body and recipient mapping to your sheet’s client email column.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
