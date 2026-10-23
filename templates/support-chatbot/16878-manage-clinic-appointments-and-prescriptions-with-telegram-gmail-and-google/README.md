# 💬 Manage clinic appointments and prescriptions with Telegram, Gmail and Google

> ⚡ **52 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow manages clinic appointments across Google Sheets and Google Calendar, using webhooks and Telegram to book and confirm visits, Gmail and Telegram to deliver prescriptions, scheduled Telegram reminders for upcoming appointments, and Slack notifications for workflow errors.

## How it works
1. Receives a POST webhook request to book an appointment, generates a Booking ID, stores the booking in Google Sheets, and notifies the doctor via Telegram.
2. Triggers when a patient messages your Telegram bot, extracts the Booking ID from the message, and replies with instructions if the ID is missing or invalid.
3. When the Booking ID is valid, updates the matching Google Sheets row to Confirmed, sends a confirmation message to the patient on Telegram, and creates a Google Calendar event.
4. Reads the confirmed appointment details from Google Sheets and sends the full patient and appointment information to the doctor via Telegram.
5. Receives a POST webhook request with post-visit prescription details, updates the matching Google Sheets row to “Prescription Sent,” emails the prescription link and medicines to the patient via Gmail, and sends the same details via Telegram.
6. Runs every hour, reads booked appointments from Google Sheets, filters those due for a reminder window, and sends Telegram reminders.
7. Posts a Slack message with execution details whenever the workflow errors.

## Setup
1. Create OAuth2 credentials in n8n for Google Sheets, Google Calendar, Gmail, and Slack, and create a Telegram bot token for the Telegram nodes.
2. Create a Google Sheet with a tab named `clinicos_appointments` and columns that match the workflow fields (for example Booking ID, Patient Name/Email/Phone, Doctor Name/Chat ID, Appointment Date/Time, Reason, Status, Created At, and prescription link).
3. Replace `YOUR_GOOGLE_SHEET_ID`, select the correct Google Calendar, and set `YOUR_SLACK_CHANNEL_ID` to the channel that should receive error alerts.
4. Deploy the booking and prescription webhook URLs (`/webhook/clinic-book` and `/webhook/clinic-prescription`) in your clinic frontend/doctor system, and enable the Telegram bot to receive messages.
5. Ensure each booking includes the correct doctor and patient Telegram chat IDs (used for confirmations, reminders, and prescription delivery).

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Telegram, Telegram Trigger, Google Calendar

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
