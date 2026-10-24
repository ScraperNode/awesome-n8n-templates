# ⚙️ Monitor API rate limits and alert with Slack, Gmail and Google Sheets

> ⚡ **24 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick Overview
This workflow runs on a recurring schedule to check an API’s rate-limit status via HTTP, calculates usage and severity, sends Slack and Gmail alerts when thresholds are breached, and logs each check to Google Sheets for tracking.

## How it works
1. Runs on a schedule trigger at a fixed interval.
2. Calls the API rate-limit status endpoint via an HTTP request using a bearer token header.
3. Parses the response to normalize rate-limit fields and calculates used quota, remaining quota, usage percentage, and reset time.
4. Assigns a severity level (Normal, Warning, High, Critical) and flags whether usage is at or above the alert threshold.
5. When the threshold is breached, posts either a critical or warning message to the configured Slack channel based on severity.
6. Emails the on-call address via Gmail and appends the check results to a Google Sheets “Log” sheet.

## Setup
1. Update the HTTP request URL and replace the Authorization header value with your API’s rate-limit endpoint and bearer token (or configure an n8n HTTP Header Auth credential).
2. Connect your Slack credentials and set the target channel ID(s) used for the alerts.
3. Connect your Gmail credentials and set the on-call recipient email address.
4. Connect your Google Sheets service account credentials and set the spreadsheet document ID and sheet name used for logging.
5. Adjust the schedule interval and, if needed, tweak the severity and breach thresholds (currently alerts at 80% and marks critical at 95%).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
