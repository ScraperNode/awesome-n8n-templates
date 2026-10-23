# 🧾 Extract invoice data from PDF with Claude AI and create vendor bill in Odoo 18

> ⚡ **428 views** · 🧾 [Invoice Processing](../)

## Description

This workflow automates **accounts payable**: upload a PDF invoice, let Claude AI extract the key fields, and automatically create a vendor bill (incoming invoice) in Odoo 18.

## Who is this for?
Small and medium businesses using Odoo 18 who want to automate invoice data entry. Finance teams, bookkeepers, or anyone processing incoming invoices manually.

## How it works
1. Receive a PDF invoice via webhook (file upload)
2. Convert the PDF to base64 for AI processing
3. Claude AI extracts: vendor name, invoice number, date, amounts, tax rate
4. Authenticate with Odoo 18 via JSON-RPC API
5. Check for duplicate invoices (by invoice number)
6. Find or create the vendor (res.partner) in Odoo
7. Create a **draft** vendor bill (account.move) in Odoo
8. Return a structured JSON response with the result

The invoice is created in **draft status** so you can review and confirm it manually in Odoo before posting.

## Extracted fields
`vendor`, `invoice_number`, `invoice_date`, `total_amount`, `currency`, `net_amount`, `tax_rate`, `tax_amount`

## Setup
1. Open the **Configuration** node and enter your Odoo URL, database, user, and password
2. Create an **HTTP Header Auth** credential named `Anthropic API Key` with header name `x-api-key` and your Anthropic API key as value
3. Activate the workflow and send a test PDF

## Test with curl
```
curl -X POST https://your-n8n-instance.com/webhook/invoice-process -F "data=@invoice.pdf"
```

## Requirements
- Odoo 18 with Invoicing module installed
- Anthropic API key (Claude Sonnet 4.5 recommended)
- n8n 2.x (self-hosted or cloud)

## How to customize
- Change the AI model in the **Configuration** node (e.g. `claude-haiku-4-5-20251001` for lower cost)
- Modify the extraction prompt in **Prepare Claude Request** to add custom fields
- Add a file storage step after invoice creation (e.g. Google Drive, S3, WebDAV)
- Connect an email trigger instead of the webhook for fully automated processing

## Note on data privacy
This workflow sends PDF documents to the Anthropic API for data extraction. Ensure you have a [Data Processing Agreement (DPA)](https://www.anthropic.com/legal/data-processing-addendum) with Anthropic and comply with your local data protection regulations (e.g. GDPR) before processing documents containing personal data.

**Author:** Florian Eiche — [eiche-digital.de](https://eiche-digital.de)

## 🔗 Nodes Used

HTTP Request, Webhook, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
