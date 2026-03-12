# ⚙️ Backup n8n workflows to Google Drive

> ⚡ **23,551 views** · ⚙️ [DevOps & CI/CD](../)

## Description

Temporary solution using the undocumented REST API for backups using Google drive.

Please note that there are issues with this workflow. It does not support versioning, so please know that it will create multiple copies of the workflows so if you run this daily it will make the folder grow quickly. Once I figure out how to version in Gdrive I'll update it here.

## 🔗 Nodes Used

Cron, Function, Function Item, HTTP Request, Start, Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
