# 💬 Check and book Google Calendar appointments with Vapi voice agents

> ⚡ **19 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow exposes two webhook endpoints for Vapi voice agent tools to check availability and book appointments in Google Calendar, enforcing a shared secret, validating requested times against opening hours and notice period, and returning tool-result responses Vapi can use during the call.

## How it works
1. Receives POST webhook requests from Vapi for either `check_availability` or `book_appointment`.
2. Validates the shared secret from the request headers and parses the tool call payload into a normalized request format.
3. For availability checks, queries Google Calendar free/busy across a configurable search window and returns whether the slot is available or the nearest alternative time slots.
4. For booking requests, validates required customer details and the requested slot against opening days/hours and minimum notice rules.
5. Re-checks Google Calendar free/busy for the exact requested slot to ensure it is still free before booking.
6. Creates a Google Calendar event with the configured title plus the caller’s details in the description.
7. Responds to Vapi with a structured tool result indicating success (`status: ok`) or a clear error code.

## Setup
1. Add a Google Calendar OAuth2 credential and select it in all Google Calendar steps used to read availability and create events.
2. In the configuration step, set a strong `webhookSecret`, confirm the `secretHeader` name, and adjust `calendarId`, timezone, opening days/hours, appointment length, and notice period.
3. Activate the workflow and copy the two production webhook URLs for `vapi-check-availability` and `vapi-book-appointment`.
4. In Vapi, create two custom tools pointing to those URLs and send the shared secret in the `X-Vapi-Secret` header (or as an `Authorization: Bearer <secret>` token) along with the expected arguments (date/time, plus name/phone/email for booking).

## Requirements
- n8n (Cloud or self-hosted)
- A Vapi account with an assistant
- A Google Calendar account (OAuth2 credential in n8n)

## Customization
- Tune the notice period, slot length, slot step, search window and number of alternatives in the Configure me node.
- Set locale for weekday names in another language and eventTitle to rename the calendar events.
- Add attendees or reminders in the Create calendar event step.

## 🔗 Nodes Used

Webhook, Google Calendar

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
