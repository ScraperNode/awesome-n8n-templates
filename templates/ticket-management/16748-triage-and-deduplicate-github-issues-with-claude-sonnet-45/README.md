# 🎫 Triage and deduplicate GitHub issues with Claude Sonnet 4.5

> ⚡ **13 views** · 🎫 [Ticket Management & Triage](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Detect and merge duplicate GitHub issues automatically using Claude AI. This n8n automation triggers on new GitHub issues, checks them against open issues for duplicates, merges duplicate reports into the original, and applies AI-generated labels or requests missing reproduction steps.

## How it works
1. Triggers automatically when a new GitHub issue is opened, kicking off AI-powered issue triage.
2. Fetches up to 30 currently open GitHub issues from the same repository as duplicate-detection candidates.
3. Sends the new issue and the candidate list to Claude AI, which assigns labels, detects duplicate issues, and drafts a reproduction-request comment when needed.
4. If Claude AI flags the issue as a duplicate, the automation labels the new issue, links it to the original GitHub issue, and comments with a reference back to it.
5. For duplicate issues, the workflow also updates the original issue's body with a tracked "reported by N users" summary and posts a comment merging in the new report's details — keeping duplicate GitHub issues consolidated instead of scattered across separate threads.
6. If the issue isn't a duplicate, Claude AI applies the right labels and, when reproduction steps are missing, automatically comments asking the reporter for exactly what's missing.

## Setup
1. Connect a GitHub OAuth2 credential to every GitHub node in this n8n automation and set the owner and repository on the trigger node.
2. Add your Anthropic Claude API key as a Header Auth credential named x-api-key so Claude AI can label and deduplicate GitHub issues.
3. Create a needs-repro label in your GitHub repository before the first run — the other labels (bug, enhancement, question, documentation, duplicate) are GitHub defaults.
4. Activate the n8n workflow so the GitHub trigger starts listening for new issues and automatically detecting duplicates.

## 🔗 Nodes Used

GitHub, Github Trigger, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
