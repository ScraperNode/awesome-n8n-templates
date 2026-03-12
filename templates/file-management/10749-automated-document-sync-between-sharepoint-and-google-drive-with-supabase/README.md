# 📁 Automated document sync between SharePoint and Google Drive with Supabase

> ⚡ **158 views** · 📁 [File Management](../)

## Description

#  SharePoint → Supabase → Google Drive Sync Workflow

##  Overview
This workflow is a **multi-system document synchronization pipeline** built in **n8n**, designed to automatically sync and back up files between **Microsoft SharePoint**, **Supabase/Postgres**, and **Google Drive**.

It runs on a **scheduled trigger**, compares SharePoint file metadata against your Supabase table, **downloads new or updated files**, **uploads them to Google Drive**, and marks records as completed — keeping your databases and storage systems perfectly in sync.

---

##  Workflow Structure
- **Data Source:** SharePoint REST API for recursive folder and file discovery.  
- **Processing Layer:** n8n logic for filtering, comparison, and metadata normalization.  
- **Destination Systems:** Supabase/Postgres for metadata, Google Drive for file backup.

---

##  SharePoint Sync Flow (Frontend Flow)

- **Trigger:** `Schedule Trigger`  
  Runs at fixed intervals (customizable) to start synchronization.

- **Fetch Files:** `Microsoft SharePoint HTTP Request`  
  Recursively retrieves folders and files using SharePoint’s REST API:  
  `/GetFolderByServerRelativeUrl(...)?$expand=Files,Folders,Folders/Files,Folders/Folders/Folders/Files`

- **Filter Files:** `filter files`  
  A **Code node** that flattens nested folders and filters unwanted file types:  
  - Excludes system or temporary files (`~$`)  
  - Excludes extensions: `.db`, `.msg`, `.xlsx`, `.xlsm`, `.pptx`

- **Normalize Metadata:** `normalize last modified date`  
  Ensures consistent `Last_modified_date` format for accurate comparison.

- **Fetch Existing Records:** `Supabase (Get)`  
  Retrieves current entries from `n8n_metadata` to compare against SharePoint files.

- **Compare Datasets:** `Compare Datasets`  
  Detects **new or modified** files based on `UniqueId`, `Last_modified_date`, and `Exists`.  
  Routes only changed entries forward for processing.

---

##  File Processing Engine (Backend Flow)

- **Loop:** `Loop Over Items2`  
  Iterates through each new or updated file detected.

- **Build Metadata:** `get metadata` and `Set metadata`  
  Constructs final metadata fields:
  - `file_id`, `file_title`, `file_url`, `file_type`, `foldername`, `last_modified_date`  
  Generates `fileUrl` using `UniqueId` and `ServerRelativeUrl` if missing.

- **Upsert Metadata:** `Insert Document Metadata`  
  Inserts or updates file records in Supabase/Postgres (`n8n_metadata` table).  
  Operation: `upsert` with `id` as the primary matching key.

- **Download File:** `Microsoft SharePoint HTTP Request1`  
  Fetches the binary file directly from SharePoint using its `ServerRelativeUrl`.

- **Rename File:** `rename files`  
  Renames each downloaded binary file to its original `file_title` before upload.

- **Upload File:** `Upload file`  
  Uploads the renamed file to **Google Drive** (`My Drive` → `root` folder).

- **Mark Complete:** `Postgres`  
  Updates the Supabase/Postgres record setting `Loading Done = true`.

- **Optional Cleanup:** `Supabase1`  
  Deletes obsolete or invalid metadata entries when required.

---

##  Integrations Used
| Service | Purpose | Credential |
|----------|----------|-------------|
| **Microsoft SharePoint** | File retrieval and download | `microsoftSharePointOAuth2Api` |
| **Supabase / Postgres** | Metadata storage and synchronization | `Supabase account 6 ayan` |
| **Google Drive** | File backup and redundancy | `Google Drive account 6 rn dbt` |
| **n8n Core** | Flow control, dataset comparison, batch looping | Native |

---

##  System Prompt Summary
&gt; “You are a SharePoint document synchronization workflow.  
Fetch all files, compare them to database entries, and only process new or modified files.  
Download files, rename correctly, upload to Google Drive, and mark as completed in Supabase.”  

Workflow rule summary:  
&gt; “Maintain data integrity, prevent duplicates, handle retries gracefully, and continue on errors.  
Skip excluded file types and ensure reliable backups between all connected systems.”

---

##  Key Features
-  Scheduled automatic sync across SharePoint, Supabase, and Google Drive  
- Intelligent comparison to detect only new or modified files  
-  Idempotent upsert for consistent metadata updates  
-  Configurable file exclusion filters  
-  Safe rename + upload pipeline for clean backups  
-  Error-tolerant and fully automated operation  

---

##  Summary
&gt; A reliable, **SharePoint-to-Google Drive synchronization workflow** built with **n8n**, integrating **Supabase/Postgres** for metadata management.  
It automates file fetching, filtering, downloading, uploading, and marking as completed — ensuring your data stays mirrored across platforms.

Perfect for enterprises managing **document automation**, **backup systems**, or **cross-cloud data synchronization**.

---
#### Need Help or More Workflows?
Want to customize this workflow for your organization?  
Our team at Digital Biz Tech can extend it for enterprise-scale document automation, RAGs and social media automation.

 We can help you set it up for free — from connecting credentials to deploying it live.

Contact: [rajeet.nair@digitalbiz.tech](mailto:rajeet.nair@digitalbiz.tech)   
Website: [https://www.digitalbiz.tech](https://www.digitalbiz.tech)  
LinkedIn: [https://www.linkedin.com/company/digital-biz-tech/](https://www.linkedin.com/company/digital-biz-tech/)  
You can also DM us on LinkedIn for any help.

---

## 🔗 Nodes Used

HTTP Request, Postgres, Google Drive, Supabase, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
