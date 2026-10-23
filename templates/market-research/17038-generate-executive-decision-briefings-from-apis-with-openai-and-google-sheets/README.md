# 📊 Generate executive decision briefings from APIs with OpenAI and Google Sheets

> ⚡ **24 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs daily or via an on-demand webhook to pull financial metrics, operational KPIs, and market quotes via HTTP APIs, then uses OpenAI to detect anomalies and generate an executive briefing that is POSTed to a dashboard endpoint and logged to Google Sheets.

## How it works
1. Runs on a daily schedule or receives a POST request via a webhook to start an executive briefing run with a configurable lookback period.
2. Fetches financial metrics, operational KPIs, and market data in parallel from three HTTP API endpoints and continues even if one source fails.
3. Merges and normalizes the three datasets into a single snapshot, marking missing sources as unavailable so downstream steps keep a consistent structure.
4. Uses OpenAI to analyze the snapshot for anomalies, unusual trends, and data gaps, returning a severity-scored findings JSON.
5. Uses OpenAI again to turn the anomaly findings and raw metrics into a structured executive briefing with a health score, risks, opportunities, and recommended actions.
6. Formats a final JSON payload and delivers it by POSTing to your dashboard endpoint and appending a summary row to a Google Sheets tracker.
7. If the run was triggered by the webhook, returns the full briefing JSON as the webhook response.

## Setup
1. Add OpenAI API credentials (GPT-4.1) for both OpenAI chat model steps.
2. Configure HTTP Header Auth credentials and replace the YOUR_FINANCE_API and YOUR_OPERATIONS_API URLs with your internal finance and operations endpoints.
3. Replace the market data URL placeholders (YOUR_MARKET_DATA_PROVIDER, YOUR_TICKER, and YOUR_MARKET_DATA_API_KEY) with your market data provider settings.
4. Set YOUR_DASHBOARD_ENDPOINT_URL to the endpoint that accepts the briefing JSON via HTTP POST.
5. Add Google Sheets OAuth2 credentials, replace YOUR_SHEET_ID, and ensure the ExecutiveBriefings sheet/tab exists with the expected columns for appended rows.
6. Update the cron schedule (default 07:00 daily) and copy the webhook URL into any system that should request on-demand briefings.

## 🔗 Nodes Used

HTTP Request, Webhook, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
