# 🎬 Serve text-to-speech MP3 over a webhook with Smallest.ai

> ⚡ **25 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick Overview
This workflow exposes a POST webhook that converts incoming text into an MP3 audio stream using Smallest.ai, optionally using a provided custom voice ID, and returns the audio inline in the same HTTP response.

## How it works
1. Receives a POST request on the `/text-to-speech` webhook endpoint with a JSON body.
2. Checks whether the request includes a `voice` field to indicate a custom voice ID.
3. If a custom voice ID is provided, sends the text and voice ID to Smallest.ai to generate an MP3 with that voice.
4. If no voice ID is provided, sends the text to Smallest.ai to synthesize an MP3 using the default voice settings.
5. Returns the generated MP3 as binary data to the caller with `Content-Type: audio/mpeg` and an inline filename of `speech.mp3`.

## Setup
1. Add your Smallest.ai API credentials in both Smallest.ai speech generation steps.
2. Activate the workflow and copy the production webhook URL, then configure your client to POST to `/text-to-speech`.
3. Send requests with a JSON payload containing `text` (required) and `voice` (optional custom voice ID).

## 🔗 Nodes Used

Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
