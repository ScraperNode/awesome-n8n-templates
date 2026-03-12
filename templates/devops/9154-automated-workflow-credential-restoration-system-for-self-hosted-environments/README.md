# ⚙️ Automated workflow & credential restoration system for self-hosted environments

> ⚡ **242 views** · ⚙️ [DevOps & CI/CD](../)

## Description

# n8n Restore workflows & credentials from Disk - Self-Hosted Solution

### This n8n template provides a safe and intelligent restore solution for self-hosted n8n instances, allowing you to restore workflows and credentials from disk backups.

Perfect for disaster recovery or migrating between environments, this workflow automatically identifies your most recent backup and provides a manual restore capability that intelligently excludes the current workflow to prevent conflicts. Works seamlessly with date-organized backup folders.

**Good to know**
- This workflow uses n8n's native import commands (`n8n import:workflow` and `n8n import:credentials`)
- Works with date-formatted backup folders (YYYY-MM-DD) for easy version identification
- The restore process intelligently **excludes the current workflow** to prevent overwriting itself
- Requires proper Docker volume configuration and file system permissions
- All operations are performed server-side with no external dependencies
- Compatible with backups created by n8n's export commands

### How it works

**Restore Process (Manual)**
1. Manual trigger with configurable pinned data options (credentials: true/false, workflows: true/false)
2. The Init node sets up all necessary paths, timestamps, and configuration variables using your environment settings
3. The workflow scans your backup folder and automatically identifies the most recent backup
4. If restoring credentials:
   - Direct import from the latest backup folder using n8n's import command
   - Credentials are imported with their encrypted format intact
5. If restoring workflows:
   - Scans the backup folder for all workflow JSON files
   - Creates a temporary folder with all workflows from the backup
   - Intelligently excludes the current restore workflow to prevent conflicts
   - Imports all other workflows using n8n's import command
   - Cleans up temporary files automatically
6. Optional email notifications provide detailed restore summaries with command outputs

### How to use

**Prerequisites**
- Existing n8n backups in date-organized folder structure (format: `/backup-folder/YYYY-MM-DD/`)
- Workflow backups as JSON files in the date folder
- Credentials backups in subfolder: `/backup-folder/YYYY-MM-DD/n8n-credentials/`
- For new environments: `N8N_ENCRYPTION_KEY` from source environment (see dedicated section below)

**Initial Setup**
1. Configure your environment variables:
   - `N8N_ADMIN_EMAIL`: Your email for notifications (optional)
   - `N8N_BACKUP_FOLDER`: Location where your backups are stored (e.g., `/files/n8n-backups`)
   - `N8N_PROJECTS_DIR`: Projects root directory
   - `GENERIC_TIMEZONE`: Your local timezone
   - `N8N_ENCRYPTION_KEY`: Required if restoring credentials to a new environment (see dedicated section below)

2. Update the Init node:
   - (Optional) Configure your email here: `const N8N_ADMIN_EMAIL = $env.N8N_ADMIN_EMAIL || 'youremail@world.com';`
   - Set `PROJECT_FOLDER_NAME` to `"Workflow-backups"` (or your preferred name)
   - Set `credentials` to `"n8n-credentials"` (or your backup credentials folder name)
   - Verify `BACKUP_FOLDER` path matches where your backups are stored

3. Ensure your Docker setup has:
   - Mounted volume containing backups (e.g., `/local-files:/files`)
   - Access to n8n's CLI import commands
   - Proper file system permissions (read access to backup directories)

**Performing a Restore**
1. Open the workflow and locate the "Start Restore" manual trigger node
2. Edit the pinned data to choose what to restore:
   - `credentials: true` - Restore credentials
   - `workflows: true` - Restore workflows
   - Set both to `true` to restore everything
3. Click "Execute workflow" on the "Start Restore" node to execute the restore
4. The workflow will automatically find the most recent backup (latest date)
5. Check the console logs or optional email for detailed restore summary

**Important Notes**
- The workflow automatically excludes itself during restore to prevent conflicts
- Credentials are restored with their encryption intact. If restoring to a new environment, you must configure the `N8N_ENCRYPTION_KEY` from the source environment (see dedicated section below)
- Existing workflows/credentials with the same names will be overwritten
- Test in a non-production environment first if unsure

### ⚠ Critical: N8N_ENCRYPTION_KEY Configuration

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

**Existing Backups**
- Date-organized backup folders (YYYY-MM-DD format)
- Backup files created by n8n's export commands or compatible format

**Environment**
- Self-hosted n8n instance (Docker recommended)
- Docker volumes mounted with access to backup location
- Optional: SMTP server configured for email notifications

**Credentials (Optional)**
- SMTP credentials for email notifications (if using email nodes)

### Technical Notes

**Smart Workflow Exclusion**
- During workflow restore, the current workflow's name is cleaned and matched against backup files
- This prevents the restore workflow from overwriting itself
- The exclusion logic handles special characters and spaces in workflow names
- A temporary folder is created with all workflows except the current one

**Timezone Handling**
- All timestamps use UTC for technical operations
- Display times use local timezone for user-friendly readability
- Backup folder scanning works with YYYY-MM-DD format regardless of timezone

**Security**
- Credentials are imported in n8n's encrypted format (encryption preserved)
- Ensure backup directories have appropriate read permissions
- Consider access controls for who can trigger restore operations
- No sensitive data is logged in console output

### Troubleshooting

**Common Issues**
1. **No backups found**: Verify the `N8N_BACKUP_FOLDER` path is correct and contains date-formatted folders
2. **Permission errors**: Ensure Docker user has read access to backup directories
3. **Path not found**: Verify all volume mounts in `docker-compose.yml` match your backup location
4. **Import fails**: Check that backup files are in valid n8n export format
5. **Workflow conflicts**: The workflow automatically excludes itself, but ensure backup files are properly named
6. **Credentials not restored**: Verify the backup contains a `n8n-credentials` folder with credential files
7. **Credentials decrypt error**: Ensure `N8N_ENCRYPTION_KEY` matches the source environment

### Version Compatibility

- Tested with n8n version 1.113.3
- Compatible with Docker-based n8n installations
- Requires n8n CLI access (available in official Docker images)

---

*This workflow is designed for self-hosted server backup restoration. For FTP/SFTP remote backups, see the companion workflow "n8n Restore from FTP".*

*Works best with backups from: "Automated n8n Workflows & Credentials Backup to Local/Server Disk & FTP"*

## 🔗 Nodes Used

Send Email, Stop and Error

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
