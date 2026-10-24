# 💬 Transcribe WhatsApp voice notes and auto-reply with OpenAI Whisper and GPT-4o

> ⚡ **18 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow receives WhatsApp Cloud API webhook events, transcribes incoming voice notes with OpenAI Whisper, generates a reply with OpenAI GPT-4o, and sends the response back to the sender via the WhatsApp Graph API while also handling plain text messages.

## How it works
1. Receives WhatsApp webhook requests for verification (GET) and incoming messages (POST) from the Meta WhatsApp Cloud API.
2. Validates the webhook verify token and returns the hub challenge to complete Meta webhook verification.
3. Parses the inbound webhook payload to extract the sender number, phone number ID, message type, and either text content or an audio media ID.
4. For voice notes, calls the WhatsApp Graph API to resolve the media ID to a temporary download URL, downloads the audio file, and transcribes it to text with OpenAI Whisper.
5. For text messages, uses the incoming text directly as the user prompt.
6. Sends the message text to OpenAI GPT-4o with a system prompt to generate a concise reply in the same language.
7. Posts the generated reply back to the user using the WhatsApp Graph API messages endpoint and returns an OK response to the webhook.

## Setup
1. Create a Meta app with WhatsApp Cloud API enabled, configure a WhatsApp Business phone number, and set the webhook callback URL to this workflow’s production webhook URL.
2. Set the Meta webhook verify token in the Meta App Dashboard and replace the placeholder value in the token check so verification succeeds.
3. Add an HTTP Header Auth credential for the WhatsApp Graph API using a permanent access token (Authorization: Bearer <token>) and use it on the Graph API HTTP requests.
4. Add an OpenAI API credential for the Whisper transcription and GPT-4o reply generation nodes.
5. Customize the GPT-4o system prompt to match your assistant persona, business context, and reply style.

## 🔗 Nodes Used

HTTP Request, Webhook, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
