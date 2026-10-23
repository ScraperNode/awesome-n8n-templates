# 🧾 Archive last month’s invoice tab with Google Sheets and Google Drive

> ⚡ **1 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow runs monthly to archive last month’s invoice tab from a Google Sheets workbook into a new spreadsheet created in the matching Google Drive month folder, then renames the copied tab for accounting.

## How it works
1. Runs on a monthly schedule.
2. Searches Google Drive for the folder named for last month in YYYY-MM format and calls a Google Apps Script web app to create a new spreadsheet in that folder.
3. Calls the Google Sheets API to list all tabs in your main invoice spreadsheet and keeps only the tab whose title matches last month in “Month YYYY” format.
4. Combines the destination spreadsheet details with the selected source tab information.
5. Uses the Google Sheets API to copy the tab into the new spreadsheet and then renames the copied tab to “Month YYYY - Invoices”.

## Setup
1. Add Google OAuth2 credentials with access to Google Drive and Google Sheets.
2. Replace YOUR_GOOGLE_SHEET_ID in the Google Sheets API request URLs with your main invoice spreadsheet ID.
3. Deploy a Google Apps Script web app that accepts folderUrl and sheetName and returns the created spreadsheetId, then paste its URL into the workflow’s web request.
4. Ensure a Google Drive folder exists for each month you want to archive, named in YYYY-MM format (for example, 2026-03).
5. Make sure your invoice tab names follow the “Month YYYY” format so the workflow can match last month correctly.

## 🔗 Nodes Used

HTTP Request, Google Drive, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
