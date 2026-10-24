# ⚒️ Weekly ETL pipeline: QuickBooks financial data to Google BigQuery

> ⚡ **676 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
This template sets up a weekly ETL (Extract, Transform, Load) pipeline that pulls financial data from QuickBooks Online into Google BigQuery. It not only transfers data, but also cleans, classifies, and enriches each transaction using your own business logic.

## How it works
1. Every Monday, the workflow automatically fetches all transactions from the previous week directly from your QuickBooks Online account.
2. Custom business logic cleans up text fields, generates stable transaction IDs, and classifies each transaction as income, expense, or internal transfer.
3. The cleaned and enriched data is prepared as a bulk-insert-ready SQL statement formatted for BigQuery compatibility.
4. The structured SQL statement is executed and all transaction records are inserted into your designated Google BigQuery table.

## Setup
1. Create a BigQuery dataset (e.g., quickbooks) and table (e.g., transactions) — ensure the table schema exactly matches the SQL query inside the Load Data to BigQuery node.
2. Add your QuickBooks Online and Google BigQuery credentials in the n8n Credential Manager before configuring any other nodes.
3. Open the Clean & Classify Transactions node and update the internalTransferAccounts, expenseCategories, and incomeCategories JavaScript arrays to match your QuickBooks Chart of Accounts exactly.
4. Open the Load Data to BigQuery node, select the correct Google Cloud project, and verify the SQL query references the correct dataset and table name.
5. Save and activate the workflow — it will now run automatically every Monday and load the previous week's transactions into BigQuery.

## Requirements
- A running n8n instance (Cloud or Self-Hosted)
- A QuickBooks Online account
- A Google Cloud Platform project with BigQuery enabled
- A BigQuery table with a matching schema

## Customization
- Change Schedule: Modify the schedule node to run daily, monthly, or at a different time
- Adjust Date Range: Change the date macro in the Get Last Week's Transactions node
- Refine Classification Rules: Add custom logic in the Clean & Classify Transactions node to handle specific edge cases

## Additional info
Published by Fahmi Fahreza, Indonesia’s first official n8n Brand Ambassador and founder of WithMi Automation, built from real client implementations, not tutorials.
→ Let us build it for you: [withmiautomation.com](withmiautomation.com)
→ Learn to build it yourself: [academy.withmiautomation.com](academy.withmiautomation.com)
→ Bring Fahmi to your team (training, workshop, talkshow): [fahmiiireza.com](fahmiiireza.com)

## 🔗 Nodes Used

QuickBooks Online, Google BigQuery, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
