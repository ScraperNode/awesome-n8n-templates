# 🔧 Predict F1 Race Winners with OpenAI GPT-4o, Historical Data & Slack Alerts

> ⚡ **153 views** · 🔧 [Miscellaneous](../)

## Description

## How It Works
Every day at 8 AM, the workflow automatically retrieves the latest F1 data—including driver standings, qualifying results, race schedules, and circuit information. All sources are merged into a unified dataset, and driver performance metrics are computed using historical trends. An AI agent, enhanced with vectorized race history, evaluates patterns and generates race-winner predictions. When the confidence score exceeds the defined threshold, the system pushes an automated Slack alert and records the full analysis in the database and Google Sheets.

## Setup Steps
1. Update the workflow configuration with: `newsApiUrl`, `weatherApiUrl`, `historicalYears`, and `confidenceThreshold`.
2. Connect PostgreSQL using the schema:
   **prediction_date, predicted_winner, confidence_score, prediction_source, data_version, full_analysis**.
3. Provide the Slack channel ID for sending high-confidence alerts.
4. Specify the Google Sheets document ID and sheet name for prediction logging.
5. Test connectivity to the Ergast API (no authentication required).

## Prerequisites
OpenAI account (GPT-4o access), Slack workspace admin access, PostgreSQL instance, Google Sheets account, n8n instance with LangChain community nodes enabled.

## Customization
Extend by adding constructor predictions (modify AI prompt). Integrate Discord or Teams instead of Slack.

## Benefits
Saves time by automating data collection, improves accuracy using multiple performance metrics and historical patterns.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Postgres, Slack, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
