# ⚙️ Monitor GitHub Actions budget and send usage alerts to Slack

> ⚡ **9 views** · ⚙️ [DevOps & CI/CD](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs daily to track GitHub Actions usage across selected repositories, combines recent workflow-run stats with GitHub Actions billing data, calculates budget burn rate and projected spend, and posts a summary to Slack with an additional alert when usage exceeds a defined threshold.

## How it works
1. Runs on a daily schedule.
2. Reads configuration values (repo owner, repo list, budget minutes, cost per minute, and Slack channel) and expands the comma-separated repo list into individual repositories.
3. Calls the GitHub REST API for each repository to fetch recent GitHub Actions workflow runs and aggregates run counts and failures by workflow name.
4. Fetches organization-level GitHub Actions billing data from the GitHub billing API.
5. Calculates minutes used vs. budget, billable minutes, estimated cost, projected full-month usage, and whether the alert threshold is exceeded.
6. Formats a Slack message containing the usage/budget metrics and a breakdown of recent workflow activity.
7. Posts an urgent Slack warning if the threshold is exceeded; otherwise it posts the daily summary to Slack.

## Setup
1. Add GitHub credentials (OAuth2 or a PAT) with access to the target repos and permission to read Actions billing (typically `admin:org` read, plus `repo` as needed).
2. Add a Slack credential with permission to post messages (`chat:write`) and set the target channel in the configuration.
3. Update the configuration values for repo owner, repositories to monitor, monthly budget minutes, alert threshold percent, and cost per minute.
4. If you monitor a personal account instead of an organization, change the billing endpoint to `/users/{owner}/settings/billing/actions` in the GitHub billing request.

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
