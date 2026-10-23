# 🧾 Generate branded invoice PDFs from webhook orders with PolyDoc and email

> ⚡ **5 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow receives an order via webhook, validates required fields, calculates invoice totals, renders a branded invoice PDF using a saved PolyDoc template, emails the PDF to the customer, and returns the same PDF in the webhook response.

## How it works
1. Receives an order payload in a POST request via an n8n webhook.
2. Validates that the order includes at least one line item and a customer email, and returns a 422 JSON error if the payload is incomplete.
3. Calculates line totals, subtotal, tax amount, and grand total, and formats the invoice data (invoice number, dates, currency, and customer details).
4. Uses PolyDoc to populate a saved template with the invoice data and render an A4 PDF.
5. Sends the generated PDF to the customer by email as an attachment.
6. Returns the generated PDF as the webhook response for immediate download.

## Setup
1. Create a PolyDoc API credential in n8n and replace `YOUR_TEMPLATE_ID` with your saved invoice template ID from the PolyDoc dashboard.
2. Configure an SMTP credential (or replace the email step with another provider) and set the sender address (for example, update `billing@example.com`).
3. Copy the webhook URL from the webhook trigger and configure your store/checkout/CRM to POST orders to it using the expected `order` structure (including `order.lines` and `order.customer.email`).

## 🔗 Nodes Used

Send Email, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
