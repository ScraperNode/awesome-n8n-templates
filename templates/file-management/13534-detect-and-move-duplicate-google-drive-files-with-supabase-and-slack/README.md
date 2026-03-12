# 📁 Detect and move duplicate Google Drive files with Supabase and Slack

> ⚡ **5 views** · 📁 [File Management](../)

## Description

This workflow automatically detects duplicate files uploaded to a specific Google Drive folder by generating an MD5 hash of each file and comparing it against a Supabase database. If a duplicate is found, the file is moved to a dedicated Duplicates folder and a Slack notification is sent. All events, including unique uploads, duplicates, race conditions, and errors, are logged for audit purposes.

It is designed for teams that handle high file volumes and need reliable, content based deduplication instead of simple filename checks.

## How it works

- Monitors a specific Google Drive folder for new files.

- Normalizes file metadata and downloads the binary content. 
- Generates an MD5 hash from the file binary.

- Checks Supabase to see if the hash already exists.

- If duplicate, moves the file to a Duplicates folder and sends a Slack alert.

- If unique, stores the hash in Supabase.

- Logs every outcome, including errors and race conditions, in an audit table.

## Setup steps

- Connect your Google Drive account and select the folder to monitor.

- Connect your Supabase account and create the required tables:

```
file_hashes
```

```
dedup_audit_log
```


- Connect your Slack account and select a channel for duplicate alerts.

- Update the Duplicates folder ID in the Google Drive Move node.

Setup typically takes 10 to 15 minutes if your Supabase project is ready.

## 🔗 Nodes Used

Slack, Google Drive, Google Drive Trigger, Supabase

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
