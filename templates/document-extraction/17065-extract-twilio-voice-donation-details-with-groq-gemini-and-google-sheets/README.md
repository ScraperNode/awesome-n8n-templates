# 🔬 Extract Twilio voice donation details with Groq, Gemini, and Google Sheets

> ⚡ **21 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow receives Twilio call recording callbacks, transcribes the audio with Groq Whisper, uses Google Gemini/Groq LLMs to extract structured donation details, and appends the results (with transcript and review flag) to Google Sheets.
Full setup guide: https://uzzaman.dev/guides/n8n-twilio-call-recording-transcription/

## How it works
1. Receives a Twilio Recording Status Callback webhook and immediately responds with TwiML (`<Response/>`).
2. Captures call metadata (CallSid, caller number, recording URL/SID, and duration) and continues only if the recording exists and is at least 2 seconds long.
3. Waits briefly for Twilio to finalize the media, then downloads the recording MP3 using Twilio HTTP Basic Auth.
4. Sends the audio file to Groq’s Whisper transcription endpoint to generate a text transcript.
5. Uses a LangChain prompt with Google Gemini and Groq chat models to extract donation amount, fee (if mentioned), beneficiary name, currency, a needs-review flag, and a short summary from the transcript.
6. Parses the model output as JSON and falls back to an error summary with `needs_review=yes` if parsing fails.
7. Checks Google Sheets for an existing row matching the CallSid/RecordingUrl and, if not found, appends a new row with the extracted fields, transcript, and call details.

## Setup
1. Create and connect credentials for Google Sheets OAuth2, a Google Gemini (PaLM) API key, and Groq API access (used for both chat and Whisper transcription).
2. Add Twilio HTTP Basic Auth credentials (Account SID and Auth Token) so the workflow can download the recording media URL.
3. Replace `spreadsheet_id` and select the target sheet/tab in both Google Sheets steps, ensuring the columns used in the append mapping exist.
4. Copy the n8n webhook URL and set it as the Twilio Recording Status Callback (or RecordingStatusCallback) for your Twilio voice setup so Twilio posts CallSid/RecordingUrl fields to the workflow.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Basic LLM Chain, Google Gemini Chat Model, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
