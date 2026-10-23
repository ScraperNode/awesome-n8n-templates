# ⚙️ Restore n8n workflows from GitHub JSON backups with Data Tables

> ⚡ **18 views** · ⚙️ [DevOps & CI/CD](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow manually restores n8n workflows from JSON backup files stored in a GitHub repository, recreates them via the n8n API, and tracks progress in an n8n Data Table to avoid reprocessing items during the same recovery run.

## How it works
1. Starts when you manually execute the workflow.
2. Lists files in the root of the configured GitHub repository and filters to those that match the expected workflow-backup filename pattern.
3. Reads previously restored workflow IDs from an n8n Data Table and builds a list of backup files that have not been restored yet.
4. Processes each pending backup by downloading the JSON from GitHub’s Contents API using the raw response format.
5. Cleans the workflow payload by keeping only n8n API-compatible workflow settings and prepares the workflow definition for import.
6. Creates each workflow in the target n8n instance via the n8n API and writes a checkpoint row to the Data Table with the original workflow ID and name.
7. After all pending backups are processed, deletes all rows in the control Data Table to reset it for a future restore run.

## Setup
1. Add GitHub OAuth2 credentials with access to the repository and set the repository owner, repository name, and GitHub API version in the configuration step.
2. Add n8n API credentials pointing to the destination n8n instance where workflows should be restored.
3. Create the n8n Data Table named in `control_table` with string columns `workflow_id` and `workflow_name`.
4. Ensure your backup files are stored in the repository root and follow the expected naming convention using the configured separator character.

## 🔗 Nodes Used

GitHub, HTTP Request, Stop and Error, n8n, Filter, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
