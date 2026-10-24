# 💬 Manage meeting confirmations, reschedules, and cancellations with Google Calendar and Gmail

> ⚡ **6 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow provides an n8n-hosted form link that lets attendees confirm, reschedule, or cancel a specific Google Calendar meeting, then sends an email receipt via SMTP and logs the action to Google Sheets.

## How it works
1. Receives an attendee submission from an n8n Form with their email, a hidden Google Calendar event ID, an action (confirm/reschedule/cancel), and optional new date/time.
2. Validates the submission and shows an error page if the email, meeting ID, or action is missing.
3. Retrieves the matching event from Google Calendar via the Calendar API and shows a not-found page if the event no longer exists.
4. Builds a meeting context (title, formatted time, attendee name, and meeting link) and routes based on the selected action.
5. For confirmations, updates the Google Calendar event (sets a color tag) and emails the attendee a confirmation with the join link.
6. For reschedules, parses the requested new date/time, patches the Google Calendar event to the new start/end (sending updates to guests), and emails the attendee the updated time.
7. For cancellations, deletes the Google Calendar event (sending updates to guests), emails the attendee a cancellation notice, appends the outcome to Google Sheets, and shows a success page.

## Setup
1. Connect Google Calendar OAuth2 credentials for the Google Calendar API requests and set the correct calendar ID in the workflow configuration.
2. Add SMTP credentials for the three outgoing emails and ensure the configured “from” address is allowed by your SMTP provider.
3. Connect Google Sheets credentials, create a spreadsheet tab named “Meeting Actions” with the expected columns, and paste the spreadsheet ID into the workflow configuration.
4. Update the CONFIG values in the workflow (timezone, business/sender names, from/support emails, and logSheetId) to match your environment.
5. Activate the workflow and share the hosted form URL in your reminder email, prefilling Email and Meeting ID in the link if desired.

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
