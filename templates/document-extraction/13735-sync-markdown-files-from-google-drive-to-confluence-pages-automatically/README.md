# 🔬 Sync markdown files from Google Drive to Confluence pages automatically

> ⚡ **45 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## How it Works
Save a .md file to the folder set in the triggers. This workflow will check every hour, convert the md file to HTML, and create a confluence page for it. If the md file is updated or changed in the folder, the workflow will check for a matching page in Confluence and update it.

## Setup Steps
* Ensure you have an Oauth2 connection set up with access to the Google Drive API.
* Point to the folder in 'File Created' / 'File Updated' triggers
* Create a scoped API token for Confluence with the 'write:confluence-content' and 'write:content:confluence' scopes, then add it as a header auth for your HTTP request nodes
* Add your Confluence Cloud ID to the URL in "Create Confluence Page", "Get Page ID", and "Update Confluence Page"

## 🔗 Nodes Used

HTTP Request, Google Drive, Google Drive Trigger, Markdown, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
