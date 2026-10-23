# 🔬 Extract real estate listings with Snapshot Site, OpenAI, and Google Sheets

> ⚡ **277 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs daily, reads real estate listing URLs from Google Sheets, captures rendered HTML with Snapshot Site, extracts structured listing details using OpenAI via n8n’s Information Extractor, and writes deduplicated results back to Google Sheets while logging capture errors to a separate sheet.

## How it works
1. Runs every day at 2 PM (UTC) on a schedule.
2. Reads property listing page URLs from the “Property Sources” tab in Google Sheets.
3. Processes each URL one at a time and captures the fully rendered page HTML using Snapshot Site.
4. If the capture returns an error, writes the URL, error message, and timestamp to the “Extraction Errors” tab in Google Sheets and continues.
5. Cleans the captured HTML by removing scripts/styles and trimming the content before extraction.
6. Uses OpenAI (via the Information Extractor) to extract a structured array of listing fields from the cleaned HTML.
7. Splits the extracted listings into individual records and appends or updates rows in the “Listings” tab in Google Sheets, matching on listingUrl to avoid duplicates.

## Setup
1. Install the community node `n8n-nodes-snapshot-site` and add Snapshot Site API credentials.
2. Add a Google Sheets OAuth2 credential and set the target spreadsheet URL/ID in the read and write steps.
3. Add an OpenAI API credential for the chat model used by the Information Extractor.
4. Create three Google Sheets tabs named “Property Sources” (with a `url` column), “Listings” (with columns matching the extracted fields), and “Extraction Errors” (with `url`, `message`, `occurredAt`).
5. Confirm the “Listings” upsert key is `listingUrl` and adjust the schedule time/timezone to match your environment.

## 🔗 Nodes Used

Google Sheets, Schedule Trigger, OpenAI Chat Model, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
