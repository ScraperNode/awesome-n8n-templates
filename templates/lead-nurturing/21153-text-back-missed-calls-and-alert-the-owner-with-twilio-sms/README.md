# 💬 Text back missed calls and alert the owner with Twilio SMS

> ⚡ **1 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
For plumbers, HVAC techs, roofers and other local service businesses that can't answer mid-job. When a Twilio call is missed, the caller instantly gets an SMS with your booking link and you get an SMS alert; replies are forwarded and STOP/START opt-outs are honored.

## How it works
1. Receives a Twilio Voice webhook when a call attempt completes.
2. Checks the call status to confirm it was missed (no-answer, busy, failed, or canceled) and that the caller is not on the workflow’s opt-out list.
3. Sends an automated SMS to the caller from your Twilio number with your business name, a help prompt, and a booking link including STOP opt-out text.
4. Sends an SMS alert to the owner’s mobile number with the caller’s number so they can call back.
5. Replies to Twilio with an empty TwiML response.
6. Receives a Twilio Messaging webhook for inbound SMS responses to your Twilio number.
7. Records STOP/START keywords to update the workflow’s opt-out list and forwards normal SMS replies to the owner by SMS before responding to Twilio with empty TwiML.

## Setup
1. Add your Twilio credentials in n8n and select them in all Twilio nodes used for sending SMS.
2. Update both Settings steps with your business name, Twilio phone number, owner mobile number, and booking link (use E.164 phone number format).
3. In the Twilio Console, configure your Voice flow to POST to the missed-call webhook URL when the call ends, and configure your Messaging webhook to POST to the incoming-SMS webhook URL.
4. Ensure your Twilio phone number can send SMS and that your Twilio Messaging settings align with your compliance needs for opt-outs.

## Requirements
- A Twilio account with an SMS-capable number.

## Customization
- Change the wording in 'Text the caller back'. Keep your business name and the STOP line for anti-spam compliance.

## 🔗 Nodes Used

Twilio, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
