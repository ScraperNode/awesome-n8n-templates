# 🔬 Score PostgreSQL table data quality and send issue alerts to Slack

> ⚡ **15 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow runs hourly or via a webhook to scan a PostgreSQL table for missing required values, duplicate business keys, numeric anomalies, and table health issues, then stores run history and issues in PostgreSQL and sends Slack alerts only when attention is needed.

## How it works
1. Runs every hour on a schedule or starts on demand when a POST request is sent to the /dq-run webhook.
2. Loads the data-quality configuration (table name, key columns, required columns, numeric columns, thresholds, and Slack webhook URL) and validates it before building SQL.
3. Queries PostgreSQL to detect missing required values, duplicate business keys (optionally normalized), numeric outliers using a robust z-score, and table health stats (row counts and timestamp freshness).
4. Scores completeness, uniqueness, validity, and timeliness, classifies the run as pass/warn/fail/error, and selects the most important issues for reporting.
5. Writes the run summary to dq_runs, inserts only newly observed issues into dq_issues, and optionally auto-resolves issues that no longer appear after a full scan.
6. Posts a formatted alert to Slack when the run fails/errors, critical issues are found, or new warnings appear; otherwise it stays quiet.

## Setup
1. Add PostgreSQL credentials for all PostgreSQL nodes and run the manual setup to create the dq_runs, dq_issues, and optional dq_demo_orders tables.
2. Update the configuration values (tableName, pkColumn, timestampColumn, requiredColumns, duplicateKeyColumns, numericColumns, scopeHours, and thresholds) to match your PostgreSQL table.
3. Provide a Slack incoming webhook URL in slackWebhookUrl and ensure your Slack workspace allows incoming webhooks.
4. If using on-demand runs, copy the /dq-run webhook URL from n8n and call it with an HTTP POST from your source system.

## 🔗 Nodes Used

HTTP Request, Postgres, Webhook, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
