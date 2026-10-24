# ⚙️ Assign GitHub PR reviewers by code ownership with Supabase and Slack

> ⚡ **1 views** · ⚙️ [DevOps & CI/CD](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow receives GitHub pull request webhooks, looks up changed files and a Supabase-based reviewer ownership roster, selects the least recently assigned matching reviewers, requests them as reviewers on GitHub, and sends each selected reviewer a direct message in Slack.

## How it works
1. Receives a GitHub pull request webhook via an n8n webhook endpoint.
2. Extracts PR details and only continues for newly opened, non-draft PRs that are not authored by bots.
3. Fetches the PR’s changed file list from the GitHub REST API and loads the reviewer roster (GitHub username, Slack user ID, owned path prefixes, last assigned time) from Supabase.
4. Matches changed file paths to reviewers’ owned path prefixes, excludes the PR author, sorts candidates by least recently assigned, and selects up to the configured maximum number of reviewers.
5. If reviewers are found, requests them as reviewers on the PR using the GitHub API.
6. Sends each selected reviewer a Slack DM with the PR title, author, and link, then updates the reviewer’s last_assigned_at field in Supabase for load balancing.

## Setup
1. Create a GitHub webhook for your repository that posts pull_request events to this workflow’s webhook URL.
2. Provide a GitHub personal access token with permission to request reviewers, and set the repo owner/name and max reviewer count in the configuration values.
3. Add a Supabase credential, create a reviewers table with fields for github_username, slack_user_id, owned_paths, and last_assigned_at, and update the table names if you don’t use the defaults.
4. Add a Slack credential and ensure each reviewer’s Slack user ID is populated in Supabase so the workflow can send DMs.

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Supabase

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
