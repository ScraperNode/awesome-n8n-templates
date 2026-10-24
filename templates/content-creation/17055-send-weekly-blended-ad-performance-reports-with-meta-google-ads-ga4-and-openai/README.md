# 🎬 Send weekly blended ad performance reports with Meta, Google Ads, GA4 and OpenAI

> ⚡ **32 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow runs every Monday at 8am to pull the last 7 days of performance from Meta Ads, Google Ads, and GA4, calculate blended KPIs, generate an OpenAI-powered narrative summary, email an HTML report via Gmail, and post an internal update (and errors) to Slack.

## How it works
1. Runs every Monday at 8am on a scheduled trigger.
2. Fetches the last 7 days of spend and engagement metrics from the Meta Ads Insights API, campaign cost and conversion metrics from the Google Ads API, and conversions and revenue by channel from the GA4 Reporting API.
3. Combines the three datasets and calculates blended KPIs including total spend, total conversions, total revenue, and ROAS.
4. Sends the computed metrics to an OpenAI chat model to generate a 3–4 sentence client-friendly performance summary with one risk and one recommendation.
5. Builds a simple HTML report containing the KPIs and AI summary.
6. Emails the HTML report to the client via Gmail and posts a brief confirmation with spend and ROAS to a Slack channel.
7. If the workflow fails, posts an error alert message to an ops Slack channel.

## Setup
1. Configure authentication for the HTTP requests to Meta Ads (access token), Google Ads (OAuth/access token), and GA4 (OAuth/access token), and replace `YOUR_AD_ACCOUNT`, `YOUR_CUSTOMER_ID`, and `YOUR_GA4_PROPERTY_ID` in the request URLs.
2. Add an OpenAI credential for the chat model used to write the weekly summary.
3. Connect your Gmail account and replace the recipient address in the email step.
4. Connect Slack, set the channel IDs for the weekly update and ops alerts, and adjust the schedule time if you don’t want Monday 8am UTC.

## 🔗 Nodes Used

HTTP Request, Slack, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
