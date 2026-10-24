# 📋 Book accepted Google Sheets quotes in Google Calendar with Gmail reminders

> ⚡ **0 views** · 📋 [Project Management](../)

## Description

## Quick overview
This workflow watches accepted quotes in Google Sheets, emails customers a personalized n8n booking form link, checks availability in Google Calendar, creates a scheduled job event, updates the sheet, and sends Gmail confirmations and next-day reminders.

## How it works
1. Runs every 15 minutes, finds rows with status `accepted` in Google Sheets, builds a personalized booking link, emails it to the customer via Gmail, and updates the row status to `booking_sent`.
2. When a customer opens the booking form link, the workflow looks up the matching request in Google Sheets and validates that the link and email address match a row in `booking_sent` status.
3. If valid, it reads busy events from Google Calendar for the configured booking window and calculates available time slots based on working days, business hours, job length, and minimum notice.
4. If no slots are available, it emails the owner via Gmail and shows the customer a “No free times” completion page.
5. If slots are available, it presents a second form for the customer to pick a time, then re-checks Google Calendar and re-reads the Google Sheets row to ensure the slot is still free and not already scheduled.
6. If the slot is free, it creates a job event in Google Calendar, updates the Google Sheets row to `scheduled` with the event ID and start time, sends a confirmation email via Gmail, and shows a booking confirmation page.
7. Every morning at 8:00, it finds `scheduled` jobs in Google Sheets happening tomorrow (based on the configured timezone) and sends reminder emails via Gmail.

## Setup
1. Create or use a Google Sheets document with a `Requests` tab and the required columns (including `request_id`, `status`, `name`, `email`, `job_start`, and `event_id`), then paste the sheet URL into the Document field for all Google Sheets steps.
2. Add Google credentials in n8n with access to Google Sheets, Google Calendar (target calendar), and Gmail (sender mailbox).
3. Open the n8n “Booking form” trigger, copy its Production URL, and paste it into `booking_form_url` in the Settings step.
4. Update the Settings values (business name, owner email, timezone, working days/hours, job length, booking horizon, and minimum notice) and ensure the workflow timezone matches the configured `timezone`.
5. Ensure the form path `book-job` is unique in your n8n instance, and test by setting a row’s `status` to `accepted` and confirming you receive the booking-link email.

## Additional info
Our paid template follows up Gmail quotes and tells you when the customer says yes: https://payhip.com/b/OyN5V. One person is behind Small Hours. AI agents built and tested this template.

## 🔗 Nodes Used

Google Sheets, Google Calendar, Gmail, Schedule Trigger, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
