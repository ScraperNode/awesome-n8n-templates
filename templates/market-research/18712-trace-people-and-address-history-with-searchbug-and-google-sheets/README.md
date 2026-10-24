# 📊 Trace people and address history with Searchbug and Google Sheets

> ⚡ **7 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow collects person details via an n8n Form, chooses the best Searchbug People Trace (api_trace) lookup method, and writes normalized trace results (or validation errors) to Google Sheets.

## How it works
1. Receives form submissions with optional SSN, name, and address details from an n8n Form.
2. Determines the strongest available search strategy (SSN, address + city + state, or name combinations) and prepares the Searchbug request parameters.
3. If required fields are missing, marks the request as skipped with an error message.
4. Otherwise, sends a POST request to the Searchbug People Trace API (api_trace) and continues even if the API returns an error.
5. Normalizes the API response into one output row per returned record, formats fields like dates and phone numbers, and masks SSN to the last 4 digits.
6. Appends the resulting rows (success, no results, error, or skipped) to a Google Sheets tab.

## Setup
1. Add your Searchbug credentials by filling in CO_CODE and PASS in the HTTP request body parameters.
2. Connect a Google Sheets account and update the spreadsheet ID and sheet/tab name used for appending results.
3. Create the target Google Sheets tab with header columns that match the fields mapped in the append step (for example input_row_id, api_status, full_name, address, phone, and error_message).

## 🔗 Nodes Used

Google Sheets, HTTP Request, n8n Form Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
