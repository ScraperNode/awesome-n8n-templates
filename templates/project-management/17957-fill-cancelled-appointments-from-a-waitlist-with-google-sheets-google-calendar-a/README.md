# 📋 Fill cancelled appointments from a waitlist with Google Sheets, Google Calendar and Twilio

> ⚡ **19 views** · 📋 [Project Management](../)

## Description

## Quick overview
This n8n workflow watches a Google Sheets appointments list for cancellations, then texts matching waitlist candidates via Twilio to claim the open slot within 20 minutes and, on confirmation, books the appointment in Google Calendar and updates both Google Sheets tabs. Full setup guide: https://uzzaman.dev/guides/n8n-waitlist-cancelled-appointments-twilio/

## How it works
1. Full walkthrough and setup help: https://uzzaman.dev
2. Monitors the Google Sheets “Appointments” tab for updated rows on a 5-minute poll.
3. Converts the sheet’s date/time serial values into ISO date and time strings and calculates a 30-minute end time.
4. Continues only when the appointment status is “Cancelled” and the row has not been marked as waitlist-processed, then flags the appointment as processed in Google Sheets.
5. Looks up “Waiting” entries in the Google Sheets “Waitlist” tab that match the cancelled appointment’s service type and iterates through candidates one by one.
6. For each candidate, marks them as “Offered” in Google Sheets, sends a Twilio SMS with a one-tap confirmation link, and waits up to 20 minutes for that link to be opened.
7. If the candidate confirms, creates the event in Google Calendar, appends a new “Filled - Waitlist” appointment row, updates the waitlist entry to “Booked,” and sends a Twilio confirmation SMS.
8. If the candidate does not confirm in time, marks them “Expired” and tries the next candidate, and if no one confirms it marks the appointment “Cancelled - Unfilled” and texts the owner via Twilio.

## Setup
1. Create a Google Sheets spreadsheet with two tabs named “Appointments” and “Waitlist” and include the required columns (Appointments: AppointmentID, PatientName, Phone, ServiceType, Provider, Date, Time, Status, WaitlistProcessed; Waitlist: WaitlistID, Name, Phone, ServiceType, AddedAt, Status).
2. Connect Google Sheets OAuth credentials and update the workflow to point to your spreadsheet and the correct sheet tabs/IDs.
3. Connect a Twilio credential, set your Twilio “from” number, and update the recipient phone numbers for both patient messages and the owner alert.
4. Connect a Google Calendar OAuth credential and select the calendar where bookings should be created.
5. Activate the workflow and ensure cancellations are recorded by setting an appointment row’s Status to “Cancelled” (and leaving WaitlistProcessed not equal to “Yes”).

## 🔗 Nodes Used

Google Sheets, Twilio, Google Calendar, Google Sheets Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
