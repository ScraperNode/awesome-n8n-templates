# ⚙️ Scheduled workflow backups from n8n to Google Drive with auto cleanup

> ⚡ **1,219 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## **Auto Backup n8n Workflows to Google Drive**

Imagine the sinking feeling: hours, weeks, or even months of meticulous work building your n8n workflows, suddenly gone. A server crash, an accidental deletion, data corruption, or an unexpected platform issue – and all your automated processes vanish. Without a reliable backup system, you're facing a complete rebuild from scratch, a scenario that's not just frustrating but can be catastrophic for business operations.

Furthermore, consider the daunting task of migrating your n8n instance to a new host or server. Manually exporting each workflow, one by one, then painstakingly importing them into the new environment is not only incredibly time-consuming, especially if you have tens or hundreds of workflows, but also highly prone to errors and omissions. You need a systematic, automated solution.

This workflow provides a robust solution for **automatically backing up all your n8n workflows to Google Drive on schedule** (default to every hour). It creates a uniquely named folder for each backup instance, incorporating the date and hour, and then systematically uploads each workflow as an individual JSON file. To manage storage space, the workflow also includes a cleanup mechanism that **deletes backup folders older than a user-defined retention period** (defaulting to 7 days). 

Ideally, this backup workflow should be used in conjunction with a restore solution like our ["Restore Workflows from Google Drive Backups" template](https://aiautomationpro.org/products/n8n-restore-workflows-from-google-drive-backups/).

For more powerful n8n templates, visit our website or contact us at [**AI Automation Pro**](https://aiautomationpro.org/). We help your business build custom AI workflow automation and apps.

### Feature highlights

* Triggers on schedule (default to hourly).  
* Creates a \`n8n\_backup\_YYYY-MM-DD\_HH\` folder in Google Drive.  
* Fetches all n8n workflows.  
* Saves each workflow as a JSON file to the new folder.  
* Deletes backup folders older than the 'Coverage Period' (default to 7 days).

### Who is this for?

This template is designed for:

* **n8n Administrators and Developers:** Who need a reliable, automated system to safeguard their workflows against accidental loss, corruption, or system issues.  
* **Proactive n8n Users:** Who want to maintain a version history of their workflows, enabling easy rollback to previous configurations if necessary.  
* **Organizations:** Seeking to implement disaster recovery and data integrity practices for their n8n automation infrastructure.

### What problem is this workflow solving? / use case

This workflow directly addresses these critical risks and challenges by:

* **Automating Backups:** Eliminates the manual effort and inconsistency of ad-hoc backups, ensuring your workflows are regularly and reliably saved.  
* **Preventing Data Loss:** Safeguards your valuable automation assets against unforeseen disasters by creating secure, versioned copies in Google Drive.  
* **Facilitating Migration & Recovery:** Provides the foundational backups needed for a smoother, more systematic migration or a full disaster recovery, allowing you to restore your operations efficiently.  
* **Version Control:** By storing scheduled backups (defaulting to hourly), it allows you to access and restore previous versions of your workflows, offering an undo capability for significant changes or corruptions.  
* **Storage Management:** Automatically removes old backups based on a configurable retention period, preventing excessive use of Google Drive storage while keeping a relevant history.

### What this workflow does

1. **Scheduled Trigger:** Runs automatically every hour.  
2. **Timestamping:** Fetches the current date and hour to create a unique name for the backup folder.  
3. **Folder Creation:** Creates a new folder in a specified Google Drive location. The folder is named in the format: `n8n_backup_YYYY-MM-DD_HH`.  
4. **Workflow Retrieval:** Connects to your n8n instance via its API and fetches a list of all existing workflows.  
5. **Individual Backup:** Processes each workflow one by one:  
   * Converts the workflow data to a binary JSON file.  
   * Uploads the JSON file (named after the workflow) to the hourly backup folder in Google Drive.  
   * Includes a short wait step between uploads to respect potential API rate limits.  
6. **Old Backup Deletion:**  
   * Calculates a cut-off date based on the "Coverage Period" set in the "Settings" node (e.g., 7 days prior to the current date).  
   * Searches Google Drive for backup folders (matching the naming convention) that are older than this cut-off date.  
   * Deletes these identified old backup folders to free up storage space.

### Step-by-step setup

1. **Import Template:** Upload the provided JSON file into your n8n instance.  
2. **Configure Credentials:**  
   * **Google Drive Nodes:** You will need to create or select existing Google Drive OAuth2 API credentials for these nodes.  
   * **n8n Node:** `n8n` (node that fetches workflows) Configure n8n API credentials to allow the workflow to access your instance's workflow data.  
3. **Specify Google Drive Backup Location:**  
   * Open the **"Google Drive Backup Folder Every Hour"** node.  
   * Under the "Drive ID" parameter: select it from the list or provide its ID.  
   * Under the "Folder ID" parameter: select or input the ID of the **parent folder** in Google Drive where you want the `n8n_backup_YYYY-MM-DD_HH` folders to be created (e.g., a general "n8n\_Backups" folder).  
4. **Set Backup Retention Period:**  
   * Open the **"Settings"** node.  
   * Modify the value for "Coverage Period" (default is `7`). This number represents the number of days backups should be kept before being deleted.  
5. **Activate Workflow:** Toggle the "Active" switch for the workflow in your n8n dashboard.

### How to customize this workflow to your needs

* **Backup Frequency:** Adjust the "Rule" in the **"Schedule Trigger"** node to change the backup interval (e.g., daily, specific times).  
* **Folder/File Naming:** Modify the expressions in the "Parameters" tab of the **"Google Drive Backup Folder Every Hour"** node (for folder name) or the **"Google Drive Upload Workflows"** node (for file name) if you require a different naming convention.  
* **Targeted Backups:** To back up only specific workflows, insert a "Filter" node after the **"n8n"** node to filter workflows based on criteria like name, tags, or ID before they reach the "Move Binary Data" node.  
* **Wait Time:** The **"Wait"** node is set to 3 seconds between uploads. If you have a very large number of workflows or encounter rate limiting, you might adjust this duration.  
* **Error Workflow:** The workflow is pre-configured with an "Error Workflow" setting. Ensure this error workflow exists in your n8n instance, or update the setting to point to your preferred error handling workflow. This can be used to send notifications on failure.

### Important Considerations

* **Resource Usage:** While the workflow includes a wait step between individual workflow uploads to minimize load, backing up an extremely large number of workflows could still consume resources on your n8n instance and make many API calls to Google Drive. Monitor performance if you have thousands of workflows.  
* **Testing Restore Process**: Regularly test restoring a few workflows from your Google Drive backups using the companion "Restore All n8n Workflows from Google Drive" template or a manual import. This verifies the integrity of your backups and ensures you can recover when needed.  
* **Workflow Modifications**: If you modify this backup workflow (e.g., change the folder naming convention), ensure your restore process or workflow is also updated to match these changes.

## 🔗 Nodes Used

Google Drive, Convert to/from binary data, n8n, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
