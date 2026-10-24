# 💬 Book and manage auto repair appointments with Retell AI and Google Calendar

> ⚡ **58 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow exposes a webhook for Retell AI phone-agent functions to check availability, book, cancel, and reschedule auto repair appointments using Google Calendar, and it notifies the shop owner via Gmail when bookings change.

## How it works
1. Receives a POST webhook request from Retell AI that includes a function name and call details.
2. Validates the request contains a Retell call ID, then routes it to check availability, book, cancel, or reschedule based on the function name.
3. For availability checks, reads that day’s Google Calendar events and returns open morning or afternoon time slots while respecting closed days and appointment length.
4. For new bookings, parses the caller details and requested time, confirms the slot is still free in Google Calendar, creates the calendar event, and emails the owner via Gmail.
5. For cancellations, searches Google Calendar events on the given date for an event whose title matches the caller name, deletes the event, and emails the owner via Gmail.
6. For reschedules, finds the original event by caller name and date, checks the new time for conflicts, creates a new Google Calendar event, deletes the original event, and emails the owner via Gmail.

## Setup
1. Create and connect credentials for Google Calendar and Gmail in n8n.
2. Update the shop settings (shop name, owner email, calendar ID, timezone, opening hours, closed days, and appointment length) to match your business.
3. Activate the workflow, copy the production webhook URL, and configure Retell AI custom functions (check_availability, book_appointment, cancel_appointment, reschedule_appointment) to POST to that URL with the expected date/time formats.

## Requirements
- Retell AI account with a phone number and a voice agent
- Google Calendar account for the shop's appointments
- Gmail account for owner notifications

## Customization
- Change slot hours, appointment length and closed days in the Set Shop Configuration node
- Restyle the owner emails in the Notify Owner and Inform Owner nodes
- Swap Gmail for Slack or SMS to notify the owner

## Additional info
Retell function arguments (dates as YYYY-MM-DD, times like 9:00 AM):
- check_availability: date, time_of_day (morning or afternoon)
- book_appointment: caller_name, caller_phone, vehicle, service_needed, appointment_date, appointment_time
- cancel_appointment: caller_name, appointment_date
- reschedule_appointment: caller_name, old_date, new_date, new_time

Add "Today is {{current_time}}" at the top of your Retell prompt so the agent can turn "tomorrow" into a real date.

## 🔗 Nodes Used

Webhook, Google Calendar, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
