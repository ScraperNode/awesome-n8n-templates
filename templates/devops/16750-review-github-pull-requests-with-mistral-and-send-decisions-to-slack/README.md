# ⚙️ Review GitHub pull requests with Mistral and send decisions to Slack

> ⚡ **40 views** · ⚙️ [DevOps & CI/CD](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow receives GitHub webhook events for pull requests, pushes, and branch/tag creates, filters out actions from the repo owner, and posts alerts to Slack (optionally Discord). For pull requests, it uses Mistral to generate an AI review from the PR diff and supports a human approval form.

## How it works
1. Receives a GitHub webhook request and filters for push, create, and pull_request events coming from non-owner accounts (and non-deleted branches).
2. Routes the event by type and, for push and create events, extracts key details and posts a notification to Slack (optionally Discord).
3. For pull request opened, reopened, or synchronize events, extracts PR metadata such as title, URLs, branch refs, and change counts.
4. Uses Mistral (via an AI agent) to fetch the PR unified diff over HTTP and generate a structured JSON review, optionally consulting existing GitHub PR reviews for synchronize re-reviews.
5. Posts the AI recommendation to Slack with a link to a hosted PR review form (optionally Discord) and waits up to 24 hours for a reviewer decision.
6. Applies the reviewer decision back to GitHub by approving the PR and merging it, requesting changes with a comment, or closing the PR, then posts a confirmation message to Slack (optionally Discord).

## Setup
1. Create a GitHub webhook on your repository for pull_request, push, and create events and point it to this workflow’s webhook URL path (/webhook/github).
2. Add GitHub credentials (a Personal Access Token with repo access) for posting PR reviews and update any repository/owner mappings if needed.
3. Add Slack OAuth credentials and set the target Slack channel name/ID in the Slack message nodes.
4. (Optional) Add a Discord webhook credential and enable the Discord nodes if you want Discord notifications.
5. Add Mistral Cloud API credentials for the chat model used by the AI review agent.

## 🔗 Nodes Used

GitHub, HTTP Request, Slack, Webhook, Discord, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
