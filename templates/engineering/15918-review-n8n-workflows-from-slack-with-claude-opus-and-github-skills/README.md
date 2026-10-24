# ⚒️ Review n8n workflows from Slack with Claude Opus and GitHub skills

> ⚡ **270 views** · ⚒️ [Engineering](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
A Slack bot that reviews any n8n workflow on demand. Mention it or DM it a workflow URL and it replies in-thread with a graded review, plain-English overview, and findings tiered as Must Fix, Should Fix, and Nice to Have.

## How it works
1. Triggers when the bot is @mentioned in Slack or receives a direct message.
2. Adds an :eyes: reaction, extracts a `/workflow/<id>` from the message text, and validates that a workflow ID is present.
3. Uses the n8n API to fetch the top-level workflow JSON and pulls the workflow review checklist and skills file index from the public n8n-io/skills GitHub repository.
4. Detects any Execute Workflow references in the workflow, fetches those direct subworkflow JSONs via the n8n API, and aggregates them into a single payload.
5. Sends the workflow JSON, subworkflows, checklist, and available skill file paths to an OpenRouter-hosted model that can fetch additional skill markdown files as needed.
6. Removes the :eyes: reaction and posts the graded review back to the originating Slack thread as a Block Kit message, or posts a threaded error message if the URL, API fetch, GitHub fetch, or agent run fails.

## Setup
1. Connect a Slack API credential with permission to receive app mentions/DMs, add reactions, and post threaded replies, and configure the trigger to watch the intended workspace.
2. Add an n8n API credential that can read workflows, and ensure the n8n host in your workflow URLs matches the instance the credential points to.
3. Add an OpenRouter API credential and choose the model you want to use for the reviewer agent and (optionally) the structured-output fixer.
4. Install the Slack app, enable event subscriptions for `app_mention` and direct messages, and invite the app to any channels where you want to request reviews.
5. If your environment restricts outbound HTTP, allow access to `raw.githubusercontent.com` and `api.github.com` so the workflow can load the n8n-io/skills checklist and file index.

## 🔗 Nodes Used

HTTP Request, Slack, n8n, Filter, AI Agent, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
