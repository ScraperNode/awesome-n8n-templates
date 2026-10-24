# ⚙️ Detect cloud cost spikes with Google Sheets, Slack, Gmail, and Jira

> ⚡ **26 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick Overview
This workflow runs daily to pull cloud spend from a billing API, compare it to a Google Sheets rolling baseline, and alert on cost spikes by creating a Jira incident, posting to Slack, emailing Finance via Gmail, and logging the run back to Google Sheets.

## How it works
1. Runs every day at 08:00 on a schedule.
2. Fetches the latest daily cloud cost from a cloud billing API and loads historical daily costs from a Google Sheets “Baseline” sheet.
3. Calculates a trailing-average baseline, computes the percentage change for today, and marks the result as valid only when enough non-zero history exists.
4. Stops processing when the data is invalid or the increase is below the configured spike threshold.
5. Classifies the spike severity (Watch/High/Critical) based on the percentage increase.
6. Creates a Jira issue with the spike details, then posts an alert to a Slack channel and emails a text summary to Finance via Gmail.
7. Appends the run details (date, service, severity, costs, and percent change) to the Google Sheets baseline sheet for future comparisons.

## Setup
1. Add an HTTP Header Auth credential for your cloud billing API and replace the example Authorization header value in the HTTP request.
2. Connect Google Sheets OAuth credentials and set the Google Sheet document ID and ensure a “Baseline” sheet exists with a historical daily cost column (and is used for logging).
3. Review and adjust the spike threshold (currently 25%) and the minimum baseline requirements (at least 3 non-zero rows) in the code step.
4. Connect Jira credentials and set your Jira project ID and issue type ID for incident creation.
5. Connect Slack credentials and set the target channel ID, then connect Gmail credentials and update the Finance recipient email address.
6. Adjust the schedule time (currently 08:00) to match when your daily billing data is available.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Jira Software, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
