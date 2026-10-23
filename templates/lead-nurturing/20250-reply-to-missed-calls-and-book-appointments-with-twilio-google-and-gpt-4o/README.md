# 💬 Reply to missed calls and book appointments with Twilio, Google, and GPT-4o

> ⚡ **35 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
Never miss a lead again: this workflow texts back missed callers via Twilio SMS and turns voice AI call summaries into Google Calendar bookings — with Sheets logging and owner alerts.

## How it works
1. Twilio call-status webhooks arrive here; missed inbound calls get an immediate SMS reply, are logged to Google Sheets, and trigger an owner alert.
2. Your voice AI posts its end-of-call summary; the workflow extracts caller name, phone, service and time with AI and builds the event times.
3. The workflow creates a Google Calendar event, texts the caller a confirmation, logs the call, and notifies the owner.

## Setup
1. Connect your Twilio, Google Sheets, Google Calendar and OpenAI credentials.
2. Fill the two CONFIG nodes (business name, numbers, sheet ID, calendar ID, booking link).
3. Point your Twilio number's voice webhook at the workflow's production URL.
4. Point your voice AI's end-of-call report at the second webhook.
5. Create the MissedCalls and VoiceCalls sheet tabs.

## Requirements
- Twilio account with a phone number, a Google account, an OpenAI API key, and — for the voice layer — a Vapi or Retell voice agent.

## Customization
- Edit the SMS copy in the Twilio nodes, change the CONFIG fields per client, swap the Sheets logger for your CRM, or extend the AI extraction schema with extra fields.

## Additional info
Who's it for: Local service businesses — plumbers, clinics, salons, contractors — that lose jobs when calls go to voicemail, and anyone running a voice AI receptionist (Vapi, Retell) who wants bookings to land in the calendar automatically.

## 🔗 Nodes Used

Google Sheets, Twilio, Webhook, Google Calendar, OpenAI Chat Model, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
