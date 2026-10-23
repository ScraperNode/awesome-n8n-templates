# 🔬 Export QuickBooks Online ledger, transactions, invoices, and attachments to ZIP

> ⚡ **18 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow exports a selected date range from QuickBooks Online into a single ZIP archive containing bank ledger data, bank transactions, invoices (with PDFs), client payments, expenses, and any attached files, making it easier to share a complete accounting package with an accountant.

## How it works
1. Starts manually and sets the QuickBooks Online company ID, API base URL, and the export date range (last month by default).
2. Pulls the Transaction List report for Bank accounts from QuickBooks Online and converts it into a bank_ledger.csv file.
3. Queries QuickBooks Online for multiple bank-related transaction entity types in the date range, normalizes the results, and prepares transaction IDs for attachment matching.
4. Retrieves all QuickBooks Online Attachable records, expands them to one row per linked transaction, filters for real downloadable files, and downloads the attachments.
5. Fetches invoices in the date range, keeps invoices that are sent or not open, exports invoices.csv, and downloads each matching invoice as a PDF.
6. Fetches payments received and expenses (purchases) in the date range and exports them to payments_received.csv and expenses.csv.
7. Creates attachments_index.csv mapping attachments to their linked transactions, then bundles all CSVs, PDFs, and attachment files into one ZIP file for download.

## Setup
1. Create and select a QuickBooks Online OAuth2 credential (Intuit developer app) for the QuickBooks nodes and the two HTTP Request query steps.
2. Update the company ID (realmId) in the Config step with your QuickBooks Online Company ID.
3. Adjust startDate/endDate (and apiBase if you use a QuickBooks sandbox) in Config, then execute the workflow and download the ZIP output from the final compression step.

## Requirements
- A QuickBooks Online company and an Intuit developer app for the OAuth2 credential.

## 🔗 Nodes Used

HTTP Request, QuickBooks Online, Filter, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
