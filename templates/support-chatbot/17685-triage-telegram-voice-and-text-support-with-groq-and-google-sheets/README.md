# 💬 Triage Telegram voice and text support with Groq and Google Sheets

> ⚡ **3 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow triages Telegram support messages (voice or text) for a crypto wallet using Groq (Whisper + Llama models), escalates high-risk or frustrated users to a human agent with a holding voice reply, and logs interactions and errors to Google Sheets with Slack error alerts.

## How it works
1. Triggers when a new Telegram message arrives and checks whether it contains a voice note, text, or an unsupported message type.
2. For voice notes, downloads the audio from Telegram and transcribes it with Groq Whisper; for text messages, uses the message text as the transcript.
3. Sends the transcript to Groq Chat Completions to classify intent, sentiment, and security risk, then parses the model’s JSON output.
4. Looks up the sender’s chatId in a Google Sheets “Escalations” tab and enforces a 30-minute escalation lock to avoid duplicate escalations.
5. If an escalation is already locked, sends a holding message to the user; otherwise, escalates angry/frustrated or security-risk messages by updating Google Sheets, notifying a human agent in Telegram, and sending the user a Groq-generated TTS voice reply.
6. For non-escalated messages, routes by intent and generates an FAQ, Transaction/KYC, or Security/Trading response with Groq Llama models, then sends the reply back to the user in Telegram.
7. Appends the interaction to a Google Sheets “Interactions” tab, and on any API failure posts an alert to Slack, logs to a Google Sheets “Errors” tab, and sends a fallback Telegram message.

## Setup
1. Create and connect Telegram bot credentials, and set the correct chat IDs for the customer conversation and the human-agent notification target.
2. Add a Groq API credential (groqApi) for the Whisper transcription, chat completions, and text-to-speech HTTP requests.
3. Connect Google Sheets OAuth credentials and update the spreadsheet/document ID and sheet tabs for Interactions, Escalations, and Errors.
4. Connect Slack OAuth credentials and choose the channel that should receive error alerts.
5. (Optional) Customize the FAQ text, escalation rules (sentiment/security risk), and the escalation lock window to match your support policies.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Telegram, Telegram Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
