# 💬 Offer and confirm technician visit slots with Google Calendar, Gmail, Sheets, and Telegram

> ⚡ **15 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow takes a booking request via webhook, checks a technician’s Google Calendar for availability, emails three one-click time options via Gmail, and books the chosen slot into Google Calendar while logging and tracking the process in Google Sheets and escalating exceptions to Telegram.

## How it works
1. Receives a POST webhook booking request and maps the job type to a visit duration and a 14-day search window.
2. Reads busy events from a Google Calendar over the search window and calculates up to three available visit slots across different days.
3. If slots are available, sends the customer a Gmail message with three clickable links and appends the offered booking to a Google Sheets “Bookings” log.
4. If no slots are available, sends a Telegram message to dispatch with the customer details to book manually.
5. Receives a second webhook when the customer clicks a slot, looks up the booking in Google Sheets, and only proceeds if the booking is still in an “offered” state.
6. Creates the appointment in Google Calendar, updates the Google Sheets row to “booked,” and emails a confirmation to the customer while returning an HTML confirmation page.
7. Runs every morning to send next-day reminders for booked visits via Gmail and to escalate unclicked offers older than 48 hours to Telegram before marking them “expired” in Google Sheets.

## Setup
1. Create a Google Sheets spreadsheet with a sheet named “Bookings” and the headers: booking_id, created_at, customer_name, email, phone, job_type, job_summary, duration_min, status, booked_start, booked_end, event_id, reminder_sent.
2. Add Google Calendar credentials and replace the calendar ID in both Google Calendar nodes with your technician calendar.
3. Add Google Sheets credentials and replace the spreadsheet ID wherever “REPLACE_WITH_YOUR_SPREADSHEET_ID” is used.
4. Add Gmail credentials for sending the slot-offer, confirmation, and reminder emails.
5. Add Telegram bot credentials, set your dispatch chat ID, and replace “REPLACE_WITH_YOUR_CHAT_ID” for the escalation messages.
6. Set the BASE_URL in the email builder code to your n8n host (no trailing slash) and adjust timezone, working hours, buffers, and notice periods in the slot-finding configuration as needed.

## Requirements
- A Google account with the Google Sheets, Google Drive and Google Calendar APIs enabled in one Google Cloud project
- A calendar the technician actually works from; primary works while testing
- A spreadsheet with a sheet named Bookings and the thirteen headers listed in the overview note
- A Gmail account for the offer, confirmation and reminder emails
- A Telegram bot token and chat ID for dispatch alerts, or another messaging node in its place
- An n8n instance reachable from the public internet, since the email buttons post straight back to the second webhook
- The Google OAuth consent screen must be published rather than left in testing, otherwise the refresh token expires after seven days

## Customization
- Change DURATIONS_MIN in Build Booking Request so each job type books the time your crews actually need
- Adjust working hours, travel buffer, minimum notice and PREFERRED_WINDOWS in the CONFIG block of Find Available Slots
- Offer more or fewer options by changing SLOTS_TO_OFFER, or drop PREFERRED_WINDOWS to always take the earliest opening
- Move the reminder and expiry thresholds in Determine Daily Actions to match how far ahead your customers want warning
- Replace the Telegram nodes with Slack, Gmail or Microsoft Teams, or add a Twilio SMS alongside the reminder email
- Chain this after the AI enquiry triage template: its job_type values feed straight into the duration map here

## Additional info
Slot arithmetic is deterministic rather than model-driven, and daylight saving is derived from the timezone name instead of a fixed offset, so a booking made in winter for a spring date still lands at the right local hour. The offer is re-checked in the sheet before the calendar event is created, so a slot claimed in the meantime returns an honest page instead of double-booking the van.

## 🔗 Nodes Used

Google Sheets, Webhook, Telegram, Google Calendar, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
