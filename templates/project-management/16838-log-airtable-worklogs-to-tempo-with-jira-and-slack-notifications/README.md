# 📋 Log Airtable worklogs to Tempo with Jira and Slack notifications

> ⚡ **10 views** · 📋 [Project Management](../)

## Description

## Quick overview
This workflow runs nightly to pull time entries from Airtable, converts Jira issue keys to issue IDs, logs the time to Tempo via its REST API, archives the processed entries back to Airtable, and sends a confirmation message to a Slack user.

## How it works
1. Runs on a schedule.
2. Fetches all records from the Airtable “Daily Worklog” table.
3. Looks up each entry’s Jira issue by Issue Key to retrieve the issue ID.
4. Builds a Tempo worklog payload (authorAccountId, issueId, start date/time, description, and time spent calculated from start/end times).
5. Sends each worklog to the Tempo to create the worklog entry.
6. Archives each submitted entry into the Airtable “Worklog History” table and deletes the original record from “Daily Worklog”.
7. Aggregates the processed records and sends a direct message in Slack confirming the upload.

## Setup
1. Connect Airtable credentials and update the base ID and table IDs for “Daily Worklog” and “Worklog History” to match your Airtable setup.
2. Connect Jira Software Cloud credentials with access to the projects/issues referenced by the Airtable Issue Key field.
3. Connect an HTTP Bearer credential using your Tempo API token, and replace `YOUR_TEMPO_AUTHOR_ID` in the code with your Tempo user (author) account ID.
4. Connect Slack credentials and set the target recipient (user ID) for the confirmation message.

## 🔗 Nodes Used

Airtable, HTTP Request, Slack, Jira Software, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
