# ⚙️ Back up workflow JSON files to Google Drive using the n8n API

> ⚡ **57 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Who’s it for

This workflow is designed for n8n users who want an automated way to back up their workflows to Google Drive. It is useful for freelancers, developers, automation agencies, and teams managing multiple workflows who need regular backups for recovery, migration, or version tracking.

## How it works / What it does

The workflow automatically exports all workflows from your n8n instance and stores them as JSON files in a dedicated Google Drive folder. It can be triggered manually or scheduled to run every four hours.

First, the workflow creates a new backup folder in Google Drive with the current date and time in the folder name. It then retrieves all workflows from the connected n8n instance and processes them one by one using a loop. Each workflow is converted into a formatted JSON file and uploaded to the newly created backup folder.

The workflow also checks older backup folders and removes unnecessary folders to help keep storage organized and avoid duplicate backups.

## How to set up
1. Import the workflow into n8n.
2. Connect your n8n API credentials.
3. Connect your Google Drive account.
4. Create or select a parent folder in Google Drive for storing backups.
5. Update the Google Drive folder IDs in the relevant nodes.
6. Activate the workflow or run it manually for testing.

## Requirements
An active n8n instance
Google Drive OAuth2 credentials
n8n API credentials
Permission to create and delete folders in Google Drive

## How to customize the workflow

Change the backup schedule in the Schedule Trigger node.
Modify the backup folder naming format if needed.
Store backups in a different Google Drive location.
Adjust the folder cleanup logic to keep more historical backups.
Add notifications through email or Slack after successful backups.

## 🔗 Nodes Used

Google Drive, n8n, Schedule Trigger, Filter, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
