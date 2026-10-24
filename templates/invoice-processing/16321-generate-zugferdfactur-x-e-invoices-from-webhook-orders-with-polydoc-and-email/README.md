# 🧾 Generate ZUGFeRD/Factur-X e-invoices from webhook orders with PolyDoc and email

> ⚡ **17 views** · 🧾 [Invoice Processing](../)

> 💡 **Pro Tip** — Twitter's API is paid now, which makes simple data pulls expensive. [ScraperNode](https://scrapernode.com/twitter) is a community node that scrapes [Twitter profiles](https://scrapernode.com/twitter/scrapers/profiles) and [posts](https://scrapernode.com/twitter/scrapers/posts) without needing API access.
>
> <a href="https://scrapernode.com/twitter"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow receives an order via webhook, builds an EN 16931 invoice payload and HTML, generates a ZUGFeRD/Factur-X (PDF/A-3 + embedded XML) e-invoice using PolyDoc, emails the PDF to the buyer, and returns the PDF in the webhook response.

## How it works
1. Receives an HTTP POST request with an `order` object via an n8n webhook endpoint.
2. Validates that the order contains at least one line item and includes either a due date or payment terms.
3. Calculates line totals, VAT, and invoice totals, and renders a printable HTML invoice along with a structured invoice payload.
4. Uses PolyDoc to generate a verified ZUGFeRD/Factur-X EN 16931 e-invoice PDF/A-3 from the HTML and invoice data.
5. Sends the generated PDF to the buyer via email using SMTP.
6. Returns the generated PDF as the webhook response, or returns a 422 JSON error if the order is invalid.

## Setup
1. Create and add a PolyDoc API credential for the PolyDoc node.
2. Configure an SMTP credential for the Email Send node (or remove the email step if you only want to return the PDF).
3. Copy the webhook URL and configure your source system to POST JSON to `/einvoice` with the required `order` fields (seller, buyer, and `lines`, plus `dueDate` or `paymentTerms`).

## 🔗 Nodes Used

Send Email, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
