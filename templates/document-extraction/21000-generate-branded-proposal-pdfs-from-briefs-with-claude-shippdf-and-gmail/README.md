# 🔬 Generate branded proposal PDFs from briefs with Claude, ShipPDF and Gmail

> ⚡ **6 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow collects a proposal brief via an n8n form, uses Anthropic Claude to extract structured proposal fields, generates a branded PDF with ShipPDF, then emails the PDF via Gmail and archives it to Google Drive after ShipPDF confirms completion.

## How it works
1. Receives a new proposal request from an n8n Form submission with client details, recipient email, and a project brief.
2. Uses Anthropic Claude (via the Information Extractor) to turn the free-text brief into structured proposal fields like title, scope, timeline, and price.
3. Sends the extracted fields to the ShipPDF API to generate a document from your proposal template and provides an n8n resume webhook URL for the completion callback.
4. Waits for ShipPDF to call back and normalizes the returned status and PDF URL.
5. If ShipPDF reports the document as completed, downloads the generated PDF from the provided URL.
6. Sends the PDF as an attachment through Gmail to the recipient email address and uploads the same PDF to Google Drive for archiving.
7. If ShipPDF reports a non-completed status, routes the execution to a placeholder step where you can add alerting or error handling.

## Setup
1. Add an Anthropic API credential and select the Claude model you want to use for structured extraction.
2. Add a ShipPDF API key as an HTTP Bearer Auth credential and replace the `template_id` in the ShipPDF request with your ShipPDF proposal template ID.
3. Update the Information Extractor attributes and the ShipPDF `data` mapping to match your ShipPDF template’s `data_schema` fields.
4. Connect Gmail credentials and confirm the recipient email mapping and email subject/body text.
5. Connect Google Drive credentials and set the target drive and folder for uploads.
6. (Optional) Add a Slack/email alert step on the failure branch to handle `status: failed` callbacks from ShipPDF.

## 🔗 Nodes Used

HTTP Request, Google Drive, Gmail, Anthropic Chat Model, n8n Form Trigger, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
