# 📊 Monitor ad campaign health daily with Spendict, Google Sheets, and Slack

> ⚡ **5 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs every morning to read ad campaign metrics from Google Sheets, send each campaign to Spendict for performance diagnosis against benchmarks, log the verdicts back to Google Sheets, and post Slack alerts when a campaign needs attention.

## How it works
1. Runs daily at 08:00 on a schedule trigger.
2. Reads campaign metric rows from a Google Sheets spreadsheet.
3. Builds a Spendict request per campaign by normalizing platform/objective fields and including only numeric metrics present in each row.
4. Sends each campaign’s metrics to the Spendict analyze-performance API to get a verdict, score, bottleneck, and diagnosis.
5. Routes results by verdict so healthy or insufficient-data campaigns are only logged, while fix_first and kill_or_rebuild campaigns are also prepared for alerting.
6. Appends a dated health-check row for every campaign to a Google Sheets “health log” sheet.
7. Posts a Slack Incoming Webhook message for fix_first and kill_or_rebuild campaigns including the score, primary bottleneck, and diagnosis.

## Setup
1. Add Google Sheets credentials and select the document and sheet for both reading campaign metrics and appending to the health log.
2. Ensure your metrics sheet has columns like campaign (or campaign_name), platform, objective, and any tracked metrics (e.g., spend, impressions, ctr, cpc, cpm, conversions, cpa, roas).
3. Add Spendict API authentication as HTTP Header Auth (Authorization: Bearer …) for the Spendict HTTP request.
4. Replace the Slack Incoming Webhook URL in the Slack alert request with your own Slack webhook endpoint.
5. Adjust the schedule time on the trigger if you don’t want it to run daily at 08:00.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
