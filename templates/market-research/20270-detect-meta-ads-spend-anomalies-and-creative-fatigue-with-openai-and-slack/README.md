# 📊 Detect Meta Ads spend anomalies and creative fatigue with OpenAI and Slack

> ⚡ **66 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs daily and pulls Meta Ads account and ad insights from the Meta Graph API, detects spend/performance anomalies and creative fatigue, uses OpenAI (gpt-4o-mini) to propose fixes for flagged accounts, and posts either an alert or an all-clear message to Slack.

## How it works
1. Runs every day at 9:00 AM (cron schedule).
2. Loads your configured Meta ad accounts and generates the “yesterday” and 7-day lookback date window for each account.
3. Queries the Meta Graph API for account-level daily metrics, active ad-level daily metrics, and 7-day ad totals for baseline comparison.
4. Compares yesterday’s performance to the 7-day baseline to flag issues like spend spikes/drops, CPA spikes, CTR drops, CPM spikes, missing results, or missing data, and identifies ads with creative fatigue based on frequency and CTR trend.
5. If issues are found, sends the findings to OpenAI (gpt-4o-mini) to generate a short diagnosis and prioritized fix recommendations (plus creative ideas when fatigue is present).
6. Formats the results into a Slack message (including an Ads Manager link) and posts either the alert or an optional all-clear message to the configured Slack channel.
7. If the workflow fails, triggers an error handler that posts a workflow error alert to Slack.

## Setup
1. Add a Meta access token as an HTTP Header Auth credential and connect it to the three Meta Graph API HTTP Request nodes.
2. Add an OpenAI API credential for the OpenAI node using the gpt-4o-mini model.
3. Add a Slack OAuth2 credential and update the Slack channel IDs used for posting alerts and workflow error notifications.
4. Update the account list and defaults in the configuration step (ad account IDs, client name, goal, target CPA, default Slack channel, currency symbol, and action types).
5. Adjust the detection thresholds and limits in the configuration (lookback days, minimum spend, spend/CPA/CTR/CPM thresholds, frequency threshold, and max fatigued ads) to match your reporting needs.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
