# ⚙️ Monitor website uptime and latency with Telegram and email alerts

> ⚡ **11 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow checks multiple websites every 5 minutes, records uptime and response time history in n8n Data Tables, and sends state-change alerts via Telegram and/or email when a site goes down, becomes slow, or recovers.

## How it works
1. Runs on a 5-minute schedule (or manually) and reads the list of domains/URLs to monitor.
2. Validates and normalizes the website list into HTTPS URLs and builds a monitor configuration with timeout and slow-response thresholds.
3. Ensures the n8n Data Tables (`uptime_state` and `uptime_history`) exist and then checks each website via HTTP request, retrying up to three times for failures.
4. Classifies each result as UP, SLOW, or DOWN based on HTTP status code and response time, and captures any error message.
5. Writes each check to the `uptime_history` table and upserts the latest status (including incident start time) into the `uptime_state` table.
6. Compares the current status to the previously stored state and generates an alert message only when the status changes or on the first unhealthy check.
7. If enabled, sends the alert to Telegram (with destination allowlisting) and/or sends an email, while logging notification delivery failures in the execution output.

## Setup
1. Enter your domains/URLs in the `websites` field of the website list configuration (comma- or newline-separated).
2. (Optional) Enable Telegram alerts, add a Telegram bot credential, and set `telegram_chat_id` and `telegram_allowed_chat_ids` in the monitor settings.
3. (Optional) Enable email alerts, add an SMTP email credential, and set the sender and recipient addresses in the monitor settings.
4. Ensure n8n Data Tables are available in your instance, then run the workflow once to let it create `uptime_state` and `uptime_history` automatically (or run the one-time table setup trigger).
5. (Optional) Set `retention_days` in the cleanup settings and run the cleanup trigger to permanently delete old rows from `uptime_history`.

## 🔗 Nodes Used

Send Email, HTTP Request, Telegram, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
