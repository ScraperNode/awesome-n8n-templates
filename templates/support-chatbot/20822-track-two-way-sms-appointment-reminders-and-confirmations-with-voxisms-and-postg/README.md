# 💬 Track two-way SMS appointment reminders and confirmations with VoxiSMS and PostgreSQL

> ⚡ **0 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
![Appointment reminder workflow](https://voxisms.com/downloads/n8n/appointment-reminders/v1/workflow-canvas.jpg)

For salons and service businesses: send appointment reminders from your Android number, track SMS confirmations against the right booking, and give staff a queue for cancellation requests, unclear replies and uncertain sends.

## How it works
1. Authenticated booking webhooks update PostgreSQL with appointment time, timezone, phone number, consent and source update timestamps.
2. Every five minutes, identify due appointments within local sending hours, respecting consent and persistent STOP opt-outs.
3. Process appointments one at a time and atomically reserve one reminder attempt per booking revision, including overlapping runs.
4. Send authorized reminders through VoxiSMS with an appointment reference and a custom message ID for reconciliation.
5. Record API acceptance separately from delivery. Keep uncertain sends in the staff queue without automatic SMS retries.
6. Verify incoming SMS signatures and match sender, receiving line and reference. YES confirms; CANCEL and RESCHEDULE create staff requests; STOP suppresses reminders. Ambiguous replies go to staff and repeated events cannot repeat state changes.

## Setup
1. Follow the [setup guide](https://voxisms.com/integrations/n8n/appointment-reminders) and install the [SQL schema](https://voxisms.com/downloads/n8n/appointment-reminders/v1/schema.sql) once in PostgreSQL 15+.
2. Add a business row and select a PostgreSQL credential with verified TLS on all six database nodes.
3. Install the verified VoxiSMS node and choose credentials on both SMS nodes. Configure the account ID and actual SIM line separately.
4. Set Header Auth on booking intake. Map booking fields from the guide and use international phone numbers and timestamps with offsets.
5. Set businessId in all three configuration nodes. Keep dryRun true and database live_enabled false during setup; complete controlled tests and assign staff queue monitoring before activation.

## Requirements
- PostgreSQL 15+ with verified TLS, a webhook-capable booking system, the verified VoxiSMS node and an Android phone with an active SMS line. Supports self-hosted n8n and n8n Cloud where verified community nodes are enabled. Supabase is optional. Service and carrier charges may apply.

## Customization
- Adjust reminder windows and local sending hours in the business configuration. Connect the SQL staff queue to your preferred internal dashboard or notification channel.

## Additional info
Staff must process cancellation and rescheduling in the booking system, then send its authenticated update. API acceptance is not handset delivery. Monitor failed executions as well as the staff queue. The [complete setup package](https://voxisms.com/downloads/n8n/appointment-reminders/v1/voxisms-appointment-reminders.zip) includes sample payloads and a rollback-only preview. The public export has no credentials or pinned customer data.

## 🔗 Nodes Used

Postgres, Webhook, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
