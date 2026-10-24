# 🔧 Ship ClickUp requirements to production with Claude, Cursor and GitHub

> ⚡ **5 views** · 🔧 [Miscellaneous](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow turns a ClickUp task tagged as ready into a full delivery pipeline: Anthropic Claude analyzes and designs the change, Cursor implements it, CI tests and a security scan validate it, GitHub manages the PR and merge, deployment runs, and production health checks drive success notifications or rollback via WhatsApp.

## How it works
1. Receives a webhook from ClickUp (or runs manually) and fetches the task details for the requirement.
2. Sends the requirement to Anthropic Claude for a structured analysis and, if unclear, posts clarification questions to ClickUp and waits for a human reply before re-analyzing.
3. Uses Anthropic Claude to produce an architecture plan and an ordered task breakdown, then creates corresponding ClickUp subtasks.
4. Triggers a Cursor background agent to implement the feature on a branch, runs the CI test suite, and loops failure logs back to Cursor until tests pass or the max attempt limit is reached.
5. Creates a GitHub pull request, triggers a security scan, and stops with a WhatsApp alert if critical/high findings are reported.
6. Requests human approval over WhatsApp and, if approved, merges the PR, triggers deployment, and waits for deployment completion.
7. Pulls production health metrics from the monitoring API and either marks the ClickUp task done with a WhatsApp success summary or triggers an automatic rollback and re-checks health after a grace period.

## Setup
1. Add credentials for ClickUp API, Anthropic API (HTTP Header Auth), Cursor API (HTTP Header Auth), GitHub API, and WhatsApp Business Cloud.
2. Configure HTTP Header Auth credentials for your CI dispatch endpoint, security scanner, deployment platform, and production monitoring/health API used by the HTTP Request nodes.
3. Update the values in Set - Config (ClickUp task/list IDs, repo owner/name and base branch, endpoint URLs, thresholds, max attempts, and WhatsApp phone IDs/recipient number).
4. Copy each Wait node’s resume webhook URL and wire it to the matching external callback (ClickUp clarification reply, Cursor completion, CI results, security scan results, approval confirmation, and deployment complete events).

## 🔗 Nodes Used

HTTP Request, Webhook, WhatsApp Business Cloud

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
