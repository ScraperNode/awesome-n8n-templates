# 🎬 Clone a voice and create talking avatar videos using Anthropic and deAPI

> ⚡ **210 views** · 🎬 [Content Creation & Video](../)

## Description

## Who is this for?

- Content creators who want a consistent on-screen avatar without filming themselves
- Marketing teams producing personalized video messages at scale
- Educators building video lessons with a virtual presenter
- Anyone who wants to turn text into a talking avatar video using a cloned voice

## What problem does this solve?

Creating a talking-head video normally requires a camera, lighting, and a person on screen. Voice cloning adds another layer of complexity. This workflow handles everything — provide a short voice sample and an image, type what you want the avatar to say, and get a lip-synced talking avatar video.

## What this workflow does

1. **Reads** a short reference audio clip and a first frame image in parallel
2. **Clones** the voice from the reference audio using deAPI (Qwen3 TTS VoiceClone) and generates new speech from the provided text
3. **Merges** the cloned audio and the first frame image into a single item
4. **AI Agent** crafts a talking-avatar-optimized video prompt — focusing on lip sync, facial expressions, and natural movement — then boosts it with the deAPI **Video Prompt Booster** tool using the first frame image for visual context
5. **Generates** a talking avatar video synced to the cloned speech using deAPI (LTX-2.3 22B), with the image as the opening frame and the AI-crafted prompt guiding the scene

## Setup

### Requirements

- **n8n instance** (self-hosted or n8n Cloud)
- [deAPI](https://deapi.ai) account for voice cloning, prompt boosting, and video generation
- Anthropic account for the AI Agent
- A short reference audio file (3-10 seconds, MP3/WAV/FLAC/OGG/M4A)
- A first frame image for the avatar (PNG/JPG)

### Installing the deAPI Node

- **n8n Cloud**: Go to **Settings** → **Community Nodes** and toggle the “Verified Community Nodes” option
- **Self-hosted**: Go to **Settings** → **Community Nodes** and install `n8n-nodes-deapi`

### Configuration

1. Add your deAPI credentials (API key + webhook secret)
2. Add your Anthropic credentials (API key)
3. Update the **File Path** in the "Read Reference Audio" node to point to your voice sample
4. Update the **File Path** in the "Read First Frame Image" node to point to your avatar image
5. Edit the **Set Fields** node with your desired text, video prompt, and language
6. Ensure your n8n instance is on HTTPS

## How to customize this workflow

- **Change the AI model**: Swap Anthropic for OpenAI, Google Gemini, or any other LLM provider
- **Adjust the avatar style**: Modify the AI Agent system message to target different visual styles (cartoon, realistic, professional, casual)
- **Add audio transcription**: Insert a deAPI Transcribe Audio node before voice cloning and pass the transcript as `refText` for improved cloning accuracy
- **Change the aspect ratio**: Switch from landscape to portrait for mobile-first content or square for social media
- **Add a last frame image**: Use the optional `lastFrame` parameter in Generate From Audio to control how the video ends
- **Change the trigger**: Replace the Manual Trigger with a Form Trigger, webhook, or Airtable trigger for batch avatar generation
- **Add delivery**: Append a Gmail, Slack, or Google Drive node to automatically deliver the generated video

## 🔗 Nodes Used

AI Agent, Anthropic Chat Model, Read/Write Files from Disk

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
