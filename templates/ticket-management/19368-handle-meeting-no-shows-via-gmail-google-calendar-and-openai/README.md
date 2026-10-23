# 🎫 Handle meeting no-shows via Gmail, Google Calendar, and OpenAI

> ⚡ **0 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow receives one-click links from a reminder email and, based on the requested action, confirms, reschedules, or cancels a Google Calendar meeting and notifies the attendee via Gmail, using an OpenAI-powered agent to recreate events during rescheduling.

## How it works
1. Receives a webhook request from a reminder-email link with query parameters for action, email, eventId, and optionally newDateTime.
2. Routes the request into confirm, reschedule, or cancel processing based on the action value.
3. For confirmations, fetches the Google Calendar event by ID, extracts the attendee email and Google Meet link, and sends a confirmation email via Gmail.
4. For reschedules, fetches the existing event details, then uses an OpenAI agent with Google Calendar tools to create a replacement event (with Google Meet) and delete the original event.
5. Sends a reschedule notification email via Gmail with the requested new time and the meeting link.
6. For cancellations, fetches the event by ID, deletes it from Google Calendar, and sends a cancellation email via Gmail.

## Setup
1. Add Google Calendar OAuth2 credentials (with access to the target calendar), Gmail credentials for sending messages, and an OpenAI API credential for the rescheduling agent.
2. Replace every YOUR_CALENDAR_ID value with the Google Calendar ID that contains the meetings.
3. Replace YOUR_TIMEZONE in the agent instructions and event-creation tool description with your timezone (for example, Europe/London).
4. Copy the production webhook URL and build your email buttons/links to call it with action, email, eventId, and (for reschedule) newDateTime as query parameters.

## 🔗 Nodes Used

Webhook, Google Calendar, Gmail, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
