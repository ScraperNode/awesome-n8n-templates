# ⚙️ Automated n8n workflows backup on GitLab with username organization

> ⚡ **445 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Overview
This solution ensures the secure backup and version control of your self-hosted n8n workflows by storing them in a GitLab repository. It compares current workflows with their GitLab counterparts, updates files when differences are detected, and organizes them in user-specific folders (e.g., repo -&gt; username -&gt; workflow.json). Backups are triggered manually or weekly, with a success notification sent via email.

## Operational Process
- **Manual Backup Trigger**: Initiates the backup process on demand.
- **Scheduled Weekly Backup**: Automatically triggers the backup every week.
- **Fetch N8N Workflows**: Retrieves all workflows from n8n using the API (getAll:workflow).
- **Prepare Backup Metadata**: Generates metadata, including user details for folder organization.
- **Process Each Workflow**: Handles each workflow individually for processing.
- **Format Workflow for GitLab**: Structures workflows with proper versioning for GitLab compatibility.
- **Rate Limit Control**: Manages API rate limits to ensure smooth operation.
- **Create to GitLab Repository**: Saves workflows to GitLab; creates a new file if it doesn’t exist.
- **Check Backup Status**: Verifies if the file exists; if true, proceeds to update; if false, loops back.
- **Update Backup Summary**: Updates the existing file in GitLab with the latest version.
- **Log Backup Results**: Records the outcome of the backup process.
- **Send Email**: Sends a confirmation email:  
  *"Hello, The scheduled backup of all n8n workflows has been completed successfully. All workflows have been committed to the GitLab repository without any errors. Regards, n8n Automation Bot"*

## Implementation Guide
1. Import this solution into your n8n instance.
2. Configure GitLab API credentials and specify the target repository.
3. Set up n8n API access to enable workflow retrieval.
4. Customize the Prepare Backup Metadata node to map users to folders as needed.
5. Test the process using the Manual Backup Trigger to confirm GitLab integration.
6. Schedule weekly backups via the Scheduled Weekly Backup node (recommended for Fridays).

## Requirements
- GitLab API credentials with write access
- n8n API access for workflow retrieval
- A configured GitLab repository

## Customization Options
- Adjust the Prepare Backup Metadata node to include additional user fields.
- Modify the Rate Limit Control node to accommodate varying API limits.
- Tailor the Send Email node to include custom notification details.

## 🔗 Nodes Used

Send Email, GitLab, n8n, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
