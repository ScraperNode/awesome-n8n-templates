# 🎣 Search and score contact details with Searchbug Contact Info API and Google Sheets

> ⚡ **2 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow collects contact search inputs via an n8n form, queries the Searchbug Contact Info API, and saves any matching people or business records to Google Sheets, returning a “no records found” message when the API response is empty.

## How it works
1. Receives search criteria from an n8n form submission (for example name, company, address, phone, or email).
2. Maps the form fields into Searchbug API parameters and sends a POST request to the Searchbug Contact Info API (api_contact) requesting JSON output.
3. Checks the API response status and whether any records are returned.
4. For successful results, splits the returned records into individual items and flattens key fields like phone, address, and email into a consistent column format.
5. Appends each matched record as a new row in a Google Sheets tab.
6. If no records are found, returns a message indicating the search produced no matches.

## Setup
1. Add your Searchbug credentials by filling in CO_CODE and PASS in the HTTP request body parameters.
2. Connect a Google Sheets OAuth credential and set the target spreadsheet (Document ID) and sheet/tab name.
3. Ensure the destination sheet has header columns matching the fields being appended (FNAME, MNAME, LNAME, BNAME, PHONE, STREET, CITY, COUNTY, STATE, ZIP, EMAIL, DOB, AGE).

## 🔗 Nodes Used

Google Sheets, HTTP Request, n8n Form Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
