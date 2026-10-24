# ⚙️ Detect silent n8n workflow failures with OpenAI, Google Sheets and Slack

> ⚡ **0 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow runs hourly to monitor active n8n workflows for silent failures by analyzing recent execution history via the n8n API, logging incidents in Google Sheets, using OpenAI to suggest likely causes, and sending new-incident and recovery alerts to Slack.

## How it works
1. Runs every hour on a schedule.
2. Fetches all active workflows from the n8n API and skips itself and any workflow tagged with the configured skip tag (for example, `no-monitor`).
3. Pulls the 10 most recent executions per workflow via the n8n API and scores each workflow for silent-failure patterns like missed schedules, repeated zero output, and sudden volume drops.
4. Reads the Incidents sheet in Google Sheets and compares the latest health results to existing open incidents to decide whether to open a new incident, resolve an existing one, or replace it when the problem type changes.
5. For new incidents, sends the workflow context and run history to OpenAI to generate a severity, likely causes, and a “check first” action, then appends the incident to Google Sheets and posts an alert to the configured Slack channel.
6. For recovered incidents, updates the matching row in Google Sheets with resolved time and downtime hours and posts a recovery message to Slack.

## Setup
1. Create a Google Sheet with a tab named `Incidents` and columns for incident_id, workflow_id, workflow_name, problem_type, details, severity, likely_causes, check_first, status, opened_at, resolved_at, and downtime_hours.
2. Add an n8n API credential and set your n8n base URL so the workflow can read workflows and executions via the n8n API.
3. Connect Google Sheets credentials and paste your Google Sheet document ID into the configuration value used by the Google Sheets nodes.
4. Connect an OpenAI credential for the Chat Model used to generate the incident diagnosis.
5. Connect a Slack credential and set the target channel name in the configuration so alerts and recovery messages post to the right place.

## Requirements
- n8n API access (self-hosted, or an n8n Cloud plan with API access) with successful executions saved (the default)
- OpenAI API key, a Google Sheet with an Incidents tab, and a Slack workspace

## Customization
- Tag any workflow no-monitor to skip it
- Set a maximum allowed silence for webhook-triggered workflows in max_silence_overrides
- Tune the zero-output run count and volume-drop percentage, or swap Slack for email or Telegram

## 🔗 Nodes Used

Google Sheets, Slack, n8n, Schedule Trigger, Filter, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
