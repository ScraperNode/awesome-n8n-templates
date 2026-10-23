# ⚙️ Monitor workflow heartbeats with Google Sheets and Slack alerts

> ⚡ **7 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow implements a dead man’s switch for scheduled jobs by recording heartbeat check-ins via a web-hook to Google Sheets and alerting to Slack when a job misses its expected run window, with optional recovery notifications when the job starts checking in again.

## How it works
1. Receives a POST webhook heartbeat containing a job_id and validates an x-heartbeat-secret header against a configured shared secret.
2. Looks up the job_id in a Google Sheets “jobs” registry and returns a 404 response if the job is not registered.
3. Updates the matching Google Sheets row with the current last_heartbeat timestamp, sets status to OK, and clears last_alert_at.
4. If the job was previously in an alerting state, posts a recovery message to the configured Slack channel.
5. Responds to the heartbeat request with a 200 JSON confirmation including the job_id and recorded timestamp.
6. Every 15 minutes, loads all active jobs from Google Sheets and calculates which ones are overdue based on expected_every_minutes plus a grace period, suppressing repeat alerts for a configured re-alert window.
7. For each overdue job, posts a missed-run (or never-seen) alert to Slack and writes back last_alert_at and status in Google Sheets to prevent immediate re-alerting.

## Setup
1. Create or copy a Google Sheets document with a “jobs” sheet containing columns such as job_id, job_name, expected_every_minutes, grace_minutes, last_heartbeat, status, last_alert_at, active, and alert_channel.
2. Add Google Sheets OAuth2 credentials and replace YOUR_SHEET_ID in all Google Sheets steps with your spreadsheet ID.
3. Add Slack credentials and set the target channel (or use per-row alert_channel) in the Slack alert and recovery message steps.
4. Set a strong shared_secret in the receiver configuration and have each monitored job send it in the x-heartbeat-secret header when POSTing to the webhook.
5. Add one row per monitored job (set active to TRUE, expected_every_minutes, and optional grace_minutes/alert_channel) and configure your jobs to POST their job_id to the webhook URL on successful completion.

## Requirements
- Google Sheets account with edit access, used as the job registry and heartbeat log
- Slack workspace with a bot/app that can post to the alert channel(s)
- Each monitored job needs to be able to send an HTTP POST request on completion (a script, a cron job, or another n8n workflow)
- A self-hosted or cloud n8n instance that can receive inbound webhooks

## Customization
- Swap Slack for email, Telegram, Discord, or PagerDuty by replacing the two Slack nodes
- Move the registry from Google Sheets to Airtable or Postgres if job volume outgrows a spreadsheet
- Adjust default_grace_minutes and re_alert_after_minutes in "Set checker config" to tune alert sensitivity and repeat-alert frequency
- Set a per-row alert_channel in the sheet to route different jobs to different Slack channels
- Change the schedule trigger's interval (default 15 minutes) to check more or less often

## Additional info
The webhook is public by design, since any job can POST a heartbeat to it. The shared_secret check in "Validate shared secret" isn't optional hardening, it's the only thing stopping a stranger from spoofing check-ins and silencing your alerts. Treat it like an API key.

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
