# 💬 Manage salon and barbershop appointments with Google Calendar and Sheets

> ⚡ **151 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow exposes webhooks to book, reschedule, cancel, and log salon/barbershop appointments by syncing requests to multiple Google Calendar calendars and recording analyzed call summaries to Google Sheets. Tested with Retell AI functions, but should work with Vapi as well.

## How it works
1. Receives POST requests on webhooks to book an appointment, reschedule an existing booking, cancel an appointment, or log a completed call.
2. Validates each booking/rescheduling/cancellation request (phone number or booking IDs, and ISO start/end times where applicable) and returns an error response for invalid payloads.
3. For booking requests, looks up the requested barber in Google Sheets and checks the matching Google Calendar for availability, or scans all barbers’ calendars to assign an available barber when no preference is provided.
4. If the requested booking slot is free, creates the Google Calendar event with the provided summary/description and returns a JSON confirmation including the eventId and calendarId.
5. If the requested slot is busy, searches upcoming Google Calendar events and returns up to three closest alternative time suggestions.
6. For cancellation requests, validates the provided calendarId/eventId against the allowed barber list or searches across barber calendars by phone number, then deletes the matching Google Calendar event or returns an ambiguous/not-found response.
7. For rescheduling requests, finds the target appointment by booking IDs or by searching Google Calendar using the caller’s phone number, updates the event time if the new slot is available, or returns nearby alternative slots.
8. For logging requests, only processes call_analyzed events and appends caller details and the call summary to a Google Sheets “Summary” tab before responding with a logged/ignored status.

## Setup
1. Connect Google Calendar OAuth2 credentials with access to every barber/staff calendar that the workflow should read and write.
2. Connect Google Sheets OAuth2 credentials and create a spreadsheet with a “Barbers” sheet (including columns like barber and calendarId) and a “Summary” sheet for logging.
3. Update the Google Sheets document ID and sheet/tab names if you are not using the provided spreadsheet structure.
4. Configure the calling/booking system to send POST requests to the four webhook URLs (retell-appointment-booking, reschedule-appointment, retell-cancel-appointment, log-appointment) with the expected fields (barber, startTime, endTime, number/phone_number, and optional eventId/calendarId).
5. Review and adjust default scheduling rules in the workflow (working hours 9–17, 60-minute duration, 10-day search window, weekday-only suggestions, and America/New_York timezone) to match your shop’s operating hours.

## 🔗 Nodes Used

Google Sheets, Webhook, Google Calendar

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
