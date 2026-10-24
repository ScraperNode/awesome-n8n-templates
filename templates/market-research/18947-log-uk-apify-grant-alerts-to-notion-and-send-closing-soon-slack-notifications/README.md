# 📊 Log UK Apify grant alerts to Notion and send closing-soon Slack notifications

> ⚡ **2 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow receives an Apify webhook when the UK Grant Alert Engine actor run completes, fetches the matched grants dataset from Apify, logs all new matches to a Notion database, and posts a Slack alert only for grants flagged as closing soon.

## How it works
1. Receives an Apify webhook request when the actor run completes and immediately replies “OK” to prevent retries.
2. Calls the Apify dataset items API to fetch up to 200 grant match records from the run’s default dataset.
3. Filters the dataset to keep only items marked as new matches.
4. Creates a Notion database page for each new grant with key fields like funding body, award range, deadline, days to close, matched keyword, and application URL.
5. Checks whether the newly logged grant is marked as closing soon.
6. Formats and posts a closing-soon alert message to a specified Slack channel.

## Setup
1. Create an Apify webhook for your UK Grant Alert Engine actor that points to this workflow’s Webhook URL (path `apify-uk-grants-notion`).
2. Replace `YOUR_APIFY_API_TOKEN` in the Apify dataset request with your Apify API token.
3. Create a Notion database with the required properties and replace `YOUR_NOTION_GRANTS_DATABASE_ID`, then add your Notion API credentials in n8n.
4. Add Slack OAuth2 credentials in n8n and set `YOUR_SLACK_CHANNEL_ID` to the channel that should receive closing-soon alerts.

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Notion, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
