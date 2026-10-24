# ⚙️ Monitor URL uptime with data tables and SMTP email alerts

> ⚡ **2 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow monitors a list of URLs every 5 minutes, confirms downtime only after two consecutive failures, emails down/recovery alerts via SMTP, logs checks and incidents to n8n Data Tables, and sends a daily uptime and latency report at 08:00 with automatic data cleanup.

## How it works
1. Runs every 5 minutes on a schedule to load recent incident history and recent check results from n8n Data Tables.
2. Builds a per-URL check list (including expected page text and the previous state) and probes each site with an HTTP GET, retrying once after a short wait if the first attempt fails.
3. Evaluates each probe result to detect confirmed downtime (two failed checks in a row) or recovery (first successful check after being down) and calculates downtime minutes.
4. Records every check outcome (status code, response time, and reason) to the `url_checks` n8n Data Table.
5. When a state change is detected, writes an incident entry to the `url_incidents` table and sends a single SMTP email alert for either DOWN or RECOVERED.
6. Runs daily at 08:00 to aggregate the last 24 hours of checks (compared to the prior 24 hours), then emails an HTML uptime report with uptime %, average and p95 response times, and incidents per URL.
7. Deletes `url_checks` rows older than 14 days to keep the monitoring dataset small.

## Setup
1. Create two n8n Data Tables named `url_checks` (url, ok, status_code, response_ms, reason, checked_at) and `url_incidents` (url, status, reason, changed_at, downtime_minutes).
2. Add an SMTP credential in n8n and select it in the DOWN alert, recovery alert, and daily report email steps.
3. Update the sites list (URLs, expected text, and slow threshold) in the code step that defines `SITES`, and set the to/from email addresses in each email step.

## 🔗 Nodes Used

Send Email, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
