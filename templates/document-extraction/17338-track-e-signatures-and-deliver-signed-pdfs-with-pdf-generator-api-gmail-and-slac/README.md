# 🔬 Track e-signatures and deliver signed PDFs with PDF Generator API, Gmail and Slack

> ⚡ **6 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow receives PDF Generator API document callbacks, logs new form submissions to Google Sheets, and when a document is signed it updates the record, optimizes and downloads the signed PDF, then delivers it via Gmail, posts a Slack notification, and archives a copy in Google Drive.

## How it works
1. Receives a POST webhook callback from PDF Generator API at `/document-callback` when a form is submitted or a document is signed.
2. Routes the incoming event based on whether `action_data.action` equals `signed` or `action_data` is missing.
3. For form submissions, appends the signer’s details and `Signed = false` to a Google Sheets spreadsheet.
4. For signed events, updates the matching Google Sheets row by `Public ID` to set `Signed = true` and store the signing timestamp.
5. Uses PDF Generator API to optimize the signed PDF from the callback file URL and downloads it as a binary file.
6. Emails the signed PDF to the signer via Gmail, posts a signed-notification message to a Slack channel, and uploads the PDF to a Google Drive folder for archiving.

## Setup
1. Add credentials for PDF Generator API, Google Sheets, Gmail, Slack, and Google Drive.
2. In PDF Generator API, configure the template/form callback URL to the webhook production URL for `POST /document-callback` and ensure both submission and signed events are sent.
3. Create or select a Google Sheets spreadsheet with columns for the captured fields (for example: Full Name, Email, Phone, Address, City, Birth Date, Public ID, Signed, Signed At) and set the document and sheet IDs in the Google Sheets steps.
4. Choose the target Slack channel, Google Drive folder, and adjust the Gmail recipient/subject/body and the uploaded PDF filename to match your process.

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Google Drive, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
