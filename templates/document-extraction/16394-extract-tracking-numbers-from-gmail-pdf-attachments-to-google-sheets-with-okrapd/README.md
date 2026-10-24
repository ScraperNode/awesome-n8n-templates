# 🔬 Extract tracking numbers from Gmail PDF attachments to Google Sheets with okraPDF

> ⚡ **14 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow monitors unread Gmail messages with PDF attachments, sends the first PDF to okraPDF for OCR parsing, then extracts likely tracking numbers from the OCR text and appends the email and parse details as a new row in Google Sheets.

## How it works
1. Triggers every minute when an unread Gmail email arrives that has a PDF attachment, and downloads attachments to the workflow.
2. Checks that the first downloaded attachment (attachment_0) is a PDF before continuing.
3. Uploads the PDF to okraPDF and starts an OCR parse job with the configured parser and page settings.
4. Waits briefly, then polls okraPDF for the job status until it reaches a terminal state.
5. Extracts tracking-number candidates from the OCR text using a regex and appends a row to Google Sheets with email metadata, parse status, IDs, a text preview, and the raw result JSON.

## Setup
1. Create and connect Gmail OAuth2 credentials with permission to read email and download attachments.
2. Create and connect an okraPDF API key using HTTP Header Auth, and ensure your okraPDF account can access the /v1/files, /v1/parse, and job status endpoints.
3. Create and connect Google Sheets OAuth2 credentials, then select the target spreadsheet and sheet (document ID and sheet name) where rows should be appended.
4. Ensure your destination sheet has columns that match the mapped fields (for example: From, Subject, Attachment, Received At, Tracking Numbers, Status, Job ID, and Text Preview), and adjust the page count/parser values if needed.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
