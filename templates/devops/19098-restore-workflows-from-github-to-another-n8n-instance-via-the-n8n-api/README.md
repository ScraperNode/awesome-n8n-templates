# ⚙️ Restore workflows from GitHub to another n8n instance via the n8n API

> ⚡ **6 views** · ⚙️ [DevOps & CI/CD](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Restore one or all n8n workflows from a GitHub repository into any n8n instance — in one click.
Use it for disaster recovery, migrating to a new n8n instance, bulk importing workflows, or recovering a single accidentally deleted workflow.



## How it works
1. Starts manually and sets the GitHub repository, branch, workflows directory, restore mode (all or single), and target n8n base URL.
2. If a specific workflow path is provided, it uses that file path; otherwise it lists all JSON workflow files in the configured GitHub directory and filters them based on the selected mode.
3. Fetches each selected workflow JSON file from GitHub using the GitHub API.
4. Cleans the exported workflow data by removing IDs and instance-specific metadata and normalizing settings for import.
5. Queries the target n8n instance for an existing workflow with the same name via the n8n API.
6. Updates the existing workflow if found, or creates a new workflow in the target n8n instance if not.

## Setup
1. Create a GitHub OAuth2 credential in n8n that can read the repository containing your exported workflow JSON files.
2. Create an n8n API credential for the target instance and ensure the instance’s base URL is reachable from where this workflow runs.
3. Update the configuration values for repo owner, repo name, branch, workflows directory, target n8n base URL, and restore mode, and set either selectedWorkflowPath or selectedWorkflowName when using single mode.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
