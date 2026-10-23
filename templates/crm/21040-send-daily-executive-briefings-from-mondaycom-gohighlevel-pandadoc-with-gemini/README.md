# 🤝 Send daily executive briefings from Monday.com, GoHighLevel, PandaDoc with Gemini

> ⚡ **2 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow runs daily at 8:00 to pull task metrics from Monday.com, lead and pipeline data from GoHighLevel, and proposal stats from PandaDoc, then uses Google Gemini to write an executive briefing and delivers it to Slack, Microsoft Outlook email, and a Monday.com dashboard board.

## How it works
1. Runs every day at 8:00 AM using a schedule trigger.
2. Loads configuration values such as board IDs, column IDs, thresholds, company name, Slack channel ID, and email recipient.
3. Fetches the latest 100 tasks from Monday.com, the latest 100 contacts from GoHighLevel, and the latest 100 documents from PandaDoc via their APIs.
4. Aggregates the three datasets to calculate task completion and overdue counts, lead totals and hot/warm/new lead counts, estimated pipeline value from budget fields, proposal status totals, and anomaly flags.
5. Sends the computed metrics to Google Gemini to generate a three-paragraph executive summary with red/yellow/green status and a single priority action.
6. Formats the briefing into a Slack message, an HTML email, and a Monday.com item payload.
7. Posts the report to a Slack channel, sends it via Microsoft Graph (Outlook) email, and creates a new item on a Monday.com dashboard board.

## Setup
1. Create HTTP Header Auth credentials for Monday.com (Authorization token), GoHighLevel/LeadConnector (Bearer token), and PandaDoc (API key), and assign them to the respective HTTP Request steps.
2. Add a Google Gemini (PaLM) API credential for the Gemini chat model used to write the briefing.
3. Add a Slack OAuth2 credential and a Microsoft Outlook OAuth2 credential that can call Microsoft Graph to send email.
4. Update the configuration values for Monday.com board IDs and column IDs, the GoHighLevel location ID (and optional budget field ID), the Slack channel ID, the Outlook recipient email, and the overdue/pipeline thresholds.

## Requirements
- Monday.com account with an API token
- GoHighLevel account with API access
- PandaDoc account with an API key
- Microsoft Outlook account
- Google AI Studio (Gemini) API key
- Slack workspace

## Customization
- Change the schedule to weekly or add a second daily run
- Edit the Gemini prompt to add department-specific KPIs
- Replace Outlook with Gmail, or add a Telegram node for a phone alert

## Additional info
Hot and warm lead counts read the GoHighLevel tags lead-score-hot and lead-score-warm, which are set by the "Score and route GoHighLevel leads with Gemini, Slack and Monday.com" template. Estimated pipeline value is read from a contact custom field whose key contains "budget". Monday.com and GoHighLevel pulls are limited to the latest 100 records. Column IDs differ per board.

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
