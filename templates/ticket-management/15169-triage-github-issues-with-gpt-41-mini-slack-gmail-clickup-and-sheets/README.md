# 🎫 Triage GitHub issues with GPT-4.1-mini, Slack, Gmail, ClickUp and Sheets

> ⚡ **12 views** · 🎫 [Ticket Management & Triage](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## How it works
This workflow automatically handles new GitHub issues by reading and understanding them using AI, then taking multiple actions simultaneously — creating tasks, sending notifications, and keeping everything organized — without any manual effort.

## Step-by-step
- **Trigger & filter**
  - **GitHub Trigger** – Listens for issue events on a GitHub repository.
  - **If** – Filters to only process issues with the action `opened`.

- **AI analysis**
  - **Message a model** – Sends the issue title, body, and metadata to GPT-4.1-mini with a structured prompt to extract category, subcategory, severity, priority, estimated effort, assigned team, summary, and suggested action.
  - **Parse AI Response** – Converts the raw AI text output into a clean structured JSON object and appends a formatted date.

- **Parallel output actions**
  - **Append row in sheet** – Logs all issue data and AI analysis into a Google Sheets tracker.
  - **Create a task** – Creates a prioritized ClickUp task with full issue and AI analysis details.
  - **Send a message** – Posts a formatted Slack alert to `#github-alerts` with issue details and AI analysis.
  - **Send a message1** – Sends an HTML-formatted email via Gmail with the full issue report and AI insights.
  - **Create a comment on an issue** – Posts the AI analysis summary as a comment directly on the GitHub issue.
  - **HTTP Request** – Applies AI-generated labels (category + severity) to the GitHub issue via the GitHub API.

## Why use this?
- Eliminates manual issue triage by using AI to instantly classify and prioritize every new issue
- Keeps the entire team informed across Slack, Email, and GitHub simultaneously
- Auto-creates ClickUp tasks so nothing falls through the cracks
- Logs every issue to Google Sheets for reporting and trend analysis
- Responds directly on GitHub so issue reporters get instant acknowledgment

## 🔗 Nodes Used

GitHub, Github Trigger, Google Sheets, HTTP Request, Slack, ClickUp

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
