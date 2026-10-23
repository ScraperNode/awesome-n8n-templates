# 🎬 Transcribe media URLs into SRT subtitles with Inwista

> ⚡ **5 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow takes a media file URL, submits it to the Inwista Transcriptions API with speaker diarization, polls for completion, and downloads the resulting SRT subtitle file.

[Read the full setup guide here.](https://inwista.ai/en/article/build-a-fully-automated-transcription-pipeline-with-n8n)

## How it works
1. Runs when you manually execute the workflow.
2. Sets the media URL and language code to transcribe.
3. Sends the source URL to the Inwista API to create a transcription job with diarization enabled.
4. Waits 15 seconds and then checks the transcription job status in Inwista.
5. Repeats the status check until the job is completed, or stops with an error if the job fails.
6. Downloads the captions from Inwista as an SRT file.

## Setup
1. Create an Inwista API key and add it to an n8n HTTP Header Auth credential as `Authorization: Bearer <token>`.
2. Attach that Header Auth credential to the Inwista HTTP Request steps (submit, status check, and SRT download).
3. Replace the example `mediaUrl` (and optionally the `language`) with your publicly reachable audio/video file URL.

## Additional info
1. Create a free API key at https://inwista.ai/dashboard/workspace under the "API Keys" tab
2. Add a Header Auth credential — name Authorization, value Bearer inw_live_...
3. Put your file's URL in the Set media URL node and run

## 🔗 Nodes Used

HTTP Request, Stop and Error

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
