# 📁 Automatic file renaming with timestamp format for Google Drive

> ⚡ **446 views** · 📁 [File Management](../)

## Description

**Description:**

Streamline your cloud storage with this powerful Google Drive File Renamer automation built with n8n. The workflow watches a specific Google Drive folder and automatically renames new files using a standardized format based on their creation date and time—ideal for organizing images, backups, and uploads with consistent timestamp-based names.
Whether you're managing daily uploads, sorting Instagram-ready content, or organizing client submissions, this timestamp-based file naming system ensures consistent and searchable file structures—without manual intervention.

**What This Template Does (Step-by-Step)**

🔔 Google Drive Trigger – "Watch Folder" Setup
- Monitors a specific folder (e.g., “Instagram”)
- Detects new file creations every minute
- Captures file metadata like ID, createdTime, and extension

🧠 Set Formatted Name
- Extracts file creation time (e.g., 2025-07-22T14:45:10Z)
- Converts it into a structured name like IMG_20250722_1445.jpg
- Keeps original file extension (JPG, PNG, PDF, etc.)

✏️ Rename File (Google Drive)
- Renames the original file using Google Drive API
- Applies the new timestamped name
- Keeps file content, permissions, and location unchanged


**Required Integrations:** Google Drive API (OAuth2 credentials)

**Best For:**

📸 Content creators organizing uploads from mobile
🏷️ Branding teams enforcing uniform naming
🗄️ Admins managing scanned documents or backups
📂 Automated archives for media, reports, or daily snapshots

**Key Benefits:**

✅ Timestamped naming ensures chronological file tracking
✅ Reduces human error and messy file names
✅ Works in real-time (polls every minute)
✅ No-code: Deploy with drag-and-drop setup in n8n
✅ Fully customizable name patterns (e.g., change IMG_ prefix)

## 🔗 Nodes Used

Google Drive, Google Drive Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
