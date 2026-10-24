# 🧾 Receive orders, generate branded invoice PDFs with pdfmill, email via Gmail, and archive to Google Drive

> ⚡ **30 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
Receives an order over a webhook, builds a real invoice from the line items, renders a branded PDF with pdfmill, emails it to the customer via Gmail, and archives a copy to Google Drive.

## How it works
1. A Webhook node receives the order payload — from Stripe, Shopify, a form, or your own app. Any order shape works; you map your fields in one place.
2. A Code node validates the order and computes the invoice: number, dates, subtotal, tax and total from the line items. An IF node rejects an order with no line items and returns a 400, rather than producing a broken invoice.
3. The pdfmill node renders the Invoice template to a PDF and returns it as binary data — with no headless browser to run or host.
4. Gmail emails the PDF to the customer, Google Drive archives a copy, and the workflow responds to the caller with the invoice number and total.

## Setup
1. Add a pdfmill credential to the Generate the invoice PDF node — create an API key in your pdfmill dashboard under API Keys — then select the Invoice template.
2. Add Gmail and Google Drive credentials, and pick the Drive folder that archived invoices should land in.
3. Activate the workflow and point your store or payment provider webhook at the Production URL. POST any order shape and map your fields in the Code node.

## Requirements
- A pdfmill account and API key. Gmail and Google Drive OAuth credentials. An n8n instance that can install community nodes.

## Customization
- Map your own order shape in the Code node — the mapping lives in one place. Swap Gmail for SMTP, or remove the Google Drive step if you do not need archiving. Adjust the tax handling in the Code node if you invoice across regions or at multiple rates.

## 🔗 Nodes Used

Webhook, Google Drive, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
