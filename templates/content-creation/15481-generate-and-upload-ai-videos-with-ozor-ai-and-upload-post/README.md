# 🎬 Generate and upload AI videos with Ozor AI and Upload Post

> ⚡ **68 views** · 🎬 [Content Creation & Video](../)

## Description

## How it works

This workflow generates an AI video using Ozor AI and automatically uploads the finished video to your destination platform. It runs end-to-end in four steps: generate, poll for status, export, and upload.

- Step 1: Generate a Video — Sends a prompt and configuration (text, style, duration, resolution) to the Ozor AI API and receives a video ID used to track the rendering job.
- Step 2: Get Video Details — Polls the Ozor AI API with the video ID to check rendering status and retrieve metadata such as duration, resolution, and a temporary preview link.
- Step 3: Export a Video — Once rendering is complete, requests the final downloadable file in the desired format (e.g., MP4) and quality, returning a public download URL.
- Step 4: Upload a Video — Takes the exported video URL and uploads the file to the destination (cloud storage, CMS, or social platform), returning an uploaded video reference (URL, asset ID, or post ID).
## Set up steps

- Create an Ozor AI account at ozor.ai
- Open Settings → API Key and click Generate to create a new API key
- Copy the key and add it to the Ozor AI credentials in n8n
- Configure the Upload node with credentials for your destination platform
- Click Execute workflow to run the full pipeline


Setup typically takes 5–10 minutes once your Ozor AI account and destination credentials are ready.

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
