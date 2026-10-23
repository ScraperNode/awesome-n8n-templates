# 🔬 Generate PDF pricing proposals from Excel with Gotenberg and Outlook

> ⚡ **177 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Who is this for

This template is built for consultants, agencies, and service businesses that quote custom engagements and want to eliminate the manual work of building, formatting, and delivering pricing proposals. If you have a SharePoint or OneDrive pricing sheet, a self-hosted Gotenberg instance, and a Gmail account, you can have personalized PDF proposals landing in prospect inboxes in under 30 minutes of setup.

## What it does

The workflow accepts a form submission from your website or internal tools, looks up live pricing from your Excel pricing sheet, calculates the correct totals for the selected services and discount tier, renders a branded PDF proposal, and emails it to the requestor — all without any manual steps.

## How it works

A **Webhook Trigger** receives a POST request from your web form containing the prospect's details, the services they're interested in, the applicable discount level, and the requestor's contact information.

**Fetch Pricing Sheet** calls the Microsoft Graph API to pull all rows from your `pricing_request.xlsx` Excel table stored in OneDrive or SharePoint — so your proposals always reflect current, live pricing without any hardcoding.

**Process & Price** is a Code node that filters the pricing rows down to only the selected services, applies the correct price tier (Discount, Retail, or Premium), and calculates line items and a grand total. It normalizes raw Excel data into clean proposal objects ready for rendering.

**Build HTML** renders the processed data into a fully branded, print-optimized HTML document. The layout includes a cover page with prospect and firm details, a line-item pricing table, payment terms, and a signature block. All brand variables — logo URL, firm name, colors, and footer content — are defined as named constants at the top of the Code node for easy one-time customization.

**Convert to PDF** sends the finished HTML to your self-hosted [Gotenberg](https://gotenberg.dev/) instance, which returns a print-ready, US Letter PDF using your CSS page layout — no third-party PDF service or API key required.

**Email Proposal** delivers the PDF as an attachment via Gmail OAuth2 to the requestor. Internal recipients (e.g., a sales inbox) can be added as a CC with a single constant.

## How to set up

1. In **Webhook Trigger**, copy the production webhook URL and wire it to your web form's POST action.
2. In **Fetch Pricing Sheet**, update the SharePoint hostname, site path, drive, and file path to point to your `pricing_request.xlsx`.
3. In **Process & Price**, confirm that your Excel column names match the field references in the Code node (service name, retail price, discount price, premium price).
4. In **Build HTML**, update the brand constants at the top of the Code node: `FIRM_NAME`, `LOGO_URL`, `ACCENT_COLOR`, `FOOTER_TEXT`, and `TERMS_TEXT`.
5. In **Convert to PDF**, update the Gotenberg base URL to your self-hosted instance.
6. In **Email Proposal**, select your Gmail OAuth2 credential and update the `INTERNAL_CC` constant if desired.

## Requirements

- Microsoft 365 account with OneDrive or SharePoint access (for the pricing Excel file)
- Self-hosted [Gotenberg](https://gotenberg.dev/) instance (for HTML-to-PDF conversion)
- Gmail account with OAuth2 configured in n8n
- A web form or API client capable of POSTing JSON to a webhook URL
- **Self-hosted n8n** — this workflow uses direct Microsoft Graph API calls and Gotenberg, which require a self-hosted instance for full compatibility

## How to customize the workflow

- **Pricing tiers** — Add or rename price columns in your Excel sheet and update the tier-selection logic in **Process & Price** to match.
- **Proposal layout** — All styling, fonts, colors, and section order are controlled inside **Build HTML**. The HTML uses `@page` CSS rules and table-based layout for reliable PDF rendering across Gotenberg versions.
- **Discount logic** — Modify the discount calculation in **Process & Price** to support percentage-based discounts, volume thresholds, or client-specific pricing rules.
- **Email delivery** — Swap the Gmail node for Outlook, SendGrid, or any SMTP-compatible service supported by n8n. Map the `pdfBuffer` binary attachment and the rest of the workflow requires no changes.
- **CRM routing** — Add a lookup step after the webhook to pull prospect details from HubSpot, Salesforce, or a SharePoint contact list and merge them into the proposal data before pricing.
- **Approval gate** — Insert a **Wait** node and an internal Slack or email notification between **Convert to PDF** and **Email Proposal** to require internal sign-off before delivery.

Visit [automatedintelligentsolutions.com](https://automatedintelligentsolutions.com) for more information, support, and workflows.

## 🔗 Nodes Used

HTTP Request, Webhook, Microsoft Excel 365, Microsoft Outlook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
