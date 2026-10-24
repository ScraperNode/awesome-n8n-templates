# 🔬 Match SSN and name from a web form with Searchbug and Google Sheets

> ⚡ **2 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow collects a first name, last name, and SSN via an n8n form, checks the combination using the Searchbug SSN Name Match API, and appends a normalized, masked-result record to Google Sheets.

## How it works
1. Receives a submission from an n8n form that asks for first name, last name, SSN (full 9 digits or last 4), and optional notes.
2. Cleans the SSN to digits only, determines whether it is a full SSN or last-4 input, and generates a masked SSN for storage.
3. Sends the name and cleaned SSN to the Searchbug SSN Name Match endpoint (TYPE=api_ssnn) and continues even if the API returns an error.
4. Normalizes the Searchbug JSON response into consistent fields such as match result/score, SSN state/year/status, and any linked names, DOBs, and cities, while keeping only the masked SSN.
5. Appends a new row with the normalized results and metadata (including submission timestamp and notes) to a Google Sheets tab.

## Setup
1. Add your Searchbug credentials by filling in CO_CODE and PASS in the HTTP request body parameters.
2. Connect a Google Sheets account and set the target spreadsheet document ID and sheet/tab name.
3. Create the Google Sheets tab with header columns that match the fields being appended (for example: submitted_at, fname, lname, ssn_masked, ssn_type, status, api_error, match_score, match_result, and the other mapped result columns).
4. Activate the workflow and share/use the n8n form URL for data entry.

## 🔗 Nodes Used

Google Sheets, HTTP Request, n8n Form Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
