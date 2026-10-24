# ⚙️ Monitor website uptime and latency with Slack alerts and Data Tables

> ⚡ **0 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow runs scheduled HTTPS uptime and latency checks for a configurable list of websites, stores monitor state and history in n8n Data Tables, and sends deduplicated incident and recovery alerts plus a daily summary to a Slack channel.

## How it works
1. Runs on two schedules: one for periodic uptime checks and one for the daily summary.
2. Loads the monitor configuration, initializes the required n8n Data Tables, and validates that enabled monitors use safe HTTPS URLs and sane thresholds.
3. Loops through enabled monitors, performs an HTTP request for each target, and normalizes the result into healthy/slow/failed outcomes with status code, latency, and error details.
4. Writes each check into the check-history table and compares the result to the prior persisted monitor state to detect outages, latency degradation, and recoveries based on confirmation and recovery thresholds.
5. Upserts the latest monitor state and incident details into Data Tables and creates deterministic notification keys to prevent duplicate alerts.
6. Sends eligible alerts to Slack, records the notification result in a ledger, and on the daily run calculates uptime/latency statistics from stored history, posts a Slack summary, and deletes old records based on retention settings.

## Setup
1. Connect a Slack OAuth2 credential and set the target Slack channel ID for both the alert and daily summary Slack nodes.
2. Update the configuration object in the workflow to add your monitor URLs, expected status codes, timeouts, thresholds, reminder minutes, and any maintenance windows.
3. Review retention settings (check, incident, and notification days) and the schedule times/intervals to match your operating requirements and timezone.

## Customization
- Add or remove monitored URLs
- Override timeout or latency/failure thresholds per site
- Adjust global defaults and retention periods
- Customize Slack message formatting in the notification nodes

## Additional info
The monitors field is an Object field displayed as a JSON list of site configurations. Each site requires an ID, name, URL, and enabled flag. Per-site overrides are optional and replace global defaults only when explicitly provided.

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
