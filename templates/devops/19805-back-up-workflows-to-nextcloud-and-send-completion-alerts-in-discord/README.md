# ⚙️ Back up workflows to Nextcloud and send completion alerts in Discord

> ⚡ **1 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow runs on a daily schedule (or manually) to export all workflows from n8n via the n8n API, upload each workflow JSON file to a Nextcloud folder, and send a Discord message when the backup loop completes.

## How it works
1. Runs at 4:00 AM (America/Edmonton) on a Cron schedule or starts when you manually execute the workflow.
2. Retrieves the full list of workflows from n8n using the n8n API.
3. Iterates through each workflow ID and fetches the complete workflow JSON from n8n.
4. Converts each workflow JSON into a binary file and uploads it to Nextcloud under the configured backup folder.
5. Sends a completion notification to a Discord channel after the batch run finishes.

## Setup
1. Create and select an n8n API credential that can read workflows via the n8n API.
2. Create and select a Nextcloud credential, and ensure the target folder path (for example, `/N8N Workflow Backup/`) exists or update the upload path to your preferred location.
3. Create and select a Discord OAuth2 credential, then set the Discord server (guild) and channel IDs for the completion message.
4. (Optional) Adjust the Cron time and workflow timezone to match when you want backups to run.

## 🔗 Nodes Used

Cron, Nextcloud, Discord, Convert to/from binary data, n8n

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
