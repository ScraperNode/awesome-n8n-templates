# ⚙️ Deploy workflows from GitHub pushes to a production n8n instance

> ⚡ **4 views** · ⚙️ [DevOps & CI/CD](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow triggers on GitHub push events, fetches the changed n8n workflow JSON from the repository, cleans deployment-specific metadata, and then uses the n8n REST API to update an existing workflow or create a new one in a production n8n instance.

## How it works
1. Triggers when a push event is received from GitHub.
2. Validates that the push targets the main branch, is not a branch deletion, and includes at least one added or modified file.
3. Requests the changed workflow JSON file from the GitHub Contents API.
4. Extracts the workflow name from the fetched JSON and searches the production n8n instance for a workflow with the same name via the n8n REST API.
5. If a matching workflow exists, retrieves its details, strips IDs and other metadata from the GitHub JSON, and updates the production workflow via the n8n REST API.
6. If no matching workflow exists, strips IDs and other metadata from the GitHub JSON and creates a new workflow in production via the n8n REST API.

## Setup
1. Create and add GitHub OAuth2 credentials in n8n with access to the repository you want to deploy from.
2. Create and add n8n API credentials for your production instance (API key or compatible credential) with permission to read and write workflows.
3. Update the repository owner/name and the production n8n base URL in the workflow’s configuration (and ensure the trigger is set to the branch you deploy from, such as main).
4. Ensure your GitHub repo stores exported n8n workflows as JSON files and that pushes include the workflow file as an added or modified change.

## 🔗 Nodes Used

Github Trigger, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
