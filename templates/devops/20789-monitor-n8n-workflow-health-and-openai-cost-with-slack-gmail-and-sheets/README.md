# ⚙️ Monitor n8n workflow health and OpenAI cost with Slack, Gmail and Sheets

> ⚡ **119 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow monitors an n8n instance hourly and weekly by calling the n8n API to calculate execution health metrics and estimated LLM spend, then posts incident alerts to Slack, logs incidents and history to Google Sheets, and sends an OpenAI-written weekly digest via Gmail.

## How it works
1. Runs every hour for a 1-hour “guard” window and every Monday at 9 AM for a 7-day “digest” window.
2. Calls the n8n API to list all active workflows (excluding this monitor) and fetches recent executions per workflow.
3. Computes per-workflow and instance totals such as run volume, failures, error rate, p95 duration, and estimated OpenAI token cost (when execution data includes usage).
4. In guard mode, checks Google Sheets (Guard_Log) to suppress repeat warnings during the cooldown, classifies incidents as warning/critical, and pulls the latest failed execution to extract the failing node and error message.
5. For critical incidents, deactivates the workflow via the n8n API unless it is tagged as protected (for example, `no-auto-disable` or `critical`), then posts the incident to Slack and appends the incident to the Guard_Log sheet.
6. In digest mode, reads Google Sheets (Metrics_History) to compare against recent history, samples failed executions to cluster similar error messages, and sends the trends and clusters to OpenAI to generate a structured weekly health summary.
7. Builds an HTML email digest and Slack TL;DR, sends the email via Gmail, posts the TL;DR to Slack, and appends the week’s snapshot to the Metrics_History sheet.

## Setup
1. Create an n8n API key and configure HTTP Header Auth credentials that send it as `X-N8N-API-KEY` to your n8n instance.
2. Connect credentials for Google Sheets, Slack, Gmail, and OpenAI.
3. Create a Google Sheet with two tabs named `Guard_Log` and `Metrics_History`, then replace `YOUR_GOOGLE_SHEET_ID` and `YOUR_SLACK_CHANNEL_ID` with your actual IDs.
4. Update the monitor configuration values (n8n base URL, thresholds, alert cooldown, model name, and digest email address) to match your environment.
5. Add the `no-auto-disable` or `critical` tag to any workflows you never want automatically deactivated.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
