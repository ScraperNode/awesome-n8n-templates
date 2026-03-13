# 🎫 Triage GitHub issues with Gemini AI, auto-label them, and send Slack alerts

> ⚡ **4 views** · 🎫 [Ticket Management & Triage](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who is this for

Development teams and project maintainers who receive high volumes of GitHub issues and want to automate classification and team notifications. Perfect for open source projects, product teams, and DevOps engineers managing multiple repositories.

## What it does

This workflow automatically triages new GitHub issues using Gemini AI classification. When an issue is created, it extracts the title and description, sends them to Gemini AI for analysis, then automatically adds appropriate labels (bug, feature, documentation, etc.) and priority tags to the issue. Critical and high-priority issues trigger alerts in your #urgent-issues Slack channel, while medium and low-priority items go to #issue-tracker. All classifications are logged to Google Sheets with timestamps for analytics.

## How to set up

1. Connect your GitHub repository using webhook credentials
2. Get a free Gemini API key from ai.google.dev and add to credentials
3. Set up Slack bot credentials for your workspace
4. Create a Google Sheet with columns: Date, Repository, Issue Number, Title, Author, AI Type, AI Priority, Urgency Score, Summary, URL
5. Replace the Google Sheet ID in the final node with your sheet's ID
6. Configure your Slack channel names (#urgent-issues and #issue-tracker)

## Requirements

- GitHub repository with admin access
- Google Gemini API account (free tier available)
- Slack workspace with bot permissions
- Google Sheets access for logging

## How to customize

Modify the Gemini prompt to change classification categories or add custom labels. Adjust priority thresholds in the Switch node to change routing logic. Add additional Slack channels for different teams or severity levels. Configure the Google Sheets columns to capture additional metadata or metrics specific to your workflow.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
