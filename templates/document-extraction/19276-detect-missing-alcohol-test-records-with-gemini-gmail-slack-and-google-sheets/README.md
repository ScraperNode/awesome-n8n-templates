# 🔬 Detect missing alcohol test records with Gemini, Gmail, Slack and Google Sheets

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow collects driver alcohol test submissions via an n8n form and stores them in Google Sheets, then runs a daily check against a roster to find missing records and uses Google Gemini to draft Japanese reminders that are sent via Gmail and summarized in Slack.

## How it works
1. Receives alcohol test submissions from drivers through an n8n Form and captures driver ID, shift type (before/after), reading, checker, and notes.
2. Normalizes each submission by generating a record ID, timestamp, shift date, and a match key (driver + date + shift), then appends the record to the TestRecords sheet in Google Sheets.
3. Runs on a schedule at the end of each day and loads the day’s roster and submitted test records from Google Sheets.
4. Compares the roster to TestRecords using the match key to identify rostered shifts with no corresponding submission, then summarizes how many checks are missing for the configured date.
5. If any checks are missing, generates a Japanese driver reminder and a one-line manager summary for each missing entry using Google Gemini.
6. Emails each affected driver via Gmail, posts the manager summary to a Slack channel, and appends a “missing” log row to the MissingLog sheet in Google Sheets.
7. If none are missing, posts a confirmation message to the manager’s Slack channel.

## Setup
1. Add credentials for Google Sheets OAuth2, Gmail OAuth2, Slack OAuth2, and the Google Gemini (PaLM) API.
2. Create or copy a Google Sheets file with sheets named Roster, TestRecords, and MissingLog and ensure the columns include fields like matchKey, driverId, name, vehicle, email, shiftDate, and shiftType.
3. Paste your Google Sheets spreadsheet ID into the workflow configuration (the daily check config and the TestRecords append step) and set the Slack channel name/ID for manager notifications.
4. Set your workflow timezone so the shift date and match key align with your local operating day.
5. Share the n8n Form URL with drivers so they can submit before/after shift records.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Schedule Trigger, Basic LLM Chain, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
