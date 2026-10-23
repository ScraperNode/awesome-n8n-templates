# ⚙️ Assess GitHub bus-factor risk in GitHub with Claude, tickets and Slack

> ⚡ **1 views** · ⚙️ [DevOps & CI/CD](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow ingests GitHub push events, merged pull requests, and scheduled contributor baselines, batches them through an external ownership-signal buffer, scores bus-factor risk per repo/component, uses Anthropic Claude to resolve borderline cases, then creates knowledge-transfer tickets and posts a notification to Slack.

## How it works
1. Receives GitHub push and pull_request webhooks and runs a scheduled GitHub API scan to collect contributor statistics.
2. Normalizes push commits, merged PR activity, and contributor stats into a shared ownership-signal format with repo, component, contributor, and timestamp fields.
3. Sends each normalized ownership signal to an external ownership-buffer API for later batch processing.
4. Runs on a weekly schedule to fetch the most recent window of buffered signals and compute commit-concentration and active-contributor counts per repo/component.
5. Routes clearly healthy and clearly critical clusters directly, and sends ambiguous clusters to an Anthropic Claude agent to classify them as critical-risk or acceptable.
6. Merges the resolved results, creates or updates critical-risk knowledge-transfer/documentation tasks in a ticketing system via HTTP API, and posts a summary message to a Slack channel.

## Setup
1. Configure GitHub webhooks for push and pull_request events to point to the workflow’s two webhook URLs.
2. Add GitHub HTTP Header Auth credentials (PAT) and replace `your-org` in the GitHub API URL used to list repositories.
3. Provide HTTP Header Auth credentials and endpoints for the ownership-buffer API and the ticketing system bulk upsert API.
4. Add Anthropic credentials for the Claude chat model used by the AI risk agent.
5. Connect Slack credentials and set the target channel ID (for example, `code-ownership-alerts`) for notifications.
6. Review the schedules and adjust the risk thresholds in the scoring logic (contributor count and commit-share cutoffs) to match your team’s policy.

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Schedule Trigger, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
