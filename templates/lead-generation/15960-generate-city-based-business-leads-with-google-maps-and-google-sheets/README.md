# 🎣 Generate city-based business leads with Google Maps and Google Sheets

> ⚡ **386 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow collects business leads from Google Maps by geocoding a user-provided city, searching across a small coordinate grid with Places Nearby Search pagination, and writing enriched business details (name, address, phone, website, ratings) to a Google Sheets spreadsheet.

## How it works
1. Receives a form submission with a search term, target city, max results value, and a Google Maps API key.
2. Calls the Google Geocoding API to convert the target city into latitude/longitude coordinates.
3. Generates a 4-point coordinate grid around the city center and searches Google Places Nearby Search for the keyword at each grid point, paging through up to three result pages with delays to allow page tokens to activate.
4. Merges results from all pages, collects the returned Place IDs, and iterates through them in batches.
5. Fetches each business’s details from the Google Places Details API and maps the response into standardized lead fields (name, address, phone numbers, website, rating, review count, status, types).
6. Appends each lead as a new row into a Google Sheets tab, including the original search term as the category.

## Setup
1. Enable the Google Maps Geocoding API and Places API (Places Nearby Search and Place Details) in a Google Cloud project and generate an API key.
2. Connect a Google Sheets OAuth2 credential in n8n and select (or replace) the target spreadsheet and sheet tab where leads are appended.
3. Open the workflow’s form trigger, run a test execution to get the form URL, and submit your keyword, city, and Google Maps API key to start populating the sheet.

## 🔗 Nodes Used

Google Sheets, HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
