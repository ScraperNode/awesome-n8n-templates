# 🔬 Extract business directory listings with Snapshot Site, OpenAI and Google Sheets

> ⚡ **9 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs daily, reads business-directory page URLs from Google Sheets, captures fully rendered HTML via Snapshot Site, uses OpenAI (via n8n’s Information Extractor) to extract structured business listings, and writes results back to Google Sheets while logging extraction errors.

## How it works
1. Runs every day at 12 PM on a schedule trigger.
2. Reads directory listing page URLs from the “Directory Sources” tab in Google Sheets and processes them one at a time.
3. Fetches the fully rendered HTML for each URL using Snapshot Site and routes any API errors to an error log flow.
4. Cleans the captured HTML by removing scripts/styles and trimming the content before extraction.
5. Sends the cleaned HTML to OpenAI through the Information Extractor to return an array of structured business records.
6. Splits the extracted businesses into individual rows and appends or updates them in the “Businesses” tab in Google Sheets, deduplicating by directoryUrl.
7. Appends any capture/extraction failures to the “Extraction Errors” tab in Google Sheets and continues processing the remaining URLs.

## Setup
1. Install the community node `n8n-nodes-snapshot-site` and add Snapshot Site credentials.
2. Connect Google Sheets credentials and set the target spreadsheet URL/ID for the read, results, and error tabs.
3. Add an OpenAI (Chat Model) credential and select the model used by the Information Extractor.
4. Create the Google Sheets tabs “Directory Sources”, “Businesses”, and “Extraction Errors”, ensuring “Directory Sources” includes a `url` column and the other tabs have headers matching the extracted fields.
5. Confirm the “Save Businesses” node matches on `directoryUrl` (or update the matching column) and adjust the daily schedule time if needed.

## 🔗 Nodes Used

Google Sheets, Schedule Trigger, OpenAI Chat Model, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
