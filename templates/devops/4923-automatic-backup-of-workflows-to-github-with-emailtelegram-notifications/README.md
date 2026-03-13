# ⚙️ Automatic backup of workflows to GitHub with email/telegram notifications

> ⚡ **297 views** · ⚙️ [DevOps & CI/CD](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Why?

Have you ever updated your n8n instance, or moved from one instance to the other and lost all your workflows? I suggest NOT DOING THAT! Especially if you have very complex workflows that would take days to recreate.

Make sure you have a backup process in place!

# How it works

1. Get all workflows from an n8n instance using your n8n API
2. Formats the workflows cleanly
3. Creates a backup package
4. Checks if target GitHub repository exists, if not creates it
5. Uploads a manifest
6. Uploads a readme
7. Uploads your workflows as separate JSON files
8. Sends a summary to your choice (Telegram or GMAIL)

# What it does
- Backs up all your workflows
- Splits them out into separate JSON files for each workflow
- Sends a notification

# What it doesn't do

- Does not back up credentials (not smart for security reasons)
- Does not delete old backups

# Requirements
- n8n
- n8n API setup with credentials stored in instance you are running this from
- GitHub user & API (with repository rights) setup (API key in Github, Credentials in n8n)
# Future Updates

If I get requests for these features I would build them:

- Rolling backups (delete further back than 3 days)
- Logic to skip the backup if nothing changed

## 🔗 Nodes Used

HTTP Request, Telegram, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
