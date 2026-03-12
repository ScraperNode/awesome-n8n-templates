# ⚙️ Restore workflows and credentials from remote FTP backup storage

> ⚡ **308 views** · ⚙️ [DevOps & CI/CD](../)

## Description

# Restore workflows & credentials from FTP - Remote Backup Solution

### This n8n template provides a safe and intelligent restore solution for self-hosted n8n instances, allowing you to restore workflows and credentials from FTP remote backups.

Perfect for disaster recovery or migrating between environments, this workflow automatically identifies your most recent FTP backup and provides a manual restore capability that intelligently excludes the current workflow to prevent conflicts. Works seamlessly with date-organized backup folders stored on any FTP/SFTP server.

**Good to know**
- This workflow uses n8n's native import commands (`n8n import:workflow` and `n8n import:credentials`)
- Works with date-formatted backup folders (YYYY-MM-DD) stored on FTP servers
- The restore process intelligently excludes the current workflow to prevent overwriting itself
- Requires FTP/SFTP server access and proper Docker volume configuration
- All downloaded files are temporarily stored server-side before import
- Compatible with backups created by n8n's export commands and uploaded to FTP
- Supports selective restoration: restore only credentials, only workflows, or both

### How it works

**Restore Process (Manual)**
1. Manual trigger with configurable pinned data options (credentials: true/false, worflows: true/false)
2. The Init node sets up all necessary paths, timestamps, and configuration variables using your environment settings
3. The workflow connects to your FTP server and scans for available backup dates
4. Automatically identifies the most recent backup folder (latest YYYY-MM-DD date)
5. Creates temporary restore folders on your local server for downloaded files
6. If restoring credentials:
   - Lists all credential files from FTP backup folder
   - Downloads credential files to temporary local folder
   - Writes files to disk using "Read/Write Files from Disk" node
   - Direct import using n8n's import command
   - Credentials are imported with their encrypted format intact
7. If restoring workflows:
   - Lists all workflow JSON files from FTP backup folder
   - Downloads workflow files to temporary local folder
   - Filters out the credentials subfolder to prevent importing it as a workflow
   - Writes workflow files to disk
   - Intelligently excludes the current restore workflow to prevent conflicts
   - Imports all other workflows using n8n's import command
8. Optional email notifications provide detailed restore summaries with command outputs
9. Temporary files remain on server for verification (manual cleanup recommended)

### How to use

**Prerequisites**
- Existing n8n backups on FTP server in date-organized folder structure (format: `/ftp-backup-folder/YYYY-MM-DD/`)
- Workflow backups as JSON files in the date folder
- Credentials backups in subfolder: `/ftp-backup-folder/YYYY-MM-DD/n8n-credentials/`
- FTP/SFTP access credentials configured in n8n
- For new environments: `N8N_ENCRYPTION_KEY` from source environment (see dedicated section below)

**Initial Setup**
1. Configure your environment variables:
   - `N8N_ADMIN_EMAIL`: Your email for notifications (optional)
   - `FTP_BACKUP_FOLDER`: FTP path where backups are stored (e.g., `/n8n-backups`)
   - `N8N_PROJECTS_DIR`: Projects root directory (e.g., `/files/n8n-projects-data`)
   - `GENERIC_TIMEZONE`: Your local timezone (e.g., `Europe/Paris`)
   - `N8N_ENCRYPTION_KEY`: Required if restoring credentials to a new environment (see dedicated section below)

2. Create your FTP credential in n8n:
   - Add a new FTP/SFTP credential
   - Configure host, port, username, and password/key
   - Test the connection

3. Update the Init node:
   - (Optional) Configure your email here: `const N8N_ADMIN_EMAIL = $env.N8N_ADMIN_EMAIL || 'youremail@world.com';`
   - Set `PROJECT_FOLDER_NAME` to `"Workflow-backups"` (or your preferred name)
   - Set `FTP_BACKUP_FOLDER` to match your FTP backup path (default: `/n8n-backups`)
   - Set `credentials` to `"n8n-credentials"` (or your backup credentials folder name)
   - Set `FTPName` to a descriptive name for your FTP server (used in notifications)

