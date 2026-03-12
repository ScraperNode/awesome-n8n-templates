# ⚙️ Automate workflow & credentials backup to S3 with retention management

> ⚡ **657 views** · ⚙️ [DevOps & CI/CD](../)

## Description

This n8n template automates daily backups of workflows and credentials to S3-compatible storage with automatic retention management. Designed for self-hosted n8n instances requiring disaster recovery protection.

The workflow has three tasks: backs up all workflows via n8n API, exports and stores credentials securely, and automatically deletes outdated backups based on configurable retention policies. Perfect for administrators needing automated backup solutions with storage cost management.

## Target Audience

- **n8n Administrators**: Managing production n8n instances requiring reliable backup solutions
- **DevOps Teams**: Implementing disaster recovery strategies for automation infrastructure  
- **IT Managers**: Ensuring business continuity and compliance for critical automation workflows
- **System Administrators**: Maintaining secure, automated backup processes for workflow management platforms

## How it works

The workflow operates through three synchronized branches that execute automatically on a daily schedule:

**Workflow Backup Process**: The schedule trigger initiates daily backups, retrieving all workflows via the n8n API and storing them as timestamped JSON files in your S3 bucket.

**Retention Management**: Simultaneously, the system lists existing backup files, extracts dates from filenames, applies retention policies to identify outdated backups, and automatically deletes files beyond the configured retention period.

**Credential Backup**: In parallel, the workflow exports all n8n credentials to a temporary file, uploads the encrypted credential data to S3 storage, and securely removes temporary files from the local system.

## Prerequisites

Before implementing this template, ensure you have the following requirements in place:

**Self-Hosted n8n Instance**: This template requires a self-hosted n8n installation with file system access for credential export functionality. Cloud-hosted n8n instances cannot export credentials due to security restrictions.

**S3-Compatible Storage**: Set up an S3 bucket (AWS S3, MinIO, DigitalOcean Spaces, or any S3-compatible service) with read/write permissions configured for your backup storage needs.

**Access Credentials**: Obtain S3 access credentials (Access Key ID and Secret Access Key) with appropriate bucket permissions for file operations (create, delete, list).

**System Permissions**: Ensure your n8n instance has command-line access and file system permissions for credential export and temporary file management operations.

## Setup Instructions

### Step 1: S3 Bucket Configuration

Create and configure your S3-compatible storage bucket:

1. Create a new S3 bucket in your preferred region
2. Configure bucket policies for read/write access
3. Generate access credentials (Access Key ID and Secret Access Key)
4. Note the bucket name, region, and endpoint URL for configuration

### Step 2: Import and Configure Template

1. Import this workflow template into your n8n instance
2. Navigate to the **Config** node (Manual Trigger) to customize settings
3. Configure the following parameters:
   - Bucket name and region
   - Retention period (default: 7 days)
   - Backup file naming conventions
   - Folder structure preferences

### Step 3: Set Up S3 Credentials

Configure S3 credentials in all storage-related nodes.

### Step 4: Set Up N8N Credentials
Create an API key for n8n via the n8n settings of your n8n instance.

Set this API key in the n8n node configuration. These credentials are neccesary to retrieve all workflows.

### Step 5: Configure Backup Schedule

Customize the **Daily Backup** schedule trigger:
- Daily at 2:00 AM: `0 2 * * *`
- Daily at midnight: `0 0 * * *`
- Twice daily: `0 0,12 * * *`
- Custom schedule: Modify cron expression as needed

### Step 6: Test and Validate

1. Execute the **Config** node manually to verify settings
2. Run the complete workflow to test all three backup branches
3. Verify files appear in your S3 bucket with correct naming
4. Confirm retention policies work by checking cleanup operations
5. Test credential backup and temporary file removal

## Retention Settings

The retention management system automatically maintains your backup storage:

**Configurable Retention Period**: Set how many days of backups to retain (default: 31 days). The system automatically calculates cutoff dates and removes older files.

**Date-Based Cleanup**: The **Extract Date** node processes backup filenames to determine file age, while the **Keep Outdated Backups** filter identifies files beyond the retention period.

**Automatic Deletion**: Outdated files are automatically removed from S3 storage, preventing unlimited storage growth and managing costs effectively.

## 🔗 Nodes Used

S3, n8n, Schedule Trigger, Filter, Read/Write Files from Disk

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
