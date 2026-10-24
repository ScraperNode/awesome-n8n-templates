# 💬 Text back missed callers by SMS with Twilio for Australian businesses

> ⚡ **0 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
Instant SMS to every missed caller from your business number, for Australian tradies and small service businesses who miss calls while on the tools. AU mobile formatting, 12-hour dedupe, STOP opt-outs (Spam Act).

## How it works
1. Twilio calls the Missed call webhook when a call goes unanswered; the workflow replies with a short voice message (TwiML).
2. Decide normalises the AU number (04xx → +614xx), skips landlines, and skips anyone texted in the last 12 hours.
3. Send SMS (Twilio) texts the caller from your business number, with your business name and "Reply STOP to opt out".
4. Inbound SMS records STOP/START replies so opted-out numbers are never texted.

## Setup
1. Open Decide and set businessName, smsFrom (your Twilio AU mobile, +61 format) and twilioAccountSid.
2. On Send SMS (Twilio), add an HTTP Basic Auth credential (User = Account SID, Password = Auth Token).
3. Activate, then set your Twilio number's Voice webhook to /webhook/missed-call and Messaging webhook to /webhook/sms-inbound.
4. Forward unanswered calls from your mobile to the Twilio number (carrier codes **61*, **67*, **62*; cancel with ##004#). Setup takes about 15–20 minutes.

## Requirements
- A Twilio account with an AU mobile number (about A$11.90/month plus ≈A$0.074 per SMS, Oct 2026) and an n8n instance reachable from the internet.

## Customization
- Edit the message text and the dedupe window in Decide's CONFIG block.

## Additional info
Tested end-to-end in n8n with simulated APIs (a local mock of the Twilio API); no live SMS or email providers were used in testing.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
