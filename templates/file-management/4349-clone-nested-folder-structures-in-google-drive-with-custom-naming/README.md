# 📁 Clone nested folder structures in Google Drive with custom naming

> ⚡ **195 views** · 📁 [File Management](../)

## Description

# Google Drive Nested Folder Structure Cloner

## How it works
* Takes any Google Drive folder structure and creates an exact copy with custom naming
* Perfect for agencies, consultants, or anyone who needs identical folder structures for multiple projects
* Creates folder hierarchy only (no files are copied)
* Handles nested folders automatically with level-by-level processing

## Set up steps
* Get your source and destination folder IDs from Google Drive URLs
* Edit the 3 variables in the CONFIG node (takes 30 seconds)
* Connect your Google Drive credentials in n8n
* Run the workflow and watch it create your folder structure
* For deeply nested folders, run multiple times to process each level

## What you'll need
* Google Drive account with API access configured in n8n
* Read permissions on source folder, write permissions on destination folder

## Pro tips
* Create a "Templates" folder in Google Drive for your reusable structures
* The workflow intelligently skips folders that already exist
* Each run processes the next level down for nested structures
* Check the final report to see exactly what was created, skipped, or failed

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
