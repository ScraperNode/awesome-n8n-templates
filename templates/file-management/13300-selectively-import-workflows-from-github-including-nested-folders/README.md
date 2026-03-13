# 📁 Selectively import workflows from GitHub, including nested folders

> ⚡ **39 views** · 📁 [File Management](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This template lets you selectively import n8n workflows from a GitHub repository, even when your repository uses deeply nested folder structures.

Unlike most import workflows, this template does not load everything automatically. Instead, it:
	•	Traverses all nested folders in your repository
	•	Collects every workflow JSON file found
	•	Dynamically generates a selection form
	•	Allows you to choose exactly which workflows to load
	•	Cleans incompatible fields for n8n API compatibility
	•	Creates workflows directly in your instance

This makes it ideal for users who:
	•	Work across multiple n8n instances
	•	Store workflows in structured GitHub directories (e.g. YYYY/MM/)
	•	Want precise control over which workflows are restored
	•	Manage staging, production, or client environments

If you maintain workflows in GitHub and need controlled, selective imports, especially across structured folder hierarchies, this template is built for that use case.

## 🔗 Nodes Used

GitHub, n8n, n8n Form Trigger, Extract from File, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
