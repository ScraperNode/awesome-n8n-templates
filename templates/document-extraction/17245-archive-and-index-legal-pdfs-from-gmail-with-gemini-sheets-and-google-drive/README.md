# 🔬 Archive and index legal PDFs from Gmail with Gemini, Sheets and Google Drive

> ⚡ **8 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow monitors Gmail for unread emails with PDF attachments, uses Google Gemini to extract Japan Electronic Books Preservation Act filing metadata, logs a searchable index in Google Sheets, and archives documents into Google Drive folders while notifying Slack when extraction or classification fails.

## How it works
1. Polls Gmail hourly for unread emails that contain attachments and downloads the attached files.
2. Extracts text from the first PDF attachment.
3. Sends the extracted text to Google Gemini to pull out transaction date, counterparty, amount, and document type, and alerts Slack if the document text cannot be read.
4. Builds an Act-compliant PDF filename from the extracted fields and checks that date, counterparty, and amount are all present.
5. If required metadata is missing, posts a warning to a Slack channel to handle the document manually.
6. If metadata is complete, appends a row to a Google Sheets “Document Index”, marks the Gmail message as read to prevent reprocessing, and uploads the PDF to the matching Google Drive folder (invoice/receipt/contract) or flags it in Slack if unclassified.

## Setup
1. Connect credentials for Gmail, Google Gemini (PaLM) API, Google Sheets, Google Drive, and Slack.
2. Create (or choose) Google Drive folders for invoices, receipts, and contracts, and select the correct folder IDs in the three Google Drive upload steps.
3. Select the target Google Sheets spreadsheet and the “Document Index” sheet (or create it) where the searchable metadata rows are appended.
4. Pick the Slack channel (for example, #accounting) used for extraction failures, missing metadata alerts, and unclassified document notifications.

## 🔗 Nodes Used

Google Sheets, Slack, Google Drive, Gmail, Gmail Trigger, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
