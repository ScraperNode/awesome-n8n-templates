# 💬 Handle hospital voice appointments with Vapi, Google Sheets, and Gmail

> ⚡ **8 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow provides backend webhooks for a Vapi hospital voice assistant to check appointment availability, book, reschedule, or cancel appointments in Google Sheets, and to request staff callbacks, sending notification emails via Gmail for each action.

## How it works
1. Receives a POST request from Vapi to check availability, looks up existing entries in the Google Sheets “Appointments” tab, and returns whether the requested doctor/department/date/time slot is free.
2. Receives a POST request from Vapi to book an appointment, validates required fields and caller confirmation, generates an appointment ID, appends the record to the Google Sheets “Appointments” tab, emails staff via Gmail, and returns a booking confirmation.
3. Receives a POST request from Vapi to cancel or reschedule an appointment, validates caller confirmation, finds the matching active appointment in Google Sheets by appointment ID and phone number, and returns a not-found response if no match exists.
4. If the request is a cancellation, updates the matching appointment’s status to “cancelled” in Google Sheets, emails staff via Gmail, and returns a cancellation confirmation to Vapi.
5. If the request is a reschedule, updates the appointment date/time (and optionally doctor/department) in Google Sheets, emails staff via Gmail, and returns a reschedule confirmation to Vapi.
6. Receives a POST request from Vapi to request a human callback, logs the request to the Google Sheets “Callbacks” tab, emails staff via Gmail, and returns a callback-requested message to Vapi.

## Setup
1. Create a Google Sheet with “Appointments” and “Callbacks” tabs and the expected columns, then replace YOUR_GOOGLE_SHEET_ID in all Google Sheets nodes.
2. Add Google Sheets OAuth2 credentials for the Google Sheets nodes and Gmail OAuth2 credentials for the Gmail nodes.
3. Replace YOUR_STAFF_EMAIL@example.com in all Gmail nodes with the staff notification address.
4. Activate the workflow and copy the four production webhook URLs, then configure them as POST tools in Vapi for availability, booking, manage (cancel/reschedule), and callback requests.
5. Ensure your Vapi tool request bodies include the required fields and pass caller_confirmed=true for booking and appointment changes.

## 🔗 Nodes Used

Google Sheets, Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
