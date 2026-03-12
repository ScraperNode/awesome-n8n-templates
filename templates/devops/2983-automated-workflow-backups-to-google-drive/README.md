# ⚙️ ✨😃Automated workflow backups to Google Drive

> ⚡ **5,152 views** · ⚙️ [DevOps & CI/CD](../)

## Description

# ✨😃 Automated Workflow Backups to Google Drive

This workflow automates the process of backing up your n8n workflows to Google Drive daily. It creates timestamped folders, saves workflows as JSON files, and manages old backups by retaining only the most recent seven days of data. Notifications are sent via Telegram to keep you informed of the backup status.

## How It Works

### Backup Creation Process 🗂️
- **Triggering Backups**: The workflow starts with either a manual trigger or a scheduled trigger that runs daily.
- **Folder Creation**: Creates a new folder in Google Drive with a timestamped name (e.g., `n8n-Workflow-Backups-YYYY-MM-DD`).
- **Workflow Retrieval**: Fetches all workflows from your n8n instance.
- **File Conversion**: Converts each workflow into a JSON file for storage.
- **File Upload**: Saves the JSON files into the newly created Google Drive folder.

### Backup Management 🔄
- **Folder Search**: Searches for existing backup folders in Google Drive with names matching `n8n-Workflow-Backups`.
- **Retention Policy**: Identifies folders older than seven days using a custom JavaScript function and deletes them permanently to free up space.

### Notifications 📲
- **Telegram Alerts**: Sends a message via Telegram once the backup process is complete, including the folder name and a link to access it in Google Drive.

## Setup Steps

### API Configuration 🔑
1. **Google Drive Integration**:
   - Set up Google Drive OAuth2 credentials in n8n.
   - Specify the root folder or desired location for backups.
2. **n8n API Access**:
   - Configure n8n API credentials to allow fetching workflows.
3. **Telegram Notifications**:
   - Add your Telegram bot credentials and chat ID for notification delivery.

### Workflow Customization ⚙️
1. Define the schedule for automatic backups (e.g., daily at midnight).
2. Adjust the retention period if you need more or fewer days of backups.
3. Customize the Telegram message format as needed.

### Testing & Deployment 🚀
1. Run the workflow manually to verify folder creation and file uploads.
2. Check that old folders are deleted correctly after seven days.
3. Confirm Telegram notifications are sent with accurate details.

## Use Case Scenarios
This workflow is perfect for teams or individuals who want to ensure their n8n workflows are securely backed up and organized. It is especially useful for:
- Protecting against accidental data loss.
- Automating routine administrative tasks.


By combining automated backups, retention management, and real-time notifications, this workflow ensures your n8n workflows are always safe and accessible!

## 🔗 Nodes Used

Telegram, Google Drive, n8n, Schedule Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
