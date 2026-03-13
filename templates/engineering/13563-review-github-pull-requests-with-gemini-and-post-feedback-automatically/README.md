# ⚒️ Review GitHub pull requests with Gemini and post feedback automatically

> ⚡ **7 views** · ⚒️ [Engineering](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Review GitHub pull requests with Gemini AI and post feedback automatically

## Who is this for

Development teams and tech leads who want to maintain consistent code quality without manual review bottlenecks. Perfect for teams handling multiple PRs daily and wanting AI-powered insights on security, bugs, and best practices.

## How it works

When a GitHub pull request is created or updated, the webhook triggers the workflow. The system fetches the PR diff via GitHub API and analyzes each file's changes. Google Gemini AI reviews the code for potential bugs, security vulnerabilities, performance issues, and style improvements. 

The AI generates detailed feedback which gets posted as a GitHub review comment. Every review is logged to Google Sheets for tracking, and the team receives a Slack notification with the PR status and summary.

## How to set up

1. **GitHub webhook**: Configure your repository's webhook to send PR events to the n8n webhook URL
2. **GitHub API**: Add a personal access token with repository permissions for API calls
3. **Google credentials**: Connect your Gemini AI API key and Google Sheets OAuth
4. **Slack integration**: Set up a Slack app with chat:write permissions for team notifications
5. **Sheet setup**: Create a Google Sheet and update the document ID in the workflow

## Requirements

- GitHub repository with webhook access
- Google Gemini API account
- Google Sheets and Slack workspace
- n8n cloud or self-hosted instance

## How to customize

Modify the AI prompt in the "Code review" node to focus on your team's specific coding standards. Adjust the review criteria, change notification channels, or add email alerts. Configure different review templates for different repositories by checking the repo name in the webhook data.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
