# ⚙️ Scheduled n8n workflow backups to Google Drive using n8n API

> ⚡ **257 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Overview
This template provides an automatic backup solution for all your n8n workflows, saving them directly to Google Drive.
It’s designed for freelancers, agencies, and businesses that want to keep their automations safe, versioned, and always recoverable.

Why Backups Matter

Disaster recovery – Restore workflows quickly if your instance fails.

Version control – Track workflow changes over time.

Collaboration – Share workflow JSON files easily with teammates.

## How it Works
1. Fetches the complete list of workflows from your n8n instance via API.

2. Downloads each workflow in JSON format.
3. Converts the data into a file with a unique name (workflow name + ID).
4. Uploads all files to a chosen Google Drive folder.
5. Can be run manually or via an automatic schedule (daily, weekly, etc.).

## Requirements
- An active n8n instance with API access enabled
- API credentials for n8n (API key or basic auth)
- A Google account with access to Google Drive
- Google Drive credentials connected in n8n

## Setup Instructions
1. Connect your n8n API (authenticate your instance).  
2. Connect your Google Drive account.  
3. Select or create the Drive folder where backups will be stored.  
4. Customize the Schedule Trigger to define backup frequency.  
5. Run once to confirm files are stored correctly.

## Customization Options
Frequency → Set daily, weekly, or monthly backups.

File Naming → Adjust filename expression (e.g., {{workflowName}}-{{workflowId}}-{{date}}.json).

Folder Location → Store backups in separate Google Drive folders per project or client.

## Target Audience
This template is ideal for:

Freelancers managing multiple client automations.

Agencies delivering automation services.

Teams that rely on n8n for mission-critical workflows.

It reduces risk, saves time, and ensures you never lose your work.


⏱ Estimated setup time: 5–10 minutes.

## 🔗 Nodes Used

Google Drive, Convert to/from binary data, n8n, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
