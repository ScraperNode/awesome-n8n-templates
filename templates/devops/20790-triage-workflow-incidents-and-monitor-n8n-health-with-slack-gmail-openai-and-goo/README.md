# ⚙️ Triage workflow incidents and monitor n8n health with Slack, Gmail, OpenAI and Google Sheets

> ⚡ **6 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow monitors your n8n instance hourly and weekly by querying the n8n API for active workflows and recent executions, estimating error rates, performance, and OpenAI token spend, then auto-disabling runaway workflows and sending incident alerts and a weekly health digest via Slack, Gmail, and Google Sheets.

## How it works
1. Runs every hour for an incident “guard” window and every Monday at 9 AM for a 7‑day “digest” window.
2. Calls the n8n REST API to list active workflows (excluding this monitor) and fetches recent execution history for each workflow.
3. Computes per-workflow health metrics (runs, failures, error rate, p95 duration) and estimates LLM cost by scanning execution data for token usage.
4. In guard mode, checks Google Sheets (Guard_Log) to suppress repeat warnings during a cooldown, classifies workflows as warning/critical, and pulls the latest failed execution details from the n8n API to extract the failing node and error message.
5. Automatically deactivates critical workflows via the n8n API unless they are tagged as protected (for example, no-auto-disable or critical), then posts a detailed incident alert to Slack and appends the incident to Google Sheets.
6. In digest mode, reads Google Sheets (Metrics_History) to compare against prior snapshots, detects week-over-week anomalies, clusters similar error messages from sampled failures, and uses OpenAI (gpt-4o-mini) to generate an ops summary.
7. Emails the weekly HTML digest via Gmail, posts a TL;DR to Slack, and appends the current metrics snapshot to Google Sheets for next week’s baseline.

## Setup
1. Create an n8n API key and configure an HTTP Header Auth credential that sends it as X-N8N-API-KEY for all n8n API requests.
2. Create a Google Sheets spreadsheet with two tabs named Guard_Log and Metrics_History, then set the spreadsheet ID in the Google Sheets nodes.
3. Add credentials for Google Sheets, Slack, Gmail, and OpenAI (used for the weekly digest summary).
4. Update the monitor configuration values (your n8n base URL, thresholds, alert cooldown, OpenAI model, and digest email address) in the configuration step.
5. Set the target Slack channel ID in both Slack posting steps, run the workflow once manually to validate access, then activate it.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
