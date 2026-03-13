# ⚙️ Restore backed up workflows from GitHub to n8n

> ⚡ **5,597 views** · ⚙️ [DevOps & CI/CD](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Restore backed up workflows from GitHub to your n8n workspace.
This workflow was inspired by [this one](https://n8n.io/workflows/1534-back-up-your-n8n-workflows-to-github/) that lets you back up your n8n workflows to GitHub.
It will let you restore your backed up workflows in your workspace, without creating duplicates.
In case of issue with your instance, it will save you a lot of time to restore them.


## How it works
- It retrieves the workflows saved in a GitHub repository.
- Then compares these saved workflows with the ones in your n8n workspace based on the name.
- It will only create them if they don't already exist.

## Set up steps

1. Open the "Global" node and set your own information (see Configuration below)
2. Click on "Test workflow" 
3. It will run through all the workflows in the GitHub repository, check if the name doesn't already exist in your workspace and, in this case, create it.

## Configuration
- repo.owner: your GitHub owner name
- repo.name: your GitHub repository name
- repo.path: the path within the GitHub repository

## 🔗 Nodes Used

GitHub, n8n

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
