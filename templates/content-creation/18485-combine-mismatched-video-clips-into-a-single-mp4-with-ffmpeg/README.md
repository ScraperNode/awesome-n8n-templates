# 🎬 Combine mismatched video clips into a single MP4 with FFmpeg

> ⚡ **19 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This self-hosted workflow collects multiple uploaded video clips via an n8n form, normalizes them to a chosen output resolution, and combines them into a single MP4 using FFmpeg’s concat filter, then returns the merged file along with a brief output report.

## How it works
1. Receives a form submission with two or more video files and a selected output size (landscape, vertical, or square).
2. Creates a per-run temporary folder and prepares an ordered list of clip file paths plus the target width and height.
3. Writes each uploaded clip to disk in the temp folder in the same order they were selected.
4. Builds an FFmpeg command that scales and pads each clip to the target frame, normalizes video to 30 fps, reformats audio to a common sample rate/layout, and concatenates all clips into one MP4.
5. Executes FFmpeg and stops with the FFmpeg stderr output if the merge fails.
6. Reads the combined MP4 back from disk and returns it with a report containing clip count and output dimensions.

## Setup
1. Use a self-hosted n8n instance with the Execute Command node available (this workflow does not run on n8n Cloud).
2. Install FFmpeg on the same machine and ensure the `ffmpeg` binary is available on the PATH for the n8n process.
3. Start n8n with file access configured for `/tmp` (for example `N8N_RESTRICT_FILE_ACCESS_TO="/tmp"`) so the workflow can write clips and read the output MP4.

## Requirements
- ffmpeg with the concat FILTER, not the concat demuxer -- this scales, pads, and re-encodes every clip so mismatched resolution/framerate/audio never produces a broken file

## Customization
- Change the 3 output-size presets (landscape/vertical/square) to any resolution by editing the FFmpeg scale/pad values, or swap the fps/audio-format targets to match a different delivery spec

## Additional info
This clip-combining step is the final render pass inside Render faceless vertical shorts (search "Render faceless vertical shorts" on n8n.io) -- that template chains topic-to-script generation, AI image generation, Edge TTS voiceover, and karaoke captions before reaching this exact concat step, producing a finished vertical short end-to-end for $0/video.

## 🔗 Nodes Used

n8n Form Trigger, Read/Write Files from Disk

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
