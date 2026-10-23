# 🔬 Generate and email PDFBolt template PDFs via Gmail webhook

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow receives a POST webhook payload, validates required fields, generates a PDF from a published PDFBolt template using provided template data, emails the PDF as an attachment via Gmail, and returns a JSON success or 400 error response to the caller.

## How it works
1. Receives a POST webhook request containing `templateData` and a `recipientEmail`.
2. Validates the payload, builds a safe PDF filename, and prepares the email subject and message text.
3. Returns a 400 JSON response when required fields are missing.
4. Sends the validated `templateData` to PDFBolt to render a PDF from the specified published template and returns it as binary data.
5. Emails the generated PDF attachment to the recipient using Gmail.
6. Responds to the original webhook request with a JSON success message including the filename and recipient email.

## Setup
1. Install the PDFBolt community node and add your PDFBolt API key credentials.
2. Create and publish a template in PDFBolt, then paste the template ID into the PDFBolt node.
3. Connect a Gmail account in n8n with permission to send emails.
4. Activate the workflow, copy the production webhook URL, and configure your source system to POST a JSON body that includes `templateData` and `recipientEmail` (plus optional `filename`, `recipientName`, `emailSubject`, and `emailMessage`).

## Requirements
- PDFBolt account and API key
- Published PDFBolt template
- Gmail account connected in n8n

## Customization
- Use your own PDFBolt Template ID
- Match templateData fields to your template variables
- Customize the email subject and message
- Adjust PDF options such as filename or page format

## Additional info
PDFBolt returns the generated PDF as binary field data. Gmail uses that field as the email attachment, so keep the field name unchanged unless you also update the Gmail node.

## 🔗 Nodes Used

Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
