# 📊 Generate weekly Seed & Series A scouting reports with PredictLeads and OpenAI

> ⚡ **68 views** · 📊 [Market Research & Insights](../)

## Description

Monitor a company watchlist for new Seed and Series A funding rounds and deliver a formatted weekly scouting report via email and Slack.

This workflow reads company domains from a Google Sheets watchlist, checks each one for recent financing events via the PredictLeads Financing Events API, filters for Seed and Series A rounds from the past 7 days, then uses OpenAI to generate a professional weekly scouting report with a summary table and trend analysis. The report is delivered via Gmail and Slack.

How it works:
1. Weekly schedule trigger runs every Monday.
2. Reads company domains from the Google Sheets watchlist.
3. Loops through each company and fetches financing events from PredictLeads.
4. Filters for Seed and Series A rounds that occurred in the last 7 days.
5. Aggregates all filtered funding events into a single dataset.
6. Sends the aggregated data to OpenAI to generate a formatted scouting report.
7. The report includes a markdown table (Company, Round Type, Amount, Date, Key Investors) and trend analysis.
8. Sends the full report via Gmail.
9. Posts a summary notification to Slack.

Setup:
- Create a Google Sheet with a "Watchlist" tab containing a column: domain.
- Configure the Gmail recipient address in the Send Report Email node (default: team@yourcompany.com).
- Set up a Slack incoming webhook URL in the Slack Summary node.
- Add your OpenAI API key in the Generate Scouting Report HTTP Request node.
- Add your PredictLeads API credentials (X-Api-Key and X-Api-Token headers).

Requirements:
- Google Sheets OAuth2 credentials.
- Gmail OAuth2 credentials.
- Slack incoming webhook URL.
- OpenAI API account (uses gpt-4o-mini, ~$0.003-0.008 per call).
- PredictLeads API account (https://docs.predictleads.com).

Notes:
- The 7-day lookback window is configured in the Filter Seed & Series A code node.
- Funding categories include "seed", "series_a", and "series a" variations.
- If no funding rounds are found, the report states that clearly rather than failing.
- PredictLeads Financing Events API docs: https://docs.predictleads.com

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
