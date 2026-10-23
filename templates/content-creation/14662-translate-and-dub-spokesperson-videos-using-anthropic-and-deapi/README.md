# 🎬 Translate and dub spokesperson videos using Anthropic and deAPI

> ⚡ **37 views** · 🎬 [Content Creation & Video](../)

## Description

## Who is this for?

- Marketing teams localizing video content for international markets
- E-commerce brands creating product videos for multiple regions
- Agencies producing multilingual ad campaigns for global clients
- Educators and trainers adapting video courses for different language audiences
- Anyone who wants to localize a spokesperson video without re-filming

## What problem does this solve?

Localizing a video for a new market usually means hiring a local presenter, re-filming the entire video, or settling for subtitles that nobody reads. This workflow takes an existing spokesperson video, transcribes it, translates the speech into a target language, generates dubbed audio, and produces a lip-synced talking-head video with a locally-relevant face — all without a camera or a casting call.

## What this workflow does

1. **Reads** the original spokesperson video and a reference image of the local presenter in parallel
2. **Transcribes** the video's audio to text using deAPI (Whisper Large V3)
3. **Extracts** the raw transcript text from the transcription result
4. **AI Agent** translates the transcript into the target language, preserving tone and pacing
5. **Generates** dubbed speech in the target language using deAPI text-to-speech (Qwen3 TTS Custom Voice)
6. **Generates** a lip-synced talking-head video from the dubbed audio using deAPI audio-to-video generation (LTX-2.3 22B), with the local presenter image as the first frame

## Setup

### Requirements

- [deAPI](https://deapi.ai) account for transcription, TTS, and video generation
- Anthropic account for the AI Agent (translation)
- A spokesperson video
- A reference image of the local presenter (JPG, JPEG, PNG, GIF, BMP, WebP — max 10 MB)

### Installing the deAPI Node

- **n8n Cloud**: Go to **Settings** → **Community Nodes** and install `n8n-nodes-deapi`
- **Self-hosted**: Go to **Settings** → **Community Nodes** and install `n8n-nodes-deapi`

### Configuration

1. Add your deAPI credentials (API key + webhook secret)
2. Add your Anthropic credentials (API key)
3. Update the **File Path** in the "Read Source Video" node to point to your spokesperson video
4. Update the **File Path** in the "Read Local Presenter Image" node to point to the reference image
5. Edit the **Set Fields** node to set the target language (e.g., "Spanish", "Japanese", "French")
6. Ensure your n8n instance is on HTTPS

## How to customize this workflow

- **Change the AI model**: Swap Anthropic for OpenAI, Google Gemini, or any other LLM provider for translation
- **Change the TTS model**: Switch Qwen3 TTS Custom Voice for Kokoro or Chatterbox for different voice characteristics
- **Use voice cloning**: Replace the Generate Speech node with Clone a Voice to preserve the original speaker's voice in the target language
- **Batch processing**: Replace the Manual Trigger with a Google Sheets or Airtable trigger containing rows for each target language and local presenter image
- **Add delivery**: Append a Gmail, Slack, or Google Drive node to automatically deliver the localized video

## 🔗 Nodes Used

AI Agent, Anthropic Chat Model, Read/Write Files from Disk, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
