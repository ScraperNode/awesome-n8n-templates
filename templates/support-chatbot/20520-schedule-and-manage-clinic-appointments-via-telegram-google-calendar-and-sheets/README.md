# 💬 Schedule and manage clinic appointments via Telegram, Google Calendar, and Sheets

> ⚡ **32 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
Turn Telegram into your appointment desk. Handle bookings, cancellations, and appointment lookups. Check availability through Google Calendar. Keep booking records in Google Sheets. Include 50-minute consultations and 10-minute breaks. Suggest alternatives when slots are unavailable. No AI model is required.

## How it works
1. Receives messages through your Telegram bot. Routes booking, cancellation, and appointment lookup commands. The /start command explains usage and opening hours.
2. Validates booking details before checking availability. Checks names, contact numbers, and future dates. Rejects bookings outside configured office hours. Sends correction messages for invalid booking inputs.
3. Checks your selected Google Calendar. Requires a continuous 60-minute booking window. This includes a 50-minute consultation and a protected 10-minute break.
4. Creates the available appointment in Google Calendar. Appends a BOOKED record to Google Sheets. Sends confirmation with the booking reference.
5. Suggests alternatives when requested slots are unavailable. Checks other times on the requested date. Also checks the same time during the following seven days.
6. Processes cancellations using the supplied appointment details. Searches the relevant calendar time window. Deletes the matching event when found. Logs the cancellation and sends confirmation.
7. Retrieves upcoming appointments using matching names and contact numbers. Searches the next 365 days. Returns the matching appointments through Telegram.

## Setup
1. Import the workflow into n8n. Connect your Telegram bot credentials. Start a private conversation with the bot.
2. Connect Google Calendar OAuth2 credentials. Select your calendar in every Calendar node. Use one dedicated appointment calendar.
3. Connect Google Sheets OAuth2 credentials. Select your spreadsheet and Appointments tab. Add the exact spreadsheet headers provided below.
4. Review the Asia/Kolkata timezone configuration. Confirm your opening hours and appointment durations. Apply changes consistently across validation, availability, cancellation, and message nodes.
5. Replace the Dr. X Office footer. Update the welcome message and examples.
6. Ensure Telegram can reach your HTTPS webhook. Keep n8n running for automated responses.
7. Test using dummy appointment details. Check booking, conflicts, cancellation, and lookup. Complete the public-use safeguards before publishing.

## Requirements
- Use these exact spreadsheet headers. Both logging branches produce these fields. S.NO,Timestamp,Booking ID,Status,Name,Mobile/Contact No.,Start,End,Start ISO,End ISO,Calendar Event ID,Telegram Chat ID,Action
- An operational n8n instance.
- A Telegram bot access token.
- Google Calendar OAuth2 credentials.
- Google Sheets OAuth2 credentials.
- Calendar and spreadsheet editing permissions.
- A publicly reachable HTTPS webhook.
- A spreadsheet containing the required headers.

## Customization
- Replace the clinic name and footer.
- Adjust opening hours and closed days.
- Change the timezone throughout the workflow.
- Modify consultation and break durations consistently.
- Adjust alternative-slot limits and search windows.
- Customize Telegram instructions and confirmation messages.
- Adapt the workflow for another appointment-based service.

## Additional info
Target users: Clinics, consultants, tutors, salons, and appointment-based businesses.

USP: Guided booking, automatic Telegram-ID appointment lookup, cancellation, and rescheduling without repeatedly entering personal details.
Designed for single-calendar appointment scheduling.

Default timezone: Asia/Kolkata.
Monday–Friday: 09:00–20:00.
Saturday: 09:00–13:00.
Sunday: Closed.

Appointments last 50 minutes. Availability checks include a 10-minute break.

Users interact through English text commands. This version does not include conversational AI, guided buttons, payments, or scheduled Telegram reminders.

Google Sheets stores separate booking and cancellation entries. It is an activity log, not a continuously updated appointment-status table.

Public deployments need appointment-ownership checks before enabling customer lookup and cancellation.

appointment scheduling, clinic automation, Telegram bot, Google Calendar, Google Sheets, appointment booking, booking cancellation, calendar availability, alternative time slots, appointment tracking, scheduling buffer, rule-based automation

#n8n #WorkflowAutomation #TelegramBot #AppointmentScheduling #GoogleCalendar #ClinicAutomation

For customization Telegram/WhatsApp:- +91-98157-555575

## 🔗 Nodes Used

Google Sheets, Telegram, Telegram Trigger, Google Calendar

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
