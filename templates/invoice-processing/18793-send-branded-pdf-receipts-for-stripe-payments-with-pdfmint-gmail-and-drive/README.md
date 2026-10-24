# 🧾 Send branded PDF receipts for Stripe payments with PDFMint, Gmail and Drive

> ⚡ **8 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow listens for successful Stripe payments, fetches the associated Stripe customer, generates a branded VAT-inclusive receipt PDF with PDFMint, emails it via Gmail, and archives the PDF in Google Drive, while routing missing customer data, missing email, or delivery/rendering failures to an actionable error output.

## How it works
1. Triggers when a Stripe `payment_intent.succeeded` event is received.
2. Retrieves the Stripe Customer linked to the Payment Intent and stops for review if no customer is attached.
3. Applies receipt branding details (seller name, address, VAT rate, locale, and footer note) and builds a receipt data model and HTML using the Stripe payment amount and description.
4. Checks whether the customer record contains an email address and routes missing-email cases to an error path.
5. Sends the receipt HTML to PDFMint to render an A4 PDF and validates that a PDF binary is returned.
6. Emails the PDF receipt to the customer using Gmail and uploads the same PDF to Google Drive for archiving, routing any delivery or upload errors to the error path.

## Setup
1. Connect Stripe credentials for both the Stripe trigger and the Stripe customer lookup.
2. Add PDFMint API credentials and ensure the PDFMint community node is available in your n8n instance.
3. Add Gmail OAuth2 credentials for sending email and Google Drive OAuth2 credentials for uploading files.
4. Update the seller identity, VAT percentage, locale, and footer text in the branding step to match your business.
5. Choose the target Google Drive folder (or keep the root of “My Drive”) where receipts should be archived.

## 🔗 Nodes Used

Stripe Trigger, Google Drive, Gmail, Stripe

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
