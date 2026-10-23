# ⚒️ Auto-fix ClickUp bug reports with OpenAI, Cursor, GitHub and Slack

> ⚡ **4 views** · ⚒️ [Engineering](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow receives ClickUp bug reports via webhook, uses OpenAI to plan a fix, optionally asks for developer approval in Slack, then triggers Cursor’s background agent to implement and test the change, opens a GitHub pull request, and updates the ClickUp task status.

## How it works
1. Receives a POST webhook from ClickUp containing the bug details and repository information.
2. Uses OpenAI to analyze the bug and return a structured JSON plan with root cause, affected files, fix approach, complexity, confidence, test plan, and risk flags.
3. Validates and normalizes the AI output, scans for high-risk keywords, and deterministically decides whether the bug is eligible for automated fixing.
4. If the fix is not eligible, posts the analysis to a Slack channel and waits for a developer to approve before continuing.
5. Builds a Cursor background-agent task (branch name, prompt, and test command), triggers Cursor via HTTP, and waits for Cursor to report completion with test results and a diff summary.
6. Creates a GitHub pull request (draft if tests failed), updates the ClickUp task status accordingly, and responds to the original webhook with a JSON summary including the PR link.

## Setup
1. Add credentials for OpenAI, Slack, ClickUp, GitHub, and an HTTP Header Auth credential for the Cursor API.
2. Configure ClickUp to send bug tasks to the workflow webhook path `clickup-bug-autofix` with fields like taskId, taskName/description/stackTrace, repoUrl, repoBranch, priority, and listId.
3. Update the workflow configuration values for GitHub owner/repo, Cursor API URL/model, Slack channel, test command, and the auto-fix confidence threshold.
4. Set the Cursor callback URL to the workflow’s “wait for Cursor completion” resume webhook and ensure Cursor includes expected fields like testsPassed, filesChanged, and diffSummary in its callback payload.
5. If you use manual approval, connect your Slack approval mechanism to the workflow’s “wait for developer approval” resume webhook and include reviewer metadata (for example reviewedBy and notes).

## 🔗 Nodes Used

GitHub, HTTP Request, Slack, Webhook, ClickUp, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
