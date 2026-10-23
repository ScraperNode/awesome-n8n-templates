# 🔬 Clean library book catalogs with Google Books, Google Sheets, and Gmail

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow receives an uploaded .xlsx library inventory, validates and normalizes ISBNs, enriches book details via the Google Books API, deduplicates against an existing Google Sheets catalog, writes clean records to a master sheet, routes exceptions to a manual review sheet, and emails an import summary via Gmail.

## How it works
1. Receives an HTTP POST webhook request containing an uploaded .xlsx file.
2. Validates the file type and size, parses the spreadsheet into rows, loads existing catalog entries from Google Sheets, and initializes an in-memory set of “seen” book keys for deduplication.
3. Processes rows in batches of 50, cleaning and validating ISBN-10/ISBN-13 values and tagging invalid or missing ISBNs for manual review.
4. Checks each valid row for duplicates (by ISBN or normalized title/author) and routes duplicates to the “Needs Manual Review” Google Sheets tab with a reason.
5. For non-duplicate books, waits briefly and calls the Google Books API by ISBN to fetch metadata, then normalizes title/author/publisher/year/category and falls back to spreadsheet values when metadata is missing.
6. Upserts standardized, cleaned records into the “Clean Master DB” Google Sheets tab and appends any metadata lookup failures to “Needs Manual Review.”
7. Compiles run-level counts (updated, duplicates, missing/invalid ISBN, errors, manual review) and sends an import summary email via Gmail.

## Setup
1. Create a webhook caller (or form/tool) that uploads an .xlsx file to the workflow’s POST webhook URL at `/library-upload`.
2. Add Google Sheets OAuth2 credentials and replace `YOUR_LIBRARY_SPREADSHEET_ID`, ensuring the workbook contains tabs named “Clean Master DB” and “Needs Manual Review” with matching columns.
3. Add an HTTP Header Auth credential for the Google Books API request (or adjust the request authentication) and confirm any required API key/header values.
4. Add Gmail OAuth2 credentials and update the recipient address (currently `library-admin@example.com`) for the import summary email.
5. Ensure the uploaded spreadsheet includes the expected headers: `ISBN`, `Book Title`, `Author`, `Publisher`, `Year`, and `Category`.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Spreadsheet File, Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
