# ⚙️ Self-heal web app outages with Claude, GitHub and Slack

> ⚡ **7 views** · ⚙️ [DevOps & CI/CD](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs on a schedule to health-check a web app, and when it detects an outage it gathers recent GitHub context and source files, asks Anthropic Claude to propose a fix, then creates a GitHub branch and pull request and notifies Slack via an incoming webhook.

## How it works
1. Runs every 2 minutes on a schedule and requests the configured health-check URL.
2. Evaluates the HTTP response against the expected status code and stops if the app is healthy.
3. When unhealthy, fetches recent commits and GitHub Actions workflow runs for the configured repository and branch.
4. Selects a small set of candidate source files and retrieves their contents from GitHub.
5. Sends the outage details, recent GitHub context, and fetched file contents to Anthropic Claude to generate a root-cause diagnosis, PR text, and file change proposals.
6. If Claude proposes changes, creates a new GitHub branch, commits the updated file contents to that branch, and opens a pull request into the base branch.
7. Posts an incident message to Slack with the diagnosis and PR link, or posts a separate Slack message when no confident fix is proposed.

## Setup
1. Create a GitHub API credential with access to read repository contents and create branches, commits, and pull requests, then set the repo owner/name and base branch in the configuration values.
2. Add an HTTP Header Auth credential for the Anthropic API (and set the Anthropic model if needed).
3. Replace the Slack incoming webhook URL in both Slack notification requests with your own Slack webhook endpoint.
4. Update the health-check URL, expected status code, timeout, and max diagnostic file limit to match your application and desired sensitivity.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
