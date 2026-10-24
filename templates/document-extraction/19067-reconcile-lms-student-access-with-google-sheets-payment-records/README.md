# 🔬 Reconcile LMS student access with Google Sheets payment records

> ⚡ **4 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs daily to reconcile student access in an LMS with payment status data stored in Google Sheets, automatically archiving or unarchiving users per tenant and writing the confirmed actions back to the sheet.

## How it works
1. Runs every day at 7:30 PM (Asia/Kolkata).
2. Loads configuration (spreadsheet ID, grace period, and region-to-tenant mapping) and logs in to the LMS API using environment-provided credentials.
3. Fetches the Google Sheets tab list and selects the current month and previous month tabs based on their titles.
4. Reads rows from the selected tabs and calculates the desired access state per email (activate when payment is received, archive when overdue beyond the grace period on the current tab, and otherwise leave unchanged), resolving each row’s region into one or more tenant IDs.
5. Looks up each user in the LMS per tenant, compares the desired state to the observed archived status, and prepares only the necessary archive or unarchive API calls.
6. Applies the archive/unarchive changes in the LMS and, for successful updates, writes an “Archived on YYYY-MM-DD” or “Unarchived on YYYY-MM-DD” note back to the “Access Action” column in Google Sheets using a single batch update.

## Setup
1. Provide the LMS API base URL, username, and password as environment variables (LMS_API_BASE, LMS_USERNAME, LMS_PASSWORD) and ensure the login response returns an API key usable for subsequent calls.
2. Create or identify the payment status Google Sheet, ensure it has columns named Email, Payment Status, Due Date, Region, and Access Action, and set the spreadsheetId value in the configuration.
3. Add Google Sheets OAuth2 credentials in n8n with access to the target spreadsheet.
4. Update the tenant ID and region alias mapping in the configuration to match your LMS organizations and the values used in the sheet’s Region column.
5. Confirm your month tab naming includes a month name/abbreviation plus a year (for example, “August 2026”) so the workflow can auto-select the current and previous tabs.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
