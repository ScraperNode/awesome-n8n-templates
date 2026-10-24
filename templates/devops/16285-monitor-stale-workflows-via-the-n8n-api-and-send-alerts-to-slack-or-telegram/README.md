# ⚙️ Monitor stale workflows via the n8n API and send alerts to Slack or Telegram

> ⚡ **17 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick Overview
This workflow runs hourly to check the last successful execution time of selected n8n workflows via the n8n REST API, and sends an alert (Slack by default, or Telegram, email, or WorkflowBuddy push) when any workflow has gone stale past its allowed threshold.

## How it works
1. Runs every hour on a schedule.
2. Builds a list of workflow IDs and per-workflow maximum age thresholds, along with your n8n base URL.
3. Queries the n8n REST API for the most recent successful execution of each monitored workflow.
4. Calculates how long it has been since the last success (or treats it as stale if there is no successful execution on record).
5. Sends one alert per stale workflow to Slack (and optionally Telegram, email, and/or WorkflowBuddy iOS push).

## Setup
1. Update the n8n base URL and the monitored workflow list (workflowId, workflowName, and maxAgeHours) in the configuration code.
2. Create an n8n API key and add it to an HTTP Header Auth credential named `X-N8N-API-KEY`, then select it for the n8n API request.
3. Configure at least one alert channel: connect Slack and set the target channel, or enable Telegram/email/WorkflowBuddy and fill in the required chat IDs, addresses, and header auth token.

## 🔗 Nodes Used

Send Email, HTTP Request, Slack, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
