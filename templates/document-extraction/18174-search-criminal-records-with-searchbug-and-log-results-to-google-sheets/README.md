# 🔬 Search criminal records with Searchbug and log results to Google Sheets

> ⚡ **2 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow collects a person’s details through an n8n form, searches the Searchbug Criminal Records API (api_crm), flattens the response into one row per offense, and appends the results to a Google Sheets tab.

## How it works
1. Receives a submission from an n8n Form with first name, last name, and state (plus optional middle name, city, date of birth, and SSN).
2. Formats the submitted fields into the parameters required by Searchbug.
3. Sends a POST request to the Searchbug Criminal Records API and returns the results as JSON.
4. Converts the API response into a flat list where each crime details record becomes a separate item (or emits a single NORESULTS row when none are found).
5. Appends each flattened record as a new row in Google Sheets in the “Criminal Records” sheet.

## Setup
1. Add your Searchbug credentials by filling in the CO_CODE and PASS body parameters in the HTTP request step.
2. Connect your Google Sheets account and set the target spreadsheet ID and sheet/tab name used for saving results.
3. Create a Google Sheets tab with header columns that match the mapped fields (for example: record_id, full_name, case_number, offense_code, and disposition) so the append writes correctly.
4. Activate the workflow and share the generated form URL with the people who should run searches.

## 🔗 Nodes Used

Google Sheets, HTTP Request, n8n Form Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
