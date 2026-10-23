# 💬 Manage meeting confirmations with Google Calendar, Gmail, and Google Sheets

> ⚡ **8 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow exposes a webhook that lets attendees confirm, reschedule, or cancel a Google Calendar meeting via email links, then sends a matching Gmail notification, logs the action to Google Sheets, and returns a branded HTML response page.

## How it works
1. Receives a webhook request containing an action (confirm/reschedule/cancel), attendee email, eventId, and optionally a newDateTime/meetingDate for rescheduling.
2. Validates the required fields and returns an HTML error page if the request is incomplete or the action is invalid.
3. Fetches the Google Calendar event by ID and returns an HTML “not found” page if the event no longer exists.
4. Builds a meeting context (attendee name, title, start/end time, and meeting link) and routes processing based on the requested action.
5. For confirm, updates the Google Calendar event color to mark it as confirmed and sends a confirmation email via Gmail.
6. For reschedule, parses the requested new time, updates the existing Google Calendar event start/end, and sends a reschedule email via Gmail (or returns an HTML error page if the time cannot be parsed).
7. For cancel, deletes the Google Calendar event (notifying guests) and sends a cancellation email via Gmail, then appends the action to Google Sheets and returns a branded HTML success page.

## Setup
1. Connect Google Calendar OAuth2 credentials, Gmail credentials, and Google Sheets credentials to the respective nodes.
2. In “Workflow Config”, set your calendarId, timezone, businessName, senderName, supportEmail, and the Google Sheets spreadsheet ID (logSheetId).
3. Create a Google Sheets tab named “Meeting Actions” with the columns: Timestamp, Action, Email, Event ID, Meeting Title, Original Start, New Start, Status.
4. Activate the workflow, copy the production webhook URL, and use it in your email buttons/links (including eventId, email, action, and reschedule parameters when needed).

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
