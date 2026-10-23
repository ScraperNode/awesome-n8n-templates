# 💬 Create replay-safe client kickoff bookings with Google Calendar, Gmail and data tables

> ⚡ **0 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
Create kickoff events only after durable intent, confirm them from Google Calendar readback, hold changed requests for review, and prepare customer communication as Gmail drafts.

## How it works
1. Authenticates the POST webhook with the server-side `BOOKING_INTAKE_TOKEN`.
2. Validates the seven-field booking contract, real civil dates, offset/timezone agreement, and workflow 08 booking-UID derivation.
3. Derives deterministic request, parent-scope, intent, and provider identity evidence.
4. Reads stable owner/tag history and returns replays or records changed requests before any Calendar operation.
5. Persists and acknowledges `intent_written`, then checks native Google Calendar availability.
6. Creates the event, validates the create result, gets it by ID, and validates the provider readback.
7. Persists and acknowledges the `confirmed` Booking, then attempts to create a Gmail draft without sending it. Reconciles unresolved intents with a get-only provider lookup and no create or retry path.

## Setup
1. Create a `Bookings` Data Table with the columns mapped in the insert and update nodes, then re-select it in every Data Table node.
2. Create n8n variables `BOOKING_INTAKE_TOKEN` and `BOOKING_CALENDAR_ID`.
3. Connect a Google Calendar credential to the availability, create, created-event get, and reconciliation get nodes.
4. Connect a Gmail credential to `Create Confirmation Draft`.
5. Review the private event details, reminders, target calendar, reconciliation cadence, and draft copy. Keep the workflow inactive while testing. Use each built-in manual fixture, then send a synthetic tagged request to the test webhook and inspect the resulting test Calendar event and Booking row.

## Requirements
- n8n Data Tables; n8n Variables `BOOKING_INTAKE_TOKEN` and `BOOKING_CALENDAR_ID`; Google Calendar credentials; Gmail credentials.

## Customization
- Review the private event details, reminders, target calendar, reconciliation cadence, and draft copy.

## Additional info
The seven manual scenarios are a separate local Code/Switch component. They are structurally disconnected from Data Tables, Google Calendar, Gmail, and the production webhook path.

Gmail creates drafts only. This template contains no Gmail send operation.

Data Table reads and writes fail-stop. Provider success is accepted only after matching Calendar create and get evidence and a durable Booking acknowledgement.

n8n Data Tables do not provide an atomic lock across read, insert, provider create, and update. Deterministic provider identity and get-only reconciliation reduce duplicate risk, but the workflow does not claim exactly-once execution.

Calendar create and the following database acknowledgement are not transactional. The reconciler adopts an exact stored event after that narrow failure window; ambiguous state is held and never authorizes another create.

Version 1 does not automatically reschedule, update, cancel, or delete an event. It does not track attendance or no-shows.

Availability can change between checking and creating. Adapt conflict handling to the target calendar's operating rules.

## 🔗 Nodes Used

Webhook, Google Calendar, Gmail, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
