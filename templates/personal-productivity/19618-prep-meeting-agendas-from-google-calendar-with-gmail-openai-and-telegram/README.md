# ⚡ Prep meeting agendas from Google Calendar with Gmail, OpenAI, and Telegram

> ⚡ **9 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
This workflow runs every 15 minutes to pull upcoming Google Calendar meetings, find related Gmail threads for context, and use OpenAI (GPT-4o-mini) to generate a concise agenda, then creates a Gmail draft, sends a Telegram alert, and logs processed events to Google Sheets to avoid duplicates.

## How it works
1. Runs every 15 minutes on a schedule trigger.
2. Fetches upcoming events from Google Calendar and reads previously processed event IDs from a Google Sheets “Meeting Prep Log” tab.
3. Skips meetings that already exist in the log, then iterates through each unprocessed meeting.
4. Searches Gmail for recent emails from the meeting attendees (within the last 30 days) and compiles snippets into a single meeting-context prompt.
5. Sends the meeting details and email context to OpenAI (gpt-4o-mini) to generate a Markdown agenda and prep brief.
6. Creates a Gmail draft addressed to the meeting attendees, sends a Telegram message with the formatted agenda, and appends the meeting’s Event ID and title to Google Sheets.
7. If the workflow errors, it sends an alert to Slack and to Telegram via the error trigger.

## Setup
1. Connect credentials for Google Calendar OAuth2, Gmail OAuth2, OpenAI API, Google Sheets OAuth2, Slack OAuth2, and Telegram Bot API.
2. Replace `REPLACE_WITH_YOUR_MEETING_PREP_SHEET_ID` with your Google Sheets document ID and ensure a “Meeting Prep Log” sheet exists with an “Event ID” column.
3. Set `REPLACE_WITH_YOUR_TELEGRAM_CHAT_ID` for meeting alerts and `YOUR_ADMIN_TELEGRAM_CHAT_ID` for error alerts, and confirm the Slack channel selection for error notifications.

## 🔗 Nodes Used

Airtable, Google Sheets, HTTP Request, Slack, Telegram, Google Calendar

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
