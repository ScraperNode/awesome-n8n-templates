# ⚙️ Notify a team channel about new software releases via Slack and GitHub

> ⚡ **3,930 views** · ⚙️ [DevOps & CI/CD](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This workflow automatically notifies the team in a Slack channel when code in a GitHub repository gets a new release.

## Prerequisites

- A GitHub account and [credentials](https://docs.n8n.io/integrations/credentials/github/)
- A Slack account and [credentials](https://docs.n8n.io/integrations/credentials/slack/)

## Nodes

- [GitHub Trigger node](https://docs.n8n.io/integrations/trigger-nodes/n8n-nodes-base.githubtrigger/) triggers the workflow when a release event takes place in the specified repository.
- [Slack node](https://docs.n8n.io/integrations/nodes/n8n-nodes-base.slack/) posts a message in a specified channel with the text "New release is available in {repository name}", along with further details and a link to the release.

## 🔗 Nodes Used

Github Trigger, Slack, Start

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
