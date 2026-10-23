# 🔬 Save Rumble video transcripts to Google Sheets with FetchGoblin

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs manually to fetch available transcripts for a given Rumble video via the FetchGoblin API and appends the transcript, language, retrieval date, and credit usage details to a Google Sheets worksheet.

## How it works
1. Runs when you manually trigger the workflow in n8n.
2. Sets the Rumble video URL plus the target Google Sheets spreadsheet ID and sheet name.
3. Calls the FetchGoblin Rumble transcript endpoint with your API key to retrieve captions and related metadata.
4. Filters out empty transcripts, truncates transcripts over 49,000 characters with a visible marker, and formats each result as a row.
5. Appends the prepared row(s) to the specified Google Sheets worksheet using raw cell values.

## Setup
1. Create an HTTP Header Auth credential for FetchGoblin using header name `x-api-key` and your FetchGoblin API key, and select it in the HTTP request step.
2. Add Google Sheets OAuth credentials and ensure the target spreadsheet contains columns named `source_url`, `language`, `transcript`, `retrieved_at`, `credits_charged`, and `request_id`.
3. Update `video_url`, `spreadsheet_id`, and `sheet_name` in the settings step to point to your Rumble video and destination worksheet.

## Requirements
- n8n with built-in HTTP Request, Code and Google Sheets nodes; a verified FetchGoblin account and API key; a Google account with write access to the destination spreadsheet. A Rumble video must already have available captions.

## Customization
- The manual workflow handles one supplied URL and appends a new row on each run. Add your own deduplication or file storage if needed. Transcripts longer than 49,000 characters are visibly truncated to fit a Google Sheets cell.

## Additional info
Setup guide and downloadable workflow: https://fetchgoblin.com/guides/rumble-transcripts-google-sheets
API reference: https://fetchgoblin.com/docs/get-v1-rumble-video-transcript

A returned live transcript currently costs one FetchGoblin credit. The missing-caption case verified October 13, 2026 returned null and cost zero. Verified accounts start with 50 trial credits; prepaid top-ups start at $5. n8n hosting and other services have separate costs.

The API retrieves captions already available on Rumble; it does not create speech recognition or summarize the video. No schedule or repeat-URL deduplication is included.

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
