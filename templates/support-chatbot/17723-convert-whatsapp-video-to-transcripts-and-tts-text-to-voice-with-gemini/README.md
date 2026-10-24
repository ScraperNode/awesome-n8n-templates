# 💬 Convert WhatsApp video to transcripts and /tts text to voice with Gemini

> ⚡ **16 views** · 💬 [Support Chatbots](../)

## Description

## Quick Overview
This workflow listens for incoming WhatsApp messages and either transcribes video audio to text with Google Gemini (after converting it to MP3 via FreeConvert) or generates and sends a voice note from a /tts text command using Fish Audio.

## How it works
1. Triggers when a new WhatsApp message is received and extracts the sender number, message type, media URL, and text body.
2. If the message contains video media, it downloads the video from WhatsApp and creates a FreeConvert job to convert it to MP3.
3. It uploads the video file to FreeConvert, waits, and polls the job status until the conversion completes.
4. It downloads the converted MP3, sets the audio MIME type, and transcribes the audio using Google Gemini.
5. It sends the transcription text back to the original sender on WhatsApp.
6. If the message text contains /tts, it calls a sub-workflow that generates speech with Fish Audio, uploads the audio to WhatsApp, and sends it back as an audio message.

## Setup
1. Add WhatsApp Cloud API credentials and set your phone number ID in the WhatsApp Trigger and WhatsApp send/upload steps.
2. Add your FreeConvert API key and move it into credentials (the template currently uses a hard-coded Authorization header) before enabling the workflow.
3. Add Google Gemini (Google PaLM) API credentials for the audio transcription step.
4. Add Fish Audio API credentials and select a voice ID for the text-to-speech step.
5. Send a WhatsApp message containing video media to test transcription, or send a message starting with /tts followed by text to test voice note generation.

## 🔗 Nodes Used

HTTP Request, Execute Sub-workflow, WhatsApp Business Cloud, Execute Workflow Trigger, WhatsApp Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
