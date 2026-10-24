# ⚡ Send SMS appointment reminders and track replies with Google Calendar and SMS Vert Pro MCP

> ⚡ **1 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
This workflow runs hourly to read upcoming Google Calendar events, extract the client’s name and mobile number from each event, send an appointment reminder via the SMS Vert Pro MCP API, and write a sent/failed status back into the event description to prevent duplicate reminders.

## How it works
1. Runs every hour on a schedule.
2. Fetches all Google Calendar events starting between now and the next configured hours (default 24) and expands recurring events.
3. Skips cancelled/all-day/already-tagged events, enforces sending hours, extracts the client name and phone from the event description/location, and generates a personalized SMS message from a template.
4. If a valid mobile number is found, sends the SMS using the SMS Vert Pro MCP endpoint and records whether the send succeeded or failed.
5. Updates the Google Calendar event description with an “[SMS reminder sent …]” or “[SMS reminder failed …]” marker so the event is not reminded twice.
6. If no mobile number is found, updates the event description with “[SMS reminder not sent: no mobile number found]” so it can be fixed and retried.

## Setup
1. Connect your Google account in the two Google Calendar nodes, then set calendar_id in Reminder settings (primary or the calendar's email address).
2. Create a Bearer Auth credential with your SMS Vert Pro API V2 token (log in at smsvertpro.com, then open https://www.smsvertpro.com/api/doc-v2.php to reveal it) and select it in the MCP Client node.
3. Update the reminder settings (sender name, business name, message template, timezone/locale, hours ahead, and allowed sending window).
4. Ensure each appointment event includes lines like “Name: …” and “Phone: …” (or equivalent labels such as Mobile/Tel) in the description so the workflow can extract recipient details.

## Requirements
- An SMS Vert Pro account with SMS credits
- A Google account with Google Calendar
- n8n with the MCP Client node (tested on n8n 2.22)

## Customization
- Set hours_ahead to 48 to remind two days before.
- Set locale to fr, de or es to write dates in another language.
- Change send_from and send_until to fit your opening hours.

## 🔗 Nodes Used

Google Calendar, Schedule Trigger, MCP Client

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
