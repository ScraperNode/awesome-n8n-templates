# 📁 Monitor and download changed files from Google Drive automatically

> ⚡ **891 views** · 📁 [File Management](../)

## Description

## Description

This workflow automates the download of new or updated files from a Google Drive folder, processing only files changed since the last run using a timestamp control file.

## How It Works

- Triggered on a schedule.
- Checks for a `n8n_last_run.txt` file in your Google Drive to read when the workflow last ran.
- If missing, defaults to processing changes in the last 24 hours.
- Searches for new or modified files in your specified folder.
- Downloads new/changed files.
- Replaces the timestamp file with the current time for future runs.

## Setup Steps

1. Set up your Google Drive credentials in n8n.
2. Find the Folder ID of the Google Drive folder you wish to monitor.
3. Edit all Google Drive nodes:
    - Select your credentials
    - Paste the Folder ID
4. Adjust the schedule trigger if needed.
5. Activate the workflow.

## Features

- No duplicate file processing (idempotent)
- Handles missing timestamp files
- Clear logical sticky notes in the editor
- Modular, extendable design

## Prerequisites

- Google Drive API credentials connected to n8n
- Target Google Drive folder accessible by the credentials

## 🔗 Nodes Used

Google Drive, Schedule Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
