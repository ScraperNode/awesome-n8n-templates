# 📁 Detect duplicate Google Drive files and log results to Google Sheets

> ⚡ **11 views** · 📁 [File Management](../)

## Description

## Quick overview
This workflow manually scans a specified Google Drive folder for duplicate and near-duplicate filenames, appends the results to a Google Sheets log, and optionally sends a single Gmail notification when duplicates are found.

## How it works
1. Runs when you click “Execute workflow” in n8n.
2. Reads the target Google Drive folder ID from the configuration values and retrieves all files in that folder with key metadata (name, size, timestamps, link, and MIME type).
3. Analyzes the file list to detect exact duplicates (same filename) and near-duplicates (common copy/version naming patterns) and assigns a recommended action such as KEEP, DELETE, or REVIEW.
4. If duplicates are found, appends one row per flagged file to a Google Sheets tab and sends a single Gmail notification that the scan needs review.
5. If no duplicates are found, appends a single “NONE FOUND” scan record to Google Sheets to maintain an audit trail.

## Setup
1. Connect your Google Drive OAuth2 credentials so the workflow can list files in the target folder.
2. Connect your Google Sheets OAuth2 credentials and set the spreadsheet ID in the configuration values, and ensure the target tab (for example, “Sheet1”) has matching columns for the logged fields.
3. Paste your Google Drive folder ID into the configuration values so the scan points to the correct folder.
4. (Optional) Connect your Gmail OAuth2 credentials and set the recipient details in the email node, or disconnect the email branch if you do not want notifications.

## Requirements
- Google Drive (OAuth2), Google Sheets (OAuth2), Gmail (OAuth2) — optional

## Additional info
Limitations

- Single folder only, subfolders are not scanned in this workflow.
- Name-based detection only; this workflow compares filenames, not file contents. Two different files with the same name will be flagged. Two identical files with different names will not.
- Google Workspace files (Docs, Sheets, Slides) do not return a file size from the Drive API — the File Size column will show N/A for these types. All other file types (PDF, DOCX, images, video, etc.) return size normally.
- Always review the sheet before deleting anything. The workflow recommends actions, it does not delete files.

## 🔗 Nodes Used

Google Sheets, Google Drive, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
