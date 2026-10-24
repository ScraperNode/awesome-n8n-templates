# 📋 Summarize daily standups from Google Sheets with Gemini and Slack

> ⚡ **15 views** · 📋 [Project Management](../)

## Description

## Quick Overview
This workflow collects standup updates via a webhook, stores each submission in Google Sheets, then runs daily at 10 AM to summarize the day’s standups with Google Gemini and post the result (or a no-updates notice) to a Slack channel.

## How it works
1. Receives a POST webhook request containing standup fields (name, yesterday, today, blockers).
2. Validates that all required fields are present, returning a 400 error response if anything is missing.
3. Trims and formats the submitted values, adds a timestamp, and appends the standup entry to a Google Sheets worksheet before returning a 201 success response.
4. Runs every day at 10 AM, reads all standup rows from Google Sheets, and keeps only entries submitted for the current date.
5. If any standups exist for today, sends them to Google Gemini to generate a concise Slack-formatted team summary.
6. Posts the generated summary to Slack, or posts a fallback message if no standups were submitted by the scheduled time.

## Setup
1. Create a Google Sheet with columns Timestamp, Name, Yesterday, Today, and Blockers, and connect a Google Sheets OAuth2 credential.
2. Add a Google Gemini (PaLM) API credential for the AI summary step.
3. Connect a Slack OAuth2 credential and set the target channel for both the summary and the no-standup notification.
4. Copy the webhook URL for the standup submission endpoint and configure your standup form/tool to send POST requests with JSON body fields name, yesterday, today, and blockers.
5. Adjust the schedule trigger time (currently 10 AM) and update the Google Sheet document/worksheet selection if you use a different file or tab.

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Schedule Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
