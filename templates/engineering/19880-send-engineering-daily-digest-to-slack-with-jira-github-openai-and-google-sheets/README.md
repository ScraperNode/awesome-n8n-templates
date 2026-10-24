# ⚒️ Send engineering daily digest to Slack with Jira, GitHub, OpenAI, and Google Sheets

> ⚡ **40 views** · ⚒️ [Engineering](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs every weekday at 9 AM to collect the last 24 hours of Jira issue updates and GitHub pull request activity, uses OpenAI to summarize the results, posts a Block Kit digest to Slack, and optionally logs the digest outcome to Google Sheets.

## How it works
1. Runs on a weekday 9:00 AM schedule trigger.
2. Pulls Jira issues updated in the last 24 hours and finds “In Progress” Jira issues that have not been updated for the configured stale-day threshold.
3. Splits the configured GitHub repository list and, for each repo, fetches recent pull requests and searches for open pull requests with no reviews.
4. Normalizes and merges the Jira and GitHub results into a single digest payload.
5. Sends the digest payload to OpenAI Chat Completions to generate a strict-JSON summary (what moved, what shipped, what’s blocked, needs review, and sprint health).
6. Builds a Slack Block Kit message with ticket/PR links and optional @mentions based on a Jira/GitHub-to-Slack user map, then posts it to the configured Slack channel.
7. If Google Sheets logging is enabled, appends a row with the posting result details to the configured spreadsheet tab.

## Setup
1. Add credentials for Jira Software Cloud, GitHub, OpenAI, and Slack (and Google Sheets if you enable logging).
2. Update the Config values for your Jira base URL and project key, GitHub repositories list, stale thresholds, Slack channel, and the OpenAI model.
3. Invite the Slack app/bot to the target channel and ensure it has permission to post messages.
4. If sheet logging is enabled, set the Google Sheets document and tab to use and ensure the sheet has columns that match the appended fields (ok, channel, message, message_timestamp).
5. (Optional) Populate the user map in Config with Jira account IDs and GitHub logins mapped to Slack user IDs to enable @mentions in the digest.

## Requirements
- n8n credentials: Jira Cloud, GitHub, OpenAI, Slack; Google Sheets only if logging is on
- Access to the Jira project (e.g. PTN) and listed GitHub repos
- A Slack channel the bot can post in
- Fine-grained GitHub token needs repo + pull-request read (Search for review:none)

## Additional info
Connect with us:
Website: https://www.intuz.com/n8n-workflow-automation-templates/
Email: getstarted@intuz.com
LinkedIn: https://www.linkedin.com/company/intuz

## For Custom Workflow Automation
Get Started: https://n8n.partnerlinks.io/intuz

## 🔗 Nodes Used

GitHub, Google Sheets, HTTP Request, Slack, Jira Software, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
