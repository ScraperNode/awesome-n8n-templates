# ⚙️ Back up workflows from multiple n8n instances to Google Drive

> ⚡ **29 views** · ⚙️ [DevOps & CI/CD](../)

## Description

Back up n8n workflows to Google Drive automatically
This workflow provides a robust solution for backing up your n8n workflows to Google Drive. It is designed to handle backups for multiple n8n instances centrally and leverages Google Drive's native file versioning to keep your history clean. 🚀

✨ Key Features
🔄 Smart Version Control: Instead of creating a new file for every backup, this workflow checks if the file exists and updates it. This utilizes Google Drive's built-in "Manage Versions" feature, allowing you to rollback changes without cluttering your folder.

🌍 Multi-Instance Support: Easily backup workflows from multiple n8n servers (e.g., Development, Production) in one go.

⚡ Efficiency: Filters out inactive or archived workflows to save resources.

🧩 Self-Contained Logic: Uses a recursive design to process workflows efficiently.

⚙️ How It Works
The workflow operates in two main stages:

Fetch & Dispatch:

Run daily: The workflow triggers on a schedule.

Fetch workflows: It connects to your configured n8n instances via the n8n Public API to retrieve all active workflows.

It then batches the data and configures the target folders for each host.

Core Backup Logic:

Process backup recursively: The workflow calls itself to process the list.

Drive Comparison: It lists files in the target Google Drive folder and compares them with the n8n workflows.

Smart Sync:

🆕 New: If the workflow doesn't exist on Drive, it uploads a new file.

♻️ Update: If the workflow exists but has been modified, it updates the existing file (preserving the file ID and history).

📝 Setup Instructions
1. 🔑 Credentials
Set up Google Drive OAuth2 API credentials.

Set up n8n API credentials for each instance you want to backup.

2. 📂 Configure Folder IDs
Create a folder in Google Drive for your backups and copy the Folder ID from the URL.

Open the nodes named Config Host 1 (and Config Host 2, etc.).

Replace the value for targetFloderId with your actual Google Drive Folder ID.

3. 🔗 Link the Sub-Workflow
⚠️ Important: This workflow calls itself to process the data recursively.

Open the node named Process backup recursively.

Ensure the Workflow ID field is pointing to this workflow's ID (you can select it from the list after saving the workflow for the first time).

🛠️ Requirements
n8n Service Account or API Key.

Google Cloud Console Project with Google Drive API enabled.

## 🔗 Nodes Used

Google Drive, Execute Sub-workflow, n8n, Execute Workflow Trigger, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
