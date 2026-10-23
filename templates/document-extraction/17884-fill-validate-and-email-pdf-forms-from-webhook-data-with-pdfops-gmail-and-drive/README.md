# 🔬 Fill, validate, and email PDF forms from webhook data with PDFops, Gmail, and Drive

> ⚡ **7 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow receives a webhook payload with a PDF URL, form field values, and an email address, then downloads the fillable PDF, fills it using PDFops, and emails the completed PDF via Gmail.

## How it works
1. Receives a POST webhook request containing `pdfUrl`, a `fields` object, and the recipient `email` address.
2. Downloads the blank fillable PDF from the provided URL using an HTTP request.
3. Sends the PDF and field mappings to PDFops to fill the form and produce a new filled PDF file.
4. Sends an email via Gmail to the provided address with the filled PDF attached.

## Setup
1. Activate the workflow and copy the Production Webhook URL to the system that will submit the JSON payload.
2. Add a Gmail credential and confirm the sender account has permission to send emails to your recipients.
3. (Optional) Add a PDFops API credential to increase quota, and ensure your caller provides exact AcroForm field names in the `fields` object.

## Requirements
- The n8n-nodes-pdfops community node installed. It is a verified community node, so it installs in one click from the nodes panel on n8n Cloud, or via Settings > Community Nodes on self-hosted.
- Gmail credential for the send step
- Optional free PDFops API key - the keyless tier works at 100 requests per IP per month

## Customization
- Swap Gmail for SMTP, Slack, or Google Drive as the delivery step
- Add a PDFops node with the Inspect Fields operation to validate output or discover field names
- Chain the PDFops Merge operation to bundle several filled forms into one packet

## Additional info
This template uses the n8n-nodes-pdfops community node. Field names must match the PDF exactly: discover them with the node's Inspect Fields operation or the free browser inspector at pdfops.dev/tools/inspect.

## 🔗 Nodes Used

HTTP Request, Webhook, Google Drive, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
