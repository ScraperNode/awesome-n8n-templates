# 🔧 Qualify voicemail leads with Twilio, Google Gemini, Gmail and Google Sheets

> ⚡ **9 views** · 🔧 [Miscellaneous](../)

## Description

## Quick overview
When a buyer or seller leaves a voicemail, this workflow transcribes it automatically, qualifies their intent using Gemini AI, sends an instant SMS acknowledgment, and alerts the agent for Hot leads — turning every missed call into a qualified lead within seconds.

## How it works
1. Receives a POST webhook from Twilio when a voicemail recording and transcription are completed.
2. Validates the voicemail by checking that the recording is completed, the transcription is completed, and the call duration is longer than 5 seconds.
3. Extracts the transcript, caller phone number, call SID, duration, and recording URL, then sends the transcript to Google Gemini to return structured lead details, a Hot/Warm/Cold score, and draft SMS/email replies.
4. Parses and sanitizes the Gemini JSON output, applies fallbacks if parsing fails, optionally appends a Google Calendar booking link for Hot leads, and builds an agent-ready HTML summary including the transcript and recording link.
5. Sends an acknowledgment SMS to the caller via Twilio, and sends an acknowledgment email via Gmail only when a caller email address is available.
6. Appends the lead details, transcript, and messaging status to a Google Sheets lead log.
7. If the lead is scored Hot, notifies the agent by Gmail and Slack and then updates the matching Google Sheets row to mark “Agent Notified” as true.

## Setup
1. Configure your Twilio voicemail flow to enable transcription and set the transcribe callback/webhook URL to this workflow’s “voicemail-received” webhook endpoint.
2. Add credentials for Twilio, Google Gemini (PaLM API key), Gmail OAuth2, Slack OAuth, and Google Sheets OAuth2.
3. Set your Twilio “from” number in the SMS step and choose whether you want to send as WhatsApp (or disable WhatsApp).
4. Create or select a Google Sheets spreadsheet with the required columns and paste its document URL/ID into the Google Sheets nodes.
5. Replace the placeholder Google Calendar booking page URL in the code step if you want Hot-lead emails to include a booking link, and update the agent notification email address and Slack channel (for example, #hot-leads).

## Requirements
- Twilio setup: Your Twilio number must be configured with a TwiML voicemail script that enables both recording and transcription, with the transcribeCallback pointing to this workflow's webhook URL. The workflow only triggers when Twilio has completed both recording and transcription — this takes approximately 30–60 seconds after the caller hangs up. Full TwiML configuration is provided in the setup guide below.
- Google Sheet setup: Copy the Voicemail Lead Database sheet template and link its ID to both the Append and Update Sheets nodes. The sheet requires these columns in order: recordId, Timestamp, Caller Phone, Caller Name, Caller Email, Intended Action, Property Type, Budget, Timeline, Key Message, Lead Score, Score Reasoning, Full Transcript, SMS Sent, Email Sent, Agent Notified, Call Duration, Twilio Call SID.

## Customization
- Edit the AI scoring rules in the "Extract, Qualify & Draft Response" node to adjust what qualifies as Hot, Warm, or Cold for your market.
- Edit the SMS and email tone in the system prompt — change language, adjust formality, or translate to another language.
- Change the voicemail greeting in the TwiML script to match your agency's brand voice.
- Adjust the call duration filter in the IF: Valid Voicemail? node — default is 5 seconds, increase to filter out very short calls.

## Additional info
TwiML script to paste into your Twilio console:
Create a TwiML Bin in your Twilio Console and paste this script, replacing YOUR_N8N_WEBHOOK_URL with your workflow's webhook URL from n8n:

<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say voice="Polly.Joanna">
    Hi, you have reached our real estate team.
    We are unavailable right now but we would love to help.
    Please leave your name, phone number, and what you are
    looking for and we will get back to you shortly.
  </Say>
  <Record
    maxLength="120"
    playBeep="true"
    transcribe="true"
    transcribeCallback="YOUR_N8N_WEBHOOK_URL"
    recordingStatusCallback="YOUR_N8N_WEBHOOK_URL"
    recordingStatusCallbackMethod="POST"
  />
  <Say>Thank you for your message. We will be in touch soon.</Say>
</Response>

## 🔗 Nodes Used

Google Sheets, Slack, Twilio, Webhook, Gmail, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
