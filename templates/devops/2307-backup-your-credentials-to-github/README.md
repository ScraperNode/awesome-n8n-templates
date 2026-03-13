# ⚙️ Backup your credentials to GitHub

> ⚡ **14,194 views** · ⚙️ [DevOps & CI/CD](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Based on [Jonathan's](https://n8n.io/creators/jon-n8n/) work. Check out his templates.

This workflow will backup your credentials to GitHub. It uses a CLI command to export all credentials.

It then loops over the data, checks in GitHub to see if a file exists that uses the credential's ID. Once checked it will:
- update the file on GitHub if it exists;
- create a new file if it doesn't exist;
- ignore if it's the same.

### Config Options
**repo.owner** - Github owner

**repo.name** - Github repository name

**repo.path** - Path within the Github repository

==⚠ The credentials are all decrypted. Make sure you save them safely or tweak the CLI command to store them encrypted.==

### Check out my other templates
👉 [**https://n8n.io/creators/solomon/**](https://n8n.io/creators/solomon/)

## 🔗 Nodes Used

GitHub, HTTP Request, Execute Sub-workflow, Execute Workflow Trigger, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
