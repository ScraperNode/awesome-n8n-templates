# 🎬 Clone and replay WhatsApp voice notes with Fish Audio, FreeConvert, and Sheets

> ⚡ **11 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
Youtube Video: https://youtu.be/HUBYaWoVlZ8
This workflow receives WhatsApp messages, converts incoming voice notes to MP3 with FreeConvert, trains a Fish Audio voice clone, stores the model reference in Google Sheets, and (on /tts text commands) generates and sends a WhatsApp voice reply using Fish Audio.

## How it works
1. Triggers when a new WhatsApp message is received and extracts the sender phone number, message type, media ID, and text body.
2. If the message is a voice note, it fetches the media URL from the Facebook Graph API and downloads the audio file.
3. It creates and uploads a FreeConvert job to convert the downloaded audio to MP3, then polls FreeConvert until the job status is completed.
4. It downloads the converted MP3 and uploads it to Fish Audio to create a private TTS voice model.
5. It upserts the returned Fish Audio model ID and name into Google Sheets and sends a WhatsApp confirmation message to the sender.
6. If the incoming message is text containing “/tts”, it runs a sub-workflow that generates speech in Fish Audio from the text, uploads the audio to WhatsApp, and sends it back as an audio message.

## Setup
1. Configure WhatsApp Cloud API credentials and webhook settings, then connect the trigger URL in your WhatsApp app configuration.
2. Add a FreeConvert API bearer token (HTTP Bearer Auth) and confirm the workflow uses your FreeConvert job endpoint settings.
3. Add Fish Audio API credentials and update the target voice ID/model settings if you want to use a different Fish Audio voice/model.
4. Connect Google Sheets with a Service Account and set the Spreadsheet ID and sheet tab to store the Fish Audio model reference.
5. Update WhatsApp variables such as the Phone Number ID and the recipient phone mapping in the WhatsApp send nodes to match your environment.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Execute Sub-workflow, WhatsApp Business Cloud, Execute Workflow Trigger, WhatsApp Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
