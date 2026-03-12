# ⚙️ Restore n8n workflows from Google Drive backups

> ⚡ **1,103 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## **Restore All n8n Workflows from Google Drive Backups**

Restoring multiple n8n workflows manually, especially when **migrating your n8n instance to another host or server, can be an incredibly daunting and time-consuming task. Imagine having to individually export and then manually import hundreds of workflows; it's a recipe for errors and significant downtime.** 

This workflow provides a streamlined way to restore all your n8n workflows from backup JSON files stored in a designated Google Drive folder. It's an essential tool for disaster recovery, migrating workflows to a new n8n instance, or recovering from accidental deletions, ideally used in conjunction with a backup solution like our ["Auto Backup Workflows To Google Drive" template](https://aiautomationpro.org/products/n8n-auto-backup-workflows-to-google-drive/).

For more powerful n8n templates, visit our website or contact us at [**AI Automation Pro**](https://aiautomationpro.org/). We help your business build custom AI workflow automation and apps.

### Who is this for?

This template is intended for:

* **n8n Users and Administrators:** Who have previously backed up their n8n workflows as JSON files to Google Drive.  
* **Anyone needing to recover their n8n setup:** Whether due to system failure, data corruption, accidental deletions, or during an instance migration.

### What problem is this workflow solving? / use case

Restoring multiple n8n workflows manually can be a slow and error-prone process. This workflow solves that by:

* **Automating Bulk Restore:** Quickly re-imports all workflows from a specified Google Drive backup folder, drastically cutting down on manual effort.  
* **Disaster Recovery:** Enables rapid recovery of your automation environment, minimizing downtime after a system failure or data corruption.  
* **Simplified Instance Migration:** Makes the process of transferring your entire workflow suite to a new n8n server significantly more manageable and less error-prone compared to manual imports.  
* **Data Integrity:** Helps restore workflows to a known good state from your backups, ensuring consistency after a recovery or migration.

### What this workflow does

1. **Manual Trigger:** You initiate the workflow manually whenever a restore operation is needed.  
2. **List Backup Files:** The workflow accesses a *specific Google Drive folder* (which you must configure) and lists all the files within it. It assumes these are your n8n workflow JSON backup files.  
3. **Iterate and Process:** It then loops through each file found in the Google Drive folder:  
   * **Download Workflow:** Downloads the individual workflow JSON file from Google Drive.  
   * **Extract Content:** Parses the downloaded file to extract the JSON data representing the workflow.  
   * **Import to n8n:** Uses the n8n API to create a new workflow (or update an existing one if an ID match is found) in your current n8n instance using the extracted JSON data.  
   * **Wait Step:** Pauses for 3 seconds after attempting to create each workflow to help manage system load and avoid potential API rate-limiting issues.

## Step-by-step setup

1. **Import Template:** Upload the provided JSON file into your n8n instance.  
2. **Configure Credentials:**  
   * **Google Drive Nodes:** You will need to create or select existing Google Drive OAuth2 API credentials for these nodes.  
   * **n8n Node:** Configure your n8n API credentials to allow the workflow to create/update workflows in your instance.  
3. **Specify Google Drive Backup Folder (CRITICAL):**  
   * Open the **"Google Drive Get All Workflows"** node.  
   * Locate the **"Filter"** section, and within it, the **"Folder ID"** parameter. The default value is a placeholder URL.  
   * **You MUST change this URL to the direct URL of the Google Drive folder that contains your n8n workflow .json backup files.** This would typically be one of the hourly folders (e.g., `n8n_backup_YYYY-MM-DD_HH`) created by the companion backup workflow.  
4. **Activate Workflow:** Although manually triggered, the workflow needs to be active in your n8n instance to be runnable.

### How to customize this workflow to your needs

* **Selective Restore:**  
  * **Option 1 (Manual):** Before running the workflow, manually move only the specific workflow JSON files you want to restore into the source Google Drive folder configured in the "Google Drive Get All Workflows" node.  
  * **Option 2 (Automated Filter):** Insert an "Edit Fields" or "Filter" node after the "Google Drive Get All Workflows" node to programmatically select which files (e.g., based on filename patterns) should proceed to the "Loop Over Items" node for restoration.  
* **Adjust Wait Time:** The "Wait" node is set to 3 seconds. You can increase this if you have a very large number of workflows or if your n8n instance requires more time between API calls. Conversely, for smaller batches on powerful instances, you might decrease it.  
* **Error Handling:** For enhanced robustness, consider adding error handling branches (e.g., using "Error Trigger" nodes or "Continue on Fail" settings within nodes) to log or send notifications if a specific workflow fails to import.

### Important Considerations

* **Workflow Overwriting/Updating:** If a workflow with the same `id` as one in a backup JSON file already exists in your n8n instance, this restore process will typically **update/overwrite** that existing workflow with the version from the backup. If the `id` from the backup file does not correspond to any existing workflow, a new workflow will be created.  
* **Idempotency:** Running this workflow multiple times on the exact same backup folder will cause the workflow to re-process all files. This means workflows will be updated/overwritten again if they exist, or created if they don't. Ensure this is the intended behavior.  
* **Companion Backup Workflow:** This restore workflow is ideally paired with backups created by a process like our "Auto Backup Workflows To Google Drive" template, which saves workflows in the expected JSON format.  
* **Test Safely:** It's highly recommended to test this workflow on a non-production or development n8n instance first, especially when restoring a large number of critical workflows or if you're unsure about the overwrite behavior in your specific n8n setup.  
* **Source Folder Content:** Ensure the specified Google Drive folder *only* contains n8n workflow JSON files that you intend to restore. Other file types may cause errors in the "Extract from File" node.

## 🔗 Nodes Used

Google Drive, n8n, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
