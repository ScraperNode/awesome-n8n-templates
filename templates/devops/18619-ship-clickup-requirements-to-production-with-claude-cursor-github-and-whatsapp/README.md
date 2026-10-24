# ⚙️ Ship ClickUp requirements to production with Claude, Cursor, GitHub and WhatsApp

> ⚡ **21 views** · ⚙️ [DevOps & CI/CD](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow turns a ClickUp task tagged ready-for-ai into a production using Anthropic Claude for requirement analysis and architecture, Cursor for implementation, GitHub for PR/merge, external CI and security scanning APIs for verification, deployment and monitoring APIs for release checks, and WhatsApp for human approvals and alerts.

## How it works
1. Receives a webhook from ClickUp (or runs manually) with a task ID and loads configuration values like repo, API endpoints, thresholds, and WhatsApp recipients.
2. Fetches the ClickUp task details and sends the requirement to Anthropic Claude to extract acceptance criteria, a clarity score, and open questions.
3. If the requirement is unclear, posts clarification questions back to ClickUp and waits for a human reply before re-fetching and re-analyzing the task.
4. When clear, asks Anthropic Claude to produce an architecture plan and a sequenced task breakdown, then creates corresponding subtasks in ClickUp.
5. Triggers a Cursor background agent to implement the feature in the target GitHub repository, runs the CI test suite, and loops failures back to Cursor until tests pass or the max attempt limit is reached and a WhatsApp escalation is sent.
6. Opens a GitHub pull request, triggers an external security scan, and blocks the workflow with a WhatsApp alert if any critical/high findings are reported.
7. Requests human approval via WhatsApp, merges the PR on approval, triggers deployment, checks production health metrics, and either marks the ClickUp task done and sends a success message or automatically rolls back and re-verifies before escalating if recovery fails.

## Setup
1. Add credentials for ClickUp API, GitHub API, Anthropic API (HTTP Header Auth), Cursor API (HTTP Header Auth), and WhatsApp Business Cloud API.
2. Provide HTTP Header Auth credentials for your CI dispatch endpoint, security scanner endpoint, deployment platform endpoint, and production monitoring/APM endpoint.
3. Update the values in Set - Config, including ClickUp list/task inputs, repo owner/name and base branch, all external API URLs, clarity and health thresholds, maxImplementationAttempts, and WhatsApp phone number IDs and recipient numbers.
4. Configure each external system to call the workflow’s wait/resume webhooks for clarification replies, Cursor completion, CI results, security scan results, approval confirmation, and deployment completion.
5. Ensure your monitoring endpoint returns health metrics fields compatible with the workflow’s checks (error rate, p95 latency, and uptime), or adjust the evaluation logic accordingly.

## 🔗 Nodes Used

HTTP Request, Webhook, WhatsApp Business Cloud

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
