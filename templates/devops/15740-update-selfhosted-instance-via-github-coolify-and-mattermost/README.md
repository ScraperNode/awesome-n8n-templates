# ⚙️ Update self‑hosted instance via GitHub, Coolify and Mattermost

> ⚡ **13 views** · ⚙️ [DevOps & CI/CD](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who is it for
Self-hosters running n8n on Coolify who want to keep their instance up to date without manual checks or downtime surprises.

## How it works
The workflow runs on a weekly schedule and uses the built-in n8n Security Audit to check whether your instance is outdated. If a newer version is available, it fetches the latest stable release tag from the GitHub API and triggers a service restart via the Coolify API — pulling the latest image automatically. A Mattermost notification confirms the successful update.

## Requirements
- Self-hosted n8n instance (managed via Coolify)
- n8n API key (*Settings → API → Generate Key*)
- Coolify API token (*Settings → API Tokens*)
- Mattermost instance (optional — replace or remove the last node)

## How to set up
1. Create an `n8n API` credential and assign it to the **GET audit** node.
2. Create an `HTTP Bearer Auth` credential with your Coolify token and assign it to the **CALL Coolify** node.
3. Replace `&lt;your-coolify-domain&gt;` and `&lt;APP_UUID&gt;` in the Coolify node URL.
4. Optionally configure the Mattermost node with your URL, token and channel ID.

## 🔗 Nodes Used

HTTP Request, n8n, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
