# ⚙️ Monitor HTTP endpoints and send status-change alerts to Slack and Sheets

> ⚡ **1 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow checks a list of HTTP endpoints every 5 minutes, retries once on failure, and posts Slack alerts only when an endpoint goes down or recovers, with optional escalation and Google Sheets logging plus a daily Slack digest of any endpoints still down.

## How it works
1. Runs every 5 minutes (or manually) and loads a predefined list of endpoints with a name, URL, and optional expected health field.
2. Requests each endpoint over HTTP with a 15-second timeout and captures the full response without failing the workflow on errors.
3. Evaluates health based on the HTTP status code and, when configured, verifies a specific field in the response body matches the expected healthy value.
4. If an endpoint looks unhealthy, waits 30 seconds and retries once to confirm the outage before continuing.
5. Stores the last-known state per endpoint and only proceeds when the state changes to down or recovered, tracking how long it has been down and how many consecutive failures occurred.
6. Sends a Slack alert when an endpoint goes down (and optionally appends the event to Google Sheets) and sends another Slack alert when it recovers.
7. Escalates to Slack after 6 consecutive failed checks for an endpoint, and every day at 08:00 sends a Slack digest only if any endpoints are currently down.

## Setup
1. Update the endpoint list (name, URL, and optional expected field) in the endpoints configuration step.
2. Add Slack credentials and configure the target channel(s) for the down, recovered, escalation, and daily digest Slack messages.
3. (Optional) Add Google Sheets credentials and configure the spreadsheet and sheet for outage logging.
4. Adjust the check interval, retry delay, escalation threshold (6 failures), and the daily digest time (08:00) to match your monitoring needs.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
