# 📊 Track alumni job changes with Coresignal, Google Sheets and Slack

> ⚡ **2 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs weekly, reads alumni profile URLs from Google Sheets, looks up matching employee profiles in Coresignal, detects job changes based on the current active employer, posts alerts to Slack when a change is confirmed, and writes the latest status and snapshot fields back to Google Sheets.

## How it works
1. Runs every week on Monday at 8am.
2. Reads alumni rows from Google Sheets and keeps only records with a non-empty profile URL.
3. Processes alumni in batches by normalizing each URL and searching for a matching employee profile in Coresignal.
4. If a match is found, retrieves the employee details from Coresignal and compares the active employer ID and name to the last stored snapshot to determine whether a job change occurred.
5. If a job change is detected and hasn’t already been alerted for that employer, posts a formatted notification to a Slack channel.
6. Appends or updates the alumni row in Google Sheets (matched by profile URL) with the latest snapshot, status, timestamps, and any suppression reason, then continues to the next profile.

## Setup
1. Connect Google Sheets OAuth2 credentials and set the target spreadsheet and “Employees” sheet used for both reading and append/update.
2. Add Coresignal API credentials and ensure your plan supports employee search and employee detail lookups.
3. Connect Slack OAuth2 credentials and select the channel where job-change alerts should be posted.
4. Ensure your Google Sheet includes columns used by the workflow (at minimum profile_url, plus snapshot/status fields like current_company_id, current_company_name, alerted_company_id, and last_checked_at).

## 🔗 Nodes Used

Google Sheets, Slack, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
