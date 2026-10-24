# 📋 Summarize daily Slack standups with OpenAI, Notion, and Google Sheets

> ⚡ **40 views** · 📋 [Project Management](../)

## Description

## Quick overview
This workflow runs every weekday, pulls standup messages from a Slack channel, uses OpenAI to generate a structured daily digest, saves the digest to a Notion database, posts a summary back to Slack, and appends an audit entry to Google Sheets.

## How it works
1. Runs every weekday morning on a cron schedule.
2. Fetches the day’s recent messages from a specified Slack standup channel and filters out bot, subtype, and join/leave system messages.
3. Checks whether any standup messages remain and posts a Slack notice if none are found.
4. Formats the remaining Slack updates into a single structured prompt with date, team name, and message count.
5. Sends the formatted standup text to OpenAI (gpt-4.1-mini) to generate a JSON digest with summary, highlights, blockers, per-user updates, and mood.
6. Parses and enriches the AI output with metadata, creates a new page in a Notion database, posts the digest to a Slack summary channel, and appends a run record to a Google Sheets “Audit Log” sheet.

## Setup
1. Add a Slack OAuth2 credential and set the standup channel ID (history source) and the summary channel ID (digest destination).
2. Add an OpenAI credential and confirm the model selection (gpt-4.1-mini) is available in your account.
3. Add a Notion credential, create/select a target database, and replace `YOUR_NOTION_DATABASE_ID` (and ensure the database has the referenced properties: Date, Team, Message Count, Mood).
4. Add a Google Sheets Service Account credential, share the target spreadsheet with the service account email, and replace `YOUR_SHEET_ID` and the sheet name (“Audit Log”) if different.
5. Adjust the schedule cron expression (`0 9 * * 1-5`) to match your team’s standup timing and timezone expectations.

## 🔗 Nodes Used

Google Sheets, Slack, Notion, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
