# ⚒️ Implement AI-ready GitHub issues with CloudCLI and Telegram summaries

> ⚡ **484 views** · ⚒️ [Engineering](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs nightly at 2:00 AM to find open GitHub issues labeled “ai-ready”, uses CloudCLI to implement each issue and open a pull request against a target branch, comments back on the issue, and sends a run summary to Telegram.

## How it works
1. Runs every night at 2:00 AM on a schedule.
2. Loads the repository, label, base branch, CloudCLI environment URL, and Telegram chat ID from a configuration step.
3. Fetches all open GitHub issues in the configured repository that match the configured label.
4. Processes the issues one by one and sends each issue title and body to CloudCLI to implement the change, create a branch, and open a pull request against the configured base branch.
5. Posts a comment on each GitHub issue noting that CloudCLI opened a pull request and includes the CloudCLI environment link.
6. After all issues are processed, sends a Telegram message summarizing the run and listing the issues handled.

## Setup
1. Add GitHub credentials with permission to read issues and create issue comments, and ensure the configured repo owner and repo name match your repository.
2. Add CloudCLI credentials, set the CloudCLI environment ID/URL in the configuration, and provide a GitHub token in the CloudCLI node so it can push branches and open pull requests.
3. Add Telegram bot credentials and set your target Telegram chat ID in the configuration.
4. Update the configuration values (label and base branch) to match your triage label (for example, `ai-ready`) and the branch you want pull requests opened against (for example, `main`).

## 🔗 Nodes Used

GitHub, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
