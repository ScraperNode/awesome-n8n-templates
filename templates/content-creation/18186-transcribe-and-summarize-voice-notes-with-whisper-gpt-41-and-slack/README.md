# 🎬 Transcribe and summarize voice notes with Whisper, GPT-4.1, and Slack

> ⚡ **61 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow accepts an uploaded voice note via webhook (or manual test), transcribes it with OpenAI Whisper, cleans and summarizes it with an OpenAI chat model, and posts a structured note (title, summary, action items, tags, full text) to Slack with two human approval checkpoints.

## How it works
1. Receives an audio upload via a webhook (or runs manually for testing) and loads configuration like language, summary style, and target Slack channel.
2. Sends the audio file to the OpenAI audio transcription endpoint (Whisper) and retrieves the raw transcript text.
3. Performs light deterministic cleanup on the transcript (whitespace/casing) and prepares the text for review and summarization.
4. Pauses execution until a reviewer approves (and optionally edits) the transcript via the wait node’s resume webhook.
5. If approved, uses an OpenAI chat model to rewrite the transcript into clean prose and generate a JSON note with a title, summary, action items, and tags.
6. Pauses again for a save/send confirmation, then posts the final formatted note to the configured Slack channel (or marks the run as discarded if not approved).

## Setup
1. Add OpenAI API credentials for both the transcription HTTP request (audio transcriptions) and the OpenAI chat model used for cleanup/summarization.
2. Add Slack credentials with permission to post messages and set/confirm the target channel name in the configuration.
3. Update the configuration values (STT API URL/model, language, summaryStyle, and notifyChannel) to match your preferences.
4. Copy the voice-note upload webhook URL and configure your recording source to POST the audio as binary data in the `audioData` field.
5. Configure your review UI (or a simple approval mechanism) to call the two wait resume webhooks and include `reviewApproved` and `saveApproved` booleans (and optionally `reviewedTranscript`).

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
