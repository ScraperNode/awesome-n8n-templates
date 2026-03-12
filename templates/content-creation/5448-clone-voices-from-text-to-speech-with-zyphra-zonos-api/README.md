# 🎬 Clone voices from text to speech with Zyphra Zonos API

> ⚡ **1,898 views** · 🎬 [Content Creation & Video](../)

## Description

# Voice Cloning Workflow - Zyphra Zonos API

## Who is this for?
This workflow is designed for developers, content creators, and businesses looking to automate high-quality voice synthesis using AI voice cloning technology.

## What problem does this solve?
It automates the process of generating natural-sounding speech from text using a sample voice file, eliminating the need for manual voice recording and providing consistent voice output for applications like audiobooks, virtual assistants, or content localization.

## What this workflow does
The workflow receives text and voice cloning parameters via webhook, reads a sample voice file from your storage, sends the data to Zyphra's Zonos API for voice synthesis, and saves the generated audio file to your specified output location.

## Prerequisites
You'll need:
- API key from Zyphra (obtain from https://playground.zyphra.com/settings/api-keys)
- Account registration at https://playground.zyphra.com  
- Sample voice file stored on accessible disk/cloud storage
- n8n instance running with webhook capabilities

## Setup
1. Configure your Zyphra API key in the "Call Zyphra Clone API" node under Header Parameters (Name: X-API-Key, Value: your-api-key)
2. Ensure your sample voice files are accessible at the paths you'll specify
3. Test the webhook endpoint is accessible

## Supported Audio Formats
The API supports multiple output formats through the `mime_type` parameter:

- **WebM** (default) - `audio/webm`
- **Ogg** - `audio/ogg`
- **WAV** - `audio/wav`
- **MP3** - `audio/mp3` or `audio/mpeg`
- **MP4/AAC** - `audio/mp4` or `audio/aac`

## Usage Example

**Endpoint:** `POST http://localhost:5678/webhook-test/voice-clone`

**Headers:** `Content-Type: application/json`

**Request Body:**
{
"text": "Hello there! This voice sounds just like the sample!",
"speaking_rate": 18,
"sample_voice_path": "/data/output/sampleVoice.wav",
"output_path": "/data/output/",
"language_iso_code": "en-us",
"mime_type": "audio/wav",
"model": "zonos-v0.1-transformer",
"emotion": {
"happiness": 0.8,
"neutral": 0.3,
"sadness": 0.05,
"disgust": 0.05,
"fear": 0.05,
"surprise": 0.05,
"anger": 0.05,
"other": 0.5
}
}


## Parameters

### Required Parameters
- **text**: Text to synthesize into speech
- **sample_voice_path**: Path to your voice sample file
- **output_path**: Directory where generated audio will be saved

### Optional Parameters (with defaults)
- **speaking_rate**: `15` - Speech speed
- **language_iso_code**: `"en-us"` - Language code
- **mime_type**: `"audio/wav"` - Output audio format
- **model**: `"zonos-v0.1-transformer"` - AI model to use
- **emotion**: Object with emotion levels (0-1 scale)

## 🔗 Nodes Used

HTTP Request, Webhook, Read/Write Files from Disk

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
