# 🎫 Reduce appointment no-shows with Sent and Google Calendar

> ⚡ **30 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow checks upcoming Google Calendar appointments every 15 minutes, sends timed reminder messages via Sent after validating phone numbers, and processes inbound Sent replies to confirm or reschedule appointments by updating the event description and responding to the customer.

## How it works
1. Runs every 15 minutes and also triggers when Sent receives an inbound customer message.
2. Loads and validates workflow settings such as Google Calendar ID, business timezone, Sent template name, and reschedule URL.
3. On scheduled runs, fetches upcoming Google Calendar events and determines whether a first (around 24 hours) or final (around 2 hours) reminder is due, skipping cancelled, all-day, invalid-phone, confirmed, or reschedule-requested appointments.
4. Validates the customer’s E.164 phone number with Sent number lookup and sends the reminder using a Sent message template with an idempotency key.
5. On inbound replies, parses the message to detect confirmation, reschedule requests, or opt-out keywords and stops immediately for opt-outs.
6. Searches upcoming Google Calendar events for appointments matching the sender phone number (and reference code when needed), then updates the event description with a SENT status and replies via Sent with a confirmation message or rescheduling link.
7. If no appointment match is found or multiple matches exist without a reference code, sends a clarification message (or ignores unrelated inbound messages).

## Setup
1. Install the @sentdm/n8n-nodes-sent community node and add a Sent API credential to all Sent and Sent Trigger steps.
2. Add a Google Calendar OAuth2 credential and set the correct calendar ID in the workflow settings.
3. Create a Sent message template (default name: appointment_reminder) that accepts the template parameters used by the workflow.
4. Ensure your Google Calendar event descriptions include “Customer:” and “Phone:” lines with the phone number in E.164 format.
5. Set businessName, businessTimezone, rescheduleUrl, and timing options in the workflow settings, and switch sandboxMode off when you are ready to send real messages.
6. Copy the Sent Trigger webhook URL from n8n and configure it in Sent so inbound message.received events are delivered to your n8n instance.

## 🔗 Nodes Used

Google Calendar, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
