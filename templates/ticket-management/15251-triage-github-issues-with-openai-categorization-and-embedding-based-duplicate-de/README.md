# 🎫 Triage GitHub issues with OpenAI categorization and embedding-based duplicate detection

> ⚡ **66 views** · 🎫 [Ticket Management & Triage](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who's it for

Open-source maintainers, product teams with public repositories, and any organization receiving a steady stream of GitHub Issues. Ideal for small teams who waste hours per week triaging duplicates and misrouted reports.

## How it works

When a new Issue is opened, a GitHub webhook fires this workflow. It first filters for the "opened" action, then fetches the last 30 Issues from the repository. All Issue texts (new + past) are sent to OpenAI's embeddings API in a single batch call for efficiency. The workflow calculates cosine similarity between the new Issue and every past Issue. If the maximum similarity exceeds 0.85, the new Issue is auto-closed with a comment referencing the original. Otherwise, AI classifies it into one of four categories: bug (adds label + Slack alert to dev team), question (posts FAQ link as a comment), feature (appends to a roadmap Google Sheet), or spam (auto-close with label). AI is used only for classification — the duplicate detection uses deterministic vector math, and every action is rule-based.

## Set up steps

1. Generate a GitHub Personal Access Token with repo scope
2. Create a webhook on your repository pointing to this workflow's URL, subscribing to Issues events
3. Create a Google Sheet named feature_roadmap with columns: date_added, issue_number, title, author, url, status
4. Open Set Configuration and fill in the repo owner, repo name, Sheet ID, Slack channel, and FAQ URL
5. Register GitHub and OpenAI Header Auth credentials and connect Google Sheets and Slack
6. Activate the workflow

## How to customize

Adjust duplicate_threshold for stricter or looser matching, change the embeddings model, or swap Sheets for Notion or Airtable.

## 🔗 Nodes Used

GitHub, Google Sheets, HTTP Request, Slack, Webhook, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
