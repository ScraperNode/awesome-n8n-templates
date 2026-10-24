# 🔬 Generate, email, and archive PDFs from HTML with PDFBolt, Gmail, and Google Drive

> ⚡ **3 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow receives an HTML payload from an n8n webhook, validates it, converts HTML to PDF with PDFBolt, emails the PDF through Gmail, archives it in Google Drive, and returns a JSON response with success or error details.

## How it works
1. Receives HTML and delivery details through an n8n webhook.
2. Validates required fields and prepares the filename, email subject, and message.
3. Returns a 400 JSON error response if html or recipientEmail is missing.
4. Converts HTML to PDF with PDFBolt using the Direct endpoint.
5. Sends the generated PDF as an email attachment through Gmail to the specified recipient.
6. Uploads the same PDF binary file to a chosen Google Drive folder for archiving.
7. Returns a JSON success response to the webhook caller with the recipient email and filename.

## Setup
1. Install the PDFBolt community node and add your PDFBolt API key from https://app.pdfbolt.com/api-keys.
2. Add Gmail credentials in n8n for sending emails.
3. Add Google Drive credentials in n8n and select the target Drive and folder for archiving.
4. Activate the workflow and copy the Production webhook URL into the app or script that will POST the HTML payload.

## Requirements
- PDFBolt account and API key
- Gmail account connected in n8n
- Google Drive account connected in n8n
- App, script, or service that can send a POST request

## Customization
- Change the email subject and message from the webhook payload
- Choose a different Google Drive folder for archived PDFs
- Adjust PDF options in the PDFBolt node, such as page format or print background
- Extend the Code node to validate more fields or map a different payload structure

## Additional info
PDFBolt creates the PDF in the binary field data. Gmail and Google Drive use that field for the attachment and upload, so keep the field name unchanged unless you update those nodes too.

## 🔗 Nodes Used

Webhook, Google Drive, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
