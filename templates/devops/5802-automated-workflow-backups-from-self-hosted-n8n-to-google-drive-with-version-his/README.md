# ⚙️ Automated workflow backups from self-hosted n8n to Google Drive with version history

> ⚡ **925 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## ✅ What problem does this workflow solve?

If you're using a **self-hosted n8n** instance, there's no built-in version history or undo for your workflows. If a workflow is accidentally modified or deleted, there's no way to roll back. This backup workflow solves that problem by automatically syncing your workflows to **Google Drive**, giving you version control and peace of mind.

---

## ⚙️ What does this workflow do?

- ⏱ Runs on a set schedule (e.g., daily or every 12 hours).
- 🔍 Fetches all workflows from your self-hosted n8n instance.
- 🧠 Detects changes to avoid duplicate backups.
- 📁 Creates a dedicated folder for each workflow in Google Drive.
- 💾 Uploads new or updated workflow files in JSON format.
- 🗃️ Keeps backup history organized by date.
- 🔄 Allows for easy restore by importing backed-up JSON into n8n.

---

## 🔧 Setup Instructions

### 1. Google Drive Setup
- Connect your Google Drive account using the **Google Drive node** in n8n.
- Choose or create a root folder (e.g., `n8n-workflow-backups`) where backups will be stored.

### 2. n8n API Credentials
- Generate a **Personal Access Token** from your self-hosted n8n instance:
  - Go to **Settings → API** in your n8n dashboard.
  - Copy the token and use it in the HTTP Request node headers as:
    ```
    Authorization: Bearer &lt;your_token&gt;
    ```

### 3. Schedule the Workflow
- Use the **Cron node** to schedule this workflow to run at your desired frequency (e.g., once a day or every 12 hours).

---

## 🧠 How it Works

### Step-by-Step Flow:

1. **Scheduled Trigger**
   - The workflow begins on a timed schedule using the Cron node.

2. **Fetch All Workflows**
   - Uses the n8n API (`/workflows`) to retrieve a list of all existing workflows.

3. **Loop Through Workflows**
   - For each workflow:
     - A **folder is created** in Google Drive using the workflow name.
     - The workflow’s last updated timestamp is checked against Google Drive backups.

4. **Smart Change Detection**
   - If the workflow has changed since the last backup:
     - A new `.json` file is uploaded to the corresponding folder.
     - The file is named with the last updated date of the workflow (`YYYY-MM-DD-HH-mm-ss.json`) to maintain a versioned history.
   - If no change is detected, the workflow is skipped.

---

## 🗂 Google Drive Folder Organization

Backups are neatly organized by workflow and version:

```
/n8n-workflow-backups/
├── google-drive-backup-KqhdMBHIyAaE7p7v/
│ ├── 2025-07-15-13-03-32.json
│ ├── 2025-07-14-03-08-12.json
├── resume-video-avatar-KqhdMBHIyAaE8p8vr/
│ ├── 2025-07-15-23-05-52.json
```

Each folder is named after the workflow's name+id and contains timestamped versions.

---

## 🔧 Customization Options

- 📅 **Change Backup Frequency**  
  Adjust the Cron node to run backups daily, weekly, or even hourly based on your needs.

- 📤 **Use a Different Storage Provider**  
  You can swap out Google Drive for Dropbox, S3, or another cloud provider with minimal changes.

- 🧪 **Add Workflow Filtering**  
  Only back up workflows that are **active** or match specific tags by filtering results from the n8n API.

---

## ♻️ How to Restore a Workflow from Backup

1. Go to the Google Drive backup folder for the workflow you want to restore.
2. Download the desired `.json` file (based on the date).
3. Open your self-hosted n8n instance.
4. Click **Import Workflow** from the sidebar menu.
5. Upload the JSON file to restore the workflow.

&gt; You can choose to overwrite an existing workflow or import it as a new one.

---

## 👤 Who can use this?

This template is ideal for:
- 🧑‍💻 Developers running **self-hosted n8n**
- 🏢 Teams managing large workflow libraries
- 🔐 Anyone needing workflow versioning, rollback, or disaster recovery
- 💾 Productivity enthusiasts looking for **automated backups**

---

## 📣 Tip

Consider enabling version history in Google Drive so you get **even more fine-grained backup recovery options** on top of what this workflow provides!

---

## 🚀 Ready to use?

Just plug in your **n8n token**, connect **Google Drive**, and schedule your backups. Your workflows are now protected!

## 🔗 Nodes Used

Google Sheets, Google Drive, n8n, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
