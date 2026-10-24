# 🧾 Send Stripe payment invoices with Gmail, Google Drive, and WhatsApp

> ⚡ **19 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow triggers on successful Stripe payment events, generates and finalizes invoices, then formats and sends invoice details via Gmail, stores invoice PDFs in Google Drive, and notifies an admin through WhatsApp using Rapiwa.

## How it works
1. Triggers when Stripe reports a successful payment, invoice payment, or checkout session completion.
2. Checks whether the payment amount matches the amount received and, if it does not, calculates a payment summary for review.
3. Retrieves the Stripe customer and creates then finalizes a Stripe invoice configured to be sent with Net 30 terms.
4. Fetches invoices created since the event time, iterates through the results, and keeps only Stripe objects that are invoices.
5. Pulls Stripe checkout session line items and formats company, customer, totals, and a custom invoice number for messaging and file naming.
6. Emails the customer the invoice details and PDF link via Gmail, sends an admin WhatsApp alert via Rapiwa, downloads the PDF, and uploads it to Google Drive.

## Setup
1. Add Stripe API credentials, enable the Stripe webhook events used by the trigger, and copy the webhook URL into your Stripe dashboard.
2. Add Gmail OAuth2 credentials and confirm the workflow’s Gmail “send to” mapping matches the email field returned by your Stripe checkout session.
3. Add Google Drive OAuth2 credentials and set the target Drive folder in the Google Drive upload step.
4. Add Rapiwa API credentials and replace the placeholder WhatsApp number with your admin number.
5. Update the company identity, banking details, and any invoice terms (for example days until due) in the invoice formatting and Stripe invoice creation steps.

## Requirements
- **Stripe API**: Connects to the Stripe account to listen for webhooks (`payment_intent.succeeded`, `checkout.session.completed`, etc.) and perform API operations (retrieve customers, create invoices, finalize invoices).
- **Gmail OAuth2**: Used to send the generated invoice PDF and details to the customer.
- *Google Drive OAuth2**: Used to upload and save the generated PDF invoices to a cloud storage folder.
- **Rapiwa API**: Used to send WhatsApp notifications to the admin regarding order details and workflow status.

## Customization
- Adjust invoice settings in the **Create Stripe Invoice** and **Finalize Invoice** nodes (e.g., due date, collection method, 
- Customize the customer email content in the **Email (Send Invoice)** node.
-  Update the **Invoice Save to Google Drive** node's `folderId` to store PDFs in a specific Google Drive folder.

## Additional info
• Uses Stripe events for payment validation and invoice generation
• Update company details in the **Format Invoice Data** node to match your business
• Dynamically fetches purchased items from Stripe sessions
• Validates payment amounts before processing invoices
• Replace the placeholder WhatsApp number in the **Rapiwa** node with your admin number

## 🔗 Nodes Used

HTTP Request, Stripe Trigger, Google Drive, Gmail, Stripe

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
