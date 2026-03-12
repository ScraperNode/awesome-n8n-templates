# ⚙️ Backup n8n workflows to Bitbucket

> ⚡ **1,573 views** · ⚙️ [DevOps & CI/CD](../)

## Description

An automated backup solution designed for self-hosted n8n users to automatically backup their workflows to Bitbucket, leveraging Bitbucket's free private repository offering.

Perfect for maintaining version control of your n8n workflows without additional costs.

## How it works:
* Runs on a regular schedule to check all workflows in your n8n instance
* Compares each workflow with its version in Bitbucket
* Only uploads workflows that are new or have changed
* Uses basic rate limiting to stay within Bitbucket's API limits
* Formats filenames for easy tracking and includes timestamps in commit messages
* Handles errors gracefully with automatic retries

## Set up steps (10-15 minutes):
1. Create a free Bitbucket account and private repository
2. Create a Bitbucket App Password with repository write access
3. Add Bitbucket credentials to n8n (using your username and app password)
4. Set up n8n API access (generate API key in your n8n instance)
5. Configure your Bitbucket workspace and repository names in the Set node
6. Optional: Adjust the backup schedule (default: 2 AM daily)

### Perfect for n8n self-hosters who want:
* Version control for their workflows
* Automated daily backups
* Free private repository storage
* Easy workflow recovery
* Change tracking over time

The workflow includes basic error handling and rate limiting to ensure reliable backups even with larger numbers of workflows. Adjust your timing based on https://support.atlassian.com/bitbucket-cloud/docs/api-request-limits/.

## 🔗 Nodes Used

HTTP Request, n8n, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
