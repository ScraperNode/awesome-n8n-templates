# ⚙️ Automated n8n credential backups to Google Drive with scheduled execution

> ⚡ **2,277 views** · ⚙️ [DevOps & CI/CD](../)

## Description

**This n8n workflow template uses community nodes and is only compatible with the self-hosted version of n8n.** 
## **Auto Backup n8n Credentials to Google Drive**

This workflow automates the backup of all your n8n credentials. It can be triggered manually for on-demand backups or will run automatically on a schedule (default to daily execution). It executes a command to export decrypted credentials, formats them into a JSON file, and then uploads this file to a specified Google Drive folder. This process is essential for creating secure backups of your sensitive credential data, facilitating instance recovery or migration.

We recommend you use this backup workflow in conjunction with a restore solution like our ["Restore Credentials from Google Drive Backups" template](https://aiautomationpro.org/products/n8n-restore-credentials-from-google-drive-backups/).

For more powerful n8n templates, visit our website or contact us at [**AI Automation Pro**](https://aiautomationpro.org/). We help your business build custom AI workflow automation and apps.

### Who is this for?

This workflow is designed for n8n administrators and users who require a reliable method to back up their n8n credentials. It is particularly beneficial for those managing self-hosted n8n instances, where direct server access allows for command-line operations.

### What problem is this workflow solving? / use case

Managing and backing up n8n credentials manually can be a tedious task, susceptible to errors and often overlooked. This workflow solves the problem by providing an automated, secure, and consistent way to back up all credential data. The primary use case is to ensure that a recovery point for credentials exists, safeguarding against data loss, assisting in instance migrations, or for general disaster recovery preparedness, ideally on a regular, automated basis.

### What this workflow does

The workflow proceeds through the following steps:

1. **Triggers:** The workflow includes two types of triggers:  
   * **Manual Trigger:** An "On Click Trigger" allows for on-demand execution whenever needed.  
   * **Scheduled Trigger:** A "Schedule Trigger" is included, designed for automated daily backups.   
2. **Export Credentials:** An "Execute Command" node runs the shell command `npx n8n export:credentials --all --decrypted`. This command exports all credentials from the n8n instance in a decrypted JSON format.  
3. **Format JSON Data:** The output from the command is processed by a "Code" node ("JSON Formatting Data"). This node extracts, parses, and formats the JSON to ensure it is well-structured.  
4. **Aggregate Credentials:** An "Aggregate" node ("Aggregate Cridentials") combines individual credential entries into a single JSON array.  
5. **Convert to File:** The "Convert To File" node transforms the aggregated JSON array into a binary file, preparing it as `n8n_backup_credentials.json`.  
6. **Upload to Google Drive:** The "Google Drive Upload File" node uploads the generated JSON file to a specified folder in Google Drive.

### Step-by-step setup

To use this workflow, you'll need to configure a few things:

1. **n8n Instance Environment:**  
   * The n8n instance must have access to the `npx` command and the `n8n-cli` package.  
   * The "Execute Command" node must be able to run shell commands on the server where n8n is hosted.  
2. **Google Drive Credentials:**  
   * In the "Google Drive Upload File" node, select or create your Google Drive OAuth2 API credentials.   
3. **Google Drive Folder ID:**  
   * Update the `folderId` parameter in the "Google Drive Upload File" node with the ID of your desired Google Drive folder.  
4. **File Name (Optional):**  
   * The backup file will be named `n8n_backup_credentials.json`. You can customize this in the "Google Drive Upload File" node.  
5. **Configure Schedule Trigger:**  
   * The workflow includes a "Schedule Trigger". Review its configuration to ensure it runs daily at your preferred time.

### How to customize this workflow to your needs

* **Adjust Schedule:** Fine-tune the "Schedule Trigger" for different intervals (e.g., weekly, hourly) or specific days/times as per your requirements.  
* **Notifications:** Add notification nodes (e.g., Slack, Email, Discord) after the "Google Drive Upload File" node to receive alerts upon successful backup or in case of failures.  
* **Enhanced Error Handling:** Incorporate error handling branches using "Error Trigger" nodes or conditional logic to manage potential failures.  
* **Client-Side Encryption (Advanced):** If your security policy requires the backup file itself to be encrypted at rest in Google Drive, you can add a step *before* uploading. Insert a "Code" node or use an "Execute Command" node with an encryption utility (like GPG) to encrypt the `n8n_backup_credentials.json` file. Remember that you would then need a corresponding decryption process.  
* **Dynamic File Naming:** Modify the "Google Drive Upload File" node to include a timestamp in the filename (e.g., `n8n_backup_credentials_{{$now.toFormat('yyyyMMddHHmmss')}}.json`) to keep multiple versions of backups.

### Important Note on Credential Security 

To simplify the setup and use of this backup workflow, the exported credentials are stored in the resulting JSON file in a **decrypted state**. This means the backup file itself is not further encrypted by this workflow. Consequently, it is **critically important** to:

* Ensure the Google Drive account used for backups is highly secure (e.g., strong password, two-factor authentication).  
* Restrict access to the Google Drive folder where these backups are stored to only authorized personnel.

## 🔗 Nodes Used

Google Drive, Schedule Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
