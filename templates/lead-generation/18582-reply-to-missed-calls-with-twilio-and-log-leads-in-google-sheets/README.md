# 🎣 Reply to missed calls with Twilio and log leads in Google Sheets

> ⚡ **69 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow receives call status webhooks, automatically texts missed callers back via Twilio, logs the lead in Google Sheets, and emails the owner a brief notification.

## How it works
1. Receives a POST webhook when your phone provider sends a call-status event after a call ends.
2. Checks the call status and continues only when the call is not marked as completed (so answered calls are ignored).
3. Builds the SMS payload using the caller number, your business number, and a predefined reply message.
4. Sends an SMS reply to the caller using Twilio.
5. Appends a new lead row to Google Sheets with the time, caller number, source, and a default follow-up status.
6. Sends a plain-text email summary about the missed call to the owner via SMTP.

## Setup
1. Copy the workflow’s production webhook URL and configure it as the call-status (missed call) webhook in your phone provider/Twilio number settings.
2. Add Twilio credentials and ensure the SMS “from” value resolves to your Twilio/owned number.
3. Connect Google Sheets credentials and select the target spreadsheet (document ID) and sheet/tab name for the lead log.
4. Add SMTP email credentials and replace the recipient address (owner@example.com) with your real notification email.

## Requirements
- An n8n instance reachable from the internet so your phone provider can POST to the webhook; a Twilio account with an SMS-capable number; a Google account for the Sheets lead log; and an SMTP or Gmail account for the owner alert email.

## Customization
- Rewrite the SMS wording so it sounds like you; add a Wait node and a second follow-up if the caller does not reply; swap the owner email for Slack or Telegram; add an IF node on time of day so the text-back only fires outside opening hours; or swap Google Sheets for Airtable, Notion or your CRM.

## Additional info
The workflow is deliberately provider-agnostic: it reads CallStatus from the webhook body, so it works with Twilio and with most other providers that POST a call-status event. If your provider uses different status values, adjust the IF node accordingly. Built by Digital Dots (https://digitaldotsent.com), who build automation for small service businesses. If you want to sanity-check whether this is worth automating first, there is a free missed-call revenue calculator at https://tools.digitaldotsent.com/missed-call-revenue-calculator.html

## 🔗 Nodes Used

Send Email, Google Sheets, Twilio, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
