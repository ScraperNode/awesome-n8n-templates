# ⚙️ Triage and remediate DevOps alerts with Claude, ClickUp, GitHub and Slack

> ⚡ **7 views** · ⚙️ [DevOps & CI/CD](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow receives monitoring alerts via webhook, uses Anthropic Claude to triage and draft remediation plans, pulls runbooks and related context from a documentation API, GitHub, ClickUp, and Terraform Cloud, then either executes allowlisted low-risk fixes or escalates to on-call via ClickUp and Slack.

## How it works
1. Receives a monitoring alert payload through a POST webhook.
2. Uses Anthropic Claude to classify the alert and determine whether it represents a critical production outage.
3. If the alert is critical, creates an urgent ClickUp incident ticket and pages the on-call engineer in Slack, bypassing any automated remediation.
4. For non-critical alerts, retrieves matching runbooks from a documentation knowledge base API, pulls related GitHub issues/PRs, fetches recent ClickUp incident history, and reads the current Terraform Cloud workspace state.
5. Uses Anthropic Claude to generate a remediation plan grounded in the retrieved context and extracts the proposed action type, risk level, confidence, and command.
6. If the plan is allowlisted, low-risk, and high-confidence, calls an HTTP remediation executor to run the fix, logs a resolved ClickUp ticket, and posts confirmation to a DevOps Slack channel.
7. Otherwise, opens a ClickUp ticket for manual remediation and notifies on-call in Slack with the plan and supporting context.
8. Logs the alert details, plan, and outcome to an incident knowledge log API for future reference.

## Setup
1. Create and configure the incoming alert source to send POST requests to the workflow webhook URL (path: /devops-alert-received).
2. Add credentials for Anthropic Claude, GitHub, ClickUp, Slack, and HTTP header auth credentials for your runbook knowledge base API, Terraform Cloud/Enterprise API, remediation executor API, and incident knowledge log API.
3. Update the configuration values for GitHub owner/repo, ClickUp list ID, Terraform workspace ID, and the runbook, remediation executor, and incident log API URLs.
4. Set the Slack channel names/IDs for critical paging, on-call notifications, and DevOps automation updates.
5. Review and tailor the auto-remediation allowlist (action types), along with the risk and confidence thresholds used to permit automatic execution.

## 🔗 Nodes Used

GitHub, HTTP Request, Slack, Webhook, ClickUp, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
