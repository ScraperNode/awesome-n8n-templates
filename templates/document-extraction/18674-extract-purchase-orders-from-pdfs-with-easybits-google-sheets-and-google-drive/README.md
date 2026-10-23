# 🔬 Extract purchase orders from PDFs with easybits, Google Sheets, and Google Drive

> ⚡ **30 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow collects purchase order PDFs via an n8n Form, extracts header and line-item data using easybits Extractor, appends the results to Google Sheets with duplicate detection, and optionally generates an EDI 850 file per new PO and uploads it to Google Drive.

## How it works
1. Receives a form submission where a user uploads one or more purchase order PDFs and chooses whether to generate an EDI 850 file.
2. Reads existing rows from a Google Sheets tab to build a list of already-processed PO numbers for deduplication.
3. Splits the uploaded files into one PDF per item and processes them sequentially.
4. Uses easybits Extractor to pull PO header fields and the full articles table from each PDF.
5. Skips POs whose extracted PO number already exists in Google Sheets, while tracking duplicates for the final summary.
6. For each new PO, flattens the articles into one row per line item (calculating totals and flagging missing fields) and appends the rows to Google Sheets.
7. If EDI generation is enabled, reshapes the extracted PO into a canonical object, runs a sub-workflow to generate an EDI 850 file, and uploads the resulting .edi file to Google Drive.
8. Displays a completion screen summarizing clean extractions, duplicates skipped, and any missing fields detected per document.

## Setup
1. Create and connect an easybits Extractor API credential at https://easybits.tech/, and configure the extractor fields to return PO header values and an articles array from PDFs.
2. Add Google Sheets credentials, then set the target spreadsheet ID and sheet/tab ID for both reading existing POs and appending new line-item rows.
3. Ensure your Google Sheet header row matches the fields the workflow writes (for example: Date, Customer, Supplier, LPO No, Delivery Date, Items, Unit, Qty, Rate, Total, Document Name).
4. If you enable EDI output, set the Execute Workflow node to the correct “Generate EDI 850” sub-workflow ID and ensure it returns a binary file for upload.
5. Add Google Drive credentials and select the destination folder ID where generated .edi files should be uploaded.

## 🔗 Nodes Used

Google Sheets, Google Drive, Execute Sub-workflow, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
