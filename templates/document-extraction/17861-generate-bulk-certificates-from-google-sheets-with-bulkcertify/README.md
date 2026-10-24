# 🔬 Generate bulk certificates from Google Sheets with BulkCertify

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow reads recipient names and emails from Google Sheets, submits them to the BulkCertify.app API to generate a certificate batch, polls until the batch is complete, then downloads the resulting ZIP archive and individual PNG certificates.

## How it works
1. Starts manually and fetches recipient rows (names and emails) from a Google Sheets spreadsheet.
2. Sends a POST request to the BulkCertify API to create a certificate batch using the configured template and the recipients list from the sheet.
3. Waits 15 seconds and repeatedly polls the BulkCertify batch stats endpoint until the batch status is marked as completed.
4. Retrieves the completed batch details from BulkCertify, including a ZIP download link and per-recipient certificate URLs.
5. Downloads the ZIP archive of all certificates and splits the recipients array into individual items.
6. Filters out recipients without a valid PNG URL and downloads each certificate PNG from its public link.

## Setup
1. Create a BulkCertify.app account, generate an API key, and replace `Bearer YOUR_API_KEY` in all BulkCertify HTTP requests.
2. Connect your Google Sheets OAuth credentials and set the target spreadsheet and sheet to the one containing your recipients.
3. Ensure your Google Sheet has `recipients` (full name) and `emails` columns, and update the BulkCertify request body fields (for example `template_id`, title, and signatory) to match your template.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
