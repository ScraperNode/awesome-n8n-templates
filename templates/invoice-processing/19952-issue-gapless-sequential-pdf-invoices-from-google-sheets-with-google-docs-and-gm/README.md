# 🧾 Issue gapless sequential PDF invoices from Google Sheets with Google Docs and Gmail

> ⚡ **0 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow runs every 15 minutes to read a Google Sheets invoice ledger, audit gapless sequential invoice numbers, generate and fill a Google Docs invoice template, export it as a PDF from Google Drive, and email it to customers via Gmail while updating the sheet status.

## How it works
1. Runs every 15 minutes and reads all rows from a Google Sheets invoice spreadsheet.
2. Audits the existing values in the Invoice No column to ensure each series is sequential with no gaps, duplicates, or invalid formats, and stops processing if problems are found.
3. If the sequence is broken, sends an alert email via Gmail listing the numbering issues so you can fix the ledger.
4. For each row with Status set to Ready and no invoice number, calculates totals (subtotal, tax, total), validates required fields, and either prepares the next sequential invoice number or flags the row as incomplete.
5. Updates incomplete rows in Google Sheets with a Needs details status and the validation reason without consuming an invoice number.
6. Reserves the next invoice number by writing Invoice No, Issued at, Total, and a Numbered status back to Google Sheets.
7. Copies a Google Docs invoice template from Google Drive, replaces placeholders with the invoice data, exports the document as a PDF, emails it as an attachment via Gmail, and marks the row as Sent with a link to the generated document.

## Setup
1. Create and connect Google Sheets, Google Drive, Google Docs, and Gmail credentials in n8n.
2. Provide your Google Sheets document ID and sheet name in the read/update Google Sheets steps, and ensure the sheet includes columns like Invoice No, Status, Client, Client email, Description, Quantity, Unit price, Tax rate %, Currency, Due in days, Issued at, Total, and PDF link.
3. Select your Google Docs invoice template file ID in Google Drive and include the placeholders (for example {{number}}, {{client}}, {{total}}, {{due}}) that the workflow replaces.
4. Set the alert recipient address in the Gmail step that notifies you when numbering is not intact.
5. Adjust the invoice numbering settings (prefix, yearly restart, and zero padding) in the code step to match your required invoice number format.

## Requirements
- An invoice sheet in Google Sheets (columns listed in the setup notes)
- A Google Docs invoice template with placeholders such as {{number}} and {{total}}
- Google Drive, Google Docs, Google Sheets and Gmail credentials

## Customization
- Number format: PREFIX, YEARLY_SERIES and DIGITS at the top of the numbering node
- Add an approval step (Gmail send and wait) before each invoice is emailed
- Credit notes: duplicate the workflow with a CN- prefix for their own gapless series

## Additional info
Why gapless matters: in many countries invoice numbers must form an unbroken sequence. This workflow audits the existing numbers before every run and stops with a clear email if it finds a gap, a duplicate or a hand-typed number in the wrong format. Each number is written to the sheet before its PDF is created, so a failed send can never reuse it.

## 🔗 Nodes Used

Google Sheets, Google Drive, Gmail, Google Docs, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
