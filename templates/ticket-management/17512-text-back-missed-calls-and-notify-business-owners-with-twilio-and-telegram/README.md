# 🎫 Text back missed calls and notify business owners with Twilio and Telegram

> ⚡ **104 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow uses Twilio webhooks to forward inbound calls, detect missed calls, and automatically send a tailored SMS text-back to the caller, while also notifying the business owner via Telegram.

## How it works
1. Receives an inbound call event from Twilio via a webhook.
2. Responds with TwiML that forwards the call to your main phone number and tells Twilio to post the dial outcome to a second webhook.
3. Receives the dial status callback from Twilio and acknowledges it immediately.
4. Checks the Twilio DialCallStatus and continues only when the call was missed (no-answer, busy, failed, or canceled).
5. Suppresses repeat callers so the same phone number only gets one text-back within a two-hour window.
6. Builds an after-hours or during-hours SMS message and sends it to the caller via Twilio SMS.
7. Sends a Telegram message to the owner with a missed-call alert.

## Setup
1. In Twilio, configure your phone number’s “A call comes in” webhook to POST to the production URL of the Incoming Call webhook.
2. Update the TwiML response to replace YOUR-N8N-HOST with your n8n domain and set the forwarded destination phone number.
3. Add your Twilio credentials in n8n and ensure the Twilio number can send SMS to the caller’s region.
4. Add your Telegram bot credentials, replace the chat ID with your target chat, and start a chat with the bot so it can message you.
5. Edit the business name, timezone, and opening hours values used to generate the text-back message.

## Requirements
- A Twilio account with a phone number that has both Voice and SMS enabled
- Twilio Voice and Messaging geo permissions enabled for the destination country
- A Telegram bot token and chat ID for owner alerts (swap for Slack or email if preferred)
- An n8n instance reachable from the public internet, since Twilio calls the webhooks directly
- US senders must complete A2P 10DLC brand and campaign registration in their own Twilio account before texting US recipients; trial accounts cannot register

## Customization
- Edit the message wording in the config block at the top of Build Text-Back Message, and keep the STOP opt-out line for US compliance
- Change timeout="20" in the TwiML to control how long the phone rings before a call counts as missed
- Adjust the two-hour deduplication window at the top of Suppress Repeat Callers for high-volume lines
- Replace the Telegram node with Slack, Gmail or Google Sheets to log every missed call for reporting
- Add an IF node after Call Was Missed? to route genuinely urgent after-hours calls to an on-call mobile before texting

## 🔗 Nodes Used

Twilio, Webhook, Telegram

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
