# ⚙️ Automated daily workflow backups to Google Drive with cleanup

> ⚡ **106 views** · ⚙️ [DevOps & CI/CD](../)

## Description

# n8n Workflow Backup System

## 👥 Who's it for
This workflow is perfect for n8n users who want to **automatically backup all their workflows** 💾 to Google Drive with zero manual effort. Perfect for teams managing multiple workflows or anyone who values data safety! 🔒

## 🤖 What it does
It automatically creates daily backups of all your n8n workflows to Google Drive in readable JSON format, organizes them in dated folders, and cleans up old backups to save storage space. Set it and forget it! ✨

## ⚙️ How it works

### Spanish Version (Español) 🇪🇸
1. **⏰ Schedule Trigger** – Runs automatically every day at 4:00 AM
2. **📁 Create New Folder** – Creates a timestamped backup folder in Google Drive
3. **🔌 n8n API Connection** – Fetches all workflows from your n8n instance
4. **🔄 Loop Over Items** – Processes each workflow individually through two paths:
   - **Upper Path (Cleanup):**
     - 🗂️ Get Folders – Retrieves all existing backup folders
     - 🔍 Filter – Excludes the current folder
     - 🗑️ Delete Folder – Permanently removes old backups
   - **Lower Path (Backup):**
     - 📄 Convert to File – Transforms workflow to formatted JSON
     - ☁️ Google Drive – Saves JSON file to backup folder

### English Version 🇬🇧
*Identical functionality with English interface*

## 📋 Requirements

- **n8n instance** with API access enabled
- **Google Drive account** with sufficient storage
- **n8n API credentials** configured
- **Google Drive OAuth2 credentials** configured

## 🛠️ How to set up

1. **Configure n8n API credentials:**
   - Format: `https://your-instance.n8n.io/api/v1`
   - Generate API key from your n8n instance settings

2. **Set up Google Drive credentials:**
   - Connect your Google account via OAuth2
   - Grant necessary permissions for folder creation and file management

3. **Configure target folder:**
   - Create a parent folder in Google Drive (e.g., "N8N Backups")
   - Copy the folder ID from the URL
   - Update the `folderId` in "create new folder" nodes

4. **Adjust schedule (optional):**
   - Default: 4:00 AM daily
   - Modify `triggerAtHour` in Schedule Trigger node

5. **Test manually:**
   - Use the Manual Trigger to test before scheduling
   - Verify folders are created and files are saved correctly

6. **Activate the workflow** ✅

## 🎨 How to customize

- **Change backup frequency:** Modify Schedule Trigger settings (hourly, weekly, monthly)
- **Keep multiple backup versions:** Remove or modify the cleanup path to retain more history
- **Change folder naming:** Edit the folder name format in "create new folder" node (default: `Workflow Backups [day] [time] [date]`)
- **Backup to different location:** Change the parent folder ID
- **Add notifications:** Include email/Slack nodes to get backup completion alerts
- **Filter specific workflows:** Add Filter node after n8n node to backup only certain workflows

## ⚠️ Important Notes

- Old backups are **permanently deleted** by default to save space
- Ensure sufficient Google Drive storage for your workflow size
- API credentials must have read access to all workflows
- The workflow processes items sequentially to avoid rate limits

## 🔗 Nodes Used

Google Drive, n8n, Schedule Trigger, Filter, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
