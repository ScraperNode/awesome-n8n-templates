# 🧾 Process invoice emails to Zoho Books with Gmail, Parseur, and Google Drive

> ⚡ **49 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow monitors Gmail for invoice emails with PDF attachments, sends PDFs to Parseur for data extraction, checks and creates vendor bills in Zoho Books to prevent duplicates, and archives the original invoice PDFs into month-based folders in Google Drive.

## How it works
1. Polls Gmail every minute for new emails that contain attachments and downloads the attached PDF.
2. Uploads the PDF to Parseur, waits briefly for processing, and retrieves the extracted invoice data as JSON via the Parseur API.
3. Searches Zoho Books for an existing bill for the configured vendor that matches the extracted invoice number.
4. If no matching bill exists, creates a new Zoho Books bill with the parsed dates and line items; otherwise it skips processing as a duplicate.
5. Downloads the original invoice PDF and looks up a Google Drive folder named in `YYYY-MM` format based on the invoice date.
6. Creates the month folder in Google Drive if it does not exist, then uploads the invoice PDF into that folder named as `{invoice_number}.pdf`.

## Setup
1. Connect Gmail Trigger credentials and ensure the mailbox and search query (currently `has:attachment`) match where your invoice PDFs arrive.
2. Configure Parseur by setting the correct `parserId` and adding Parseur API authentication headers in the two HTTP Request steps that fetch the document and JSON output.
3. Add Zoho Books OAuth2 credentials and update `organization_id`, `vendor_id`, and the line item `account_id` values to match your Zoho Books setup.
4. Connect Google Drive credentials and confirm the target drive and parent folder (currently the Drive root) where monthly `YYYY-MM` archive folders should be created.
5. Verify the invoice JSON schema from Parseur includes `invoice_number`, `invoice_date`, `due_date`, and `line_items` fields as used to create the Zoho Books bill.

## 🔗 Nodes Used

HTTP Request, Google Drive, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
