# 🎫 Queue negative Famulor call reviews to Google Sheets for follow-up

> ⚡ **3 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow runs hourly (or on manual run) to fetch completed negative-sentiment calls from the Famulor API for the last 48 hours, then upserts a concise review row per call into a Google Sheets follow-up queue.

## How it works
1. Runs every hour on a schedule (or manually for testing).
2. Calculates the creation window in the configured Business timezone, then converts its boundaries to UTC for the Famulor API.
3. Requests completed, negative-sentiment calls from the Famulor Calls API with pagination.
4. Validates the paginated results, deduplicates by Call ID, and formats each call into a short review row (no transcripts/recordings, summary capped at 1,500 characters, and missing success analysis labeled).
5. If no calls match, returns a clear no-results preview message. Otherwise, continues with the prepared review rows.
6. If preview mode is enabled, returns the prepared rows without writing anything; otherwise, upserts the rows into Google Sheets by matching on Call ID.

## Setup
1. In Famulor, enable sentiment analysis for the assistants you want to monitor and create an API key with calls:read access.
2. In n8n, create an HTTP Header Auth credential with header name Authorization and value Bearer followed by the workspace API key. Select that credential in Read Famulor pages and verify the connection before testing; imported nodes can preselect an existing credential.
3. Connect Google Sheets credentials, set your spreadsheet ID and sheet tab name in the workflow configuration, and create the required headers (for example: Call ID, Created at, Ended at, Direction, Caller, Recipient, Duration minutes, Sentiment, Summary, Success, Review reason).
4. Set Business timezone and Lookback hours in Configure workflow. Keep Preview only enabled for the first run and inspect the prepared rows. After connecting and checking your Google Sheets destination, switch Preview only off and activate the schedule.

## Requirements
- A Famulor workspace API key with calls:read, assistants with sentiment analysis enabled, and a Google Sheets account with edit access to the destination spreadsheet. Uses built-in n8n nodes.

## Customization
- Adjust Lookback hours, Business timezone and the polling interval. Add Owner, Follow-up status or Notes columns for the team; the workflow leaves these operator columns untouched.

## Additional info
The window filters calls by creation time. Calls or sentiment analysis appearing after the lookback window are not included. Pagination stops at 2,000 records and incomplete scans fail before writing. Google Sheets uses Call ID for upserts; simultaneous executions can still race, so use one active workflow. The destination sheet receives phone numbers and short summaries and should have appropriate access restrictions. API errors stop the execution.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
