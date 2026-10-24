# 🧾 Upload an invoice PDF and check its processing status with bimetrics

> ⚡ **1 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
Upload one existing invoice PDF from self-hosted n8n to bimetrics, then check its processing status. The workflow returns the document ID, outcome and next step so your team can review the invoice in bimetrics.

## How it works
1. Starts when you run the workflow manually.
2. Validates the configured PDF file path, filename, and source document ID, then reads the invoice PDF from the n8n server.
3. Uploads the PDF to the bimetrics Document API as multipart form data and extracts the returned document ID.
4. Requests the document details from the bimetrics API to read the current OCR processing status.
5. Repeats the status request every 5 seconds while the status is pending or processing, up to a maximum of 6 checks.
6. Returns the document ID, latest processing status, number of status requests, an outcome (processed, quota_paused, processing_failed or poll_limit_reached), and a suggested next step. A completed n8n execution does not mean the invoice data or a booking has been approved.

## Setup
1. Use a paid bimetrics plan with API access for your company. Create an API key with upload and read permissions; API access is not part of the trial.
2. Configure an HTTP Header Auth credential used by both bimetrics HTTP requests (Authorization: Bearer YOUR_API_KEY).
3. Use self-hosted n8n with access to the invoice PDF on its server. In Docker, mount the file into the container. Enter filePath, fileName and sourceDocumentId in Set upload inputs, then run the workflow manually.
4. For a retry of the same upload, retain the same company, API key, source document ID, file contents, filename and upload field. Use a new source ID for a new document. Upload errors stop without automatic retry.

## Requirements
- Self-hosted n8n; one accessible PDF file; a paid bimetrics plan with API access and an API key with upload and read permissions.

## Additional info
Tested locally with n8n 2.40.7. Transport and status handling were verified with synthetic data; production OCR accuracy was not tested. Review the extracted invoice data in bimetrics. This template does not fetch supplier portals or approve bookings.

[Setup and troubleshooting (German)](https://bimetrics.de/ratgeber/n8n-buchhaltung) · [API reference (German)](https://developer.bimetrics.de/beleg-upload)

## 🔗 Nodes Used

HTTP Request, Read/Write Files from Disk

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
