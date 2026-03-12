# ⚙️ Auto workflow backup to Google Drive – automated export of all your workflows

> ⚡ **4,075 views** · ⚙️ [DevOps & CI/CD](../)

## Description

# n8n Workflow Backup to Google Drive – Automated Export of All Your Workflows

This workflow is designed to automatically create backups of all your workflows in n8n and store them as individual .json files in Google Drive. It's a fully automated system that helps developers, agencies, or automation teams ensure their automation logic is always safe, versioned, and ready to restore or share.

## What is this for?
If you’re building and managing multiple automations inside n8n, losing a workflow due to accidental deletion or misconfiguration can cost you hours of work. This template solves that by exporting all your workflows into separate files and storing them in a dated Google Drive folder. It helps with disaster recovery, version tracking, and team collaboration — without any manual exporting.

## How this works:
-Once triggered (manually or via a schedule), the workflow performs the following steps:
-Creates a new folder in your Google Drive, named with today’s date (e.g. “Workflow Backups Monday 16-05-2025”).
-Connects to your n8n instance using the internal API and retrieves a list of all existing workflows.
-Iterates over each workflow, converts it into a .json file using the built-in file conversion node.
-Uploads each individual .json file to the newly created folder in Google Drive.
-Optionally, the workflow finds and deletes old backup folders to keep your Google Drive clean and avoid clutter.

You get a clean, timestamped folder with all your flows — ready to restore, send, or store securely.
You can trigger it manually or schedule it (e.g., to run weekly on Monday mornings).

## How to set it up:
Import the provided workflow JSON into your n8n instance.
Set up your credentials:
-Replace the placeholder “Google demo” with your actual Google Drive OAuth2 credentials in all Google Drive nodes.
-Replace the placeholder “n8n demo” with your n8n API credentials so the workflow can fetch your flows.
-Go to the node “Create new folder” and replace the folder ID with your own destination folder in Google Drive where backups should be stored.
-(Optional) Enable the “Schedule Trigger” to run the backup automatically once a week or on your preferred interval.

## You’re ready to go — test it with the Manual Trigger first and check your Google Drive for results.

## 🔗 Nodes Used

Google Drive, n8n, Schedule Trigger, Filter, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
