# 🤝 Detect new orders and due date changes from Google Drive with Data Tables

> ⚡ **0 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick Overview
This workflow scans a Google Drive folder for the latest order list (Excel or Google Sheets), reads and validates order rows, then compares them to an n8n Data Table baseline to identify new orders and delivery due date changes.

## How it works
1. Runs manually to start the check.
2. Searches a selected Google Drive folder for files matching the “Order_List” query and selects the latest matching spreadsheet.
3. Downloads the file as an .xlsx workbook (converting Google Sheets if needed) and extracts rows from the first sheet.
4. Normalizes and validates each order by mapping required columns (Order No., Customer, Product, Due Date), converting due dates to YYYY-MM-DD, and stopping on missing/invalid or duplicate order numbers.
5. Loads existing baseline orders from an n8n Data Table and, if the baseline is empty, saves the current orders as the initial baseline.
6. If a baseline exists, compares current orders to the baseline and outputs a preview listing new orders and due date changes (baseline is not updated).

## Setup
1. Create an n8n Data Table named `order_baseline` with string columns `order_number`, `customer_name`, `product_name`, and `delivery_date`.
2. Add a Google Drive credential and select the target folder in the Google Drive search step.
3. Update the Google Drive search query string (default: `Order_List`) to match your file naming convention and run the workflow once to initialize the baseline.

## 🔗 Nodes Used

Google Drive, Extract from File, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
