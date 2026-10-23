# 📊 Find nearby ZIP codes by radius with Searchbug and Google Sheets

> ⚡ **2 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow collects a ZIP code and a mile radius from an n8n form, queries the Searchbug Zip Code in Radius API for matching ZIP codes, and appends each result — city, state, distance, population, and business counts — as its own row in Google Sheets.

## How it works
1. Receives ZIP code and distance inputs from an n8n form submission.
2. Sends the ZIP and radius to Searchbug’s Zip Code in Radius API (api_zipradius) and retrieves results as JSON.
3. Splits the returned ZIP code list so each ZIP becomes its own item with city, state, distance, and counts.
4. Appends each ZIP code result as a new row in a Google Sheets worksheet.

## Setup
1. Add your Searchbug credentials by filling in CO_CODE and PASS in the HTTP Request node's body parameters.
2. Connect your own Google Sheets account, then select the target spreadsheet and worksheet where the results should be saved.
3. Make sure the worksheet's first row has header columns for Dist, City, State, Zip, Population, NumberOfBusinesses, and NumberOfEmployees so they match the appended fields exactly.
4. Activate the workflow and share the generated form link with the people who will run ZIP radius searches.

## 🔗 Nodes Used

Google Sheets, HTTP Request, n8n Form Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
