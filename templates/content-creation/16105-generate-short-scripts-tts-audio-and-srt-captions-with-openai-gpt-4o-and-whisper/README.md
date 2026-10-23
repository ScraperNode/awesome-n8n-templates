# 🎬 Generate short scripts, TTS audio, and SRT captions with OpenAI GPT-4o and Whisper

> ⚡ **17 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow exposes a webhook that generates a punchline-first YouTube Shorts script with OpenAI, turns it into an MP3 voiceover using OpenAI Text-to-Speech, then transcribes that audio with Whisper to return word-timed SRT captions plus the audio as base64.

## How it works
1. Receives a POST webhook request with a topic plus optional word count and OpenAI TTS voice.
2. Calls the OpenAI Chat Completions API (gpt-4o-mini) to generate a short CLAIM → PROOF → ESCALATION script.
3. Extracts the script text from the OpenAI response and validates it is not empty.
4. Sends the script to the OpenAI Text-to-Speech API (tts-1) to generate an MP3 narration.
5. Uploads the MP3 to the OpenAI Whisper transcription API (whisper-1) to get word-level timestamps.
6. Builds an SRT file by chunking timed words into short caption cues and responds to the webhook with {script, srt, audioBase64, durationSeconds}.

## Setup
1. Create an OpenAI credential in n8n with your OpenAI API key and select it for the three OpenAI HTTP requests (Chat Completions, Text-to-Speech, and Transcriptions).
2. Activate the workflow and copy the webhook URL, then POST JSON containing at least a "topic" (optionally "words" and "voice") from your client or source app.
3. If you want to store the MP3 instead of returning it inline, add a file or cloud storage node after audio generation or after transcription and map the binary audio accordingly.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
