# ⚙️ Auto-backup n8n workflows to OneDrive with cleanup & email notifications

> ⚡ **969 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Automatically BackUp Your n8n Workflows to OneDrive

This workflow automates the backup of your self-hosted n8n instance by exporting all workflows and saving them as individual `.json` files to a designated OneDrive folder. Each file is timestamped for easy versioning and audit tracking.

After a successful backup, the workflow optionally cleans up old backup files and sends a confirmation email to notify you that the process completed.

## How it works

1. Uses the **HTTP Request** node to fetch all workflows via the `/rest/workflows` API.
2. Iterates through each workflow using **SplitInBatches**.
3. Converts each workflow to a `.json` file using **Set** and **Function** nodes.
4. Uploads each file to a target **Microsoft OneDrive** folder using OAuth2.
5. Deletes old backup files from OneDrive after upload, with the option to keep backups for a configurable number of time.
6. Sends an email notification once all backups have completed successfully.

## Setup instructions

- Enter your **n8n Base URL** and authentication details in the HTTP Request node.
- Set up **Microsoft OneDrive OAuth2** credentials for cloud upload.
- Configure the **Email node** with SMTP credentials to receive backup confirmation.
- (Optional) Adjust the file retention logic to keep backups for a set duration.
- A **Cron** trigger to schedule the workflow automatically (e.g., daily or weekly).

👉 Sticky notes inside the workflow explain each step for easy setup.

## Need Help

- ## Need Help
🔗 [LinkedIn – Wessel Bulte](https://www.linkedin.com/in/wessel-bulte/)

## 🔗 Nodes Used

Microsoft OneDrive, Microsoft Outlook, n8n, Schedule Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
