# 📁 Export WordPress posts to CSV and upload to Google Drive

> ⚡ **1,825 views** · 📁 [File Management](../)

## Description

## Overview  
This n8n workflow automates the process of extracting published WordPress posts, converting them into a CSV file, and uploading it to Google Drive. It’s perfect for content backups, SEO audits, and data migration.  

## Features  
- Fetches all published posts from a WordPress website  
- Extracts key post details (ID, Title, Link)  
- Converts the extracted data into a CSV file  
- Uploads the CSV file to Google Drive for easy access and storage  

## Use Cases  
- **SEO Optimization**: Export post data for keyword analysis and performance tracking  
- **Automated Content Backup**: Store WordPress post details in Google Drive. You can add more fields to the Csv file if needed  

## Workflow Steps  

### 1. **Trigger Workflow Manually**  
The workflow starts when triggered manually in n8n.  

### 2. **Retrieve WordPress Posts**  
The workflow fetches all published posts using the WordPress API. It extracts:  
- Post ID  
- Title  
- Link  
- Rendered Content

### 3. **Format Data**  
The retrieved data is structured to ensure correct CSV formatting.  

### 4. **Convert to CSV File**  
The formatted data is transformed into a downloadable CSV file.  

### 5. **Upload to Google Drive**  
The CSV file is automatically uploaded to a specified Google Drive folder for easy access and storage.  

## How to Use  
1. Connect your WordPress and Google Drive accounts to n8n.  
2. Run the workflow manually or set up a scheduled trigger.  
3. Access the CSV file from your Google Drive folder.

## 🔗 Nodes Used

Google Drive, Wordpress, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
