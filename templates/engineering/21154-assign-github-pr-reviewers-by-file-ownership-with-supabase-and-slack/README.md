# ⚒️ Assign GitHub PR reviewers by file ownership with Supabase and Slack

> ⚡ **0 views** · ⚒️ [Engineering](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow listens for GitHub pull request webhooks, looks up changed files and a reviewer roster in Supabase, selects matching reviewers based on file path ownership and last assignment time, then requests reviews in GitHub and notifies the reviewers in Slack.

## How it works
1. Receives a GitHub pull request webhook request.
2. Extracts key PR details and filters to only process newly opened, non-draft PRs that are not created by bot accounts.
3. Fetches the pull request’s changed files from the GitHub API and retrieves the full reviewer roster from Supabase.
4. Matches changed file paths against each reviewer’s owned paths, excludes the PR author, and selects up to the configured maximum reviewers prioritizing those least recently assigned.
5. Requests the selected reviewers on the pull request via the GitHub API.
6. Sends each selected reviewer a direct Slack message with the PR title, author, and link, then updates their last-assigned timestamp in Supabase.
7. If no matching reviewers are found, ends without assigning reviewers and records the “no reviewers” branch internally.

## Setup
1. Create a GitHub webhook for pull request events and point it to this workflow’s webhook URL (POST to `/github-pr-webhook`).
2. Provide a GitHub personal access token (or equivalent) with permission to read PR files and request reviewers, then set `github_token`, `repo_owner`, and `repo_name` in the configuration values.
3. Connect your Supabase credentials and ensure a `reviewers` table exists with `github_username`, `slack_user_id`, `owned_paths` (comma-separated prefixes), and `last_assigned_at` fields.
4. Connect Slack credentials and ensure each reviewer’s `slack_user_id` is valid for direct messaging.
5. Adjust `max_reviewers` and the `owned_paths` matching rules to fit your repository structure and review policy.

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Supabase

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
