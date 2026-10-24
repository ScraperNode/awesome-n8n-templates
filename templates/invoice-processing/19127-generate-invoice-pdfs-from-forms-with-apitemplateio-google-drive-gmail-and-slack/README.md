# 🧾 Generate invoice PDFs from forms with APITemplate.io, Google Drive, Gmail and Slack

> ⚡ **3 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow collects invoice details from an n8n Form, generates an invoice PDF with APITemplate.io, uploads it to Google Drive, emails the invoice to the customer via Gmail, and posts a summary with links to a Slack channel.

## How it works
1. Receives an invoice request through an n8n Form submission.
2. Wraps the submitted fields into a single form_data object and verifies required values (customer name, email, and invoice number) are present.
3. Creates a document ID, adds a predefined list of invoice line items, and builds an output filename from the invoice number and customer name.
4. Generates a PDF from an APITemplate.io PDF template by mapping form fields and line items into template properties.
5. Confirms the PDF was generated successfully and includes downloadable binary data.
6. Uploads the PDF to a specified Google Drive folder, emails the customer the invoice with Drive and direct download links via Gmail, and notifies a Slack channel with the invoice details and links.

## Setup
1. Create and connect an APITemplate.io account, then set the PDF template ID and ensure the template placeholders match the workflow property keys (for example, fullName, invoice_no, and items).
2. Add Google Drive OAuth credentials and select the destination folder where invoices should be uploaded.
3. Add Gmail OAuth credentials for the sender account used to email the PDF to form submitters.
4. Add Slack credentials, choose the target channel for notifications, and adjust the message text if you want different invoice fields or links.
5. Review and edit the hardcoded invoice line items and any validation rules to match your invoicing requirements, then publish the n8n Form URL for users to submit requests.

## Additional info
## How To Customize Nodes

You can adjust this workflow to fit different business or branding requirements:

- **Customize Form Fields**

In `TRG – Invoice Request Form`, add or rename fields to capture extra data such as tax numbers, payment terms or discount codes. After adding new fields, update `SET – Wrap Form Data` and any mappings in later nodes to use the new properties.

- **Change Line Items Behavior**
`SET – Items & Document ID` currently hard‑codes the `items` array. To make this dynamic, you can:
    - Parse items from additional form fields.
    - Load items from a Google Sheet or database.
    - Calculate `total` per item inside an expression rather than in the template.

- **Adjust Template Fields**
If you change placeholders in your APITemplate.io template, update the `key` values in `PDF Generate From Template` and the corresponding `value` expressions. Keys and expressions must stay aligned to avoid missing fields in the PDF.

- **Email Content and Branding**
The Gmail node message uses template expressions to include user data and links. You can easily change the greeting, add your branded signature or additional instructions without touching the core logic.

- **Slack Message Format**
`SLACK – Notify New Invoice` uses Markdown formatting supported by Slack. You can add more lines, mention specific users or channels, or shorten the message while still referencing the same JSON fields.


## Add‑ons

This workflow can be extended in several ways:

- **Logging and Audit Trail**
Add a database or spreadsheet node after `IF – PDF Generation OK` to persist invoice metadata, including `document_id`, `invoice_no`, customer details and links, for long‑term reporting.

- **Payment Integration**
Insert nodes to create payment links or invoices in payment systems like Stripe or Razorpay and include those links in the email and Slack messages.

- **Error Notifications**
Extend the false branches of `IF – Check Required Fields` or `IF – PDF Generation OK` to send Slack or email alerts whenever an invoice fails validation or PDF generation. This keeps operations informed about failures without checking the n8n UI manually.

- **Multi‑template Support**
Add logic before `PDF Generate From Template` to select different `pdfTemplateId` values depending on company, region or invoice type, while reusing the rest of the workflow structure.


## Use Case Examples

Below are primary use cases for this workflow; many more variations are possible:

1. **Client Project Invoices**
Agencies can use the form to generate standardized invoices for each completed project sprint, automatically emailing clients and logging files in Google Drive.

2. **Freelancer or Consultant Billing**
Individual freelancers can use this workflow to create professional invoices directly from a form, without needing a full invoicing platform.

3. **Internal Chargeback Documents**
IT or shared services departments can generate internal chargeback invoices for other departments and instantly share them with finance via Slack.

4. **Training or Workshop Fees**
Training companies can collect participant details through the form and generate invoices on the fly for workshop fees, emailing participants and posting notifications for the administrative team.

5. **Pilot or Demo Environments**
Teams evaluating APITemplate.io and n8n can use this workflow as a real‑world demonstration of form‑to‑PDF document automation and extend it further to match their production processes.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
| :-- | :-- | :-- |
| Form submission does nothing | Workflow is inactive or trigger is not deployed | Ensure the workflow is active and use the correct Form Trigger URL (test or production).  |
| PDF is not generated | APITemplate.io credentials invalid or template ID incorrect | Check the `apiTemplateIoApi` credentials and confirm that `pdfTemplateId` exists and the template is published.  |
| PDF generated but Drive upload fails | Google Drive credentials missing or folder id incorrect | Reconnect `GDrive – Upload Invoice` credentials and verify the folder ID points to an accessible folder.  |
| Customer does not receive invoice email | Gmail credentials invalid or email blocked | Confirm Gmail OAuth is valid, check the “Sent” folder and ensure recipient email is correct and not filtered as spam.  |
| Slack message not appearing | Bot not in channel or Slack token invalid | Confirm the Slack app is installed in the workspace, has permission to post to that channel and that the `slackApi` credentials are valid.  |
| Some fields appear blank in PDF | Template keys do not match property keys | Check that placeholders in the APITemplate template (for example `fullName`, `address_bill_to`) exactly match the keys set in the APITemplate node Properties.  |


## Need Help

If you need assistance setting up this workflow, customizing the template, connecting additional systems or building similar document automation pipelines, then our n8n experts at WeblineIndia can help. The workflow already demonstrates how to integrate n8n Forms, APITemplate.io, Google Drive, Gmail and Slack into a cohesive invoicing solution, but it can be tailored further for more complex business rules, multi‑template scenarios or advanced reporting. 

Reach out to WeblineIndia for support with configuration, troubleshooting, performance tuning or designing new n8n workflows that match your unique processes and tools.

## 🔗 Nodes Used

Slack, Google Drive, Gmail, APITemplate.io, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
