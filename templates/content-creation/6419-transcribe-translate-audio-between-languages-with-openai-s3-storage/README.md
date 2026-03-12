# 🎬 Transcribe & translate audio between languages with OpenAI & S3 storage

> ⚡ **728 views** · 🎬 [Content Creation & Video](../)

## Description

This workflow automatically transcribes audio files, translates the content between languages, and generates natural-sounding speech from the translated text - all in one seamless process.

## Who's it for

Content creators, educators, and businesses needing to make their audio content accessible across language barriers. Perfect for translating podcasts, voice messages, lectures, or any audio content while preserving the spoken format.

## How it works

The workflow receives an audio file through a webhook, transcribes it using OpenAI's Whisper, translates and structures the text with GPT-4, generates new audio in the target language, and stores it in S3 for easy access. The entire process takes seconds and returns both the transcribed/translated text and a URL to the translated audio file.

## How to set up

1. **Configure OpenAI credentials** - Add your OpenAI API key for Whisper transcription and GPT-4 translation
2. **Set up AWS S3** - Create a bucket with public read permissions for audio storage
3. **Update configuration** - Replace 'YOUR-BUCKET-NAME' with your actual S3 bucket name
4. **Activate webhook** - Deploy and copy your webhook URL for receiving audio files

Send a POST request with:
- Binary audio file (as 'audiofile')
- Languages parameter (e.g., "English, Spanish")

## Requirements

- OpenAI API account with access to Whisper and GPT-4
- AWS account with S3 bucket configured
- Basic understanding of webhooks and API requests

## How to customize

- **Add language detection** - Automatically detect source language if not specified
- **Customize voice settings** - Adjust speech speed, pitch, or select different voices
- **Add file validation** - Implement size limits and format checks
- **Enhance security** - Add webhook authentication and rate limiting
- **Extend functionality** - Add subtitle generation or multiple output formats

## 🔗 Nodes Used

Webhook, AWS S3, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
