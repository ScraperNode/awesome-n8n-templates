# ⚙️ Report and clean up stale GitHub branches with Slack notifications

> ⚡ **14 views** · ⚙️ [DevOps & CI/CD](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs weekly (or manually) to scan GitHub repositories for merged-but-not-deleted and stale branches, then posts a cleanup report to Slack and can optionally auto-delete a capped number of branches.

## How it works
1. Runs on a weekly schedule or when you manually execute the workflow.
2. Loads configuration for the GitHub repo owner, repository list, stale age threshold, protected branch patterns, Slack channel, and deletion limits.
3. For each configured repository, fetches all branches via the GitHub GraphQL API and fetches recently merged pull requests via the GitHub REST API.
4. Classifies branches as protected (skipped), merged-but-not-deleted, or stale based on last commit date and the configured stale-days threshold.
5. If auto-delete is enabled, deletes up to the configured maximum number of candidate branches in GitHub and compiles a success/failure summary.
6. Formats and posts the cleanup report to Slack, and if deletions ran, posts a second Slack message with the deletion results.

## Setup
1. Create and add GitHub credentials (fine-grained token or PAT) with access to list branches/PRs and permission to delete branches if you enable auto-delete.
2. Create and add a Slack credential with permission to post messages (chat:write) and set the target channel in the configuration.
3. Update the configuration values for repo owner, comma-separated repo list, staleDays, protectedBranches, reportOnly, and maxBranchesToDelete before activating the workflow.

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
