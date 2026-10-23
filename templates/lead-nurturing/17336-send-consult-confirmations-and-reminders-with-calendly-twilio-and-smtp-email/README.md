# 💬 Send consult confirmations and reminders with Calendly, Twilio, and SMTP email

> ⚡ **36 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow receives new consult bookings via webhook (Calendly v2 or a generic scheduling tool), generates timed confirmation and reminder messages, runs each SMS through a separate compliance workflow, and sends SMS via Twilio plus matching emails via SMTP, including a reschedule nudge after the scheduled start.

## How it works
1. Receives a booking event via a webhook endpoint from Calendly or another scheduling tool.
2. Normalizes the incoming payload, extracts contact and appointment details, and stops if the event is a cancellation/reschedule or is missing required information.
3. Builds the confirmation, 24-hour reminder, 1-hour reminder, and post-start reschedule messages and calculates the exact send times using n8n variables.
4. Runs the confirmation SMS through the Bar-Compliance Guardrail workflow and, if approved, sends the SMS with Twilio and sends a confirmation email via SMTP.
5. Waits until 24 hours before the appointment, re-checks compliance, then sends the 24-hour reminder by Twilio SMS and SMTP email.
6. Waits until 1 hour before the appointment, re-checks compliance, then sends the 1-hour reminder by Twilio SMS and SMTP email.
7. Waits until 15 minutes after the scheduled start time, re-checks compliance, then sends a reschedule nudge by Twilio SMS and SMTP email.

## Setup
1. Create credentials for Twilio (Account SID/Auth Token) and an SMTP email account, and select them in the Twilio and Email Send steps.
2. Set n8n variables for firm details and timing inputs: `FIRM_NAME`, `FIRM_EMAIL`, `FIRM_FROM_EMAIL`, `FIRM_TWILIO_NUMBER`, `FIRM_TIMEZONE`, `FIRM_BOOKING_URL`, and `GUARDRAIL_WORKFLOW_ID`.
3. Activate the workflow, copy the webhook Production URL from the trigger, and register it in your scheduling tool for new booking events.
4. Deploy the Bar-Compliance Guardrail workflow separately and paste its numeric workflow ID into `GUARDRAIL_WORKFLOW_ID` so SMS sends can be approved/suppressed.
5. If self-hosting, use PostgreSQL as your n8n database so the long Wait steps survive restarts.

## 🔗 Nodes Used

Send Email, Twilio, Webhook, Execute Sub-workflow

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
