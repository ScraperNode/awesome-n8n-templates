# 🧾 Generate and email Stripe invoice PDFs with PDFBolt and Gmail

> ⚡ **7 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow triggers on successful Stripe invoice payments, formats the invoice data for a PDFBolt template, generates a PDF invoice, and emails it to the customer through Gmail.

## How it works
1. Triggers when Stripe emits an `invoice.payment_succeeded` event for a paid invoice.
2. Extracts the Stripe invoice object, formats amounts, and maps customer and line-item fields into `templateData` for PDFBolt.
3. Generates a PDF from a published PDFBolt template using the Direct endpoint and returns the file as binary data.
4. Sends the generated PDF as an attachment in a Gmail email to the customer’s email address from the Stripe invoice.

## Setup
1. Connect your Stripe account and ensure the trigger can receive `invoice.payment_succeeded` events.
2. Add your PDFBolt API key from https://app.pdfbolt.com/api-keys, publish an invoice template in PDFBolt, and paste its Template ID into the PDFBolt node.
3. Connect your Gmail account and adjust the email subject or body text if you want different wording or branding.

## Requirements
- Stripe account connected in n8n
- PDFBolt account and API key
- Published PDFBolt invoice template
- Gmail account connected in n8n

## Customization
- Use your own PDFBolt Template ID
- Match templateData fields to your invoice template variables
- Customize the Gmail subject and message
- Adjust filename or PDF options in the PDFBolt node

## Additional info
PDFBolt returns the generated PDF as binary field data. Gmail uses that field as the attachment, so keep the field name unchanged unless you update the Gmail node too.

## 🔗 Nodes Used

Stripe Trigger, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
