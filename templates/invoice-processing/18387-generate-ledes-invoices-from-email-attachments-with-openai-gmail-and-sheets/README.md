# 🧾 Generate LEDES invoices from email attachments with OpenAI, Gmail, and Sheets

> ⚡ **4 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow watches an IMAP inbox for new emails with PDF or Word attachments, extracts legal time entries using OpenAI, generates LEDES 1998B, LEDES XML 2.0, and a PDF invoice (via a Gotenberg HTML-to-PDF endpoint), then logs results to Google Sheets and emails the files back via Gmail.

## How it works
1. Triggers when a new unread email arrives via IMAP and downloads the first attachment.
2. Detects whether the attachment is a PDF or Word document and extracts the document text accordingly.
3. Uses OpenAI to extract structured time entries and summary metadata from the document text.
4. Uses OpenAI to extract the sender’s remittance details from the email content and merges them with the extracted time-entry data.
5. Reads existing invoice numbers from Google Sheets, calculates the next invoice number, and combines it with the invoice data.
6. Builds LEDES 1998B text, LEDES XML 2.0, and an invoice HTML, then converts the HTML to a PDF using a Gotenberg-compatible HTTP endpoint.
7. Appends the LEDES-style line items and the new invoice number to Google Sheets and sends an HTML email with the PDF, LEDES TXT, and LEDES XML files attached via Gmail.

## Setup
1. Add IMAP credentials to the email trigger and ensure the mailbox contains unread emails with PDF/DOC/DOCX attachments.
2. Add OpenAI credentials for both chat models used by the workflow and verify the model-to-agent connections are linked after importing.
3. Add Google Sheets OAuth credentials and replace YOUR_SPREADSHEET_ID with your spreadsheet ID for the “Invoice Numbers” and “Time Records” sheets.
4. Set up a Gotenberg (or compatible) HTML-to-PDF endpoint and configure the HTTP request URL plus HTTP Basic Auth credentials.
5. Add Gmail OAuth credentials and confirm the workflow is allowed to send emails to the extracted sender address with attachments.

## Requirements
- Self-hosted n8n
- IMAP email credentials
- Google Sheets API credentials
- OpenAI API key
- Gmail API credentials
- HTML to PDF conversion service URL

## Customization
- Adjust extraction logic for specialized LEDES formats in the "Build LEDES 1998B File" and "Build LEDES XML 2.0 File" nodes
- Modify the email parsing logic in the "Detect Attachment Type" node to support additional file formats
- Customize invoice HTML output in the "Build Invoice HTML" node for branding or additional details
- Change Google Sheets column mapping in "Prepare Sheet Rows" to match your record structure
- Update email templates in "Send Invoice via Gmail" to fit your organizational preferences

## 🔗 Nodes Used

Email Trigger (IMAP), Google Sheets, HTTP Request, Gmail, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
