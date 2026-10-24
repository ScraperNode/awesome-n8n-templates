# 🔬 Transcribe media URLs to AI-summarized Google Drive notes with Apify Whisper

> ⚡ **16 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow takes an audio or video URL - YouTube, podcasts, direct MP3/MP4 files and hundreds of sites - sends it to Apify's Universal Media Transcriber actor (Whisper speech-to-text, 90+ languages, no OpenAI key), and formats the results into Markdown notes with the full transcript and timestamped segments.

## How it works
1. Starts when you manually execute the workflow.
2. Sets the media URL you want to transcribe.
3. Calls the Apify Media Transcriber (Whisper) API to transcribe the provided URL and return text and segment data.
4. Formats the returned metadata and transcript into a Markdown document and outputs the transcript plus any timestamped segments.

## Setup
1. Create an Apify account and generate an Apify API token.
2. In n8n, add an HTTP Header Auth credential that sets `Authorization` to `Bearer <your Apify API token>` and select it in the Apify request step.
3. Replace the sample `mediaUrl` value with your own publicly accessible audio/video URL (or map it from earlier steps if extending the workflow).

## Requirements
- A free Apify account and API token - the workflow calls the Universal Media Transcriber actor (apify.com/sauliusautomatesit/media-transcriber); transcription is billed per audio minute on Apify, no OpenAI key needed.

## Customization
- Swap the manual trigger for a Schedule, Webhook, RSS or Google Drive trigger to auto-transcribe new podcast episodes or uploaded files; set model to small/medium for higher accuracy, translate: true to translate foreign speech into English, or add srt/vtt to outputFormats for subtitle files; send the Markdown to Notion, Google Docs or Slack after the Code node.

## Additional info
Transcription runs on Apify's Universal Media Transcriber actor (https://apify.com/sauliusautomatesit/media-transcriber): Whisper AI, 90+ languages with auto-detection, word-level timestamps available, and only successfully transcribed minutes are charged. For media longer than ~20 minutes, switch the HTTP node to the async run endpoint and poll for completion.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Stop and Error, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
