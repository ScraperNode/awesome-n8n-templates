# 🔬 Transcribe WhatsApp audio with Groq Whisper and save transcripts to Google Drive

> ⚡ **7 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow receives a webhook with a Base64-encoded WhatsApp call recording from a Google App Script, transcribes the audio using Groq’s Whisper API, and saves the formatted transcript as a text file to Google Drive via a Google Apps Script web app.

## How it works
1. Receives an HTTP POST webhook containing Base64 audio data plus optional metadata like filename, MIME type, and Google Drive links.
2. Converts the Base64 payload into a binary audio file and generates a transcript filename based on the original audio name.
3. Uploads the audio to Groq’s Whisper transcription endpoint (whisper-large-v3-turbo) and receives the transcript text.
4. Sends the transcript and call metadata to a Google Apps Script web app that writes the transcript into a text file in a specified Google Drive folder.

## Setup
1. Create a Groq API key and add it as an HTTP Header Auth credential (Bearer token) for the transcription request.
2. Deploy a Google Apps Script web app that supports the save_transcript action and can write files to your Google Drive.
3. Update the Google Apps Script web app URL and target Google Drive folder ID used when saving the transcript.
4. Copy the webhook URL for the “whatsapp-audio” endpoint and configure your WhatsApp/audio capture process to POST the required fields (fileData, fileName, mimeType, and optional Drive link metadata).

## Requirements
- You need to create a Google App Script from your google drive account. 

## Additional info
Use this GOOGLE APP SCRIPT AND REPLACE THE TWO VARIABLES - AUDIO_FOLDER_ID, N8N_WEBHOOK_URL

You can find the App Script from this github repo - https://github.com/Progressive-Programmer/whatsapp-n8n-google-app-script.git

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
