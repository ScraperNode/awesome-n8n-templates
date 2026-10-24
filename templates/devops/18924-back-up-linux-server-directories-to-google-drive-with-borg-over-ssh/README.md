# ⚙️ Back up Linux server directories to Google Drive with Borg over SSH

> ⚡ **3 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow collects backup settings via an n8n form, creates a Borg backup of a server directory over SSH, packages the Borg repository into a tar.gz archive, and uploads it to a chosen Google Drive folder in either sync (single latest file) or versioned mode.

## How it works
1. Receives backup settings from an n8n form (basic-auth protected) and stores them in an n8n Data Table for reuse on scheduled runs.
2. Runs on a schedule and loads the saved configuration from the Data Table to determine the source directory, encryption setting, and Google Drive upload mode.
3. Connects to the server over SSH, installs BorgBackup if needed, and builds a runtime plan including repository path, archive name, and staging file name.
4. Creates a Borg backup archive of the configured directory (optionally using an on-server passphrase file), then prunes to keep the latest archive and compacts the repository.
5. Compresses the Borg repository into a single tar.gz file on the server, then downloads the archive into the workflow.
6. If sync mode is enabled, searches Google Drive for an existing “latest-backup” file and either updates it or uploads a new one; if versioned mode is enabled, uploads a new timestamped backup file each run.
7. Removes the temporary staged archive from the server after the Google Drive upload completes.

## Setup
1. Add a Google Drive OAuth credential and note the destination Google Drive folder ID where backups should be stored.
2. Open the form trigger, set the basic-auth username/password, then run the workflow once to submit the source directory, encryption choice/passphrase, Drive folder ID, and backup mode (this saves config to the Data Table).
3. If using encryption, ensure the provided passphrase is correct and can be stored on the server at `~/.borg/passphrase` by the SSH user.
4. Configure the Schedule Trigger interval to control how often the backup runs.

## Requirements
- SSH access to your Linux server.
- A Google Drive account connected to n8n.
- Borg Backup installed on the server (the workflow can install it automatically on supported Linux distributions).

## Customization
- You can update the source directory, switch between Sync and Versioned modes, choose a different Google Drive folder, or modify the backup schedule at any time by running the setup form again.

## Additional info
## 👤 Who's it for?

This workflow is ideal for system administrators, developers, and homelab users who want an automated, reliable backup solution for Linux servers without managing additional backup infrastructure.

## 🔗 Nodes Used

Google Drive, SSH, Schedule Trigger, n8n Form Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
