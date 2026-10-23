# 🎫 Respond to missed calls with Twilio SMS and email alerts from CallRail

> ⚡ **5 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick Overview
This workflow receives call completion webhooks from Twilio or CallRail, detects genuine missed calls, suppresses duplicate events, personalizes an SMS based on business hours, sends a single text-back via Twilio, and emails the business with the send result.

## How it works
1. Receives a webhook call event from Twilio or CallRail.
2. Normalizes the provider payload into a common schema and stops if the event cannot be confirmed as a valid missed call.
3. Deduplicates events using a 24-hour idempotency window to prevent multiple text-backs from repeated webhook deliveries.
4. Checks whether the original call time falls outside configured business hours in the specified timezone.
5. Builds a missed-call SMS message that includes your business name and an optional booking link, with different copy for after-hours.
6. Sends the SMS reply to the caller via Twilio and checks whether Twilio accepted the message (SID returned).
7. Sends an email alert to the business with the caller details, SMS content, and whether the SMS was accepted or needs manual follow-up.

## Setup
1. Configure the webhook URL from Receive Call Event in Twilio (call status callback) or CallRail (call webhook) so missed-call events are posted to this workflow.
2. Add a Twilio credential and set up a Twilio-capable sender number to use for outbound SMS.
3. Add an SMTP email credential for sending owner alerts.
4. Create and populate n8n variables for BUSINESS_NAME, BUSINESS_ALERT_EMAIL, BUSINESS_SMS_NUMBER, BUSINESS_TIMEZONE, BUSINESS_BOOKING_URL, BUSINESS_HOURS_START, BUSINESS_HOURS_END, and BUSINESS_WORK_DAYS.

## 🔗 Nodes Used

Send Email, Twilio, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
