# 🔬 Sync SAP Business One OData records with Google Sheets daily

> ⚡ **61 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs daily to sync SAP Business One Service Layer OData Business Partners to Google Sheets, handling SAP’s 20-record page limit, mapping fields into a sheet-friendly format, filtering out records without email addresses, and upserting rows to avoid duplicates.

## How it works
1. Runs every 24 hours on a schedule.
2. Logs in to the SAP Business One Service Layer and retrieves a session ID.
3. Fetches two OData pages (20 records each) of BusinessPartners from SAP B1 using $top/$skip and a $select field list, then combines the results.
4. Maps SAP fields into Google Sheets columns (including a human-readable partner type and a “Last Synced” timestamp).
5. Filters out records with an empty Email field and prepares a simple “skipped” log payload for those entries.
6. Upserts the valid records into a Google Sheets tab named SAP_BusinessPartners using “Customer Code” as the matching key, then logs out of SAP B1.

## Setup
1. Update the SAP B1 Service Layer base URL, CompanyDB, UserName, and Password in the login request, and ensure your n8n instance can validate the SAP SSL certificate (or adjust SSL verification settings).
2. Update the SAP OData entity path and $select field list in the fetch requests if you want to sync a different entity or different fields.
3. Connect your Google Sheets account, set the target spreadsheet ID, and ensure the SAP_BusinessPartners sheet exists with headers matching the mapped column names (including “Customer Code” for upserts).
4. If you have more than 40 records, duplicate the fetch-and-extract branch with higher $skip values (e.g., 40, 60) and add them as additional inputs to the merge step.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
