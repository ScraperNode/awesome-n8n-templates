# 🔒 Review GitHub PR security with DeepSeek and Gmail alerts

> ⚡ **46 views** · 🔒 [SecOps & Security Automation](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Most teams don't have a security reviewer on every PR. This workflow gives you one: it reads the diff, catches hardcoded secrets and risky code, posts a real GitHub status check, comments inline on the exact flagged line, and emails the verdict.

## How it works
1. Triggers when a pull request is opened or synchronized (updated) in a GitHub repository.
2. Fetches the pull request’s unified diff from GitHub and truncates it to fit the model context while adding PR metadata (title, author, repository).
3. Sends the formatted diff to DeepSeek via a LangChain agent and enforces a strict JSON output containing a verdict, issue list (with file and line), and summary.
4. Posts a GitHub commit status to the PR’s head SHA using the `ai-pr-reviewer` context, marking pass as success and all other verdicts as failure.
5. Adds a summary comment to the pull request with the verdict, findings, and a count of issues.
6. If issues are present, converts the reported file/line hints into GitHub diff positions and posts inline review comments on the flagged lines.
7. Routes by verdict (blocked, needs_changes, pass) and sends a corresponding Gmail notification with the summary and issues.

## Setup
1. Add a GitHub API credential with access to pull requests, commit statuses, and the ability to create PR comments (and configure the workflow’s owner/repository values if you’re not using the included repo).
2. Add a DeepSeek API credential (or replace the model node with your preferred compatible chat model) and keep the structured output schema aligned with the agent prompt.
3. Add Gmail OAuth2 credentials and update the recipient email address and subject/message templates as needed.
4. (Optional) Enable GitHub branch protection rules to require the `ai-pr-reviewer` status check context to enforce the verdict as a merge gate.

## 🔗 Nodes Used

GitHub, Github Trigger, HTTP Request, Gmail, AI Agent, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
