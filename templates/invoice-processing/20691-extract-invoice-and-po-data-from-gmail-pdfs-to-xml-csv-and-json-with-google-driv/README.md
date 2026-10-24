# 🧾 Extract invoice and PO data from Gmail PDFs to XML, CSV and JSON with Google Drive

> ⚡ **4 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow monitors Gmail for unread invoice or purchase order PDFs, extracts text from each attachment, parses and validates key fields with rule-based logic, and outputs structured XML, CSV, and JSON files with optional Google Drive upload and reviewer email alerts for exceptions.

## How it works
1. Triggers every 15 minutes by polling Gmail for unread messages that match a PDF invoice/purchase-order search query and downloads attachments.
2. Splits each email into individual PDF attachments and extracts selectable text from each PDF.
3. Parses the extracted text to identify document type (invoice vs purchase order), header fields (numbers, dates, vendor, currency), line items, and totals.
4. Validates required fields, checks line-item math and subtotal/tax/total consistency, and flags duplicates using workflow static data.
5. For valid documents, generates three output files per document (ERP-style XML, CSV, and JSON) and optionally uploads them to a specified Google Drive folder.
6. For invalid documents, sends a Gmail message to a reviewer email address listing the validation errors and key extracted values.
7. Marks the original Gmail message as read (skipping the built-in sample run) so it is not processed again.

## Setup
1. Add a Gmail OAuth2 credential for the Gmail trigger, reviewer email sending, and “mark as read” actions, then adjust the Gmail search query and polling interval if needed.
2. In the workflow configuration values, set the reviewerEmail and (optionally) enable uploadToDrive and provide a target driveFolderId.
3. If you upload files, add a Google Drive OAuth2 credential and ensure the folder ID points to a folder you can write to.
4. Send invoices/POs as PDFs with an embedded text layer (not scans) or add an OCR step before text extraction if your PDFs are image-based.

## 🔗 Nodes Used

Google Drive, Gmail, Gmail Trigger, Filter, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
