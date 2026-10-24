# 🤝 Schedule and track discovery calls with Google Forms, Calendar, and Gmail

> ⚡ **6 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow watches a Google Form response sheet in Google Sheets, finds the next available working-hours slot in Google Calendar, creates a held discovery-call event, and emails the client a confirmation link via Gmail, then sends timed reminders until the invite is accepted .

## How it works
1. Triggers when a new row is added to the Google Sheets worksheet that stores Google Form responses.
2. Normalizes the submission fields (name, email, company, and goal) and loads scheduling rules like work hours, lead time, and reminder limits.
3. Reads upcoming events from Google Calendar and selects the first free weekday time slot within the configured working hours.
4. Creates a “hold” discovery call event in Google Calendar with a Google Meet link and adds the client as an attendee without sending Google’s default invite email.
5. Updates the client’s row in Google Sheets with the held slot, event ID, booking link, and an “invited” booking status, then sends a branded Gmail invitation containing the Google Calendar confirmation link.
6. Waits for the configured interval, checks the attendee RSVP status on the Google Calendar event, and if accepted or tentative logs “booked” in Google Sheets and sends a Gmail confirmation email.
7. If the invite is not accepted, sends escalating Gmail reminders and logs them to Google Sheets until the maximum reminder count is exceeded, then marks “no response” and emails an internal alert to the host.

## Setup
1. Connect Google Sheets, Google Calendar, and Gmail credentials (OAuth2) for the trigger, calendar operations, and email sends.
2. Ensure your Google Form writes to a Google Sheet, then add these columns to that sheet: Booking Status, Calendar Event ID, Booking Link, Held Slot, Reminders Sent, Last Contacted, and Booked At.
3. Select the correct Google Sheets document and sheet in the trigger and set the spreadsheet ID, sheet name, calendar ID, host name, company name, and internal alert email in the workflow settings values.
4. Update the field mappings in the client-record step so the column names match your specific Google Form questions (especially name and email).
5. Set your n8n workflow timezone appropriately, since the slot finder uses the instance timezone for working-hours calculations.

## 🔗 Nodes Used

Google Sheets, Google Calendar, Gmail, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
