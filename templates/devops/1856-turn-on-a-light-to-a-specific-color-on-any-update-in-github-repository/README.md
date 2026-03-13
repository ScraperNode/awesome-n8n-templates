# ⚙️ Turn on a light to a specific color on any update in GitHub repository

> ⚡ **10,404 views** · ⚙️ [DevOps & CI/CD](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.

## Description

This workflow turns a light red when an update is made to a GitHub repository. By default, updates include pull requests, issues, pushes just to name a few.

## Prerequisites

- [GitHub credentials](https://docs.n8n.io/integrations/builtin/credentials/github/).
- [Home Assistant credentials](https://docs.n8n.io/integrations/builtin/credentials/homeassistant/).

## How it works

1. Triggers off on the `On any update in repository` node.
2. Uses Home Assistant to turn on a light and then configure the light to turn red.

## 🔗 Nodes Used

Github Trigger, Home Assistant

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