4. Configure FTP credentials in nodes:
   - Update the FTP credential in "List Credentials Folders" node
   - Verify all FTP nodes use the same credential
   - Test connection by executing "List Credentials Folders" node

5. Optional: Configure SMTP for email notifications:
   - Add SMTP credential in n8n
   - Activate "SUCCESS email Credentials" and "SUCCESS email Workflows" nodes
   - Or remove email nodes if not needed

**Performing a Restore**
1. Open the workflow and locate the "Start Restore" manual trigger node
2. Edit the pinned data to choose what to restore:
   ```json
   {
     "credentials": true,
     "worflows": true
   }
   ```
   - `credentials: true` - Restore credentials from FTP
   - `worflows: true` - Restore workflows from FTP (note: typo preserved from original)
   - Set both to `true` to restore everything
3. Update the node's notes to reflect your choice (for documentation)
4. Click "Execute workflow" on the "Start Restore" node
5. The workflow will:
   - Connect to FTP and find the most recent backup
   - Download selected files to temporary local folders
   - Import credentials and/or workflows
   - Send success email with detailed operation logs
6. Check the console logs or email for detailed restore summary

**Important Notes**
- The workflow automatically excludes itself during restore to prevent conflicts
- Credentials are restored with their encryption intact. If restoring to a new environment, you must configure the `N8N_ENCRYPTION_KEY` from the source environment (see dedicated section below)
- Existing workflows/credentials with the same names will be overwritten
- Temporary folders are created with date prefix (e.g., `2025-01-15-restore-credentials`)
- Test in a non-production environment first if unsure

### Critical: N8N_ENCRYPTION_KEY Configuration

**Why this is critical**: n8n generates an encryption key automatically on first launch and saves it in the `~/.n8n/config` file. However, if this file is lost (for example, due to missing Docker volume persistence), n8n will generate a NEW key, making all previously encrypted credentials inaccessible.

**When you need to configure N8N_ENCRYPTION_KEY**:
- Restoring to a new n8n instance
- When your data directory is not persisted between container recreations
- Migrating from one server to another
- As a best practice to ensure key persistence across updates

**How credentials encryption works**:
- Credentials are encrypted with a specific key unique to each n8n instance
- This key is auto-generated on first launch and stored in `/home/node/.n8n/config`
- When you backup credentials, they remain encrypted but the key is NOT included
- If the key file is lost or a new key is generated, restored credentials cannot be decrypted
- Setting `N8N_ENCRYPTION_KEY` explicitly ensures the key remains consistent

**Solution: Retrieve and configure the encryption key**

**Step 1: Get the key from your source environment**

```bash
# Check if the key is defined in environment variables
docker-compose exec n8n printenv N8N_ENCRYPTION_KEY
```

If this command returns nothing, the key is auto-generated and stored in n8n's data volume:

```bash
# Enter the container
docker-compose exec n8n sh

# Check configuration file
cat /home/node/.n8n/config

# Exit container
exit
```

**Step 2: Configure the key in your target environment**

**Option A: Using .env file (recommended for security)**

```bash
# Add to your .env file
N8N_ENCRYPTION_KEY=your_retrieved_key_here
```

Then reference it in `docker-compose.yml`:

```yaml
services:
  n8n:
    environment:
      - N8N_ENCRYPTION_KEY=${N8N_ENCRYPTION_KEY}
```

**Option B: Directly in docker-compose.yml (less secure)**

```yaml
services:
  n8n:
    environment:
      - N8N_ENCRYPTION_KEY=your_retrieved_key_here
```

**Step 3: Restart n8n**

```bash
docker-compose restart n8n
```

**Step 4: Now restore your credentials**

Only after configuring the encryption key, run the restore workflow with `credentials: true`.

