# ⚡ Send tiered appointment reminders from Google Sheets with Gmail

> ⚡ **0 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
This workflow runs every morning to read upcoming bookings from Google Sheets, send tiered appointment reminders via Gmail (with special confirmation messaging for higher no-show risk clients), update reminder status back in the sheet, and email staff a daily delivery summary plus data-quality warnings.

## How it works
1. Runs every morning on a schedule and validates that the required settings (sheet ID, emails, booking URL, reminder-day offsets) are filled in.
2. Reads the Google Sheets “Bookings” tab (including a formatted-value read) and stops if required column headers are missing or mis-typed.
3. Selects confirmed, future bookings that have reached the next reminder window (by default 7, 3, and 1 days before the appointment), skipping duplicates/invalid rows and honoring a per-run send limit.
4. Builds a reminder email for each due booking, routing messages to the staff address in test mode or to the client address in live mode, and asking higher-risk clients (based on past no-shows) to reply to confirm.
5. Updates the booking row in Google Sheets to claim the reminder as “sending,” sends the email via Gmail, then writes back the final result (confirming success or reverting on failure so it can retry next run).
6. Emails staff a summary of delivered and failed reminders whenever reminders go out (including who was asked to confirm), and separately lists booking rows skipped because of invalid IDs, dates, times or email addresses.
7.  If a scheduled run fails at any step, an Error Trigger branch emails the staff address with the step and the reason (at most once every 6 hours for the same failure).

## Setup
1. Connect Google Sheets (OAuth2) and Gmail credentials in n8n.
2. Create a Google Sheet with a “Bookings” tab and row 1 headers exactly: Booking ID, Client Name, Client Email, Service, Appointment Date, Appointment Time, Status, Past No Shows, Reminders Sent, Last Reminder At, Last Reminder Error.
3. In “Configure Your Settings,” set your Google Sheet ID, business name, booking page URL, staffEmail, replyToEmail, and (optionally) adjust reminder-day thresholds, high-risk no-show count, and max reminders per run.
4. Set the workflow timezone in n8n Workflow settings so date/time comparisons match your local schedule.
5. Leave testMode on for initial testing (emails go only to staff and the sheet is not changed), then switch testMode off to send to clients and record reminder history.

## Requirements
- Google Sheets account connected with OAuth2 (the header check reuses the same credential)
- Gmail account

## Customization
- Change the reminder days, high-risk threshold and per-run limit in Set Configuration Settings
- Edit the email wording in the Prepare Reminder Email node
- Replace the Gmail node with Twilio or WhatsApp to send reminders as messages

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
