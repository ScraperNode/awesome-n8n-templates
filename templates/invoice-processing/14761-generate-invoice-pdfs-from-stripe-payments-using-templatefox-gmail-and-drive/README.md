# 🧾 Generate invoice PDFs from Stripe payments using TemplateFox, Gmail and Drive

> ⚡ **67 views** · 🧾 [Invoice Processing](../)

## Description

This workflow automatically generates and delivers professional invoice PDFs whenever a Stripe checkout session completes. It fetches the line items from Stripe, formats them into a clean invoice with your company details, generates a branded PDF via TemplateFox, emails it to the customer, and saves a copy to Google Drive.

## Problem Solved

Without this automation, invoicing after a Stripe payment requires:

- Monitoring your Stripe dashboard for completed checkouts
- Manually creating an invoice with the correct line items and totals
- Exporting as PDF and emailing it to the customer
- Saving the invoice to your file storage for bookkeeping
- Repeating this for every single payment

This workflow handles all of that automatically for every Stripe checkout, including proper invoice numbering, due dates, and tax calculations.

## Who Can Benefit

- **SaaS companies** billing customers through Stripe Checkout
- **E-commerce stores** sending invoices after purchase
- **Service providers** using Stripe for client payments
- **Freelancers** who want automatic invoicing after payment
- **Accountants** who need invoice PDFs archived in Google Drive

## Prerequisites

- [TemplateFox](https://templatefox.com) account with an API key (free tier available)
- Stripe account with API access
- Gmail account with OAuth2 configured
- Google Drive account with OAuth2 configured
- Install the **TemplateFox** community node from Settings → Community Nodes

## Setting Up Your Template

You need a TemplateFox invoice template for this workflow. You can:

1. **Start from an example** — Browse [invoice templates](https://templatefox.com/templates/invoice), pick one you like, and customize it in the visual editor to match your branding
2. **Create from scratch** — Design your own invoice template in the [TemplateFox editor](https://app.templatefox.com)

Once your template is ready, select it from the dropdown in the TemplateFox node — no need to copy template IDs manually.

## Workflow Details

**Step 1: Stripe Trigger**
Fires on every completed checkout session (`checkout.session.completed`). This captures successful payments with full customer and product details.

**Step 2: Get Line Items**
An HTTP Request node calls the Stripe API to fetch the line items for the checkout session (product names, quantities, amounts). Stripe doesn't include line items in the webhook payload, so this separate call is required.

**Step 3: Format Invoice Data**
A Code node combines the Stripe session data and line items into a clean invoice structure: company details, client info (from Stripe customer), line items with prices, subtotal, tax, total, invoice number (auto-generated from date + session ID), and due date (Net 30).

**Step 4: TemplateFox — Generate Invoice**
Select your invoice template from the dropdown — the node automatically loads your template's fields. Map each field to the matching output from the Code node (e.g. `client_company` → `{{ $json.client_company }}`). TemplateFox generates a professional invoice PDF using your custom template.

**Step 5a: Email Invoice**
Sends the invoice PDF link to the customer via Gmail with invoice number, amount, and due date.

**Step 5b: Save to Google Drive**
Downloads the PDF and uploads it to a Google Drive folder for bookkeeping. Runs in parallel with the email step.

## Customization Guidance

- **Company details:** Set your company name, address, logo, bank details, and VAT number directly in the template editor — they never change between invoices, so there's no reason to pass them from n8n.
- **Invoice numbering:** Modify the `invoiceNumber` format in the Code node (default: `INV-YYYY-MMDD-XXXXXX`).
- **Payment terms:** Change the due date calculation (default: Net 30).
- **Drive folder:** Set your Google Drive folder ID in the "Save to Google Drive" node.
- **Template:** Use any invoice template from your TemplateFox account — select it from the dropdown.
- **Email body:** Customize the invoice email text in the "Email Invoice" node.

**Note:** This template uses the [TemplateFox community node](https://www.npmjs.com/package/n8n-nodes-templatefox). Install it from Settings → Community Nodes.

## 🔗 Nodes Used

HTTP Request, Stripe Trigger, Google Drive, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
