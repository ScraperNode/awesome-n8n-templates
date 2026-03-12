# ⚙️ Backup all n8n workflows to Google Drive every 4 hours

> ⚡ **44,547 views** · ⚙️ [DevOps & CI/CD](../)

## Description

This workflow takes off the task of backing up workflows regularly on Github and uses Google Drive as the main tool to host these. 

This can be a good way to keep track of your workflows so that you never lose any workflows in case your n8n goes down.

## How does it work

1. Creates a new folder within a specified folder with the time its backed up
2. Loops around all workflows, converts them to a JSON file and uploads them to the created folder
3. Gets the previous backups and deletes them

This has a clean feel and look as it simplifies the backup while not keeping a cache of workflows on your drive.


## Setup

1. Create a new folder
2. Create new service account credentials
3. Share the folder with the `service account` email
4. Upload this workflow to your canvas and map the credentials
5. Set the schedule that you need your workflows to run and manage your backups
6. Activate the workflow

Happy Productivity!

[@Imperol](https://www.linkedin.com/in/zacharia-kimotho/)

## 🔗 Nodes Used

Google Drive, n8n, Schedule Trigger, Filter, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
