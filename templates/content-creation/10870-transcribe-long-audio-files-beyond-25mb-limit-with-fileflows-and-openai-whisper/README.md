# 🎬 Transcribe long audio files beyond 25MB limit with FileFlows and OpenAI Whisper

> ⚡ **1,175 views** · 🎬 [Content Creation & Video](../)

## Description

## Who's it for

This template is designed for content creators, podcasters, businesses, and researchers who need to transcribe long audio recordings that exceed OpenAI Whisper's 25 MB file size limit (~20 minutes of audio).

## How it works

This workflow combines n8n, FileFlows, and OpenAI Whisper API to transcribe audio files of any length:

1. User uploads an MP3 file through a web form and provides an email address
2. n8n splits the file into 4 MiB chunks and uploads them to FileFlows
3. FileFlows uses FFmpeg to segment the audio into 15-minute chunks (safely under the 25 MB API limit)
4. Each segment is transcribed using OpenAI's Whisper API (configured for French by default)
5. All transcriptions are merged into a single text file
6. The complete transcription is automatically emailed to the user

**Processing time:** Typically 10-15 minutes for a 1-hour audio file.

## Requirements

- n8n instance (self-hosted or cloud)
- FileFlows with Docker and FFmpeg installed
- OpenAI API key (Whisper API access)
- Gmail account for email delivery
- Network access between n8n and FileFlows

## Setup

Complete setup instructions, including FileFlows workflow import, credentials configuration, and storage setup, are provided in the workflow's sticky notes.

## Cost

OpenAI Whisper API: $0.006 per minute. A 1-hour recording costs approximately $0.36.

## 🔗 Nodes Used

HTTP Request, Gmail, Filter, n8n Form Trigger, Convert to File, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
