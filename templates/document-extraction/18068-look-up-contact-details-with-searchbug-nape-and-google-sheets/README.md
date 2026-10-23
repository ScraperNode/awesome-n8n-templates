# 🔬 Look up contact details with Searchbug NAP+E and Google Sheets

> ⚡ **3 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow collects search inputs from an n8n form, queries the Searchbug NAP+E (api_nape) endpoint for name, address, phone, and email matches, then writes any returned records to Google Sheets and returns a no-results message when nothing is found.

## How it works
1. Receives a submission from an n8n form where you choose a search type and enter any known person or business details.
2. Maps the form fields into Searchbug NAP+E API parameters (including the correct subtype for phone-only or email-only lookups).
3. Sends a POST request to the Searchbug API and evaluates the response status and whether any records are returned.
4. Normalizes the response so each returned match becomes a separate item with shared metadata (source and found flags).
5. Maps the normalized fields into a consistent schema (name, business, address, phone, email, and status/error fields).
6. Appends each matched record as a new row in a Google Sheets worksheet, or returns a “No records found” message when the API returns no matches.

## Setup
1. Add your Searchbug credentials by filling in CO_CODE and PASS in the HTTP request body parameters.
2. Connect your Google Sheets OAuth credential and set the target spreadsheet (Document ID) and worksheet name.
3. Create a sheet tab with header columns matching the fields being saved (STATUS, SRC, PHFND, ADFND, EMFND, FNAME, LNAME, BNAME, PHONE, ADDRESS, CITY, STATE, ZIP, EMAIL, ERROR).
4. Activate the workflow and share the generated n8n form link with users who should run lookups.

## 🔗 Nodes Used

Google Sheets, HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
