# 📊 Log property search results from Searchbug into Google Sheets

> ⚡ **1 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow collects property search criteria via an n8n form, queries the Searchbug Property Search API (api_prop) for matching records, and appends detailed property fields (owner, parcel, values, mailing address, and land data) to a Google Sheets spreadsheet.

## How it works
1. Receives a submission from an n8n Form where a user selects a search type and enters a search value and location.
2. Maps the selected search type to Searchbug’s SRCH code (A for address, P for parcel ID, O for owner name) and prepares the request inputs.
3. Sends a POST request to the Searchbug Property Search API endpoint and retrieves the property record as JSON.
4. Appends the returned property details to a specified Google Sheets tab as a new row.

## Setup
1. Add your Searchbug CO_CODE and PASS values to the HTTP request body parameters used for the Searchbug API call.
2. Connect your Google Sheets credential and select your target spreadsheet (Document ID) and worksheet/tab name.
3. Create a header row in the target Google Sheets tab that matches the columns being written (the property fields mapped in the Google Sheets append step).

## 🔗 Nodes Used

Google Sheets, HTTP Request, n8n Form Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
