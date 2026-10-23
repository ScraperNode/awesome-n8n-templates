# ⚡ Analyze Google Calendar patterns with OpenAI and send Gmail weekly digest

> ⚡ **66 views** · ⚡ [Personal Productivity](../)

## Description

## Quick Overview
This workflow runs on a weekday schedule or via webhook, pulls events from Google Calendar, analyzes meeting and focus-time patterns, generates optimization advice with OpenAI, then emails a digest through Gmail and appends the results to Google Sheets.

## How it works
1. Runs every weekday morning on a schedule or starts on demand from an incoming webhook request.
2. Sets a 7-day lookback and 7-day lookahead window and fetches all matching events from Google Calendar.
3. Normalizes event fields, then excludes all-day, private/OOO, cancelled, and zero-duration events and classifies the remaining events into categories like deep work, collaboration, 1:1s, admin, and external.
4. Aggregates the events and computes metrics such as meeting hours, focus hours, peak meeting hour, heaviest day, back-to-back chains, fragmentation score, top recurring meetings, and largest available free blocks.
5. Sends the computed metrics to OpenAI (GPT-4.1-mini) to generate a concise weekly calendar optimization report.
6. Formats a final report payload with a calculated health score, emails the digest via Gmail, appends the report data to Google Sheets, and returns a JSON success response for webhook runs.

## Setup
1. Connect Google Calendar OAuth2 credentials and select the calendar ID to analyze.
2. Connect an OpenAI API key and confirm the model selection (gpt-4.1-mini) fits your account and usage limits.
3. Connect Gmail OAuth2 credentials and replace the recipient address in the email step.
4. Connect Google Sheets OAuth2 credentials, replace `YOUR_SHEET_ID` (and sheet/tab name if needed) in the Google Sheets append request URL, and ensure the target sheet exists with the expected columns.
5. If using the manual trigger, copy the webhook URL from n8n and call it with a POST request from your preferred tool.

## 🔗 Nodes Used

HTTP Request, Webhook, Google Calendar, Gmail, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
