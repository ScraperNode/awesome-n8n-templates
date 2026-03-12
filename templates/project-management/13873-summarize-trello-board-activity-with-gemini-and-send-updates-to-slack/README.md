# 📋 Summarize Trello board activity with Gemini and send updates to Slack

> ⚡ **24 views** · 📋 [Project Management](../)

## Description

# Summarize Trello board activity with Gemini AI and post updates to Slack

## Who is this for

Project managers and development teams using Trello for task management who want automated daily standup summaries without manual effort. Perfect for remote teams that need consistent project visibility and communication.

## What it does

This workflow automatically generates intelligent daily standup reports from your Trello board activity. Every business day at 5 PM, it collects cards created and updated during the day, sends the data to Gemini AI for analysis, and distributes a human-readable summary via Slack and email. The workflow also logs daily metrics to Google Sheets and sends alerts for overdue cards.

The AI summary includes activity stats, new work highlights, progress updates, blockers, and suggested priorities for the next day.

## How to set up

1. Connect your Trello, Slack, Gmail, and Google Sheets accounts in n8n
2. Get a Gemini API key from Google AI Studio and add it as an HTTP header credential
3. Replace placeholder values in the Configuration Settings node: your Trello board ID, Slack channel, team email addresses, and Google Sheets ID
4. Create a "Standup Metrics" sheet in your Google Sheets with columns: Date, New Cards, Updated Cards, Overdue Cards, Board ID
5. Test with a manual execution before enabling the schedule

## Requirements

- Trello account with API access
- Slack workspace with bot permissions 
- Gmail account
- Google Sheets document
- Gemini API key (free tier available)

## How to customize

Modify the Gemini prompt in the Generate AI Summary node to change the summary style or add specific insights. Adjust the schedule trigger timing, change the overdue threshold logic in the code node, or extend to multiple Trello boards by duplicating the data collection nodes.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Trello, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
