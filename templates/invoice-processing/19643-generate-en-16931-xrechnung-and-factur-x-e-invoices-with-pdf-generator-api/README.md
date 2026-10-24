# 🧾 Generate EN 16931, XRechnung, and Factur-X e-invoices with PDF Generator API

> ⚡ **29 views** · 🧾 [Invoice Processing](../)

> 💡 **Pro Tip** — Twitter's API is paid now, which makes simple data pulls expensive. [ScraperNode](https://scrapernode.com/twitter) is a community node that scrapes [Twitter profiles](https://scrapernode.com/twitter/scrapers/profiles) and [posts](https://scrapernode.com/twitter/scrapers/posts) without needing API access.
>
> <a href="https://scrapernode.com/twitter"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow converts invoice JSON into compliant e-invoices (EN 16931, XRechnung, or Factur-X) by mapping your data to Peppol BIS Billing 3.0 UBL and generating the final XML or PDF/A-3 using PDF Generator API.

## How it works
1. Triggers either manually with a sample invoice or when a POST request hits the webhook endpoint.
2. Loads template and default format settings and merges them with the incoming invoice data.
3. Maps the invoice into a Peppol BIS Billing 3.0 UBL payload and calculates line totals, VAT subtotals, and monetary totals.
4. Routes the request by target format and calls the corresponding PDF Generator API e-invoice endpoint (Factur-X, XRechnung, or EN 16931) to generate a base64-encoded document.
5. Reads the API response metadata to derive the correct filename and MIME type and prepares the document content.
6. Converts the base64 response into a binary file so it can be stored or sent onward (for example via email, cloud storage, or an ERP).

## Setup
1. Create and select a PDF Generator API credential (API key, secret, and account email) and allow the workflow’s PDF Generator API domains for HTTP requests.
2. Update the Settings values for your Factur-X template ID, default output format (facturx/xrechnung/en16931), and (for Factur-X) the profile to use.
3. If you use the webhook path, copy the webhook URL and configure your ERP/billing system to POST invoice JSON to it.
4. Adjust the field mapping logic so your source invoice structure matches the UBL payload expected by PDF Generator API (optionally enable the schema request to retrieve the latest field list).
5. Replace the final “store or send” placeholder with your target delivery step (for example Gmail, Google Drive, S3, or your accounting/ERP system).

## 🔗 Nodes Used

HTTP Request, Webhook, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
