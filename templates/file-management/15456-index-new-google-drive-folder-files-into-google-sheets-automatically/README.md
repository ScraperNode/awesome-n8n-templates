# 📁 Index new Google Drive folder files into Google Sheets automatically

> ⚡ **62 views** · 📁 [File Management](../)

## Description

## Description:
Automatically catalog the contents of any Google Drive folder into a Google Sheets spreadsheet — capturing file names, types, extensions, Drive links, and timestamps in one click. Ideal for teams or individuals who need a living, auditable inventory of shared Drive folders without manually tracking files.

## How it works
- On execution, the workflow reads a target Google Drive folder ID and destination spreadsheet from a single **Config** node — the only place you need to make changes.
- Two branches run in parallel: one lists all files and folders inside the target Drive folder; the other reads any rows already present in the index spreadsheet.
- A filter step compares the two lists by File ID, ensuring only new, previously unindexed files are processed — re-running the workflow will never create duplicates.
- Each new file is formatted into a structured row containing: File Name, MIME Type, File Extension, Google Drive URL, File ID, and an ISO timestamp of when it was indexed.
- New rows are appended to the specified sheet automatically.

## Set up steps

1. Connect your **Google Drive** and **Google Sheets OAuth2** accounts in n8n credentials.
2. Create a Google Sheet with the following column headers in row 1 (order does not matter): File Name, MIME Type, File Extension, Google Drive URL, File ID, Indexed At.
3. Open the **Config** node and fill in three values: your target Google Drive folder ID, your Google Sheets spreadsheet ID, and the sheet tab name (defaults to Sheet1).
4. Run the workflow manually to populate the index. Re-run anytime to append newly added files — existing entries are skipped automatically.

## Requirements

- Google Drive OAuth2 credentials (n8n built-in)
- Google Sheets OAuth2 credentials (n8n built-in)
- A Google Drive folder you want to index
- A Google Sheet with the column headers listed above already in place

## How to customize

- **Change what's captured**: Edit the List files and folders node to request additional Drive file fields (e.g. createdTime, modifiedTime, owners), then add the corresponding columns to the Prepare Index Row code node.
- **Limit file volume**: For folders with 50+ files, add an n8n **Limit node** between List files and folders and Merge to process in batches and avoid timeouts.
- **Schedule it**: Swap the manual trigger for a **Schedule trigger** to keep your index automatically up to date on a recurring basis.
- **Filter by file type**: Add an **If** or **Filter** node after List files and folders to only index specific MIME types (e.g. Google Docs only, PDFs only).

## 🔗 Nodes Used

Google Sheets, Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
