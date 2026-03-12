# 🎬 Automatically transfer FTP files to Google Drive with batch processing

> ⚡ **280 views** · 🎬 [Content Creation & Video](../)

## Description

## How it works

This workflow automates the transfer of files from an FTP server to Google Drive.  
It runs on a schedule, lists files in a defined FTP directory, and processes them in batches.  
Each file is downloaded sequentially from the FTP server and uploaded to Google Drive.  
The workflow ensures filenames are preserved for consistency during the sync process.

## Step-by-step

**1. Trigger the workflow**  
- **Schedule Trigger** – Starts the workflow automatically at set intervals.  

**2. List files from FTP**  
- **FTP (List Files)** – Retrieves a list of files from the FTP server path.  

**3. Batch process files**  
- **Split in Batches** – Breaks the file list into smaller chunks for sequential handling.  

**4. Download file from FTP**  
- **FTP (Download File)** – Downloads each file from the FTP server.  

**5. Upload to Google Drive**  
- **Google Drive (Upload File)** – Uploads the file to Google Drive while keeping its original filename.  

## Why use this?

- Automates repetitive FTP-to-cloud transfer tasks with no manual intervention.  
- Reduces system overload by processing files in manageable batches.  
- Ensures data backup from FTP servers directly into cloud storage.  
- Maintains file structure and filenames for easy reference and retrieval.  
- Provides reliable, scheduled synchronization between FTP and Google Drive.

## 🔗 Nodes Used

Google Drive, FTP, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
