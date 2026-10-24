# 🎣 Find local business leads with SearchAPI Google Maps and Google Sheets

> ⚡ **82 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow collects a business type and location via an n8n form, searches Google Maps results using SearchAPI, parses key business details, and appends the enriched leads to a Google Sheets spreadsheet.

## How it works
1. Receives a form submission where the user selects a Business Type and Location.
2. Builds a Google Maps search query (for example, “{Business Type} in {Location}”) and generates a unique run ID timestamp.
3. Queries SearchAPI’s Google Maps engine to retrieve matching local business results.
4. Extracts and normalizes lead fields like name, category, address, phone, website, rating, review count, price range, Maps URL, and Place ID, and adds metadata such as run ID and scrape time.
5. Appends the resulting lead rows to a specified Google Sheets worksheet.

## Setup
1. Add a SearchAPI credential (API key) and ensure the request uses the `google_maps` resource.
2. Add a Google Sheets OAuth2 credential.
3. Select the target Google Sheets document and sheet tab in the Google Sheets append step.
4. Customize the form’s Business Type and Location dropdown options to match your prospecting needs.

## 🔗 Nodes Used

Google Sheets, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
