# 💬 Text back missed callers with Twilio, CallRail, and email alerts

> ⚡ **69 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow receives missed-call webhooks from Twilio or CallRail, normalizes call details, and instantly sends a compliant text-back via Twilio when allowed, then emails your firm a delivery-status summary.

## How it works
1. Receives an incoming call event via a webhook from Twilio StatusCallback or a CallRail missed-call webhook.
2. Extracts and standardizes the caller number, caller name, firm number, source, timestamp, and whether the event is a true missed call.
3. Stops processing if the event is not a valid missed call (for example, an answered-call status from Twilio).
4. Determines whether the call occurred outside your configured business hours and adjusts the text wording accordingly.
5. Builds a personalized SMS message using your firm name and booking link and submits it to a separate Bar-Compliance Guardrail workflow for opt-out and TCPA checks.
6. If approved, sends the SMS via Twilio and then emails the firm a summary including the caller details, message text, and whether Twilio returned a delivery SID.

## Setup
1. Create and connect a Twilio account credential and configure your Twilio phone number StatusCallback URL to point to the n8n webhook (enable no-answer, busy, failed, and canceled events).
2. If using CallRail, configure a CallRail webhook for “Missed call” events pointing to the same n8n webhook URL.
3. Create and connect an SMTP email credential for the firm notification emails.
4. Set n8n variables for FIRM_NAME, FIRM_EMAIL, FIRM_TWILIO_NUMBER, FIRM_TIMEZONE, FIRM_BOOKING_URL, FIRM_BUSINESS_HOURS_START, FIRM_BUSINESS_HOURS_END, and FIRM_WORK_DAYS.
5. Set up the Bar-Compliance Guardrail workflow and store its workflow ID in the GUARDRAIL_WORKFLOW_ID variable so the compliance check step can run.

## 🔗 Nodes Used

Send Email, Twilio, Webhook, Execute Sub-workflow

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
