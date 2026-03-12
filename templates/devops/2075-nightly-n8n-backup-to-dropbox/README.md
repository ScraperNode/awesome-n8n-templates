# ⚙️ Nightly n8n backup to Dropbox

> ⚡ **7,199 views** · ⚙️ [DevOps & CI/CD](../)

## Description

This template will create a nightly backup of all your n8n workflows to a Dropbox folder. Each night, the previous night's backups are moved into an "old" folder, and renamed with the date they were taken.

Backups over a specified age are deleted. (this is disabled by default for safety until you manually enable and verify it with your own setup)

Prerequisites
- Dropbox account and credentials
- A destination folder for backups

Setup
- Update all dropbox nodes with your credential
- Edit the **Schedule Trigger** node with the desired time to run the backup
- Edit the **DESTINATION FOLDER** node to specify the path in dropbox to upload to. This should be a folder and *include* the trailing /
- If you want to automatically purge old backups
	- Edit the **PURGE DAYS** node to specify the age to purge
	- Enable the **PURGE DAYS** node, and the 3 subsequent nodes
- Enable the workflow to run on the specified schedule

## 🔗 Nodes Used

Dropbox, Convert to/from binary data, n8n, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
