# ⚙️ Back up Linux servers to a remote server using Borg and SSH

> ⚡ **21 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow collects Borg Backup settings via an n8n form, stores them in an n8n Data Table, and then runs scheduled SSH commands to install Borg, set up restricted SSH access, and back up a chosen directory from a source Linux server to a remote Linux server.

## How it works
1. Receives a configuration submission from an n8n Form trigger with the source path, destination repository path, encryption choice, and remote SSH details.
2. Normalizes the submitted settings (mode, port, encryption flag) and stores the backup configuration in an n8n Data Table.
3. Saves or removes the Borg passphrase file on the source server over SSH based on whether encryption is enabled.
4. On each scheduled run, loads the saved configuration from the n8n Data Table.
5. Connects to the source and destination servers over SSH to ensure Borg is installed, generate a dedicated SSH key on the source, and create a restricted borg_backup user on the destination with a forced `borg serve` command.
6. Runs Borg to initialize the remote repository if needed and then either creates a versioned backup archive or creates a single latest archive and prunes older archives, writing the backup to the destination server over SSH.

## Setup
1. Create SSH credentials in n8n for both the source and destination servers (private key auth) using users that have passwordless sudo on each host.
2. Submit the Backup Setup Form once and provide absolute Linux paths, the destination host/port, and a Borg passphrase if you enable encryption.
3. Ensure the destination server allows SSH access for creating the borg_backup user and writing to the configured destination directory.
4. Set the Schedule Trigger interval to the backup frequency you want, then activate the workflow.

## Requirements
- SSH access to both the source and destination servers
- Passwordless sudo privileges for the configured SSH user
- A Linux server supported by Borg Backup

## Customization
- Change the backup schedule
- Switch between Versioned and Sync modes
- Enable or disable encryption
- Modify the source and destination directories
- Extend the workflow with notifications, monitoring, or additional backup tasks

## Additional info
The workflow supports two backup modes:
* **Versioned** – Keep multiple backup snapshots.
* **Sync** – Keep only the most recent backup by pruning older archives.
Optional repository encryption is also supported using a Borg passphrase.

## Who’s it for?

* System administrators
* Self-hosted enthusiasts
* Developers managing Linux servers
* Anyone looking for an automated off-site backup solution

## 🔗 Nodes Used

SSH, Schedule Trigger, n8n Form Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
