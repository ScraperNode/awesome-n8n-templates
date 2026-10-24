# ⚙️ Back up self-hosted workflows to Google Drive on a schedule

> ⚡ **28 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## How it works

This workflow automatically backs up all your n8n workflows to Google Drive on a schedule.

The workflow:

* Creates a new timestamped backup folder in Google Drive
* Fetches all workflows from your n8n instance
* Converts each workflow into a JSON file
* Uploads every workflow backup into the newly created folder
* Automatically deletes older backup folders to keep storage clean

This helps prevent accidental workflow loss and removes the need for manual exports.

---

## Setup steps

Setup usually takes less than 10 minutes.

1. Connect your Google Drive credentials
2. Connect your n8n API credentials
3. Select the Google Drive folder where backups should be stored
4. Adjust the Schedule Trigger interval if needed
5. Run the workflow once manually to test it

Detailed setup notes are included inside the workflow using sticky notes.

---

## Requirements

* Self-hosted n8n instance
* n8n API access enabled
* Google Drive account
* Google Drive OAuth2 credentials configured in n8n

---

## Features

* Fully automated workflow backups
* Timestamped backup folders
* JSON export for every workflow
* Automatic cleanup of older backups
* Community-template friendly
* No hardcoded credentials

---

## Backup naming format

Backup folders are created using this format:

`n8n-backup-YYYY-MM-DD-HH-mm`

Example:

`n8n-backup-2026-05-13-10-30`

---

## Notes

* The workflow keeps the newest backup folder and deletes older ones automatically
* You can modify the cleanup logic to keep the last 3–5 backups instead
* Sticky notes are included throughout the workflow for easier customization

## 🔗 Nodes Used

Google Drive, n8n, Schedule Trigger, Filter, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
