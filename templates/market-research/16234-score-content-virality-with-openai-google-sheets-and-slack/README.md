# 📊 Score content virality with OpenAI, Google Sheets and Slack

> ⚡ **155 views** · 📊 [Market Research & Insights](../)

## Description

## Quick Overview
This workflow accepts content submissions via webhook or a weekday schedule, pulls historical performance from Google Sheets, fetches trend and audience signals via HTTP APIs, uses OpenAI to predict a 0–100 virality score with recommendations, then notifies the team in Slack or email and logs results back to Google Sheets.

## How it works
1. Receives new content either from a POST webhook request or on a weekday 9am cron schedule.
2. Normalizes the incoming fields and validates that required content is present and meets basic quality checks.
3. Pulls historical post performance from Google Sheets and retrieves current trending-topic data from SerpAPI Google Trends plus audience behavior signals from an external analytics API.
4. Merges the collected signals and sends them to OpenAI (GPT-4.1-mini) to generate a structured virality assessment and predicted engagement range.
5. Parses the AI response, enforces score-tier thresholds (HIGH/MODERATE/LOW), and enriches the result with timestamps and IDs.
6. Sends a Slack webhook notification for HIGH and MODERATE scores or sends a SendGrid email alert with revision guidance for LOW scores.
7. Appends the full scoring record to a Google Sheets log and, for webhook submissions, returns the score payload in the webhook response.

## Setup
1. Add OpenAI API credentials for the LangChain agent chat model.
2. Replace the Google Sheets URLs with your spreadsheet ID and a valid Google Sheets API key (or adapt to OAuth) for both the historical read and log append requests.
3. Add and configure your trend and analytics data sources by setting the SerpAPI key and the analytics API base URL and bearer token.
4. Create a Slack incoming webhook and replace YOUR_SLACK_WEBHOOK_PATH in both Slack notification requests.
5. Configure SendGrid by adding an Authorization header/API key (not included in the request) and updating the from/to email addresses in the email request body.
6. If using the webhook trigger, copy the production webhook URL and send content payloads containing at least title/body and platform fields.

## 🔗 Nodes Used

HTTP Request, Webhook, Schedule Trigger, Filter, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
