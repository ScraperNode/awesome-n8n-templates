# 📁 File Google Drive inbox documents into dated folders with a Google Sheets audit log

> ⚡ **12 views** · 📁 [File Management](../)

## Description

## Quick overview
This workflow monitors a Google Drive inbox folder for new files, classifies them by filename regex rules, files them into a Year/Month/Type folder structure in Google Drive, and logs each success or failure to a Google Sheets audit log.

## How it works
1. Triggers every minute when a new file is created in a selected Google Drive folder.
2. Evaluates the filename against configurable regular-expression rules to assign a document type, derive the year/month from the file’s created time, and build a destination path.
3. Uses the planned destination root to find or create the required year folder, then the month folder, then the type folder in Google Drive.
4. Moves the file into the final type folder.
5. Appends a “Filed” audit row to Google Sheets with timestamp, original filename, matched rule, destination path, and file ID.
6. If any step errors, appends a “Failed” audit row to Google Sheets with error details so the run continues.

## Setup
1. Add Google Drive OAuth2 credentials, select the inbox folder to watch, and ensure the archive root is a different Google Drive folder to avoid reprocessing filed files.
2. In the rules script, paste your archive root folder ID and adjust the filename regex rules and type folder names as needed.
3. Add Google Sheets OAuth2 credentials and select the target spreadsheet and sheet tab for both the success and failure audit logs.
4. Create the audit sheet headers (Timestamp, Original Filename, Matched Rule, Type, Destination Path, File ID, Status, Notes) so appended rows map cleanly.

## Requirements
- A Google Drive OAuth2 credential and a Google Sheets OAuth2 credential; the same Google account works for both.
- A Drive inbox folder to watch, a separate archive-root folder, and a Google Sheet for the audit log.

## Customization
- Edit the rules table in the Code node to map filename patterns to your own Types and rename the type folders.
- Change the _Unsorted catch-all label for unmatched files.
- Point the archive root at any folder, and adjust the trigger frequency if per-minute polling is more than you need.

## 🔗 Nodes Used

Google Sheets, Google Drive, Google Drive Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
