# 🧾 Create and validate ZUGFeRD and Factur-X e-invoices with pdfRest

> ⚡ **5 views** · 🧾 [Invoice Processing](../)

> 💡 **Pro Tip** — Twitter's API is paid now, which makes simple data pulls expensive. [ScraperNode](https://scrapernode.com/twitter) is a community node that scrapes [Twitter profiles](https://scrapernode.com/twitter/scrapers/profiles) and [posts](https://scrapernode.com/twitter/scrapers/posts) without needing API access.
>
> <a href="https://scrapernode.com/twitter"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Automate ZUGFeRD/Factur-X invoice creation and validation with little or no code using pdfRest. Collect files through an n8n form, review eligible invoices, approve or hold them, and download the PDF with its validation and review record. Invalid results are blocked from release.

## How it works
1. Receives an invoice submission through an n8n Form where the user selects a task (create, pair, or validate) and uploads the required XML/PDF files.
2. Checks the task, invoice reference, file types and sizes, and basic CII XML structure. Returns a correction message when required inputs are missing or unsupported. pdfRest performs invoice validation in the processing steps.
3. Uses pdfRest to either generate a ZUGFeRD/Factur‑X hybrid PDF from CII XML, pair CII XML with an uploaded visual PDF (optionally allowing regeneration), or validate an uploaded hybrid PDF.
4. Validates the resulting or uploaded hybrid invoice with pdfRest and interprets the findings to decide whether the invoice is eligible for human review.
5. Before production use, configure an Error Trigger workflow for email or Slack notifications and select it in this workflow’s settings. Include the execution link and error message. Notification credentials and recipients must be configured separately.
6. Builds an audit bundle (invoice PDF, source XML/original PDF when available, and a JSON + README report), compresses it to a ZIP, and returns it for download while marking blocked results as a failed execution.

## Setup
1. Install the community node package @pdfrest/n8n-nodes-pdfrest (version 0.2.0 or newer) in your n8n instance.
2. Create and select a pdfRest API credential for all pdfRest nodes, ensuring the API base URL/region and API key match the same pdfRest environment and include create/validate entitlements with unredacted validation details.
3. Use CII (CrossIndustryInvoice) XML exports from your invoicing system (not UBL) and keep each uploaded XML/PDF file under 20 MB.
4. Control access to the n8n Forms (submission and review) in your deployment, since reviewer names are self-entered and the workflow does not authenticate identity.

## Requirements
- A pdfRest Pro account and API key with access to invoice creation and validation.
- An n8n instance with @pdfrest/n8n-nodes-pdfrest version 0.2.0 or newer installed.
- CII invoice XML for creation; matching XML and PDF files for pairing; or a completed hybrid PDF for validation. Each uploaded file must be 20 MB or smaller.

## Customization
- Choose XML-only creation, pairing with an existing PDF, or validation of a completed invoice.
- Preserve the supplied PDF or explicitly allow replacement from XML when needed.
- Adapt reviewer instructions and review notes to your approval process.
- - Configure a separate error workflow to notify your team by email or Slack when processing fails or release is blocked.

## Additional info
Technical validation and human approval are recorded separately. Approval does not change the validator’s findings. The workflow does not send invoices or submit them to tax authorities. PDF replacement requires explicit permission.

## 🔗 Nodes Used

Stop and Error, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
