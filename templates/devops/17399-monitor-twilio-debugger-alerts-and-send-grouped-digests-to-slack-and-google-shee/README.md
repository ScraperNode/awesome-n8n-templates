# ⚙️ Monitor Twilio debugger alerts and send grouped digests to Slack and Google Sheets

> ⚡ **1 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow runs hourly to fetch Twilio Monitor Debugger alerts from the last hour, groups them by error code and log level, logs each alert to Google Sheets, and posts a single aggregated digest to a Slack channel.

## How it works
1. Runs every 60 minutes on a schedule.
2. Computes an ISO start date (now minus the lookback window) and a page size for the Twilio query.
3. Fetches recent alerts from the Twilio Monitor Alerts API using the computed time window.
4. Stops if no alerts are returned to avoid posting empty updates.
5. Groups alerts by error code and log level, builds a Slack digest with counts and sample messages, and prepares one row per alert.
6. Appends the alert rows to Google Sheets and posts the grouped digest message to Slack.

## Setup
1. Add a Twilio API credential (Account SID and Auth Token) and connect it to the HTTP request that calls the Twilio Monitor Alerts API.
2. Add Google Sheets OAuth2 credentials, then select the target spreadsheet and sheet tab and ensure it has columns for timestamp, error_code, log_level, resource_sid, request_url, and alert_sid.
3. Add a Slack credential and set the destination channel for the digest message.
4. Adjust the schedule interval and keep the lookback window in sync so the query covers the time between runs.

## Requirements
- A Twilio account with API access (Account SID and Auth Token). The Monitor Alerts API works on trial and paid accounts.
- A Google account with a spreadsheet you can write to.
- A Slack workspace, a channel, and a Slack app credential.

## Customization
- Log only errors by filtering out the warning level before the grouping step.
- Send high-severity error codes to their own channel or add an @mention, by branching on the error code.
- Add pagination if a single window can return more than one page of alerts.
- Keep only the branch you want: drop the Sheets append for a Slack-only alert, or drop the Slack post to keep just the audit log.

## Additional info
This treats Twilio as the system being watched rather than the channel that sends the alert, so failed webhooks and rejected sends that normally sit unseen in the Twilio debugger surface on a schedule instead of when a customer complains. It is read-only and never sends a message, so it costs nothing to run, and grouping by error code and log level keeps one misconfiguration from flooding the channel with hundreds of identical lines. There is no AI in the path, so the same alerts always produce the same digest.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
