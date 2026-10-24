# 🔒 Notify on anomalous Google Drive access and send weekly email summaries

> ⚡ **4 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick Overview
This workflow monitors Google Workspace Drive audit logs on an hourly and weekly schedule, detecting bulk downloads, access bursts, and new access IPs, then emailing security alerts and a weekly activity digest while also logging both messages to a separate compliance/audit workflow.

## How it works
1. Runs on two schedules: hourly for anomaly detection and weekly for a firm-wide access summary.
2. Pulls Google Drive activity from the Google Workspace Admin Reports API and normalizes each event (user, file name, matter reference pattern, timestamp, and IP address).
3. Filters the log to access-only events (view, download, and print) and aggregates counts per user.
4. Tracks each user’s known IP addresses over time and flags access from a newly observed IP after a baseline exists.
5. Checks each user’s activity against configured thresholds and a cooldown window to decide whether an alert is required.
6. For flagged users, generates a formatted alert email, logs the alert by calling a separate n8n compliance workflow, and sends the email via SMTP.
7. On the weekly schedule, aggregates the last 7 days into a top-users summary, logs it via the same compliance workflow, and emails the weekly digest.

## Setup
1. Create Google Workspace Admin Reports API access and add a Google OAuth2/API credential with domain-wide delegation and the `admin.reports.audit.readonly` scope.
2. Configure an SMTP email credential and set the sender address in `FIRM_FROM_EMAIL`.
3. Set n8n variables for `FIRM_EMAIL` (and optionally `SECURITY_ALERT_EMAIL`) and the anomaly thresholds (`LOOKBACK_HOURS`, `BULK_DOWNLOAD_THRESHOLD`, `ACCESS_BURST_THRESHOLD`, `ALERT_COOLDOWN_HOURS`).
4. Update `GUARDRAIL_WORKFLOW_ID` to point to the n8n workflow that logs messages for compliance/audit purposes.
5. If needed, adjust the matter reference regex in the normalization code and the cron expressions for the hourly and weekly schedules.

## 🔗 Nodes Used

Send Email, HTTP Request, Execute Sub-workflow, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
