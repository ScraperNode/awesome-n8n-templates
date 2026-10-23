# 💬 Send daily appointment reminders from Google Sheets to WhatsApp

> ⚡ **169 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow runs daily to read appointment bookings from Google Sheets, filter for tomorrow’s appointments that have not been reminded yet, send each client a WhatsApp reminder message, and then update the sheet to mark the reminder as sent.

## How it works
1. Runs every day at 9 AM on a schedule.
2. Sets the Google Sheet ID, sheet tab name, WhatsApp phone number ID, and calculates tomorrow’s date.
3. Reads all appointment rows from the specified Google Sheets tab.
4. Filters to appointments where the appointment_date is tomorrow and reminder_sent is not true.
5. Sends a WhatsApp message to each remaining client using their phone_number and appointment details.
6. Updates the corresponding Google Sheets row (matched by row_id) to set reminder_sent to true.

## Setup
1. Add Google Sheets OAuth credentials and set the target spreadsheet ID and sheet/tab name in the configuration values.
2. Add WhatsApp Business Cloud (WhatsApp) credentials and set your WhatsApp phone number ID used to send messages.
3. Ensure your Google Sheet includes the columns row_id (unique), client_name, phone_number, service, appointment_time, appointment_date (yyyy-MM-dd), and reminder_sent (boolean).

## 🔗 Nodes Used

Google Sheets, WhatsApp Business Cloud, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
