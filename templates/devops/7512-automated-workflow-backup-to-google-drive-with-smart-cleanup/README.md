# ⚙️ Automated workflow backup to Google Drive with smart cleanup

> ⚡ **2,955 views** · ⚙️ [DevOps & CI/CD](../)

## Description

**How it works**

This workflow provides a complete, automated backup solution for your n8n instance, running on a daily schedule to ensure your automations are always safe.

* **Automatic cleanup:** It first connects to your Google Drive to find and delete old backup folders, keeping your storage clean and organized based on a retention number you set.
* **Daily folder creation:** It then creates a new, neatly dated folder to store the current day's backup.
* **Fetches & saves workflows:** Finally, it uses the n8n API to get a list of all your workflows, converts each one to a `.json` file, and uploads them to the newly created folder in Google Drive.

**Set up steps**

**Setup time: ~3 minutes**

This template is designed to be as plug-and-play as possible. All configurations are grouped in a single node for quick setup.

* **Connect your accounts:** Authenticate the `Google Drive` and `n8n API` nodes with your credentials.
* **Configure main settings:** Open the `Set` node named **"CONFIG - Set your variables here"** and:
    * Paste the ID of your main Google Drive folder where backups will be stored.
    * Adjust the number of recent backups you want to keep.
* **Activate workflow:** Turn on the workflow. Your automated backup system is now active.

For more detailed instructions, including how to find your Google Drive folder ID, please refer to the sticky notes inside the workflow.

## 🔗 Nodes Used

Google Drive, n8n, Schedule Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
