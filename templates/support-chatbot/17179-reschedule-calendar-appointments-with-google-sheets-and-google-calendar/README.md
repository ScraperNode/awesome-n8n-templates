# 💬 Reschedule calendar appointments with Google Sheets and Google Calendar

> ⚡ **66 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow is triggered by another n8n workflow to reschedule existing appointment by looking up current booking in Google Sheets, validating the requested new slot via sub-workflow, and updating the event in Google Calendar with the new date/time & service details. Full setup guide: https://uzzaman.dev/guides/n8n-google-calendar-reschedule-appointments/

## How it works
1. Receives appointment details (phone, current date/time, new date/time, and new service type) from another workflow.
2. Looks up the existing booked appointment in Google Sheets using the phone number and the current (preferred) date and time.
3. If a matching appointment is found, builds the new start and end timestamps for the requested slot.
4. Calls a separate n8n workflow to check whether the requested new slot is available.
5. If the slot is available, updates the corresponding Google Calendar event with the new start/end time, updated summary, and phone number in the description.
6. Returns a structured result indicating success (Rescheduled=true plus formatted date/time) or failure with an error such as appointment_not_found, new_slot_unavailable, calendar_unavailable, or crm_unavailable.

## Setup
1. Connect Google Sheets OAuth credentials and replace YOUR_GOOGLE_SHEET_ID with your spreadsheet ID, ensuring the sheet contains columns for preferred_date, preferred_time, status, phone, event_id, and name.
2. Connect Google Calendar OAuth credentials and select the target calendar email address used to store the appointments.
3. Create and link the “Check Slot Availability” sub-workflow so it accepts preferred_date and preferred_time and returns an available boolean.
4. Ensure the calling workflow passes inputs in the expected formats (phone in E.164, new_date as YYYY-MM-DD, and new_time as HH:mm), and adjust the default 30-minute duration if your appointments differ.

## 🔗 Nodes Used

Google Sheets, Execute Sub-workflow, Google Calendar, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
