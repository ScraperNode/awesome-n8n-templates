# 🔬 Run background checks with Searchbug and Google Sheets

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow collects a person’s details through an n8n form, runs a two-step background lookup via the Searchbug API (people search then background report), parses key fields from the report, and appends the results to a Google Sheets tab.

## How it works
1. Receives a submission from an n8n Form with first name, last name, state, and optional middle name and city.
2. Calls the Searchbug People Search API (api_ppl) to find matching records and return a reportToken.
3. If no person is found, returns a “No people found” message as the form response.
4. If a person is found, extracts the reportToken and calls the Searchbug Background Check API (api_back) to retrieve the full report.
5. Parses the returned report into flattened fields such as name, DOB, SSN, addresses, phones, emails, relatives, business associations, and lien totals.
6. Appends the parsed results as a new row in a Google Sheets worksheet.

## Setup
1. Obtain your Searchbug credentials and fill in CO_CODE and PASS in both Searchbug HTTP requests (People Search and Background Check).
2. Connect a Google Sheets OAuth credential and set the target spreadsheet ID and worksheet name for the append action.
3. Create a Google Sheets tab with headers matching the columns being written (for example: REPORT_TOKEN, FULL_NAME, DOB, SSN, ADDRESS, CITY, STATE, ZIP, PHONES, EMAILS, RELATIVE_COUNT, RELATIVE_NAMES, BUSINESS_NAME, SHARED_SSN_NAME, LIEN_COUNT, TOTAL_LIEN_AMOUNT, SEARCH_DATE, RAW_RESPONSE).
4. Activate the workflow and share the n8n form URL with users who should be able to run the background check.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Filter, n8n Form Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
