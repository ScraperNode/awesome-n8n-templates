# 🔬 Extract event listings to Google Sheets with Snapshot Site and OpenAI

> ⚡ **4 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow runs daily to read event page URLs from Google Sheets, capture fully rendered HTML with Snapshot Site, extract structured event details using OpenAI via n8n’s Information Extractor, and write deduplicated event records back to Google Sheets while logging capture errors.

## How it works
1. Runs every day at 10:00 AM (UTC) on a schedule trigger.
2. Reads event-listing page URLs from the “Event Sources” tab in Google Sheets and processes them one at a time.
3. Uses Snapshot Site to fetch the fully rendered HTML for each URL and routes any API/capture errors to an error log.
4. Cleans the captured HTML by removing scripts, styles, SVG, and excess whitespace before sending it to the extractor.
5. Uses the OpenAI chat model (via the Information Extractor node) to extract an array of event objects with fields like name, dates, venue, and registration URL.
6. Splits the extracted events into individual rows and appends or updates them in the “Events” sheet, deduplicating by registrationUrl.
7. Appends any extraction/capture error records (url, message, occurredAt) to the “Extraction Errors” sheet and continues processing the remaining sources.

## Setup
1. Install the community node `n8n-nodes-snapshot-site` and add credentials for Snapshot Site.
2. Add a Google Sheets OAuth2 connection and set the target spreadsheet URL/ID in the read and write Google Sheets nodes.
3. Add an OpenAI API credential for the Information Extractor’s chat model connection.
4. Create three Google Sheets tabs named “Event Sources” (with a `url` column), “Events” (with columns matching the extracted fields, including `registrationUrl`), and “Extraction Errors” (with `url`, `message`, and `occurredAt`).
5. Confirm the “Save Events” node uses `registrationUrl` as the matching column for append-or-update, and adjust the schedule time if needed.

## 🔗 Nodes Used

Google Sheets, Schedule Trigger, OpenAI Chat Model, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
