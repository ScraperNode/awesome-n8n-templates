# 🧾 Extract invoice data from Gmail to Google Sheets with PDF.co AI invoice parser

> ⚡ **1 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow monitors a Gmail label for PDF invoice attachments, uploads them to PDF.co for AI invoice parsing, and writes key invoice fields to Google Sheets, then labels each processed email to prevent duplicate processing.

## How it works
1. Triggers every minute by polling Gmail for messages in the specified label that include a PDF attachment.
2. Downloads the email and its attachments from Gmail and filters the flow to keep only PDF files.
3. Uploads the PDF attachment to PDF.co to generate a file URL.
4. Sends the PDF.co file URL to the PDF.co AI Invoice Parser to extract invoice details as structured JSON.
5. Selects key fields (vendor, invoice number, dates, totals, tax) and adds email metadata like sender, subject, and received date.
6. Appends a new row or updates an existing row in Google Sheets by matching on the invoice number.
7. Adds a Gmail label to the email to mark it as processed.

## Setup
1. Connect Gmail OAuth2 credentials and set (or create) the Gmail label used for incoming invoices in the Gmail trigger search query.
2. Create a PDF.co API key credential and ensure the PDF.co nodes use it for authentication.
3. Connect Google Sheets OAuth2 credentials and select the target spreadsheet and sheet in the Google Sheets node.
4. Create a Google Sheet with columns matching the fields being written (for example Vendor, Invoice Number, Invoice Date, Due Date, Total, Tax, From, Subject, Received At).
5. Set the Gmail label to apply in the final step (for example a “Processed” label) so the same email is not handled twice.

## Requirements
- PDF.co account (API key)
- Gmail and Google Sheets OAuth2 credentials
- The PDF.co community node (n8n-nodes-pdfco), installed from the nodes panel (verified node; works on n8n Cloud and self-hosted)

## Customization
- Extract extra fields with the parser's Custom Fields option (for example purchaseOrderRef, storeNumber).
- If suppliers send several invoices in one PDF, add the Split PDF operation before the parser.
- Replace the Sheets node with your ERP, Airtable or a Slack approval message.

## 🔗 Nodes Used

Google Sheets, Gmail, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
