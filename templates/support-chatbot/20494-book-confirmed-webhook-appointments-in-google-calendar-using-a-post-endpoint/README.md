# 💬 Book confirmed webhook appointments in Google Calendar using a POST endpoint

> ⚡ **0 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
Turn confirmed appointment requests into private Google Calendar events. This webhook workflow validates the request, checks availability, verifies the created event and returns clear outcomes for invalid, busy or unconfirmed bookings.

## How it works
1. Receives a POST webhook request containing start, end, summary, request_id, and confirmed fields.
2. Validates that the request is confirmed, uses RFC3339 timestamps with seconds and an explicit offset, enforces a future start time and a maximum 1-day duration, and verifies request_id format.
3. Checks Google Calendar availability for the requested start/end interval.
4. Returns a 502 response if Google Calendar availability cannot be confirmed.
5. Creates a private Google Calendar event with the provided summary and uses request_id as the event ID when the interval is available.
6. Verifies the returned event ID, confirmed status and requested time range before returning 201. Invalid input returns 400, a busy interval returns 409, and a provider failure or unconfirmed creation returns 502.

## Setup
1. Create and select a Webhook Header Auth credential, and set a unique webhook path to receive booking requests.
2. Add a Google Calendar OAuth2 credential and replace YOUR_CALENDAR_ID with your target calendar ID in both Google Calendar nodes.
3. Keep the workflow inactive while configuring it. Use a dedicated test calendar and test invalid, busy, successful and unconfirmed requests. Send confirmed=true, explicit-offset RFC3339 timestamps with seconds, a summary of up to 160 characters, and a stable request_id of 16–64 lowercase characters a–v or digits.

## Requirements
- An n8n instance, Webhook Header Auth credential, Google Calendar OAuth credential and a calendar the credential can write to. Serialize all calendar writers if overlapping reservations are unacceptable.

## Customization
- Adjust request validation and event-summary rules for your scheduling process. Keep provider-result validation and explicit error responses when adapting the workflow.

## Additional info
Availability checks and event creation are separate operations, so concurrent writers can create overlapping bookings. A repeat request may report busy after an earlier success. Reconcile the stable request_id before retrying; this is not an exactly-once guarantee. The event has no guests and this workflow sends no booking confirmation. Local synthetic validation has passed, but a real n8n import and Google Calendar integration test remain required before use. Created by [Benian Technologies](https://benian.ai).

## 🔗 Nodes Used

Webhook, Google Calendar

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
