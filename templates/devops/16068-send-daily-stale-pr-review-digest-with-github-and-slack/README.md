# ⚙️ Send daily stale PR review digest with GitHub and Slack

> ⚡ **0 views** · ⚙️ [DevOps & CI/CD](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs every weekday at 9 AM, checks open pull requests across configured GitHub repositories, calculates how long each PR has been waiting on review activity, and posts a ranked review-lag digest to a chosen Slack channel.

## How it works
1. Runs on a weekday schedule at 9:00 AM and loads the repository list, staleness threshold, draft filtering option, and target Slack channel.
2. Queries the GitHub API for open pull requests in each configured repository.
3. Filters out draft PRs (optional), normalizes PR fields, and fetches each PR’s review history from the GitHub API.
4. Calculates review-lag metrics per PR (age, last review time, current review status, and whether it is stale based on the configured days threshold).
5. Aggregates and ranks PRs by review lag, then builds a Slack-formatted digest grouped by PR author.
6. Posts the digest to Slack only when there are PRs to report.

## Setup
1. Add GitHub credentials for the HTTP Request nodes (a Personal Access Token in an HTTP Header Auth credential with access to the target repositories).
2. Add a Slack OAuth2 connection and ensure the workflow can post to the target channel.
3. Update the configuration values (repositories, stale_days, slack_channel, and exclude_drafts) to match your GitHub org and Slack workspace.
4. Confirm the schedule trigger cron expression (0 9 * * 1-5) matches your intended timezone and weekdays.

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
