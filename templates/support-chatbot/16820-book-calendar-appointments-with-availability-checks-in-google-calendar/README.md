# 💬 Book calendar appointments with availability checks in Google Calendar

> ⚡ **106 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow is triggered by another n8n workflow to verify a requested appointment slot and, if available, books a 30‑minute event in Google Calendar, returning a booked/unbooked response with formatted date/time details.
Full setup guide: https://uzzaman.dev/guides/n8n-google-calendar-availability-booking/

## How it works
1. Receives appointment details (name, phone, service type, preferred date, preferred time) when called by another n8n workflow.
2. Calls a separate “Check Slot Availability” workflow to determine whether the requested slot is available.
3. If the slot is available, builds ISO start/end timestamps for a 30-minute appointment window.
4. Creates the appointment as a Google Calendar event with a summary and description populated from the input details.
5. Returns a success payload with `booked: true` and formatted preferred date/time, or returns `booked: false` with an error code when the slot or calendar booking fails.

## Setup
1. Create or identify a “Check Slot Availability” workflow and update the referenced workflow ID/name so it returns an `available` boolean.
2. Add a Google Calendar OAuth2 credential and set the target calendar (email/ID) in the Google Calendar event creation step.
3. Ensure the calling workflow passes `name`, `service_type`, `preferred_date` (ISO date), `preferred_time` (HH:mm), and `phone`, and adjust the default 30-minute duration if needed.

## Requirements
- External AI voice platform (Vapi, Retell, or similar) & Published appointment management sub-workflows
- MCP tools for Vapi and Retell voice agents
- A configured "Check Slot Availability" sub-workflow (or your own equivalent)
- Calling workflow must pass name, service_type, preferred_date, preferred_time, phone

## Customization
- Change the default 30-minute appointment duration in the event-creation step
- Swap the Google Calendar node for a different calendar/CRM system
- Adjust the fields included in the event summary/description

## 🔗 Nodes Used

Execute Sub-workflow, Google Calendar, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
