# 🎣 Find local business email leads with Apify and Google Sheets

> ⚡ **0 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick Overview
This workflow searches Google Maps via Apify for businesses in a chosen niche and location, filters and deduplicates the results by email, and appends new prospects to a Google Sheets spreadsheet.

## How it works
1. Starts when you manually execute the workflow.
2. Sets the target business type, location, and requested maximum number of results, then clamps the result count to a safe capped limit.
3. Calls the Apify Google Places crawler to search Google Maps and return businesses with contact details.
4. Reads existing rows from the `prospects` sheet in Google Sheets to build a list of already-saved emails.
5. Normalizes Apify results into a prospect schema, removes items without a usable contact email, and deduplicates against existing and in-batch emails.
6. Appends the remaining new prospects to the `prospects` sheet in Google Sheets.

## Setup
1. Create an Apify account, get your API token, and add an HTTP Header Auth credential with `Authorization: Bearer <token>`.
2. Add a Google Sheets OAuth2 credential and select it on both Google Sheets steps.
3. Create or copy a Google Sheet with a `prospects` tab and matching columns (for example: company, email, industry, linkedin_url, notes).
4. Replace `YOUR_SPREADSHEET_ID` in both Google Sheets steps with your spreadsheet ID and adjust the default business type, location, and `max_results` values as needed.

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
