# 💬 Recover missed calls with Twilio, Slack and Google Sheets

> ⚡ **157 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

Never lose an inbound lead because someone missed the phone.

This workflow captures missed inbound calls from Twilio, logs them, notifies your team, and instantly sends a context aware SMS to the caller. It automatically adapts messaging based on business hours, ensuring fast response during working hours and clear expectations after hours.

Built for small service businesses, agencies, clinics, and local operators who rely heavily on phone calls.

## How it works

1. Receives inbound call events from Twilio via webhook

2. Filters for failed, busy, or no answer call statuses

3. Checks whether the call happened during business hours

4. Logs call details to Google Sheets for tracking and follow up

5. Sends an automatic SMS reply to the caller
- During business hours, promises a quick callback

- After hours, sets next business day expectations

6. Notifies your team in Slack with caller details

This creates instant acknowledgment, internal visibility, and a structured follow up trail.

## Setup steps

1. Connect your Twilio account and configure the webhook URL
2. Connect Google Sheets and select your tracking sheet
3. Connect Slack and choose a notification channel
4. Adjust business hours and timezone inside the code node
5. Customize SMS copy to match your brand voice

Setup typically takes 10 to 15 minutes.

## 🔗 Nodes Used

Google Sheets, Slack, Twilio, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
