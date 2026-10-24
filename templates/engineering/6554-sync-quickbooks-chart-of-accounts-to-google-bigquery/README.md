# ⚒️ Sync QuickBooks chart of accounts to Google BigQuery

> ⚡ **160 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
Keep a historical, structured copy of your QuickBooks Chart of Accounts in BigQuery. This n8n workflow runs weekly, syncing new or updated accounts for better reporting and long-term tracking.

## How it works
1. Every Monday, the workflow automatically fetches all accounts created or updated in the past 7 days from QuickBooks Online.
2. The raw API response is cleaned, currencies are managed, stable IDs are created, and all fields are formatted consistently for downstream use.
3. The cleaned data is converted into an SQL insert-ready structure compatible with the target BigQuery table schema.
4. Account records are inserted or updated in BigQuery, keeping your data warehouse in sync with QuickBooks on a weekly basis.

## Setup
1. Create a BigQuery table (e.g., quickbooks.accounts) with columns that match the fields produced in the final SQL insert step of the workflow.
2. Connect your QuickBooks Online and BigQuery credentials in the n8n Credential Manager before making any further configuration changes.
3. Open the Get Updated Accounts from QuickBooks node and replace {COMPANY_ID} with your real Company ID — press Ctrl + Alt + ? inside QuickBooks to find it.
4. Open the Load Accounts to BigQuery node, select the correct project, and verify that your dataset and table name are correctly referenced in the SQL query.
5. Save and activate the workflow — it will now run automatically every Monday and sync the past 7 days of QuickBooks account data to BigQuery.

## Requirements
- QuickBooks Online account
- QuickBooks Company ID
- Google Cloud project with BigQuery and a matching table

## Customization
- Change Sync Frequency : Adjust the schedule node to run daily, weekly, etc.
- Initial Backfill : Temporarily update the API query to select * from Account for a full pull.
- Add Fields : Modify 2. Structure Account Data to include or transform fields as needed.

## Additional info
Published by Fahmi Fahreza, Indonesia’s first official n8n Brand Ambassador and founder of WithMi Automation, built from real client implementations, not tutorials.
→ Let us build it for you: [withmiautomation.com](withmiautomation.com)
→ Learn to build it yourself: [academy.withmiautomation.com](academy.withmiautomation.com)
→ Bring Fahmi to your team (training, workshop, talkshow): [fahmiiireza.com](fahmiiireza.com)

## 🔗 Nodes Used

HTTP Request, Google BigQuery, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
