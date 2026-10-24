# 💬 Book and remind appointments via Telegram with Google Gemini and Google Calendar

> ⚡ **63 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
Youtube Video: https://youtu.be/YTDMFdz7-aw
This workflow turns Telegram messages into scheduled Google Calendar appointments using a Google Gemini AI agent, records bookings in Google Sheets, and runs every 15 minutes to send 24-hour and 1-hour Telegram reminders while logging sent reminders to avoid duplicates.

## How it works
1. Triggers when a new Telegram message is received and extracts the chat ID and message text.
2. Uses a Google Gemini AI agent to parse the message into structured appointment details (title, start/end time, location, and notes).
3. Validates the parsed data, defaults missing end times to 60 minutes, and asks the user on Telegram for clarification if the date or time is missing or ambiguous.
4. Creates the appointment as an event in Google Calendar when all required details are available.
5. Appends the appointment record (including event ID and chat ID) to a Google Sheets “Appointments” sheet and sends a confirmation message via Telegram.
6. Runs every 15 minutes to fetch upcoming Google Calendar events in the next 25 hours and selects events that are roughly 24 hours or 1 hour away.
7. Checks a Google Sheets “ReminderLog” sheet to see whether a reminder was already sent for that event/time window, then sends the Telegram reminder and logs the reminder to prevent duplicates.

## Setup
1. Connect Telegram credentials and configure your Telegram bot so it can receive messages, then activate the workflow to register the trigger.
2. Connect Google Calendar OAuth2 credentials and replace ENTER-YOUR-CALENDER-ID-HERE with your target calendar ID in both the event creation and event lookup steps.
3. Connect Google Sheets OAuth2 credentials and ensure your spreadsheet contains an “Appointments” sheet with columns like eventId, chatId, title, start, end, location, status, and createdAt.
4. Create a “ReminderLog” sheet with columns like reminderKey, eventId, reminderType, and sentAt so the workflow can track which reminders were sent.
5. Add Google Gemini (Google PaLM) credentials for the language model used by the appointment parsing agent.
6. Adjust the schedule interval and reminder windows in the reminder-checking logic if you want different timing or frequency.

## 🔗 Nodes Used

Google Sheets, Telegram, Telegram Trigger, Google Calendar, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
