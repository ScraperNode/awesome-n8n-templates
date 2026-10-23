# 💬 Send missed call text-backs with Twilio and email dispatcher approvals

> ⚡ **26 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow receives missed-call webhook events, validates and normalizes the caller number, looks up the caller in an n8n Data Table, and sends an appropriate Twilio SMS text-back, while logging outcomes and emailing a dispatcher (with approval required after hours).

## How it works
1. Receives a POST webhook request for a missed call event.
2. Normalizes the incoming caller number, sets the call timestamp, and determines whether the call is after business hours.
3. If the phone number is missing or invalid, it responds with HTTP 400, logs the rejected event to an n8n Data Table, and emails the dispatcher.
4. If the phone number is valid, it immediately responds with HTTP 202, looks up the caller in an n8n Data Table, and checks whether the call happened outside business hours.
5. For after-hours calls, it sends an approval email to the dispatcher and proceeds only if the dispatcher approves sending the text.
6. Builds a different SMS message for known customers versus first-time callers and sends the text-back via Twilio.
7. Logs the SMS result to an n8n Data Table and emails the dispatcher either a confirmation (sent) or an action-required alert (failed).

## Setup
1. Create two n8n Data Tables named `demo_contacts` (with `phone` and `name`) and `demo_missed_calls` (with `phone`, `caller_type`, `status`, `detail`, and `called_at`).
2. Add a Twilio credential, verify/provision the sending phone number, and set the correct “from” number in the workflow settings.
3. Add an SMTP email credential and set the dispatcher and sender email addresses used for approvals and alerts.
4. Update the business name, scheduling URL, timezone, and open/close hours used to decide after-hours behavior.
5. Copy the webhook URL from the Missed Call trigger and configure your phone system to POST missed-call events with a `from` field (optionally include `simulate_after_hours` for testing).

## 🔗 Nodes Used

Send Email, Twilio, Webhook, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
