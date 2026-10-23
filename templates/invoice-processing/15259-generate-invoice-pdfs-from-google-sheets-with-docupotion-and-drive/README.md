# 🧾 Generate invoice PDFs from Google Sheets with DocuPotion and Drive

> ⚡ **47 views** · 🧾 [Invoice Processing](../)

## Description

# Automatically generate an Invoice PDF from Google Sheets data with DocuPotion

## How it works

This workflow automatically generates a branded PDF invoice from data in Google Sheets and saves it to Google Drive. No manual document editing required.

It's triggered when you update the `status` column of any row in your invoices sheet to `Active`. From there it:

1. Fetches all line items for that invoice from a separate "line items" tab (matched by `invoice_number`)
2. Aggregates the line items and calculates the total
3. Generates a PDF using your DocuPotion invoice template, with customer details and line items merged in
4. Uploads the PDF to your Google Drive, named `Invoice-{invoice_number}.pdf`
5. Writes the PDF link back to the invoice row and updates its status to `Sent`

The workflow loops over invoices, so you can flip multiple rows to `Active` at once and each will be processed independently. Polling runs every minute (but you can change this to whatever frequency you want).

## What you'll need

- A Google account (Sheets + Drive)
- A [DocuPotion](https://docupotion.com) account with an invoice template configured
- The DocuPotion community node installed in your n8n instance

## Set up steps

**1. Copy the demo Google Sheet**

👉 [Demo invoice Sheet](https://docs.google.com/spreadsheets/d/1QDxomX6g1ycS_4p9MU3vdEuveKGwGyw0eqnsMzDo0ho/edit?usp=sharing)

Open the link and go to `File → Make a copy`. This gives you a Sheet with the correct structure:

- **invoices** tab: `invoice_number`, `invoice_date`, `due_date`, `status`, `customer_name`, `customer_email`, `customer_company`, `customer_address`, `pdf_url`
- **line items** tab: `invoice_number`, `description`, `quantity`, `unit_price`

**2. Install the DocuPotion community node**

In n8n, go to `Settings → Community Nodes → Install` and enter 'DocuPotion'.

**3. Create your DocuPotion invoice template**

Log into DocuPotion and create a template for your invoice layout. The workflow passes these merge fields to the template:

`invoice_number`, `invoice_date`, `due_date`, `customer_name`, `customer_company`, `customer_address`, `customer_email`, `total`, and `line_items[]` (an array where each item has `description`, `quantity`, `unit_price`).

Note the template ID from DocuPotion — you'll need it in step 5.

**4. Connect credentials**

Import this workflow into n8n, then connect credentials for:

- Google Sheets (used by the trigger and two action nodes)
- Google Drive
- DocuPotion

**5. Point the workflow at your resources**

- In all three Google Sheets nodes (`Invoice Status Updated to Active`, `Get Invoice Items`, `Add Link to Google Sheet`), replace the document ID with your copied Sheet's ID.
- In the `Generate PDF` node, replace the template ID with your DocuPotion template ID.
- Optionally, in `Upload to Google Drive`, change the destination folder from root to a subfolder like `/Invoices`.

**6. Activate and test**

Turn on the workflow. Then in your invoices Sheet, change the `status` of a sample row to `Active`. Within a minute, you should see:

- A new PDF in your Drive
- The `pdf_url` column populated
- The `status` column updated to `Sent`

## Customisation ideas

- **Email the PDF:** add a Gmail node after `Upload to Google Drive` to send the invoice to `customer_email` automatically.
- **Different statuses:** change the filter to trigger on a custom status like `Approved` or `Ready to send`.
- **Branded filename:** edit the filename expression in `Upload to Google Drive` to include company name or date.
- **Faster polling:** change the trigger from "every minute" to a shorter interval if you're on self-hosted n8n.

## 🔗 Nodes Used

Google Sheets, Google Drive, Google Sheets Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
