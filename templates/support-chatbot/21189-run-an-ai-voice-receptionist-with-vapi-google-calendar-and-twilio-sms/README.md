# 💬 Run an AI voice receptionist with Vapi, Google Calendar and Twilio SMS

> ⚡ **115 views** · 💬 [Support Chatbots](../)

## Description

## Quick Overview
This workflow lets a Vapi voice assistant manage appointments by checking and updating Google Calendar, sending confirmations via Twilio SMS, and logging callback messages to Google Sheets, while also sending missed-call follow-ups and auto-replying to inbound SMS.

## How it works
1. Receives Vapi tool-call webhook requests during a call, normalizes the caller phone number, and routes the request by tool name.
2. For availability checks, reads the selected day’s events from Google Calendar and returns a list of open time slots based on clinic hours and slot length.
3. For bookings, creates a Google Calendar event, sends a Twilio SMS confirmation to the caller, and returns the booking outcome to Vapi.
4. For lookup, searches Google Calendar for upcoming events matching the caller’s phone number and returns a formatted list that includes event IDs for follow-up actions.
5. For rescheduling or cancellation, updates or deletes the specified Google Calendar event, sends a Twilio SMS update to the caller, and returns the result to Vapi.
6. For message taking or unknown requests, appends the caller’s details to Google Sheets or returns an error message, and then responds to Vapi with the tool result.
7. Separately, processes Vapi end-of-call-report events to detect missed calls and sends a Twilio SMS follow-up, and answers inbound Twilio SMS replies with a fixed TwiML message via a webhook.

## Setup
1. Add credentials for Google Calendar OAuth2, Google Sheets OAuth2, and Twilio.
2. Replace placeholders like YOUR_GOOGLE_CALENDAR_ID, YOUR_GOOGLE_SHEET_ID, YOUR_TWILIO_PHONE_NUMBER, and update [YOUR_CLINIC_NAME] in the SMS message texts.
3. Create a Google Sheet with columns named Time, Name, Phone, and Reason, and ensure the workflow’s Google Sheets node points to the correct document and sheet.
4. In Vapi, configure tools named check_availability, book_appointment, find_booking, reschedule_booking, cancel_booking, and take_message to use the workflow’s Vapi Tools webhook URL, and send end-of-call-report events to the Vapi Events webhook URL.
5. In Twilio, set your phone number’s incoming SMS webhook to the workflow’s SMS Reply webhook URL.
6. Set the workflow timezone (and optionally the default phone country code and clinic hours/slot length in the code blocks) to match your local scheduling rules.

## 🔗 Nodes Used

Google Sheets, Twilio, Webhook, Google Calendar

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
