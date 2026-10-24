# 📋 Sync check due dates from Google Sheets to Google Calendar with Telegram alerts

> ⚡ **9 views** · 📋 [Project Management](../)

## Description

## Quick overview
This workflow watches a Google Sheets check inventory list and creates or updates matching all-day events in Google Calendar, then posts a creation or update notice to a Telegram group.

## How it works
1. Polls Google Sheets every hour for any updates in the “Check Inventory” sheet.
2. Checks whether the updated row already contains a Google Calendar Event ID.
3. If the Event ID is empty, searches Google Calendar for an existing event whose text matches the check number and backfills the found Event ID to Google Sheets.
4. If no matching calendar event exists, creates an all-day Google Calendar event using the check date and details from the Google Sheets row, then writes the new Event ID back to the sheet.
5. If an Event ID exists, fetches the corresponding Google Calendar event and compares its date, summary, and description to the latest Google Sheets values.
6. When differences are detected, updates the Google Calendar event to match the sheet and sends a Telegram message summarizing the created or updated events.

## Setup
1. Connect credentials for Google Sheets (including Google Sheets Trigger), Google Calendar OAuth2, and a Telegram Bot API account.
2. Replace `YOUR_CHECK_INVENTORY_SHEET_ID` in all Google Sheets nodes and ensure the “Check Inventory” sheet contains the required columns (including “Check Number” and “Event ID”).
3. Set the target Google Calendar ID (for example `your-calendar@example.com` or a shared calendar ID) in the Google Calendar nodes.
4. Replace `YOUR_TELEGRAM_GROUP_CHAT_ID` in the Telegram nodes and edit the message text to use the correct @mentions for your team.

## 🔗 Nodes Used

Google Sheets, Telegram, Google Calendar, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
