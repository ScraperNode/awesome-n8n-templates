# 💬 Chase unanswered quotes by SMS with Twilio and a webhook

> ⚡ **16 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow receives new quote details via webhook and uses Twilio to send timed SMS follow-ups to the customer, checking Twilio for inbound replies before each nudge and notifying the business owner when the customer replies or when the chase closes.

## How it works
1. Receives a POST webhook request with quote details (customer phone, name, job, amount, and optional quote URL) and immediately returns a JSON response.
2. Normalizes the incoming data, builds three personalized nudge messages, and calculates follow-up times in your configured time zone.
3. If the phone number and required settings are valid, sends an SMS to the owner’s cell via Twilio confirming the chase has started.
4. Waits until the first scheduled follow-up time, then calls the Twilio Messages API to check whether the customer has replied since the chase started and only sends nudge #1 if no reply is found.
5. Repeats the same wait-and-check process for nudge #2 and nudge #3, stopping immediately and texting the owner if a reply is detected.
6. If no reply arrives after the third nudge, sends an SMS to the owner via Twilio indicating the chase is closed.

## Setup
1. Add a Twilio account credential in n8n (Account SID/Auth Token) and select it for the Twilio SMS nodes and the Twilio Messages API HTTP requests.
2. In “Your settings”, set your Twilio phone number (From), the owner cell number (To), business name, time zone, and optionally adjust the wait intervals and nudge message templates.
3. Activate the workflow and configure your quoting system (or form/CRM) to POST the quote payload to the production webhook URL.

## Requirements
- A Twilio account with an SMS-capable phone number
- An n8n instance that can receive webhooks (Cloud or self-hosted)
- A quoting tool, form or CRM that can send a POST request when a quote goes out

## Customization
- Change the wait between nudges in Your settings (for example 1 day, 3 days, 7 days)
- Rewrite the three nudge messages to match how your business talks
- Swap the owner texts for Slack, email or a CRM update if you prefer

## 🔗 Nodes Used

HTTP Request, Twilio, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
