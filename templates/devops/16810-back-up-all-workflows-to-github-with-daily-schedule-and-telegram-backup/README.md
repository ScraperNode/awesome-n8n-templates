# ⚙️ Back up all workflows to GitHub with daily schedule and Telegram /backup

> ⚡ **110 views** · ⚙️ [DevOps & CI/CD](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow backs up all workflows from your n8n instance to a GitHub repository every day at 03:00, and also supports an on-demand Telegram /backup command, then sends a Telegram message with the backup result and commit link.

## How it works
1. Runs daily at 03:00 and also triggers when a Telegram message is received.
2. Checks that the incoming Telegram message starts with /backup before proceeding with the manual run.
3. Fetches all workflows from the n8n instance via the n8n API.
4. Builds a JSON backup file containing the workflows and sets the GitHub file path as backups/YYYY-MM-DD/workflows.json.
5. Checks in GitHub whether the backup file already exists and either updates it or creates it with a dated commit message.
6. Sends a Telegram notification to the triggering chat (or a predefined admin chat for scheduled runs) including the workflow count and GitHub commit URL.

## Setup
1. Create and select an n8n API credential that can read workflows from your n8n instance.
2. Add a GitHub credential with access to the target repository and set the owner/repo values to your backup repo.
3. Add a Telegram bot credential, enable the Telegram trigger webhook, and use the bot to send /backup from the chat you want to control backups.
4. Update the admin Telegram chat ID in the code step if you want scheduled backups to notify a specific group or channel.

## 🔗 Nodes Used

GitHub, Telegram, Telegram Trigger, n8n, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
