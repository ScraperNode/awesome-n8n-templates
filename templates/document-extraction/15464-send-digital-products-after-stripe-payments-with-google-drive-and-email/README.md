# 🔬 Send digital products after Stripe payments with Google Drive and email

> ⚡ **15 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
Automate digital product fulfillment using n8n, Razorpay, Google Drive, and Email.
ZapMail Delivery automatically delivers digital products to customers after a successful payment. Once a payment is verified, the workflow identifies the purchased product, retrieves it from Google Drive, and sends it directly to the customer's inbox.

## How it works
1. Customer purchases a digital product through a Razorpay Payment Page and submits their contact information.
2. Razorpay sends a payment success webhook to n8n after the transaction is completed.
3. ZapMail verifies the webhook signature to ensure the request originated from Razorpay.
4. The workflow identifies the purchased product using the product information submitted during checkout.
5. The corresponding file is located and downloaded from Google Drive.
6. A branded delivery email is automatically generated and sent to the customer with the purchased product attached.
7. The entire fulfillment process runs automatically without any manual intervention.

## Setup
1. Create a Razorpay Payment Page and add fields for customer details and product selection.
2. Configure a Razorpay webhook and connect it to the Webhook node in n8n.
3. Add your Razorpay webhook secret to the Crypto node for signature verification.
4. Upload your digital products to Google Drive and connect your Google Drive account.
5. Configure the Switch node to match your product names with the corresponding files.
6. Connect your preferred email provider and customize the delivery email template.
7. Activate the workflow and perform a test purchase to verify successful product delivery.

## Requirements
- n8n Cloud or self-hosted instance
- Stripe account with webhook endpoint configured
- Google Drive account for file storage
- SMTP or Gmail account for email delivery

## Customization
- Replace Google Drive with Dropbox, OneDrive, or AWS S3 for file storage.
- Send delivery emails through Gmail, Resend, Brevo, or any SMTP provider.
- Add Notion, Airtable, or Google Sheets to log each purchase automatically.
- Extend the routing logic to support more products, licenses, or upsells.

## 🔗 Nodes Used

Send Email, Webhook, Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
