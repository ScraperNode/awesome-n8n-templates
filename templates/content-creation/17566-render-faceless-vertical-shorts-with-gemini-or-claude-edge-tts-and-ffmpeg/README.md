# 🎬 Render faceless vertical shorts with Gemini or Claude, Edge TTS and FFmpeg

> ⚡ **53 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This self-hosted workflow takes a topic from an n8n form, generates a short multi-scene script with Google Gemini or Anthropic Claude, creates voiceover with Edge TTS, downloads scene images from Pollinations, burns karaoke captions with FFmpeg, and outputs a final vertical MP4.

## How it works
1. Receives a topic, language, scene count, and LLM choice from an n8n Form Trigger.
2. Maps the selected language to an Edge TTS voice and calculates a per-scene word limit to keep the video under 60 seconds.
3. Generates a JSON script (voice-over plus English image prompts per scene) using either Google Gemini or Anthropic Claude.
4. Splits the script into individual scenes and, for each scene, generates an MP3 voiceover with Edge TTS and estimates word-by-word caption timing using ffprobe/FFmpeg silence detection.
5. For each scene, downloads a 1080×1920 image from Pollinations based on the scene’s image prompt.
6. Renders each scene locally with FFmpeg by applying a slow zoom effect to the image, burning in karaoke-style ASS subtitles, and syncing to the scene audio.
7. Concatenates all rendered scene segments into a single MP4, normalizes audio loudness, and returns the final video file as the workflow output.

## Setup
1. Run n8n self-hosted and start it with `NODES_EXCLUDE="[]"` and `N8N_RESTRICT_FILE_ACCESS_TO="/tmp"` (macOS: `"/tmp;/private/tmp"`) so Execute Command and local file access work.
2. Install FFmpeg and ffprobe with libass support (verify `ffmpeg -filters | grep subtitles` returns a subtitles filter).
3. Install Edge TTS on the n8n host with `pipx install edge-tts` and ensure the `edge-tts` binary is on the PATH used by n8n.
4. Add exactly one HTTP Request credential for the script step: either Google Gemini Query Auth with name `key` and your AI Studio API key, or Anthropic Header Auth with name `x-api-key` and your Anthropic API key, then assign it to the matching script node.
5. Ensure the host can write to `/tmp` and has `curl` available for downloading Pollinations images.

## Requirements
- Self-hosted n8n only, this will not run on n8n Cloud (needs Execute Command plus local file writes)
- Google Gemini free tier is capped at 20 requests per day, one script equals one request; switch to Claude Haiku for no daily cap (about $0.0017 per video, measured)

## Customization
- Supports 7 languages: English, Vietnamese, Spanish, French, German, Portuguese, Indonesian
- Chinese, Japanese and Thai are not supported because captions are split on whitespace
- Karaoke caption timing is an estimate from ffprobe silence detection, not real per-word TTS timestamps

## Additional info
The all-free combination (Gemini free tier, Edge TTS, Pollinations, FFmpeg) costs $0 in API fees per video, you only pay for your own server hosting or electricity. This is the only self-hosted faceless video template on the marketplace with a true $0/video path; every other similar template requires at least one paid API.

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger, Read/Write Files from Disk

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
