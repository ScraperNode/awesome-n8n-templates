# ⚙️ Back up workflows to Google Drive daily with automatic cleanup

> ⚡ **27 views** · ⚙️ [DevOps & CI/CD](../)

## Description

This workflow automatically creates daily backups of all n8n workflows and stores them in Google Drive, using the n8n API to export workflows and a scheduled retention policy to keep storage organized.

The automation runs in two stages: backup and cleanup.

Daily Backup Process

A Schedule Trigger runs at a defined time each day.

The workflow creates a folder in Google Drive using the current date.

It calls the n8n API to retrieve the list of all workflows.

Each workflow is processed individually and converted into a .json file.

The files are uploaded to the daily backup folder in Google Drive.

This ensures that every workflow is safely stored and versioned by date.

Automatic Cleanup

A second scheduled process maintains storage hygiene:

The workflow lists all backup folders in the Google Drive root directory.

It checks the folder creation date.

Any folder older than the defined retention period (default 15 days) is automatically deleted.

This prevents unnecessary storage usage while keeping recent backups easily accessible.

Key Features

Automated daily workflow backups

Uses n8n API to export workflows

Files stored in Google Drive

Automatic retention cleanup

Fully documented with sticky notes inside the workflow

Uses secure credentials (no hardcoded API keys)

Setup

Configuration takes only a few minutes:

Connect a Google Drive OAuth credential

Define the Google Drive root folder ID for backups

Configure n8n API credentials securely

Adjust:

Backup schedule

Retention period (default 15 days)

Once configured, the workflow will run automatically, creating daily backups and removing old ones without manual intervention.

## 🔗 Nodes Used

HTTP Request, Google Drive, Schedule Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
