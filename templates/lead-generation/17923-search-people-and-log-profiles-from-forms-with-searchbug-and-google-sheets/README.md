# 🎣 Search people and log profiles from forms with Searchbug and Google Sheets

> ⚡ **2 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow collects name and location details from an n8n form, searches the Searchbug People Search API for matching people, flattens the response into clean fields (addresses, phones, emails, relatives, and more), and appends each match as a new row in Google Sheets.

## How it works
1. Receives a submission from an n8n Form with first name, last name, optional middle name and city, and a required US state.
2. Builds the search parameters from the form values and calls the Searchbug People Search API via an HTTP request.
3. Normalizes the API response by turning single-or-multiple result fields into arrays and extracting key profile attributes.
4. Outputs one structured item per matching person (or a single “No results found” row) and appends the results to a Google Sheets tab.

## Setup
1. Add your Searchbug credentials by filling in the CO_CODE and PASS query parameters in the HTTP Request configuration.
2. Connect a Google Sheets OAuth credential.
3. Replace the target Google Sheets document ID and sheet/tab name to point to your own spreadsheet.
4. Create the sheet header row to match the columns being appended (for example: reportID, fullName, firstName, middleName, lastName, DOB, currentAge, deceased, SSN, primaryAddress, city, state, zip, primaryPhone, allPhones, allEmails, relatives, driversLicenseNumbers, bankruptcies, liens, judgements, reportToken).

## 🔗 Nodes Used

Google Sheets, HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
