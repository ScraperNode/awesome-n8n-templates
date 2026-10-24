# 🎬 Clone brand voices and generate voiceovers with Smallest AI and Google Drive

> ⚡ **11 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick Overview
This workflow receives a webhook request with an audio sample URL, voice name, and script, clones a voice and generates a matching voiceover using Smallest AI, uploads the MP3 to Google Drive, logs the voice ID in Google Sheets, and returns a public link in the webhook response.

## How it works
1. Receives a POST webhook request containing an `audio_url`, `voice_name`, and script text.
2. Downloads the provided voice sample file from the `audio_url`.
3. Sends the sample to Smallest AI Voice Cloning to create a new voice profile and extracts the returned `voiceId`.
4. Truncates the script text to a safe length and synthesizes speech with Smallest AI using the cloned voice ID.
5. Uploads the generated MP3 voiceover to Google Drive and updates its sharing settings to be publicly readable.
6. Appends the cloned voice ID and voice name to a Google Sheets “voice library” spreadsheet and returns a JSON response with the voice ID, Drive link, and timestamp.

## Setup
1. Create a Smallest AI API key, store it securely in n8n, and replace the hardcoded `Authorization: Bearer ...` header used for voice cloning.
2. Add a Smallest AI credential in n8n for the speech synthesis step and ensure it has access to the same Smallest AI workspace.
3. Connect your Google Drive and Google Sheets credentials, and update the target Drive folder and spreadsheet/sheet IDs if you don’t want to use the preconfigured locations.
4. Activate the workflow, copy the production webhook URL, and send POST requests that include `body.audio_url`, `body.voice_name`, and `body.script`.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
