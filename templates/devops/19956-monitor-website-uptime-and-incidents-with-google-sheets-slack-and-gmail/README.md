# ⚙️ Monitor website uptime and incidents with Google Sheets, Slack and Gmail

> ⚡ **31 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow monitors website uptime and performance every 10 minutes using Google Sheets as the site list and state store, sends incident and recovery alerts to Slack (and optional Gmail email alerts), logs downtime history to Google Sheets, and posts a daily Slack digest.

## How it works
1. Runs every 10 minutes and reads the monitored site list from a Google Sheets “Sites” tab.
2. Filters out inactive/blank rows, normalizes and deduplicates URLs, then checks each site sequentially with an HTTP request and measures response time.
3. Evaluates each result against the expected HTTP status, optional page keyword, and maximum response time to classify the check as UP, SLOW, or DOWN with a reason.
4. Looks up the site’s previous state in the Google Sheets “Site State” tab and only opens an incident after the configured number of consecutive failures, then sends Slack (and optional Gmail) alerts on incident open, recovery, and 6-hour reminders.
5. Writes the latest state, counters, timestamps, and last check details back to the Google Sheets “Site State” tab on every run.
6. When a site recovers, appends a closed-incident record (start, recovery time, duration, and last reason) to the Google Sheets “Incident History” tab.
7. Runs daily at 09:00 to read current state and the last 24 hours of incident history from Google Sheets, builds a digest summary, and posts it to Slack.
8. Triggers on workflow execution errors and posts a crash alert to Slack with the failed node and execution link.

## Setup
1. Create one Google Sheets spreadsheet with three tabs (“Sites”, “Site State”, and “Incident History”) and add the columns described in the Google Sheets node notes.
2. Add Google Sheets credentials in n8n and replace YOUR_GOOGLE_SHEET_ID in all Google Sheets nodes.
3. Add Slack OAuth2 credentials and replace YOUR_SLACK_CHANNEL_ID for the alert, digest, and error-notification messages.
4. Add Gmail OAuth2 credentials if you want per-site email alerts, and populate the “Alert Email” column in the “Sites” tab.
5. In workflow settings, set the workflow’s Error Workflow to this same workflow so the error-trigger branch can notify Slack, and confirm the schedule time zone matches your needs.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
