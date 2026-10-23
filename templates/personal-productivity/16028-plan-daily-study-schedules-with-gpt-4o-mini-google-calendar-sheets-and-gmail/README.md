# ⚡ Plan daily study schedules with GPT-4o-mini, Google Calendar, Sheets and Gmail

> ⚡ **175 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
This workflow collects exam details via an n8n Form, uses OpenAI (GPT-4o-mini) to generate a day-by-day study plan, creates one Google Calendar event per study session, logs all sessions to Google Sheets, and emails the full schedule to the student via Gmail.

## How it works
1. Receives study details (name, exam date, subjects, available hours, start time, email) from an n8n Form submission.
2. Uses OpenAI (GPT-4o-mini) to generate a strict-JSON daily study plan with topics, session types, durations, and start/end times.
3. Parses the JSON plan, flattens it into individual study sessions, and iterates through them one-by-one.
4. Creates a Google Calendar event for each session, using the session’s date/time and adding session metadata in the description.
5. After all events are created, compiles rows for Google Sheets and generates a formatted HTML email containing the full schedule and study tips.
6. Appends one row per session to a Google Sheets tab and sends the confirmation email to the student via Gmail.

## Setup
1. Open the OpenAI — GPT-4o-mini Model step and connect your OpenAI API credential.
2. Open node 5. Google Calendar — Create Study Event, connect your Google Calendar OAuth2 credential, and replace YOUR_CALENDAR_ID with your actual calendar ID. To find it: open Google Calendar → Settings → click your calendar name → scroll to Calendar ID. For most users it is your Google account email address.
3. Create a Google Sheet tab named exactly Study Planner with these 12 column headers: Student Name, Exam Date, Subject, Topic, Date, Day, Start Time, End Time, Duration (hrs), Session Type, Priority, Status.
4. Open node 7. Google Sheets — Log Study Plan, connect your Google Sheets OAuth2 credential, and replace YOUR_GOOGLE_SHEET_ID. Find the Sheet ID by opening your spreadsheet in a browser and copying the string between /d/ and /edit in the URL.
5. Open node 8. Gmail — Send Confirmation Email and connect your Gmail OAuth2 credential. The email is sent automatically to whatever address the student submits in the form.
6. Activate the workflow and copy the form URL from node 1. Form — Study Planner Input to share with students.

## Requirements
- Active n8n instance (self-hosted or cloud)
- OpenAI account with GPT-4o-mini API access
- Google Calendar connected via OAuth2
- Google Sheets with a tab named Study Planner
- Gmail account connected via OAuth2 for sending confirmation emails

## Customization
- Change the session duration range — in the system prompt of node 2. AI Agent — Generate Study Schedule, change "between 1.5 and 3 hours" to a different range to generate shorter or longer study blocks depending on your preference
- Change the new learning vs revision split — in the same system prompt, change "First 60% of days: New Learning" to a different percentage — for example 50/50 for a more balanced plan or 70/30 for exams that are further away
- Add a Slack notification when the schedule is ready — after node 8. Gmail — Send Confirmation Email, add a Slack step that posts the student name, exam date, total sessions, and a confirmation message to a study group channel
- Change the calendar event color per session type — in node 5. Google Calendar — Create Study Event, expand the additional fields and add a colorId value — Google Calendar supports color IDs 1 through 11, which you can map to each session type using an IF check before the calendar step
- Add reminder alerts to calendar events — in node 5. Google Calendar — Create Study Event, add a reminders field in the additional fields section to set a popup reminder 30 or 60 minutes before each study session

## Additional info
The calendar event loop in this workflow uses SplitInBatches to process one study session at a time. Output 0 creates the next calendar event. Output 1 fires only when all sessions have been processed — this is what triggers the Sheets logging and email. Do not modify the SplitInBatches connections or the loop will break.

GPT-4o-mini generates the full schedule based on the number of days between today and the exam date. If the exam date is less than 2 days away, the AI may return a very short plan or an empty daily plan — the workflow will throw a clear error in that case. The exam date must be at least 3 days in the future for a meaningful plan to be generated.

The study start time field in the form must be entered in 24-hour format, for example 09:00 or 14:30. The AI uses this time as the anchor for scheduling all sessions throughout the day. An incorrectly formatted start time may cause calendar events to be created with invalid timestamps.

The Google Sheets log step uses autoMapInputData which maps the sheet_rows array directly. Make sure the column headers in your Study Planner tab match exactly — including capitalization and spacing — otherwise rows may be saved to the wrong columns or the step may fail.

## 🔗 Nodes Used

Google Sheets, Google Calendar, Gmail, AI Agent, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
