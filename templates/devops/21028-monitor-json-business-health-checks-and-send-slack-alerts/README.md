# ⚙️ Monitor JSON business health checks and send Slack alerts

> ⚡ **0 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow runs hourly to check an HTTPS JSON endpoint for expected HTTP status and business-rule assertions, deduplicates repeated failures using n8n static data, and posts failure or recovery alerts to a Slack channel.

## How it works
1. Runs every hour (or on manual execution) and loads the monitor configuration, including the target URL, expected status code, Slack channel ID, and up to four JSON field checks.
2. Validates the configuration and converts the check rows into structured assertions.
3. Sends an HTTP GET request to the target HTTPS endpoint and captures the full JSON response and status code.
4. Evaluates the response against the expected HTTP status and the configured business checks (equals, nonEmpty, minItems, or freshWithinMinutes) and produces a healthy/unhealthy result with issue codes.
5. Compares the current result to the previous run stored in n8n static workflow data to detect new failures, changed failures, reminder-worthy ongoing failures, or recoveries.
6. Posts a formatted alert message to Slack only when an alert is needed, otherwise it completes silently.

## Setup
1. In the “EDIT HERE — URL, Checks & Alerts” node, set your HTTPS JSON GET endpoint, expected HTTP status, Slack channel ID, reminder interval, and at least one JSON path check with a supported rule.
2. Configure authentication in the HTTP Request node if your endpoint requires it (for example, Header Auth with an Authorization bearer token or X-API-Key).
3. Add a Slack credential with permission to post messages (chat:write), invite the bot to the target channel, and keep the workflow’s Slack channel selection bound to the configured channel ID.

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
