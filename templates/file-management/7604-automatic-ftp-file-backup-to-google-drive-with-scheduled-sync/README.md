# 📁 Automatic FTP file backup to Google Drive with scheduled sync

> ⚡ **203 views** · 📁 [File Management](../)

## Description

## What this workflow does
This workflow automatically **downloads files from an FTP folder** and **uploads them to Google Drive**.  
It’s useful for backup, reporting, or syncing data between systems.

## How it works
1. **Cron Trigger** runs on a schedule (default: every hour).  
2. **FTP List node** checks the specified folder on your FTP server.  
3. **FTP Download node** fetches each file found.  
4. **Google Drive Upload node** saves the file into your chosen Google Drive folder.

## Pre-conditions / Requirements
- An active FTP server with accessible login credentials.  
- A Google account with access to the Drive folder you want to sync into.  
- Make sure the target Google Drive folder exists, and copy its Folder ID.  
- Ensure files in your FTP folder have unique names if you want to avoid overwriting in Google Drive.


## Setup
- **FTP:** Add your FTP credentials and replace `{{FTP_FOLDER}}` with the path of the folder you want to sync.  
- **Google Drive:** Connect your Google Drive account and replace `{{GDRIVE_FOLDER_ID}}` with the folder ID where files should be stored.  
- Adjust the Cron schedule (e.g. daily, weekly) depending on how often you need the sync.

## Customization Options
- **File filtering:** Add an *IF node* after the FTP List node to only download files matching certain extensions (e.g., `.csv`, `.pdf`).  
- **File renaming:** Use a *Set node* to rename files before uploading to Google Drive (helpful for timestamping or avoiding duplicates).  
- **Archiving:** Add a second Google Drive or FTP Upload node to store processed files in an archive folder.  
- **Error handling:** Connect an *Error Trigger* to notify you via Slack or email if a file transfer fails.

## Benefits & Use Cases — FTP to Google Drive File Sync

## Benefits
- **Hands-free backups:** Automatically transfers files from FTP to Google Drive.  
- **Data security:** Ensures files are stored in cloud storage with built-in redundancy.  
- **Reliability:** Reduces risk of missed uploads or manual errors.  
- **Scalable:** Works with any FTP folder and Google Drive directory.


## Use Cases
- Regularly back up reports or exports from legacy systems (ERP, CRM, POS).  
- Sync daily logs or CSVs into Google Drive for analytics and team access.  
- Automate delivery of partner or client files without manual uploads.  
- Centralize files from multiple FTP sources into one Drive folder.

## 🔗 Nodes Used

Cron, Google Drive, FTP

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
