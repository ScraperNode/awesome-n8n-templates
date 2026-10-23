# 🎫 Route AI voice call webhooks to WhatsApp and Google Sheets with OpenAI

> ⚡ **10 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
Your voice agent ends a call, fires a webhook, and nobody reads it until the customer rings back annoyed. This one reads every call, works out which are actually urgent from the model's own fields, and puts those on the owner's WhatsApp. Everything gets logged.

## How it works
1. Receives a POST webhook when a voice call ends, containing the call metadata plus an optional transcript and summary.
2. Normalizes the incoming payload into consistent fields (call ID, end reason, transcript/summary text, and caller phone) and checks whether the call has usable text based on known failure end reasons.
3. If the call is unprocessable (for example no transcript/summary or a failure end reason), creates an “unprocessable” record and appends it to the Google Sheets “Call Log” tab.
4. If the call has usable text, sends the transcript/summary to OpenAI to extract structured facts such as caller name/phone, intent, sentiment, urgency, summary, requested action, and any follow-up date.
5. Decides whether the call is urgent using the extracted urgency/sentiment plus keyword matching against your configured urgent keyword list.
6. Appends the call to Google Sheets as either an urgent or routine record, and optionally sends a WhatsApp message to the business owner with the urgent call details.

## Setup
1. Copy the webhook URL from the “Voice Call Ended” trigger and configure your voice agent platform to POST its end-of-call payload to that URL.
2. Add an OpenAI credential for the extraction model and select the model you want to use.
3. Add a WhatsApp Business Cloud credential, set your WhatsApp Business phone number ID, and fill in the business owner’s WhatsApp number in the handoff settings.
4. Add a Google Sheets credential and replace the placeholder spreadsheet IDs and sheet/tab names for “Call Log”, “Urgent calls”, and “Routine calls” (or swap these logging steps for your CRM nodes).
5. Review and customize the urgent keyword list and the WhatsApp auto-send switch in the handoff settings before activating the workflow.

## Additional info
Screenshots, the running cost and the parts that break are on my write-up at https://fractionalhq.uk/use-cases/voice-call-whatsapp-crm-handoff

If you would rather not set it up yourself, I can set it up for you on your own n8n account for £49. Tell me what you use at https://fractionalhq.uk/brief and I will reply with what I need from you before any work starts.

All nine of my paid n8n templates also come together as one download for $15: https://buy.stripe.com/00w3co8NR6Mq8r0eaV4c80M

## 🔗 Nodes Used

Google Sheets, Webhook, WhatsApp Business Cloud, OpenAI Chat Model, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
