# ⚒️ Detect and self-heal data pipeline incidents with PostgreSQL, Claude and Slack

> ⚡ **3 views** · ⚒️ [Engineering](../)

## Description

## Quick Overview
This workflow runs every 15 minutes to pull recent records from PostgreSQL, detect data quality anomalies, and use Anthropic Claude to classify issues and plan remediation. It executes corrective actions, sends Slack and PagerDuty alerts, logs incidents back to PostgreSQL, and pushes monitoring metrics to DataDog.

## How it works
1. Runs every 15 minutes on a schedule and sets threshold and destination parameters (Slack channel, Postgres tables, API keys).
2. Queries PostgreSQL for the latest batch of records and loads baseline metrics from a PostgreSQL baseline table.
3. Performs statistical data quality checks (null rates, outliers, schema changes) and compares results to historical baselines with trend and anomaly scoring.
4. When an anomaly is detected, Anthropic Claude classifies the anomaly and (if severity is critical) creates a PagerDuty incident.
5. Anthropic Claude generates a single remediation plan, and the workflow selects the appropriate action (fill missing values, cap outliers, reformat schema, or retry the upstream fetch).
6. Merges the remediated results, re-runs quality checks to validate success, and posts either a success notification or a human-review escalation to Slack.
7. Logs the outcome to PostgreSQL, aggregates incident data into a report, sends metrics to DataDog, and updates the PostgreSQL baseline metrics table.

## Setup
1. Add PostgreSQL credentials and replace the placeholder source table name plus the incident and baseline table names/columns used by the SQL queries.
2. Add an Anthropic (Claude) credential for the anomaly classification and remediation planning steps.
3. Add Slack credentials and set the Slack channel ID in the pipeline parameters for success and escalation notifications.
4. Configure PagerDuty by setting your service ID and API key used by the incident-creation HTTP request.
5. Configure DataDog by adding your API key used by the metrics HTTP request and confirm the target Datadog site/endpoint is correct for your account.

## 🔗 Nodes Used

HTTP Request, Postgres, Slack, Schedule Trigger, Anthropic

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