**Best practice for future backups**:
- Always save your `N8N_ENCRYPTION_KEY` in a secure location alongside your backups
- Consider storing it in a password manager or secure vault
- Document it in your disaster recovery procedures

### Requirements

**FTP Server**
- FTP or SFTP server with existing n8n backups
- Read access to backup folder structure
- Network connectivity from n8n instance to FTP server

**Existing Backups on FTP**
- Date-organized backup folders (YYYY-MM-DD format)
- Backup files created by n8n's export commands or compatible format
- Credentials in subfolder structure: `YYYY-MM-DD/n8n-credentials/`

**Environment**
- Self-hosted n8n instance (Docker recommended)
- Docker volumes mounted with write access to project folder
- Access to n8n CLI commands (`n8n import:credentials` and `n8n import:workflow`)
- Proper file system permissions for temporary folder creation

**Credentials**
- FTP/SFTP credential configured in n8n
- Optional: SMTP credentials for email notifications

### Technical Notes

**FTP Connection and Download Process**
- Uses n8n's built-in FTP node for all remote operations
- Supports both FTP and SFTP protocols
- Downloads files as binary data before writing to disk
- Temporary local storage required for import process

**Smart Workflow Exclusion**
- During workflow restore, the current workflow's name is cleaned and matched against backup files
- This prevents the restore workflow from overwriting itself
- The exclusion logic handles special characters and spaces in workflow names
- A bash command removes the current workflow from the temporary restore folder before import

**Credentials Subfolder Filtering**
- The "Filter out Credentials sub-folder" node checks for binary data presence
- Only items with binary data (actual files) proceed to disk write
- Prevents the credentials subfolder from being imported as a workflow

**Timezone Handling**
- All timestamps use UTC for technical operations
- Display times use local timezone for user-friendly readability
- FTP backup folder scanning works with YYYY-MM-DD format regardless of timezone

**Security**
- FTP connections should use SFTP or FTPS for encrypted transmission
- Credentials are imported in n8n's encrypted format (encryption preserved)
- Temporary files stored in project-specific folders
- Consider access controls for who can trigger restore operations
- No sensitive credential data is logged in console output

### Troubleshooting

**Common Issues**
1. **FTP connection fails**: Verify FTP credentials are correctly configured and server is accessible
2. **No backups found**: Ensure the `FTP_BACKUP_FOLDER` path is correct and contains date-formatted folders (YYYY-MM-DD)
3. **Permission errors**: Ensure Docker user has write access to `N8N_PROJECTS_DIR` for temporary folders
4. **Path not found**: Verify all volume mounts in `docker-compose.yml` match your project folder location
5. **Import fails**: Check that backup files are in valid n8n export format
6. **Download errors**: Verify FTP path structure matches expected format (date folder / credentials subfolder / files)
7. **Workflow conflicts**: The workflow automatically excludes itself, but ensure backup files are properly named
8. **Credentials not restored**: Verify the FTP backup contains a `n8n-credentials` subfolder with credential files
9. **Credentials decrypt error**: Ensure `N8N_ENCRYPTION_KEY` matches the source environment

**Error Handling**
- "Find Last Backup" node has error output configured to catch FTP listing issues
- "Download Workflow Files" node continues on error to handle presence of credentials subfolder
- All critical nodes log detailed error information to console
- Email notifications include stdout and stderr from import commands

### Version Compatibility

- Tested with n8n version 1.113.3
- Compatible with Docker-based n8n installations
- Requires n8n CLI access (available in official Docker images)
- Works with any FTP/SFTP server (Synology NAS, dedicated FTP servers, cloud FTP services)

---

*This workflow is designed for FTP/SFTP remote backup restoration. For local disk backups, see the companion workflow "n8n Restore from Disk".*

*Works best with backups from: "Automated n8n Workflows & Credentials Backup to Local/Server Disk & FTP"*

## 🔗 Nodes Used

Send Email, FTP, Stop and Error, Filter, Read/Write Files from Disk

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
