# 📋 Log Telegram client updates to Notion and Google Sheets with Gemini

> ⚡ **17 views** · 📋 [Project Management](../)

## Description

## Quick overview
Youtube Video: https://youtu.be/kEumCSBunnM?si=AxpoxP8KLF2haz1X

This workflow captures freelancer project updates from Telegram, uses Gemini to extract and match the client from a Sheets roster, appends the update to a Notion project timeline, optionally archives attachments to Google Drive, logs everything to Sheets, and sends a daily digest with Google Calendar context.

## How it works
1. Triggers when you send a Telegram message to the configured bot.
2. Uses Google Gemini to extract a structured project update (client hint, status, blocker, deadline, and summary) from the message text.
3. Reads the active client roster from Google Sheets and uses Google Gemini to match the client hint to a single client with a confidence score.
4. If the match confidence is below the threshold, sends a Telegram message asking you to confirm which client you meant and does not log anything.
5. If the match is confident, formats a normalized update payload and appends a timeline entry to the target Notion block.
6. If the Telegram message contains a file or photo, downloads it from Telegram and uploads it to a Google Drive folder.
7. Appends an audit row to Google Sheets and sends a Telegram confirmation, or sends a Telegram error message if the Notion write fails.
8. Every day at 08:00, fetches upcoming Google Calendar events and recent Google Sheets log entries, has Google Gemini write a short morning brief, and sends it to Telegram as a single-message digest.

## Setup
1. Add credentials for Telegram Bot API, Google Gemini (PaLM/Vertex) API, a Google Sheets service account, Google Drive access, Google Calendar OAuth, and Notion.
2. Create a Google Sheet with a “Clients” tab (client_id, client_name, aliases, notion_page_id, drive_folder_id, deadline, active) and a “Log” tab (timestamp, client_id, client_name, status, summary, blocker, deadline, confidence, raw_message), then set the correct Spreadsheet ID and sheet/tab identifiers in the Google Sheets nodes.
3. In Notion, create or choose a page/block to hold the timeline and set the Notion block ID (and ensure the integration has access to that page).
4. Set the Google Drive folder ID for archived attachments and grant the service account edit access to that folder.
5. Replace the Telegram digest chat ID and ensure the Telegram trigger/webhook is configured so messages reach the bot used by this workflow.

## 🔗 Nodes Used

Google Sheets, Telegram, Telegram Trigger, Google Drive, Google Calendar, Notion

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
