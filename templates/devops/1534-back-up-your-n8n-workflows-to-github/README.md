# ⚙️ Back up your n8n workflows to Github

> ⚡ **100,268 views** · ⚙️ [DevOps & CI/CD](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This workflow will backup your workflows to Github. It uses the public api to export all of the workflow data using the n8n node.

It then loops over the data checks in Github to see if a file exists that uses the workflow name. Once checked it will then update the file on Github if it exists, Create a new file if it doesn't exist and if it's the same it will ignore the file.

### Config Options
**repo_owner** - Github owner

**repo_name** - Github repository name

**repo_path** - Path within the Github repository

&gt;This workflow has been updated to use the n8n node and the code node so requires at least version 0.198.0 of n8n

## 🔗 Nodes Used

GitHub, HTTP Request, Slack, Execute Sub-workflow, n8n, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
