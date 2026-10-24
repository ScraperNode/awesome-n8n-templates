# ⚙️ Back up and restore n8n Docker workflows and credentials with GitHub and SSH

> ⚡ **125 views** · ⚙️ [DevOps & CI/CD](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow backs up all n8n workflows and encrypted credentials from a self-hosted Docker instance to a GitHub repository on a schedule, and provides a Basic Auth–protected form to restore workflows and credentials by importing uploaded JSON backup files over SSH.

## How it works
1. Runs twice daily on a cron schedule to start a backup run.
2. Creates timestamped `workflows` and `credentials` folders (via placeholder files) in the target GitHub repository.
3. Connects to the Linux host over SSH and runs the n8n CLI in the Docker container to export all workflows and all encrypted credentials.
4. Commits `workflows-all.json` and individual `<workflow name>.json` workflow backups to GitHub.
5. Commits `credentials-all.json` and individual `<name>_<type>.json` encrypted credential backups to GitHub.
6. Builds and commits a combined `workflows-credentials.json` file containing both exports for easy restoration.
7. Accepts uploaded JSON files via a Basic Auth form, detects whether they contain workflows or credentials (single, bulk, or combined), and imports them into the target n8n Docker container over SSH.

## Setup
1. Create a private GitHub repository and add GitHub API credentials in n8n with permission to write files to that repository.
2. Add SSH credentials for your Linux host and ensure the SSH user can run `docker exec`/`docker cp` against the n8n container.
3. Update the Backup Configuration and Restore Configuration nodes with your GitHub owner, repository name, and the n8n Docker container name.
4. Configure Basic Auth credentials for the restore form and deploy it behind HTTPS before activating the restore path.
5. Ensure the destination n8n instance uses the same `N8N_ENCRYPTION_KEY` as the source so encrypted credentials can be restored.

## 🔗 Nodes Used

GitHub, SSH, Schedule Trigger, n8n Form Trigger, Convert to File, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
