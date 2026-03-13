# 📋 Create an issue on GitLab on every GitHub release

> ⚡ **1,662 views** · 📋 [Project Management](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.

## Description

For every release on GitHub this workflow will create an issue on GitLab.

1. Copy workflow to your n8n
2. Fill in missing fields (credentials & repo names)

Based on Cron node to be able to track github repos you're not a member of (as you won't be able to create a webhook).
If you do own the repo, you could replace Cron & GH node with a GitHub Trigger.

## 🔗 Nodes Used

Cron, Function, GitHub, GitLab

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
