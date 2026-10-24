# 🎬 Generate SRT subtitles for Google Drive audio with Smallest.ai

> ⚡ **46 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick Overview
This workflow watches a Google Drive folder for new audio files, transcribes them with Smallest.ai, converts the transcription into an SRT subtitle file, and uploads the .srt back to the same Google Drive folder.

## How it works
1. Triggers every minute when a new file is created in a specified Google Drive folder.
2. Checks the file extension to confirm it is a supported audio format (mp3, wav, aac, ogg, flac, m4a, wma).
3. Downloads the audio file from Google Drive.
4. Sends the audio to Smallest.ai for speech-to-text transcription.
5. Formats the transcription into timestamped SRT cues (using returned segments when available, otherwise estimating timings).
6. Uploads the generated .srt subtitle file back to the watched Google Drive folder.

## Setup
1. Add a Google Drive OAuth credential and select the folder to watch/upload to in both the trigger and upload steps.
2. Add your Smallest.ai credentials in the transcription step.
3. Ensure the monitored folder receives audio files with supported extensions, or update the extension-matching pattern to fit your media types.

## 🔗 Nodes Used

Google Drive, Google Drive Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
