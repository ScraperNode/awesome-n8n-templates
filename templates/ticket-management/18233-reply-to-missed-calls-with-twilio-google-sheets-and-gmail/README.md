# 🎫 Reply to missed calls with Twilio, Google Sheets, and Gmail

> ⚡ **34 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow receives Twilio call status webhooks, identifies missed inbound calls, and automatically sends an SMS reply via Twilio, logs the call to Google Sheets, and optionally emails a notification through Gmail.

## How it works
1. Receives a Twilio webhook (HTTP POST) with the outcome of a phone call.
2. Checks whether the call is an inbound missed call (no-answer, busy, or failed) and ignores answered or outbound calls.
3. Calculates whether the call occurred during your defined working days and opening hours in the configured timezone.
4. Builds an in-hours or out-of-hours SMS message and sends it back to the caller using Twilio (continuing even if SMS delivery fails).
5. Appends a missed-call record (time, caller, number called, status, in-hours flag, reply text, and Call SID) to a Google Sheets log.
6. Sends an email via Gmail to alert the owner with the call details and the text message that was sent.

## Setup
1. In Twilio, set your phone number’s “Call status changes” webhook to this workflow’s production webhook URL (HTTP POST) for the /missed-call endpoint.
2. Add Twilio credentials in n8n and ensure the SMS is sent from the same Twilio number that receives the calls.
3. Add a Google Sheets OAuth connection, select the target spreadsheet and sheet, and create the required headers: Time, Caller, Number called, Call status, In hours, Reply text, Call SID.
4. Add a Gmail OAuth connection (or remove the email step) and set the recipient address in the email configuration.
5. Update the configuration values in the code block (business name, timezone, working days, opening/closing hours, and the in-hours/out-of-hours SMS text).

## Requirements
- A Twilio account with an SMS-capable phone number (the same number that receives your calls)
- A Google account for Sheets logging and Gmail alerts
- n8n (cloud or self-hosted)

## Customization
- Edit the two SMS messages, opening hours and working days in the CONFIGURE block
- Change DEDUPE_HOURS to control how soon a repeat caller can be texted again
- Swap the Google Sheets log for your CRM (HubSpot, Pipedrive, Airtable)
- Add WhatsApp replies instead of SMS, or route urgent callers to a callback queue
- Run multiple business numbers or locations through one workflow

## Additional info
About the creator
This template is built and maintained by Ali Amin, founder of IhsanOps — a UK-based AI automation consultancy helping trades and service businesses stop losing work to missed calls and admin. If you'd like this customised for your business — CRM integration, WhatsApp, voicemail transcription, multi-location setups — get in touch via ali@ihsanops.ai or https://linkedin.com/in/ali-tm-amin.

## 🔗 Nodes Used

Google Sheets, Twilio, Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
