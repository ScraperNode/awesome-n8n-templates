# 📋 Complete Google Tasks from GitHub commits with Gemini, Slack, and Sheets

> ⚡ **142 views** · 📋 [Project Management](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow triggers on GitHub push events, compares the pushed commit messages with your open Google Tasks using Google Gemini, marks confidently matched tasks as completed, posts a completion summary to Slack, and appends a run log to Google Sheets.

## How it works
1. Triggers when a push event is received from a selected GitHub repository.
2. Extracts repository, pusher, and commit message details from the webhook payload.
3. Fetches all incomplete tasks from Google Tasks and aggregates them into a single list for analysis.
4. Sends the commit summary and the open task list to a Google Gemini agent, which identifies matching tasks and updates them to completed in Google Tasks.
5. Parses the agent’s structured results and formats a Slack-ready summary including matched, ambiguous, and error items.
6. Posts the summary to a Slack channel and appends key execution metrics (counts and timestamp) to a Google Sheets log.

## Setup
1. Connect a GitHub credential, select the owner/repository, and configure the GitHub webhook for the workflow’s GitHub trigger.
2. Connect Google Tasks OAuth2 credentials and set the target task list ID used for reading and updating tasks.
3. Add a Google Gemini (PaLM) API credential for the chat model used by the agent.
4. Connect a Slack credential and choose the channel where the workflow posts the summary message.
5. Connect a Google Sheets credential (service account in this template) and update the spreadsheet ID and sheet tab used to append the audit log.

## 🔗 Nodes Used

Github Trigger, Google Sheets, Slack, Google Tasks, AI Agent, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
