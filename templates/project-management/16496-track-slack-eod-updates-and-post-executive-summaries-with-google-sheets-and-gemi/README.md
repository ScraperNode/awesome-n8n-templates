# 📋 Track Slack EOD updates and post executive summaries with Google Sheets and Gemini

> ⚡ **29 views** · 📋 [Project Management](../)

## Description

## Quick overview
Youtube Video: https://youtu.be/AbkX2splTTg?si=LTHqLFIWQD4hAYsO

This workflow collects end-of-day updates from team members in Slack, stores them in Google Sheets, and posts a concise executive summary back to Slack using Google Gemini.

## How it works
1. Runs daily at 3pm, reads the team roster from Google Sheets, filters out people marked as on leave, and sends each active member an EOD update form in Slack.
2. Receives Slack button/form submissions via a webhook, parses the interactive payload, and replaces the original message with a confirmation.
3. Checks whether the submitted EOD date matches today’s date, and sends a private Slack alert to the owner if someone submits late.
4. For on-time submissions, reads today’s entries from the EOD submissions Google Sheet, deduplicates by user and date, and appends the new submission to Google Sheets.
5. Runs daily at 5pm, reads today’s submissions and yesterday’s “tomorrow plan” entries from Google Sheets and merges them per user.
6. Aggregates the merged data, calculates attendance and expected submission counts from the team roster, and sends the dataset to Google Gemini to generate an executive summary.
7. Posts the generated Slack-formatted summary message to the configured Slack channel.

## Setup
1. Create or connect a Slack app for interactive messages, add Slack API credentials in n8n, and configure the workflow’s webhook URL as the Slack Interactivity Request URL.
2. Add Google Sheets Service Account credentials, grant the service account access to your team roster sheet and your EOD submissions sheet, and update the spreadsheet IDs/sheet tabs where needed.
3. Add Google Gemini (Google PaLM) API credentials and ensure the configured Gemini model is available in your Google project.
4. Populate the team roster sheet with each person’s Slack user ID and a boolean “today_on_leave?” field so the workflow can decide who receives prompts and who is expected to submit.
5. Replace the placeholder Slack user/channel IDs for the owner notification and the summary destination in the Slack nodes.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
