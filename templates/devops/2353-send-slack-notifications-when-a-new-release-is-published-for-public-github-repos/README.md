# ⚙️ Send Slack notifications when a new release is published for public GitHub repos

> ⚡ **1,837 views** · ⚙️ [DevOps & CI/CD](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This workflow checks a configured list of Github repositories daily to see if a new release has been published.

### How it works:
- Workflow has a daily trigger
- `RepoConfig` node is a JSON array that defines a list of repositories to check releases for
- For each of the configured repos it fetches the latest release
- If the release was published within the last 24 hours it is output
- The release is sent as a Slack message showing the repo name, release name and link


### Setup
- Update the JSON in the RepoConfig node to the Github repos you wish to get notifications for
- Setup your Slack connection (or replace with your choice of notification)

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
