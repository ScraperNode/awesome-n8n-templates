# 💬 Triage Telegram voice and text support with Groq LLMs and Google Sheets

> ⚡ **2,281 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow turns Telegram voice notes and text messages into a support agent by transcribing audio with Groq Whisper, classifying intent/sentiment/security risk with Groq LLMs, escalating risky cases to a human via Telegram, and logging interactions and errors to Google Sheets with Slack error alerts.

## How it works
1. Triggers when a new Telegram message is received.
2. If the message is a voice note, it downloads the audio from Telegram and transcribes it using Groq Whisper; if it is text, it uses the message text as the transcript, otherwise it replies that the message type is unsupported.
3. Sends the transcript to Groq Chat Completions to classify intent, sentiment, and security risk and parses the JSON result.
4. Checks Google Sheets for a recent escalation lock for the same chat ID and sends a brief holding reply in Telegram if the conversation was escalated in the last 30 minutes.
5. If sentiment is frustrated/angry or a security risk is detected, it records/updates the escalation lock in Google Sheets, notifies a human agent in Telegram, and sends the user a Groq TTS voice acknowledgement.
6. If not escalated, it routes by intent and generates a tailored Groq LLM response, sends the reply back to the user in Telegram, and appends the interaction details to Google Sheets.
7. On any Groq or Telegram file-processing error, it posts an alert to Slack, logs the failure to a Google Sheets Errors tab, and sends a fallback message to the user in Telegram.

## Setup
1. Create and connect Telegram bot credentials for the customer-facing bot (receiving messages and replying) and a second Telegram bot/credential for sending internal escalation notifications.
2. Add a Groq API credential for the HTTP requests used for Whisper transcription, chat completions, and text-to-speech.
3. Connect Google Sheets OAuth2 and create a spreadsheet with sheets/tabs for Interactions, Errors, and Escalations (including columns like chatId and escalatedAt).
4. Connect Slack OAuth2 and select the channel that should receive error alerts.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Telegram, Telegram Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
