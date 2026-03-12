# 📁 Sync new files from Google Drive with Airtable

> ⚡ **1,262 views** · 📁 [File Management](../)

## Description

This workflow automatically fetches newly uploaded files from a specific folder in Google Drive, shares them via email with specified recipients, and logs the file details (name, ID, created time, modified time) into Airtable for easy tracking. It streamlines the process of file sharing and management while keeping track of important metadata in a central place.
 
## Step-by-Step Instructions

### Google Drive Node (Fetch New File)
**Action:** 
This node fetches newly uploaded files from the specific folder you’ve mentioned in your Google Drive.

**Configuration:**
- Set the folder ID in the Google Drive node where the files are uploaded.
- Use the “New File in Folder” trigger to automatically detect new files added to the folder.

### Send Email Node (Share File via Email)
**Action:** 
After detecting the new file, this node shares the file via email with the recipient you specify.

**Configuration:**
- Set the recipient's email address.
- Include the file URL from the Google Drive node in the email body, allowing easy access to the file.
- Add the file name as part of the email subject or body to notify the recipient about the new file.

### Airtable Node (Store File Metadata)
**Action:** 
This node stores the file’s metadata, such as name, ID, creation time, modification time, and the email address to which it was sent, in your Airtable database.

**Configuration:**
- Set up Airtable with a table.
- Map the output from the Google Drive node to store the file metadata, and use the email address from the email node for tracking.

## About WeblineIndia
WeblineIndia specializes in delivering innovative and [custom AI solutions](https://www.weblineindia.com/ai-development.html) to simplify and automate business processes. If you need any help, please reach out to us.

## 🔗 Nodes Used

Airtable, Google Drive, Google Drive Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
