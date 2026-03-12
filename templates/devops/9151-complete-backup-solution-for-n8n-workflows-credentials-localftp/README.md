# ⚙️ Complete backup solution for n8n workflows & credentials (local/FTP)

> ⚡ **2,118 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Automated n8n Workflows & Credentials Backup to Local/Server Disk & FTP

Complete backup solution that saves both workflows and credentials to local/server disk with optional FTP upload for off-site redundancy.

**What makes this workflow different:**
* Backs up workflows AND credentials together
* Saves to **local/server** disk (not Git, GitHub, or any cloud services)
* Optional **FTP upload** for redundancy (disabled by default)
* Comprehensive error handling and email notifications
* **Timezone-aware** scheduling
* Ready to use with minimal configuration

### How it works

**Backup Process (Automated Daily at 4 AM):**
1. **Initialisation** - Sets up timezone-aware timestamps and configurable backup paths for both local/server disk and FTP destinations
2. **Folder Creation** - Creates date-stamped backup directories (YYYY-MM-DD format) on local/server disk
3. **Dual Backup Operations** - Processes credentials and workflows in two separate branches:
   - **Credentials Branch**:
     - Exports n8n credentials using the built-in CLI command with backup flag
     - Lists exported credential files in the credentials folder
     - Reads each credential file from disk
     - *Optional*: Uploads to FTP server (disabled by default)
     - *Optional*: Logs FTP upload results for credentials
   - **Workflows Branch**:
     - Retrieves all workflows via n8n API
     - Cleans workflow names for cross-platform compatibility
     - Converts workflows to formatted JSON files
     - Writes files to local/server disk
     - *Optional*: Uploads to FTP server (disabled by default)
     - *Optional*: Logs FTP upload results for workflows
4. **Data Aggregation** - Combines all workflow data with binary attachments for comprehensive reporting
5. **Results Merging** - Consolidates credentials FTP logs, workflows FTP logs, and aggregated workflow data
6. **Summary Generation** - Creates detailed backup logs including:
   - Statistics (file counts, sizes, durations)
   - Success/failure tracking for local and FTP operations
   - Error tracking with detailed messages
   - Timezone-aware timestamps
7. **Notifications** - Sends comprehensive email reports with log files attached and saves execution logs to disk

### How to use

**Initial Setup:**

1. **Configure the Init Node** - Open the "Init" node and customize these key parameters in the "Workflow Standard Configuration" section:
   ```javascript
   // Admin email for notifications
   const N8N_ADMIN_EMAIL = $env.N8N_ADMIN_EMAIL || 'youremail@world.com';
   
   // Workflow name (auto-detected)
   const WORKFLOW_NAME = $workflow.name;
   
   // Projects root directory on your server
   const N8N_PROJECTS_DIR = $env.N8N_PROJECTS_DIR || '/files/n8n-projects-data';
   // projects-root-folder/
   //   └── Your-project-folder-name/
   //       ├── logs/
   //       ├── reports/
   //       ├── ...
   //       └── [other project files]
   
   // Project folder name for this backup workflow
   const PROJECT_FOLDER_NAME = "Workflow-backups";
   ```
   
   Then customize these parameters in the "Workflow Custom Configuration" section:
   ```javascript
   // Local backup folder (must exist on your server)
   const BACKUP_FOLDER = $env.N8N_BACKUP_FOLDER || '/files/n8n-backups';
   
   // FTP backup folder (root path on your FTP server)
   const FTP_BACKUP_FOLDER = $env.N8N_FTP_BACKUP_FOLDER || '/n8n-backups';
   
   // FTP server name for logging (display purposes only)
   const FTPName = 'Synology NAS 2To';
   ```
   
   These variables can also be set as environment variables in your n8n configuration.

2. **Set Up Credentials:**
   - Configure n8n API credentials for the "Fetch Workflows" node
   - Configure SMTP credentials for email notifications
   - *Optional*: Configure FTP credentials if you want to enable off-site backups

3. **Configure Backup Folder:**
   - Ensure the backup folder path exists on your server
   - Verify proper write permissions for the n8n process
   - If running in Docker, ensure volume mapping is correctly configured

4. **Customize Email Settings:**
   - Update the "Send email" node with your recipient email address or your "N8N_ADMIN_EMAIL" environment value
   - Adjust email subject and body text as needed

**Enabling FTP Upload (Optional):**

By default, FTP upload nodes are disabled for easier setup. To enable off-site FTP backups:

1. **Simply activate these 4 nodes** (no other changes needed):
   - "Upload Credentials To FTP"
   - "FTP Logger (credentials)"
   - "Upload Workflows To FTP"  
   - "FTP Logger (workflows)"

2. **Configure FTP credentials** in the two upload nodes

3. The workflow will automatically handle FTP operations and include upload status in reports

### Requirements
- n8n API credentials (for workflow fetching)
- SMTP server configuration (for email notifications)
- Adequate disk space for local backup storage
- Proper file system permissions for backup folder access
- Docker environment with volume mapping (if running n8n in Docker)
- *Optional*: FTP server access and credentials (for off-site backups)

### Good to know

- **Security**: Credentials are exported using n8n's secure backup format - actual credential values are not exposed in plain text
- **Timezone Handling**: All timestamps respect configured timezone settings (defaults to Europe/Paris, configurable in Init node)
- **File Naming**: Automatic sanitization ensures backup files work across different operating systems (removes forbidden characters, limits length to 180 characters)
- **FTP Upload**: Disabled by default for easier setup - simply activate 4 nodes to enable off-site backups without any code changes
- **Connection Resilience**: FTP operations include error handling for timeout and connection issues without failing the entire backup
- **Graceful Degradation**: If FTP nodes are disabled, the workflow completes successfully with local backups only and indicates FTP status in logs
- **Error Handling**: Comprehensive error catching with detailed logging and email notifications
- **Dual Logging**: Creates both JSON logs (for programmatic parsing) and plain text logs (for human readability)
- **Storage**: Individual workflow JSON files allow for selective restore and easier version control integration
- **Scalability**: Handles any number of workflows efficiently with detailed progress tracking
---

*This automated backup workflow saves your n8n data to both local disk and FTP server. To restore your backups, use:*
- [*"n8n Restore from Disk - Self-Hosted Solution" for local/server disk restores*](https://n8n.io/workflows/9154-automated-workflow-and-credential-restoration-system-for-self-hosted-environments/)
- [*"n8n Restore from FTP - Remote Backup Solution" for FTP remote restores*](https://n8n.io/workflows/9156-restore-workflows-and-credentials-from-remote-ftp-backup-storage/)

## 🔗 Nodes Used

Send Email, FTP, Stop and Error, n8n, Schedule Trigger, Read/Write Files from Disk

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
