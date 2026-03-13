# ⚙️ Save your workflows into a Gitlab repository

> ⚡ **6,130 views** · ⚙️ [DevOps & CI/CD](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This template is inspired by [Save your workflows into a GitHub repository](https://n8n.io/workflows/817-save-your-workflows-into-a-github-repository/) by [hikerspath](https://n8n.io/creators/hikerspath/) and [Back Up Your n8n Workflows To Github](https://n8n.io/workflows/1534-back-up-your-n8n-workflows-to-github/) by [jon-n8n](https://n8n.io/creators/jon-n8n/).

# Basic

Retrieve all workflows from an n8n instance and save it on a gitlab project. If the workflow exist, il will only save the changes.

# Flow

What the workflow does :

1. Sets custom parameters
2. Gets workflows
3. Iterates through each workflow one by one
	1. Get the file from Gitlab if exists
	2. Compare the files as objects (not as strings)
	3. Return a status on the workflow
4. Create, Edit or ignore the file depending on the status
5. Return a list of status for each workflow

# Configuration

Select a credential in each Gitlab nodes.

Edit the data in node "Globals" :
- repo.owner : slug of the user or team owning the repo
- repo.name : slug of the repository
- repo.branch : branch to commit on
- repo.path : from root of the repository. Should end with /

# Comments

Error on gitlab nodes will not stop the run but will list the current workflow as error in the results

Some fields are ignored to determined if there is changes :
- updatedAt : should be ignored if only ignores fields are changed
- globals : it's running information, no need to follow the changes

## 🔗 Nodes Used

GitLab, n8n, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
