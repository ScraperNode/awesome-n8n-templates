# ⚙️ Daily workflow backup to GitLab with Slack notifications

> ⚡ **805 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## How it Works

This workflow creates automated daily backups of your n8n workflows to a GitLab repository:

1. **Scheduled Trigger** - Runs automatically at noon each day to initiate the backup process
2. **Fetch Workflows** - Retrieves all active workflows from your n8n instance, filtering out archived ones
3. **Compare & Process** - Checks existing files in GitLab and compares them with current workflows
4. **Smart Upload** - For each workflow, either updates the existing file in GitLab (if it exists) or creates a new one
5. **Notification System** - Sends success/failure notifications to a designated Slack channel with execution details

&gt;The workflow intelligently handles each file individually, cleaning up unnecessary metadata before converting workflows to formatted JSON files ready for version control.

## Set up Steps

**Estimated setup time: 15-20 minutes**

You'll need to configure three credential connections and customize the Configuration node:

- **GitLab API**: Create a project access token with write permissions to your backup repository
- **n8n Internal API**: Generate an API key from your n8n user settings
- **Slack Bot**: Set up a Slack app with bot token permissions for posting messages to your notification channel

&gt; Once credentials are configured, update the Configuration node with your GitLab project owner, repository name, and target branch. The workflow includes detailed setup instructions in the sticky notes for each credential type. After setup, activate the workflow to begin daily automated backups.

## 🔗 Nodes Used

Slack, GitLab, n8n, Schedule Trigger, Filter, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
