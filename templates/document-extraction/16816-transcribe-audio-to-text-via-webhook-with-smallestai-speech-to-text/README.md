# 🔬 Transcribe audio to text via webhook with Smallest.ai speech-to-text

> ⚡ **40 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow exposes a POST webhook endpoint that accepts a binary audio file, transcribes it to text using Smallest.ai speech-to-text, and returns the transcript in the same synchronous HTTP response.

## How it works
1. Receives an HTTP POST request on the `/transcribe-audio` webhook endpoint containing an audio file as binary data.
2. Sends the incoming binary audio (from the `audio` property) to Smallest.ai for speech-to-text transcription.
3. Extracts the returned transcription and formats it into a `transcript` field.
4. Responds to the original webhook request with the transcript payload.

## Setup
1. Create and connect your Smallest.ai API credentials in the Smallest.ai transcription step.
2. Activate the workflow to generate the production webhook URL and use it in your client application.
3. Ensure your client sends the audio file as binary under the `audio` property when calling the webhook.

## 🔗 Nodes Used

Google Sheets, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
