# 📊 Diagnose website friction with Microsoft Clarity, Bright Data, GPT-5.6 and Slack

> ⚡ **9 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs daily to pull friction metrics from Microsoft Clarity, fetches the affected pages via Bright Data Web Unlocker, uses GPT-5.6 (OpenAI) to diagnose likely causes and fixes, then logs results to Google Sheets and posts a digest to Slack.

## How it works
1. Runs every day on a schedule.
2. Fetches page-and-device friction metrics from the Microsoft Clarity Data Export API and reads the previous run history from Google Sheets.
3. Normalizes and pivots Clarity’s metric output into per-page totals, removes junk/duplicate URL variants, ranks pages by friction percentage, and keeps only pages that are new or worse than last time.
4. Retrieves the shortlisted page content as markdown through Bright Data Web Unlocker and extracts page headings and link text for context.
5. Sends the Clarity breakdown and extracted page outline to GPT-5.6 (OpenAI) to return a likely cause, the first element to inspect, a concrete fix, and a confidence level.
6. Appends one row per page (including fetch failures) to Google Sheets and posts a single formatted summary message to a Slack channel.

## Setup
1. Create a Microsoft Clarity Data Export API token and add an HTTP Header Auth credential that sends `Authorization: Bearer <token>`.
2. Set up a Bright Data Web Unlocker zone, add its HTTP Header Auth credential, and update the zone name in the workflow Settings.
3. Connect Google Sheets OAuth and Slack credentials, replace the Google Sheet ID, and ensure both Google Sheets nodes point to the same tab (for reading history and appending new rows).
4. Set the target Slack channel and tune `clarity_days`, `min_sessions`, `min_friction_percent`, `max_pages`, and `only_new_or_worse` to match your reporting preferences.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Telegram, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
