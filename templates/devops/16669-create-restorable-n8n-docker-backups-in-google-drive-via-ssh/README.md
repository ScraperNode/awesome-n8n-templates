# ⚙️ Create restorable n8n Docker backups in Google Drive via SSH

> ⚡ **14 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow backs up n8n workflows and encrypted credentials from a self-hosted Docker instance via SSH, stores the exports as JSON files in structured Google Drive folders, and provides a Basic Auth–protected form to restore uploaded backups back into an n8n Docker container.

## How it works
1. Runs on a cron schedule to start a backup and set the target n8n Docker container name and timestamp.
2. Creates a timestamped backup folder in Google Drive with subfolders for workflows and credentials.
3. Connects over SSH and runs the n8n CLI inside the Docker container to export all workflows and all credentials as JSON.
4. Uploads a full `workflows-all.json` export and also uploads each workflow as its own JSON file into the Google Drive workflows folder.
5. Uploads a full `credentials-all.json` export and also uploads each credential as its own JSON file into the Google Drive credentials folder.
6. Builds a combined `workflows-credentials.json` package from both exports and uploads it to the root of the Google Drive backup folder.
7. Accepts one or more uploaded `.json` files through a Basic Auth–protected n8n form, detects whether they contain workflows or credentials, then copies a generated import file to the target container over SSH and runs `n8n import:workflow` and/or `n8n import:credentials`.

## Setup
1. Add a Google Drive OAuth2 credential and set the parent Google Drive folder ID where backup folders should be created.
2. Add an SSH credential with access to the Docker host and ensure the SSH user can run `docker exec` and `docker cp` against the n8n container.
3. Replace the Docker container name for both backup and restore configuration so the SSH commands target the correct n8n instance.
4. Configure Basic Auth for the restore form and copy the form URL for the admins who will upload backup files.
5. Ensure the destination n8n instance uses the same `N8N_ENCRYPTION_KEY` as the source if you plan to restore credentials.

## 🔗 Nodes Used

Google Drive, SSH, Schedule Trigger, n8n Form Trigger, Convert to File, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
