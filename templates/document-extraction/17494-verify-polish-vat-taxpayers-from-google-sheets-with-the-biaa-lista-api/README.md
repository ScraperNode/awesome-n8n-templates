# 🔬 Verify Polish VAT taxpayers from Google Sheets with the Biała Lista API

> ⚡ **17 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow reads contractor NIP numbers from Google Sheets and checks each one against Poland’s Ministry of Finance VAT “white list” API to verify VAT active status and (optionally) whether a provided bank account is registered, returning a results table plus an attention-needed summary.

## How it works
1. Runs either manually or every weekday at 07:00.
2. Loads configuration values (API base URL and the Google Sheets column names to read).
3. Reads contractor rows from Google Sheets and normalizes each NIP, validating its checksum to avoid unnecessary API calls.
4. Looks up each NIP in the Polish Ministry of Finance white list API for today’s date, throttling requests with a short pause to respect rate limits.
5. Evaluates each response to classify the contractor as ACTIVE, NOT_ACTIVE, NOT_FOUND, or INVALID_NIP and optionally checks whether the provided bank account appears in the register.
6. Outputs a results list for all contractors and prepends a summary row when any contractor needs attention (non-ACTIVE status or account mismatch).

## Setup
1. Add a Google Sheets credential and select the target spreadsheet and worksheet in the Google Sheets node.
2. Ensure your sheet has a NIP column (10 digits) and optionally columns for company name and bank account, matching the column names set in the workflow settings.
3. If your column headers differ, update the configured column names (NIP, Company, Bank account) in the workflow settings before enabling the schedule.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
