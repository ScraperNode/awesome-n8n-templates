# ⚙️ Back up and sync workflow JSONs with GitHub using semantic SHAs

> ⚡ **34 views** · ⚙️ [DevOps & CI/CD](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow backs up all non-archived n8n workflows to a GitHub repository as JSON files, using a deterministic semantic SHA in each filename to detect new, updated, renamed, and deleted workflows and keep the repository in sync.

## How it works
1. Runs when you manually execute the workflow and loads the GitHub backup configuration (repo owner/name, visibility, commit messages, and filename separator).
2. Retrieves all workflows from the n8n API, filters out archived workflows, and stops if there is nothing to back up.
3. Creates a deterministic SHA-256 for each workflow based on its nodes, connections, and settings, and sanitizes the workflow name for use in the backup filename.
4. Calls the GitHub REST API to verify whether the target repository exists and routes errors for connectivity, authentication, permissions, rate limits, and unexpected responses.
5. If the repository is missing, creates it and uploads one JSON backup per workflow to the repository root using the `<id><separator><sha><separator><name>.json` naming scheme.
6. If the repository exists, lists repo files, compares them to current n8n workflows to identify new, changed, renamed, and deleted workflows, then creates replacement files before deleting outdated ones and removes backups for workflows deleted from n8n.

## Setup
1. Create an n8n API credential/connection with access to list workflows on your n8n instance.
2. Add a GitHub OAuth2 credential with repo access (and permission to create repositories if you want auto-create) and ensure it can access the configured `repo_owner` account or organization.
3. Update the configuration values for `repo_owner`, `repo_name`, and `repo_private` (and optionally commit messages and `separator_character`) to match your GitHub setup.
4. If you want automated backups, replace the manual trigger with a schedule trigger and adjust the workflow execution timeout in settings if you have many workflows.

## 🔗 Nodes Used

GitHub, HTTP Request, Stop and Error, n8n, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
