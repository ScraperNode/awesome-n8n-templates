# 🎬 Draft customer-facing changelogs from merged GitHub PRs with OpenAI and Gmail

> ⚡ **0 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Reads merged pull requests from your repositories, drops the bots and the changes nobody outside the team can see, asks a model which of the rest a customer would notice, and drafts the changelog as a Gmail draft. Nothing is sent.

## How it works
1. Runs every Friday on a schedule (or on demand) and loads configuration such as repositories, time window, and email recipient.
2. Fetches recently closed GitHub issues for each repository and keeps only pull requests that were actually merged within the configured window.
3. Removes bot-authored changes and PRs marked as internal via conventional-commit prefixes or skip labels.
4. Checks the n8n Data Table to skip pull requests that have already been judged in previous runs and caps the remaining list to a maximum count.
5. Sends the remaining PR titles and descriptions to an OpenAI-compatible chat model to decide which changes a customer would notice.
6. Uses the model to write a customer-facing changelog grouped into Added, Fixed, and Changed, then creates a Gmail draft with the changelog, a short summary, and a full list of judged PRs.
7. Upserts one record per judged pull request into the n8n Data Table so future runs do not re-evaluate the same changes.

## Setup
1. Add a GitHub credential with access to the target repositories and update the repository list in Settings (as comma-separated owner/name values).
2. Create an n8n Data Table named `shipped_changes` with columns `pr_key`, `repo`, `number`, `title`, `verdict`, and `merged_on`.
3. Add an OpenAI-compatible credential for the chat model node and choose a model that can handle the configured `max_changes` prompt size.
4. Add a Gmail credential and set the recipient address in Settings (`email_to`) for where the draft is addressed.

## Requirements
- A GitHub credential that can read the repositories you list, a Gmail credential for the draft, and any OpenAI-compatible key.

## Customization
- skip_prefixes and skip_labels in Settings decide what counts as invisible before a model ever sees it. max_changes caps how many go into one prompt - a longer list is an answer long enough to be cut off.

## 🔗 Nodes Used

GitHub, Gmail, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
