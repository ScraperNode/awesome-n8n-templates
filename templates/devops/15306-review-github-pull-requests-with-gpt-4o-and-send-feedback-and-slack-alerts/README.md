# ⚙️ Review GitHub pull requests with GPT-4o and send feedback and Slack alerts

> ⚡ **131 views** · ⚙️ [DevOps & CI/CD](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Automatically review pull requests with AI and post feedback as GitHub comments

---

## Who is this for

Engineering teams, code reviewers, and tech leads who want to automate code review feedback. Ideal for repositories with high PR volume where consistent first-pass review is valuable.

## What this workflow does

This workflow automates pull request code review using GPT-4o and routes findings to GitHub and Slack. When a pull request is opened, it fetches the raw diff, sends it to GPT-4o for analysis, and posts a formatted Markdown comment with severity rating, categorized issues, suggestions, and an overall score. Critical findings trigger immediate Slack alerts.

## How to set up

1. Add your GitHub OAuth2 credential to the trigger and comment nodes
2. Add your OpenAI API credential to the GPT-4o node
3. Add your Slack OAuth2 credential to both Slack notification nodes
4. Configure n8n Variables: `GITHUB_OWNER`, `GITHUB_REPO`, and `GITHUB_TOKEN`
5. Activate the workflow - the GitHub webhook registers automatically
6. Open a test pull request to verify end-to-end execution

## Requirements

- GitHub repository with OAuth2 credentials and Personal Access Token
- OpenAI API account with GPT-4o access
- Slack workspace with OAuth2 app installed
- Two Slack channels: one for critical alerts, one for review summaries

## How to customize

Adjust the diff truncation limit (default 12,000 chars) in the Format PR Diff node. Modify the GPT-4o system prompt to focus on specific code quality concerns like security or performance. Update Slack channel routing based on your team's notification policy.

---

## Node List

| # | Node Name | Type | Purpose |
|---|-----------|------|---------|
| 1 | When PR Opened | GitHub Trigger | Receives pull_request webhook events |
| 2 | Check PR Open | If | Passes only `action = opened` to avoid duplicates |
| 3 | Fetch PR Diff | HTTP Request | Fetches the raw unified diff from GitHub |
| 4 | Format PR Diff | Code | Extracts PR metadata; truncates diff to 12,000 chars |
| 5 | AI Code Review with GPT-4 | OpenAI | Sends diff to GPT-4o; returns structured JSON review |
| 6 | Build Comment for GitHub | Code | Parses JSON; assembles Markdown comment |
| 7 | Post Comment to GitHub | GitHub | Posts the AI review comment on the pull request |
| 8 | Check Critical Severity | If | Routes based on CRITICAL vs non-critical severity |
| 9 | Alert Critical Issues to Slack | Slack | Sends urgent alert to #incident |
| 10 | Share Review Summary on Slack | Slack | Sends summary notification to #code-reviews |

**Total: 10 nodes (+ 5 Sticky Notes)**

---

## Sticky Note Compliance

| # | Sticky Note Title | Color | Role |
|---|-------------------|-------|------|
| 1 | Main Sticky Note (Overview) | Yellow | Workflow overview, How it works, Setup steps, Customization |
| 2 | Trigger and filter PR | White | Covers GitHub trigger and PR filter |
| 3 | Fetch and format diff | White | Covers diff retrieval and formatting |
| 4 | AI review and comment | White | Covers AI review and comment building |
| 5 | Severity check and alerts | White | Covers severity routing and Slack notifications |

All sticky notes use H2 headings (`## `) and follow n8n public guidelines.

---

## Tags

`ai` `gpt-4` `openai` `github` `slack` `code-review` `devops` `automation`

## 🔗 Nodes Used

GitHub, Github Trigger, HTTP Request, Slack, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
