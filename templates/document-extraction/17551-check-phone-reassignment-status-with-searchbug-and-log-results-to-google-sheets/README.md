# 🔬 Check phone reassignment status with Searchbug and log results to Google Sheets

> ⚡ **4 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow collects a phone number and reference date from an n8n form, checks Searchbug’s Reassigned Numbers Database (api_rnd) for reassignment status, and logs the result with a plain‑English interpretation to Google Sheets.

## How it works
1. Receives a submission from an n8n form with a phone number and consent/contact reference date.
2. Cleans the phone number to digits only and formats the date to YYYY-MM-DD.
3. Sends the cleaned inputs to the Searchbug Reassigned Numbers Database API (api_rnd) via an HTTP POST request.
4. Extracts the reassigned status (YES/NO/NO_DATA/ERROR), adds a human-readable meaning, and captures the raw API response and timestamp.
5. Appends the full result as a new row in a Google Sheets worksheet.

## Setup
1. Add your Searchbug API credentials by setting the CO_CODE and PASS header values in the HTTP request step.
2. Connect a Google Sheets account and select the target spreadsheet and worksheet in the append-row step.
3. Create a sheet tab (for example, “Reassigned Numbers”) with headers for Submitted Phone, Cleaned Phone, Consent Date, Reassigned Status, API Phone, API Date, Status Meaning, Raw API Response, and Created At.

## 🔗 Nodes Used

Google Sheets, HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
