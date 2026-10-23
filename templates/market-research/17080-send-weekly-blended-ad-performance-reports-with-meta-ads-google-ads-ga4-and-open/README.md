# 📊 Send weekly blended ad performance reports with Meta Ads, Google Ads, GA4 and OpenAI

> ⚡ **40 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs every Monday at 8am, pulls last-7-days performance data from the Meta Ads API, Google Ads API, and Google Analytics 4, calculates blended KPIs, uses OpenAI to generate a client-friendly insight summary, and delivers an HTML report by Gmail while posting status update to Slack.

## How it works
1. Runs every Monday at 8am on a schedule trigger.
2. Fetches the last 7 days of spend and engagement metrics from the Meta Ads Insights endpoint.
3. Fetches the last 7 days of campaign cost, clicks, and conversions from the Google Ads API using a streamed search query.
4. Fetches the last 7 days of conversions and revenue by default channel group from the Google Analytics 4 Data API.
5. Combines the three datasets and calculates blended totals for spend, conversions, revenue, and ROAS.
6. Sends the blended metrics to OpenAI to generate a 3–4 sentence plain-language weekly performance summary.
7. Builds a simple HTML report and sends it to the client via Gmail while posting a short “report sent” summary to a Slack channel.
8. If the workflow execution fails, posts the error message to an ops Slack channel.

## Setup
1. Add credentials and replace the placeholders for your Meta Ads token and ad account ID in the Meta Ads Insights request.
2. Add Google Ads authentication and replace `YOUR_CUSTOMER_ID` in the Google Ads request.
3. Add Google Analytics 4 authentication and replace `YOUR_GA4_PROPERTY_ID` in the GA4 report request.
4. Add an OpenAI API key for the Chat Model used by the AI Agent.
5. Connect your Gmail account and set the recipient email address used to send the HTML report.
6. Connect Slack and set the channel IDs for the client-report update and ops-alert notifications.

## 🔗 Nodes Used

HTTP Request, Slack, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
