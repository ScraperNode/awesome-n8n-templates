# 🔬 Classify and file email PDF documents with Gmail, pdfRest, Drive and Claude

> ⚡ **22 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow monitors Gmail for emails with PDF attachments, OCRs scanned documents with pdfRest when needed, converts PDFs to Markdown, uses Anthropic Claude via n8n's Information Extractor to classify and extract key fields, then files each PDF to Google Drive, logs it in Google Sheets, and notifies Slack.

## How it works
1. Triggers every minute from Gmail for emails matching `has:attachment filename:pdf` and downloads all attachments.
2. Splits each email into one item per attachment and normalizes the binary file field so every PDF is processed individually.
3. Uses pdfRest to read PDF metadata (page count and whether it is image-only) and runs pdfRest OCR to make scans searchable when needed.
4. Converts the PDF to Markdown with pdfRest and uses Anthropic Claude (via the Information Extractor) to classify the document type and extract counterparty and document date.
5. Routes the document to an invoice, contract, correspondence, or other path and uploads the PDF to the corresponding Google Drive folder with a structured filename.
6. Appends a row to a Google Sheets index with email details, extracted fields, page count, OCR flag, and the Google Drive link, then posts a one-line Slack notification with the same link.

## Setup
1. Self-host n8n and install the pdfRest community node (`@pdfrest/n8n-nodes-pdfrest`), then add a pdfRest API credential.
2. Add credentials for Gmail, Google Drive, Google Sheets, Slack, and an Anthropic Chat Model connection.
3. Update the values in the Set Folder and Index IDs node: your four Google Drive folder IDs, the Google Sheets document ID for the index, your Slack channel ID, and the OCR languages.
4. Create a Google Sheet with these headers in row 1: Received, From, Subject, File, Type, Counterparty, Document Date, Pages, OCR Applied, Drive Link.

## Requirements
- Self-hosted n8n (the pdfRest community node does not run on n8n Cloud)
- pdfRest community node (@pdfrest/n8n-nodes-pdfrest) installed under Settings > Community Nodes
- pdfRest API key from pdfrest.com
- Gmail account with OAuth credentials in n8n
- Google Drive and Google Sheets credentials
- Slack bot token with chat:write, invited to the target channel
- Anthropic API key (or swap the model subnode for another chat model)

## Customization
- Add a document type: add it to the attribute description in Document Type Classifier, add a matching rule in Route by Document Type, add a Prepare node, and add its folder ID in Set Folder and Index IDs
- Add pdfRest's Convert · PDF to PDF/A (Archival) after Apply OCR to PDF for long-term records retention
- Replace Slack with Microsoft Teams, Discord, or an email node for notifications
- Narrow the Gmail filter to a label or sender for a single-purpose intake inbox
- Change OCR languages in Set Folder and Index IDs for non-English documents
- Swap the Anthropic model subnode for OpenAI, Gemini, or a local model

## 🔗 Nodes Used

Google Sheets, Slack, Google Drive, Gmail Trigger, Anthropic Chat Model, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
