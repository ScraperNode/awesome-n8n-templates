# 🔬 Generate merged onboarding PDF packets with PDFops and Google Drive

> ⚡ **7 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow receives a webhook request with two fillable PDF form URLs and field values, fills and merges the PDFs using PDFops, uploads the combined onboarding packet to Google Drive, and returns a JSON success or error response to the caller.

## How it works
1. Receives a POST webhook request containing `formAUrl`, `formBUrl`, `fieldsA`, `fieldsB`, and an optional `packetName`.
2. Validates that both form URLs use HTTPS and that `fieldsA` and `fieldsB` are JSON objects, otherwise returns a 400 error response.
3. Downloads both blank PDFs from the provided URLs and fills each one with the provided field values using PDFops.
4. Combines the two filled PDFs into a single flow and verifies both filled files are present before continuing.
5. Merges the two filled PDFs into one packet using PDFops and names the output using `packetName` (or a default filename).
6. Uploads the merged PDF to Google Drive and returns a JSON response indicating success, or a 400 error response if any step fails.

## Setup
1. Install the PDFops community node (`n8n-nodes-pdfops`) and optionally add a PDFops API credential if you need higher quota.
2. Add a Google Drive credential and set the target Drive and folder in the upload step.
3. Copy the webhook URL from the workflow and configure your source system to send a POST payload with `formAUrl`, `formBUrl`, `fieldsA`, `fieldsB`, and optionally `packetName` (ensuring all field values are strings).

## Requirements
- Two fillable AcroForm PDFs reachable over HTTPS. A PDFops API key is optional: the workflow runs keyless at 100 requests/IP/month, and a credential only raises that quota.

## Customization
- Run the PDFops Inspect Fields operation on each blank once to get its exact field names before mapping. Swap Google Drive for S3 or Dropbox by replacing the final upload node, and add a third form by duplicating a fetch -> fill branch and raising the Merge node input count to 3.

## Additional info
PDFops is a verified n8n community node (n8n-nodes-pdfops), one-click installable on Cloud. The workflow answers 400 with an explicit error on any failure rather than a misleading 200, and the Both Forms Filled? gate means a half packet is never uploaded when one form fails to fill.

## 🔗 Nodes Used

HTTP Request, Webhook, Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
