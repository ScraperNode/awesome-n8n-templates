# ⚙️ Automated n8n workflow backup system with Google Drive and archiving

> ⚡ **546 views** · ⚙️ [DevOps & CI/CD](../)

## Description

**[Click here to access this Workflow for free](https://www.bonzai.pro/auth?action=buyPrice%2Cpri_KlOK_5247)**.

---

# Automatically save and archive your workflows
![image.png](fileId:1736)

This workflow provides a fully automated system for backing up your n8n workflows to Google Drive. It runs on a schedule (which you can customize) and saves each workflow as a `.json` file, named after the workflow itself. All active workflows are backed up by default and stored in a specified Google Drive folder of your choice.

A special feature of this workflow is its ability to archive and clean up old workflows. If you tag a workflow with `ARCHIVE` (case-sensitive), the workflow will be backed up into a designated `Archive` subfolder inside your main Google Drive folder — and then **automatically deleted from your n8n instance**. This keeps your workspace clean and reduces clutter while ensuring everything is safely stored.

### Requirements

- A Google Drive account connected to n8n (via OAuth2 or preferred method)
- An n8n instance with access to your workflows
- A folder in Google Drive for storing backups
  - Inside this folder, create a subfolder named `Archive`
- **Folder IDs for both the main and archive folders** (*Find it in folder's URL e.g. https://drive.google.com/drive/u/0/folders/**1F7Exr2xkZQFvmHmjdFD43K0jfd***)

### Setup

1. In your Google Drive, create a main folder for storing backups.
2. Inside it, create a subfolder called `Archive`.
3. **Retrieve the folder IDs for both folders**
4. In n8n, connect your Google Drive credentials.
5. Open the workflow and insert the folder IDs in the appropriate nodes.
6. Optionally, edit the schedule trigger to set your preferred backup frequency.

### Usage

Once configured, the workflow will:
- Run automatically on the defined schedule
- Back up all existing workflows into your Drive
- For workflows tagged with `ARCHIVE`:
  - Save them into the `Archive` subfolder
  - Delete them from your n8n instance

The workflow ensures your automation logic is safely versioned, with optional cleanup for outdated or unused flows.

### Customization

You can modify the schedule to run daily, weekly, or at any custom interval using the built-in Cron node.

You can also change the folder structure or naming conventions in the Google Drive nodes to match your personal or team preferences.

Workflows are archived only if they are explicitly tagged with `ARCHIVE` — this tag is **case-sensitive**.

---
### If you need any help, or have any question, feel free to come discuss about it on **[Telegram](https://www.bonzai.pro/theo_marcadet/lp/7018)**

## 🔗 Nodes Used

Google Drive, n8n, Schedule Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
