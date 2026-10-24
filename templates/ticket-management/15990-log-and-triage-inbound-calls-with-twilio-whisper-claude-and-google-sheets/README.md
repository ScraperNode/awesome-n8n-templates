# 🎫 Log and triage inbound calls with Twilio, Whisper, Claude, and Google Sheets

> ⚡ **36 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow handles Twilio recording-complete webhooks, downloads the call audio, transcribes it with OpenAI Whisper, and uses Anthropic Claude to extract structured call insights. It logs every call to Google Sheets, emails urgent calls via Gmail, and returns an empty TwiML response to close the Twilio request.

## How it works
1. Receives a Twilio Recording Status Callback webhook when an inbound call recording is completed.
2. Normalizes the webhook payload to capture the call SID, caller/recipient numbers, recording URL, duration, and a timestamp.
3. Downloads the MP3 recording from Twilio using HTTP Basic Auth and sends the audio to OpenAI Whisper to generate a transcript.
4. Sends the transcript and call metadata to Anthropic Claude and parses its JSON output into fields like intent, urgency, summary, sentiment, and whether a callback is needed.
5. Appends the combined call metadata, transcript, and AI analysis to a Google Sheets tab for logging and reporting.
6. If the call is flagged as urgent (high urgency or a complaint), sends a detailed HTML alert email via Gmail.
7. Returns an empty TwiML XML response to Twilio to complete the webhook response cleanly.

## Setup
1. Configure Twilio call recording (TwiML Bin/Studio/Voice setup) and set the Recording Status Callback URL to this workflow’s webhook endpoint.
2. Add Twilio HTTP Basic Auth credentials in n8n (Account SID as username and Auth Token as password) and attach them to the Twilio recording download request.
3. Add an OpenAI API key as an HTTP Header Auth credential (Authorization: Bearer <key>) for the Whisper transcription request.
4. Add an Anthropic API key as an HTTP Header Auth credential (x-api-key: <key>) for the Claude messages request.
5. Connect Google Sheets credentials, replace the spreadsheet ID, and create an “Inbound Calls” sheet with columns matching the logged fields.
6. Connect Gmail credentials and replace the recipient address (you@example.com) with the operator inbox for urgent-call alerts.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
