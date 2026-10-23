# 📱 Post scheduled Threads updates from Google Sheets with error tracking

> ⚡ **64 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick overview
This workflow runs hourly to read the next pending post from Google Sheets, publishes it to Threads via the Threads Graph API, and then updates the sheet with published or failed status plus timestamps and error details.

## How it works
1. Runs every hour on a schedule.
2. Reads the first row in Google Sheets where the status column equals pending.
3. Retrieves the authenticated Threads account’s user ID from the Threads Graph API.
4. Creates a Threads text post container using the content from the pending Google Sheets row.
5. Publishes the post to Threads and updates the same Google Sheets row as published with posted_at and updated_at timestamps.
6. If any Threads API call fails, records the error message and marks the corresponding Google Sheets row as failed with an updated_at timestamp.

## Setup
1. Create a Meta app and generate a Threads access token, then add it to an HTTP Header Auth credential used for the Threads Graph API requests.
2. Set up a Google Sheets Service Account credential in n8n and share your target spreadsheet with the service account email.
3. Replace the placeholder Google Sheet ID in all Google Sheets nodes and confirm the sheet name is Sheet1 (or update it to match your sheet).
4. Ensure your sheet has the required columns (row_number, content, status, posted_at, updated_at, error_message) and set status to pending for posts you want published.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
