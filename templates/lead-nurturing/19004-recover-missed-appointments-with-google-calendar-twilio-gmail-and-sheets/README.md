# 💬 Recover missed appointments with Google Calendar, Twilio, Gmail and Sheets

> ⚡ **15 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow runs hourly to find Google Calendar events marked with a “no-show” keyword, then sends a rebooking link via Twilio SMS (when a phone number is available) and Gmail email, and appends a follow-up record to Google Sheets.

## How it works
1. Runs every hour on a schedule.
2. Searches Google Calendar for events in the last three hours that match a configurable marker word.
3. Skips events that were already handled in previous executions to avoid duplicate follow-ups.
4. Extracts the attendee’s email and name from the event and attempts to parse a phone number from the event description.
5. Sends the rebooking link via Twilio SMS when a phone number is present, then sends the rebooking link via Gmail email.
6. Appends a row to Google Sheets logging who was contacted, which channels were used, and the original appointment details.

## Setup
1. Connect credentials for Google Calendar, Twilio, Gmail, and Google Sheets.
2. In the Config values, set your booking link, Twilio sending number, and the marker word you use to flag no-shows.
3. Select the Google Calendar to search and replace the Google Sheets document ID with your target spreadsheet.
4. Create (or select) a Google Sheets tab named “No-shows” with columns that match the logged fields (name, email, phone, channels, contacted_at, original_time, missed_appointment).

## Requirements
- Google account for Calendar, Sheets, and Gmail
- Twilio account with a phone number that can send SMS
- A booking link your attendees can use to pick a new time

## Customization
- Change the marker word to anything you would rather type into an event
- Run it less often than hourly by editing the schedule trigger
- Widen the three-hour lookback if you mark events long after the appointment
- Drop the Twilio branch and send email only
- Add a second follow-up a few days later with a Wait node

## Additional info
Google Calendar cannot tell whether someone actually showed up. Add your marker word to the event title after a missed appointment, and the next hourly run will pick it up.

## 🔗 Nodes Used

Google Sheets, Twilio, Google Calendar, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
