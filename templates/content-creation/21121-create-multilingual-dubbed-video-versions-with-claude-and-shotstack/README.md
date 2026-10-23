# 🎬 Create multilingual dubbed video versions with Claude and Shotstack

> ⚡ **0 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
Give it one video link and a list of languages, and get back a dubbed, captioned copy in each language. Shotstack transcribes the video, Claude translates it, and an ElevenLabs voice says each line on time. Self-hosted n8n only: it saves files on disk.

## How it works
1. Shotstack's Ingest API transcribes the video's speech into timed captions.
2. Claude translates every caption into each language you list, short enough to say in the same time as the original. A Code step sends any mismatch back to Claude.
3. One Shotstack render per language keeps the original video, turns its sound down, adds an ElevenLabs voice saying each translated line when the original was said, and shows the line as a caption.
4. Each version is saved to the translated folder, named after the video and the language.

## Setup
1. Install the Shotstack community node from the nodes panel or Settings → Community nodes, then import this workflow.
2. Add your Anthropic API key to Claude and Claude (fixes), and your Shotstack production API key to Transcribe the video, Check the transcript, Make the video and Check the render. Free trial: https://shotstack.io/?utm_source=n8n&utm_medium=template&utm_campaign=translate&utm_content=description
3. Make an empty translated folder in n8n's files folder (/home/node/.n8n-files in Docker). On an npm install, change that path in Save the video.
4. Put your video's link and the languages, separated by commas, in Your video, then click Execute workflow.

## Requirements
- Self-hosted n8n, version 2 or later, because the workflow saves files on disk
- The Shotstack community node, any version, and a Shotstack production API key
- An Anthropic API key
- A video with clear speech, at a public link

## Customization
- Pick any of ElevenLabs Multilingual's 29 languages in Your video
- Change the voice, or how loud the original sound stays, in Your video
- Change the captions' font, size and position in Build the dub
- Save the versions to Google Drive or YouTube instead of saving them on disk

## Additional info
The voice costs 0.3 Shotstack credits per 1,000 characters and renders are billed by the second, so a one-minute video costs under a credit per language plus the transcription and Claude's few cents. For a Sandbox key, change v1 to stage in the two Ingest steps.

## 🔗 Nodes Used

HTTP Request, Stop and Error, Basic LLM Chain, Anthropic Chat Model, Read/Write Files from Disk

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
