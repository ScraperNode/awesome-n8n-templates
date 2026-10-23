# ⚡ Optimize daily schedules with Groq, Google Sheets, Calendar, Gmail, and Twilio

> ⚡ **20 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
This workflow uses Google Sheets, Google Calendar, Groq, Gmail, and Twilio to reset a daily routine at midnight, automatically shift tasks around new calendar meetings during the day, and send email or phone call reminders as tasks approach.

## How it works
1. Runs every midnight to clear the “Daily Routine” and “State” tabs in Google Sheets, then copies rows from “Reset Routine” into “Daily Routine”.
2. Runs every hour from 6AM–7PM to read today’s routine from Google Sheets, fetch today’s Google Calendar events, and load previously processed meeting IDs from the “State” sheet.
3. Sends the calendar events, routine, and state to Groq to identify only new meeting/task time conflicts.
4. If conflicts are found, recalculates the routine by adding fixed meeting blocks and shifting overlapping tasks to the next available time, then updates the “Daily Routine” sheet.
5. Logs the processed Google Calendar event IDs back into the “State” sheet to avoid reprocessing the same meetings.
6. Runs every 15 minutes to check tasks starting within the next hour and sends a Gmail reminder for tasks 16–60 minutes away or triggers a Twilio phone call for tasks starting within 15 minutes.
7. If the Groq output can’t be parsed, emails the raw AI response and error details via Gmail.

## Setup
1. Create a Google Sheets OAuth2 connection and update all Google Sheets steps to point to your own copied spreadsheet with “Daily Routine”, “Reset Routine”, and “State” tabs.
2. Create a Google Calendar OAuth2 connection and replace the calendar placeholder so events are read from your target calendar.
3. Create a Groq API credential (API key) and select/confirm the model in the Groq chat model step.
4. Create a Gmail OAuth2 connection and replace the [ReceiverEmail] placeholder in both reminder and error-notification emails.
5. Set up Twilio (Account SID, Auth Token, and a Twilio phone number), create an HTTP Basic Auth credential, and replace [AccountSID], [SenderNumber], [RecevierNumber], and the Twilio voice URL in the call request.
6. Open the midnight schedule trigger and set the exact time (00:00) and timezone as needed for your environment.

## Additional info
Published by Fahmi Fahreza, Indonesia's first official n8n Brand Ambassador and founder of WithMi Automation, built from real client implementations, not tutorials.
→ Let us build it for you: withmiautomation.com
→ Learn to build it yourself: academy.withmiautomation.com
→ Bring Fahmi to your team (training, workshop, talkshow): fahmiiireza.com

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Calendar, Gmail, Schedule Trigger, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
