# 🎬 Create Ken Burns zoom video clips from text prompts with Pollinations and FFmpeg

> ⚡ **169 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This self-hosted workflow collects a text prompt and clip length, generates a 1080×1920 image via Pollinations, then uses local FFmpeg to create a vertical MP4 with a Ken Burns-style slow zoom and returns the output file paths.

## How it works
1. Receives an image prompt and desired clip length from an n8n form.
2. Appends cinematic style keywords, URL-encodes the prompt, and builds per-run file paths in a unique `/tmp` folder.
3. Creates the temporary output folder on disk.
4. Downloads the AI image from Pollinations using `curl` and saves it to the temp folder.
5. Uses FFmpeg to crop/scale the image to 1080×1920 and render a zoompan animation into an H.264 MP4 of the requested duration.
6. Checks FFmpeg’s exit code and returns the image path, video path, prompt, and clip length.

## Setup
1. Run this workflow on a self-hosted n8n instance with the Execute Command node enabled (it is not available on n8n Cloud).
2. Install `curl` and `ffmpeg` (with `libx264`) on the n8n host and ensure both are available on the system PATH.
3. Ensure n8n is allowed to write to the configured temp location (default `/tmp`) and adjust the output directory in the code step if your environment restricts filesystem access.

## Requirements
- No API key or account anywhere in this workflow - Pollinations is a free, keyless image API

## Customization
- Change zoom speed or ceiling by editing zoom+0.0012 / 1.15 in the FFmpeg command, or swap in any other keyless image API by editing the URL in the first Code node

## Additional info
The zoompan filter's d parameter (frame count) is computed from your requested Clip Length x fps, so the zoom always finishes exactly at the end of the clip regardless of duration - it isn't hardcoded to one fixed length. This template outputs video only, no audio track; pair it with a separate voiceover/TTS template to add sound. Tested end to end: image download and zoom render both verified on a real run before submission.

Pair this with Render faceless vertical shorts (https://n8n.io/workflows/17566-render-faceless-vertical-shorts-with-gemini-or-claude-edge-tts-and-ffmpeg/), which chains this same Pollinations + Ken Burns technique together with script generation, TTS voiceover and karaoke captions into one workflow that goes straight from topic to finished vertical video.

## 🔗 Nodes Used

n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
