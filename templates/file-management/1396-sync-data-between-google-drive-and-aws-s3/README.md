# 📁 Sync data between Google Drive and AWS S3

> ⚡ **3,502 views** · 📁 [File Management](../)

## Description

This workflow [synchronizes files one-way](https://n8n.io/blog/how-to-sync-data-between-two-systems/) from Google Drive to AWS S3.

![workflow-screenshot](fileId:587)

- **Google Drive Trigger node** triggers the workflow when a new file is added to the drive.
- **AWS S3 node** gets all files stored in an S3 bucket.
- **Merge node** merges the files from Google Drive and AWS S3 by key (file name) and keeps only the new file.
- **AWS S3 node** uploads the new file in the S3 bucket.

## 🔗 Nodes Used

AWS S3, Google Drive Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
