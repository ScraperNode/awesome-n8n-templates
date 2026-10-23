# 📁 Create and share client folders from Google Sheets to Google Drive

> ⚡ **11 views** · 📁 [File Management](../)

## Description

## Quick overview
This workflow watches a Google Sheets worksheet for new client rows, creates (or reuses) a matching client folder structure in Google Drive, shares the folder with one or more client email addresses, and writes the Drive folder URL back to the sheet.

## How it works
1. Runs every hour and triggers when a new row is added in Google Sheets.
2. Searches Google Drive for an existing client folder using the row’s Code value as the search term.
3. If no matching folder is found, creates a new client folder under your specified parent Google Drive folder and adds Documents and Media subfolders.
4. Splits the sheet’s comma-separated Email field into individual email addresses.
5. Shares the client folder from Google Drive with each email address as a read-only user permission.
6. Updates the Google Sheets row by matching on Code and writing the generated Google Drive folder URL into the Url column.

## Setup
1. Connect Google Sheets OAuth2 credentials for the trigger and update actions, and select the target spreadsheet and sheet.
2. Connect Google Drive OAuth2 credentials and ensure the connected account has access to create and share folders.
3. Paste your parent Google Drive folder URL into the Configuration step (ParentDriveFolderUrl).
4. Ensure your Google Sheet includes at least Code, Name, Email, and Url columns (will updated by workflow), and enter client emails as a comma-separated list in the Email field.

## Requirements
- google sheet with this column (Code, Name, Email, Url)

## 🔗 Nodes Used

Google Sheets, Google Drive, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
