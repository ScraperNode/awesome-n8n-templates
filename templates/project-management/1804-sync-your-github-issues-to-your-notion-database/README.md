# 📋 Sync your GitHub issues to your Notion database

> ⚡ **4,999 views** · 📋 [Project Management](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This workflow syncs your GitHub issues to your Notion database. Whenever a new issue is opened in your GitHub repository, it will be shown in your Notion database, syncing the status property (opened/edited/closed/deleted). In case there’s no Notion database existing yet, a new one will be created automatically.

## Prerequisites
- Notion account and [Notion credentials](https://docs.n8n.io/integrations/builtin/credentials/notion/) 
- GitHub account and [GitHub credentials](https://docs.n8n.io/integrations/builtin/credentials/github/)

## How it works

1. Github trigger starts the workflow when a new issue is created in a GitHub repository.
2. If node splits the workflow conditionally, showing whether the issue is new or an update of an existing issue. 
3. If data is new, the Notion node will create a new database page in Notion.
4. If the data is not new, the Function node will create a Notion filter that will find its specific database page by issue ID.
5. Switch node will then conditionally route the data into the appropriate Notion page, based on the update made upon it.

## 🔗 Nodes Used

Function, Github Trigger, Notion

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
