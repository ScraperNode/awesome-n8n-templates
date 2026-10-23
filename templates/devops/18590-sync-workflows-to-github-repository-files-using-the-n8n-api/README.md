# ⚙️ Sync workflows to GitHub repository files using the n8n API

> ⚡ **9 views** · ⚙️ [DevOps & CI/CD](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow is called by another n8n workflow to export a selected n8n workflow as a JSON file and sync it to a GitHub repository, creating the file if it doesn’t exist and updating it only when the workflow definition changes.

## How it works
1. Receives a workflow ID as input when executed by another n8n workflow.
2. Fetches the workflow definition from the n8n API using the provided workflow ID.
3. Reduces the workflow data to essential fields (such as name, nodes, connections, and settings) and converts it into a formatted JSON file.
4. Tries to retrieve a same-named JSON file from a GitHub repository.
5. If the file does not exist, creates it in GitHub with an initial commit message.
6. If the file exists and the content differs from the current workflow JSON, updates the GitHub file with a new commit.

## Setup
1. Create an n8n API credential with access to read workflows and select it in the n8n node used to fetch workflows.
2. Add a GitHub credential with permission to read and write files in the target repository.
3. Update the GitHub owner and repository values (and optionally the commit message patterns) to match where you want to store the exported workflow JSON files.
4. Ensure the calling workflow passes a valid “Workflow Id” input when executing this workflow.

## 🔗 Nodes Used

GitHub, n8n, Execute Workflow Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
