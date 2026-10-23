# 🔬 Sync weekly Famulor assistant inventory with Google Sheets

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs weekly (or manually) to fetch your Famulor assistants via the Famulor API, validate the paginated results, and sync a nine-column inventory into Google Sheets by upserting rows matched on Assistant ID.

## How it works
1. Triggers every Monday at 09:00 (or on a manual run) to start an inventory sync.
2. Requests assistant records from the Famulor API using paginated HTTP GET calls.
3. Validates pagination consistency, enforces a 2,000-record safety limit, and converts the assistants into Google Sheets-ready rows with a “Last seen” timestamp.
4. Stops after outputting the prepared rows when preview mode is enabled.
5. When preview mode is disabled, checks whether any assistant rows exist and then appends or updates matching rows in Google Sheets using “Assistant ID” as the unique key.

## Setup
1. Create a Famulor workspace API key with the assistants:read scope and add it to an n8n HTTP Header Auth credential (Authorization: Bearer <key>) used by the Famulor request.
2. Add a Google Sheets credential, select the target spreadsheet and sheet tab, and ensure the tab has these headers: Assistant ID, Name, Active, Mode, Speech language, Tags, Created at, Updated at, Last seen.
3. Decide whether you want preview-only mode or live writes by changing the previewOnly value, then set the workflow timezone (default Europe/Berlin) and activate the schedule.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
