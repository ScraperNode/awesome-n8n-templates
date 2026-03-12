# ⚙️ Restore and recover n8n credentials from Google Drive backups with duplication protection

> ⚡ **1,762 views** · ⚙️ [DevOps & CI/CD](../)

## Description

**This n8n workflow template uses community nodes and is only compatible with the self-hosted version of n8n.** 

## **Restore n8n Credentials from Google Drive Backup**

This template enables you to **restore your n8n credentials from a backup file in Google Drive**. It's an essential companion to a credential backup workflow, ensuring you can recover your setup in case of data loss, instance migration, or disaster recovery. The workflow **intelligently checks for existing credentials to prevent accidental overwrites of credentials** with the same name that are already present. This workflow is manually triggered.

We recommend you use this restore workflow in conjunction with a backup solution like our ["Auto Backup Credentials to Google Drive" template](https://aiautomationpro.org/products/n8n-auto-backup-credentials-to-google-drive/).

For more powerful n8n templates, visit our website or contact us at [**AI Automation Pro**](https://aiautomationpro.org/). We help your business build custom AI workflow automation and apps.

### Who is this for?

This workflow is for n8n administrators and users who have backed up their n8n credentials to Google Drive (e.g., using a companion backup template) and need to restore them to the same or a different n8n instance. It's crucial for those managing self-hosted instances.

### What problem is this workflow solving? / use case

If an n8n instance becomes corrupted, needs to be migrated, or if credentials are accidentally deleted, a manual re-creation of all credentials can be extremely time-consuming and error-prone. This workflow automates the restoration process from a known backup, saving significant time and ensuring accuracy. It's particularly useful for:

* Disaster recovery.  
* Migrating n8n instances.  
* Quickly setting up a new n8n instance with existing credentials.

### What this workflow does

The workflow is manually triggered and performs the following operations:

1. **Fetch Current Credentials:**  
   * An "On Click Trigger" starts the process.  
   * It executes the command `npx n8n export:credentials --all --decrypted` via the "Execute Command Get All Credentials" node to get a list of all credentials currently in your n8n instance.  
   * This list is then processed by "JSON Formatting Data" and "Aggregate Credentials" nodes to extract just the names of existing credentials for comparison.  
2. **Download Backup File from Google Drive:**  
   * The "Google Drive Get Credentials File" node searches your Google Drive for the `n8n_backup_credentials.json` file.  
   * The "Google Drive Download File" node then downloads the found file.  
3. **Process Backup Data:**  
   * The "Convert Files To JSON" (an Extract From File node) converts the downloaded file content, expected to be JSON, into a usable JSON object.  
   * "Split Out" nodes then process this data to handle individual credential entries from the backup file.  
4. **Loop and Restore Credentials:**  
   * The "Loop Over Items" (a SplitInBatches node) iterates through each credential from the backup file.  
   * **Duplicate Check:** For each credential, an "IF" node ("Check For Skipped Credentials") checks two conditions using an OR combinator:  
     * If the credential name from the backup (`$('Loop Over Items').item.json.name`) is empty.  
     * If a credential with the same name already exists in the current n8n instance (by checking against the list from the "Aggregate Credentials" node).  
   * **Conditional Restore:** If the credential name is NOT empty AND it does NOT already exist (i.e., the conditions in the IF node are false), the workflow proceeds to the "Restore N8n Credentials" node (an n8n API node). This node uses the `name`, `type`, and `data` for each new credential from the backup file to create it in the n8n instance. Credentials with empty names or those already present are skipped as they take the true path of the IF node, which loops back.  
   * A "Wait" node introduces a 1-second delay after each restoration attempt, to prevent API rate limiting before looping to the next item.

### Step-by-step setup

1. **n8n Instance Environment (for current credentials check):**  
   * The n8n instance must have access to `npx` and `n8n-cli` for the "Execute Command Get All Credentials" node to function.  
2. **Google Drive Credentials:**  
   * Configure the "Google Drive Get Credentials File" and "Google Drive Download File" nodes with your Google OAuth2 credentials.   
3. **n8n API Credentials:**  
   * Configure the "Restore N8n Credentials" node with your n8n API credentials. This API key needs permissions to manage credentials.   
4. **Backup File Name:**  
   * The workflow is configured to search for a file named `n8n_backup_credentials.json` in the "Google Drive Get Credentials File" node. If your backup file has a different name or you want to specify a path, update the "Query String" parameter in this node.

### How to customize this workflow to your needs

* **Backup File Location/Query:** Modify the "Google Drive Get Credentials File" node parameters if your backup file is in a specific folder, has a different naming convention, or if you want more specific query logic.  
* **Overwrite Logic:** The current workflow skips existing credentials by name. If you need to update/overwrite existing credentials, you would need to modify the logic in the "Check For Skipped Credentials" (IF) node and potentially use an "update" operation in the "n8n" API node if available for credentials (note: updates often require the credential ID, which might not be in the backup file).  
* **Notifications:** Add notification steps (e.g., Email, Slack) to report on the success or failure of the restoration process, and to list which credentials were restored or skipped.  
* **Selective Restore:** To restore only specific credentials, you could add a filter step after "Split Out1" or modify the IF condition in "Check For Skipped Credentials" to check for particular credential names or types from the backup file.  
* **Error Handling:** Implement more robust error handling for API errors (e.g., from the n8n API node or Google Drive nodes), file not found issues, or problems during command execution.

### Important Note on Credential Security 

* **Decrypted Backup File:** This workflow assumes the `n8n_backup_credentials.json` file contains decrypted credential data, typically created by a companion backup workflow.  
* **Execution Environment:** The "Execute Command Get All Credentials" node requires `npx n8n-cli` access on the server running n8n.

## 🔗 Nodes Used

Google Drive, n8n, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
