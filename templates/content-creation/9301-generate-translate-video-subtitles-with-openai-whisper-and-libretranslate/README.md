# 🎬 Generate & Translate Video Subtitles with OpenAI Whisper and LibreTranslate

> ⚡ **1,670 views** · 🎬 [Content Creation & Video](../)

## Description

## **This n8n template demonstrates how to automatically generate accurate subtitles from any video and optionally translate them into other languages. By combining FFmpeg, OpenAI Whisper, and LibreTranslate, this workflow turns video audio into ready-to-use .srt subtitle files that can be delivered via email.**

**Use cases**

- Auto-generate subtitles for training or educational videos
- Translate videos into multiple languages for global reach
- Create accessibility-friendly content with minimal effort
- Build a backend for media platforms to process subtitles automatically

**Good to know**

This workflow requires a self-hosted n8n instance since it uses the Execute Command node. FFmpeg is used for audio extraction and must be installed on the host machine. OpenAI Whisper (Local) is used for transcription, providing highly accurate speech-to-text results. LibreTranslate is used for translating subtitles into other languages.

## How it works

- *Webhook Trigger* – Starts when a video URL is received.
- *Download Video* – Fetches the video file from the provided link.
- *Extract Audio (FFmpeg)* – Separates audio from the video file.
- *Run Whisper (Local)* – Transcribes the extracted audio into text subtitles.
- *Read SRT File* – Loads the generated .srt subtitle file.
- *Merge Paths* – Combines both original and translated subtitle flows.
- *Translate Subtitles (LibreTranslate)* – Translates the .srt file into the target language.
- *Write Translated SRT* – Creates a translated .srt file for delivery.
- *Send a Message (Gmail)* – Sends the final subtitle file (original or translated) via email.

## How to use
- Clone this workflow into your self-hosted n8n instance.
- Ensure FFmpeg and Whisper are installed and available via your server’s shell path.
- Add your LibreTranslate service credentials for translation.
- Configure Gmail (or another email service) to send subtitle files.
- Trigger the workflow by sending a video URL to the webhook, and receive subtitle files in your inbox.

## Requirements
- Self-hosted n8n instance
- FFmpeg installed and available on the server
- OpenAI Whisper (Local) installed and callable via command line
- LibreTranslate service with API credentials
- Gmail (or any email integration) for delivery

## Customising this workflow
- Replace Gmail with Slack, Telegram, or Drive uploads for flexible delivery.
- Switch LibreTranslate with DeepL or Google Translate for higher-quality translations.
- Add post-processing steps such as formatting .srt files or embedding subtitles back into the video.
- Use the workflow as a foundation for building a multi-language subtitle automation pipeline.

## 🔗 Nodes Used

HTTP Request, Read Binary File, Write Binary File, Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
