# 🎬 Burn word-highlighted karaoke captions onto videos with FFmpeg and FFprobe

> ⚡ **10 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow collects a narrated video and its script via an n8n form, estimates word timings across the video duration, generates karaoke-style ASS subtitles, and uses FFprobe and FFmpeg (libass) to burn word-highlighted captions directly into the video for download.

## How it works
1. Receives a form submission with an uploaded video file and the full caption script text.
2. Creates a unique temporary folder, saves the uploaded video to disk, and prepares file paths and a word list from the script.
3. Uses FFprobe to read the video’s actual duration and resolution.
4. Estimates per-word timings weighted by character length, groups words into readable lines, and generates a karaoke-tagged (.ass) subtitle file sized to the video.
5. Uses FFmpeg’s subtitles filter (libass) to burn the ASS captions into the video while copying the original audio stream.
6. Reads the captioned video back from disk and returns it along with a small report (duration, word count, and line count).

## Setup
1. Run this workflow on self-hosted n8n with access to the Execute Command node (n8n Cloud is not supported).
2. Install FFmpeg and FFprobe on the same machine and ensure FFmpeg is built with libass support and available on the n8n process PATH.
3. Ensure n8n can read/write the temporary folder used by the workflow (default: /tmp) and adjust any file-access restrictions accordingly.

## Requirements
- ffmpeg built WITH libass -- plain Homebrew ffmpeg on macOS does NOT include it, so the subtitles filter fails. Check with `ffmpeg -filters | grep subtitles`; on macOS install `ffmpeg-full` instead

## Customization
- Caption timing here is estimated by splitting the script evenly across the clip's duration (character-length weighted), not real per-word timestamps -- feed it real speech-timed segments instead (e.g. from a silence-detection step) if your source audio has them

## Additional info
This caption-burning step is the finishing touch inside Render faceless vertical shorts (search "Render faceless vertical shorts" on n8n.io) -- that template pairs it with REAL speech-timed captions (measured from actual silence detection on the Edge TTS audio, not this character-ratio estimate), AI-generated images, and voiceover, producing a finished vertical short for $0/video.

## 🔗 Nodes Used

n8n Form Trigger, Read/Write Files from Disk

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
