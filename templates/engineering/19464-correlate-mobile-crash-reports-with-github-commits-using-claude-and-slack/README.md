# ⚒️ Correlate mobile crash reports with GitHub commits using Claude and Slack

> ⚡ **1 views** · ⚒️ [Engineering](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow receives mobile crash reports via webhook, extracts the most relevant stack frames, pulls recent commit history and file metadata from GitHub, and asks Anthropic Claude to identify the most likely responsible change, then creates a task in your issue tracker and posts the result to Slack.

## How it works
1. Receives a crash report through an HTTP webhook (or runs manually with a sample payload for testing).
2. Normalizes the incoming payload, extracts stack frames, and selects the top app-owned candidate frame(s) based on configured path prefixes.
3. For each candidate file, queries the GitHub API for recent commits touching that path and fetches the file contents metadata.
4. Sends the crash context and GitHub evidence to Anthropic Claude and requests a JSON response naming the most likely responsible commit/author with a confidence score and fix guidance.
5. Creates a task in your task system API and either auto-assigns it when the confidence threshold is met or leaves it unassigned for manual triage.
6. Posts a Slack message to your configured channel with the suspected file/author, confidence, and (when available) the suspected commit link.

## Setup
1. Create credentials for the GitHub API, Anthropic (HTTP Header Auth with your x-api-key), your task tool API (HTTP Header Auth), and a Slack OAuth connection with permission to post messages.
2. Configure your crash reporting tool (for example, Crashlytics, Sentry, or Bugsnag) to send POST requests to this workflow’s webhook URL.
3. Update the workflow configuration values (repoOwner, repoName, appOwnedPathPrefixes, lookbackDays, minConfidenceForAutoAssign, taskProviderBaseUrl, and slackChannelId) to match your repository and destinations.
4. Ensure your task provider endpoint accepts the JSON fields used for task creation (name, description, priority, and optional assignee) or adjust the request body to your system’s schema.

## 🔗 Nodes Used

HTTP Request, Slack, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
