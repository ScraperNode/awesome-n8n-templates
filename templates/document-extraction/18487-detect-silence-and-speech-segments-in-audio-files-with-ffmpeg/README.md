# 🔬 Detect silence and speech segments in audio files with FFmpeg

> ⚡ **39 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow accepts an uploaded audio file via an n8n form, runs FFmpeg’s silencedetect filter to measure pauses, and returns a JSON report listing silence and derived speech segments with totals like duration and percent silent.

## How it works
1. Receives an audio file, a silence threshold (dB), and a minimum silence duration through an n8n form.
2. Creates a per-run temporary folder and normalizes the input settings (file path, threshold value, and minimum silence seconds).
3. Saves the uploaded audio file to disk so FFmpeg can access it by path.
4. Runs FFmpeg with the silencedetect filter to log silence_start and silence_end events without rendering an output audio file.
5. Parses FFmpeg’s stderr to extract the total duration and all detected silence intervals.
6. Calculates speech segments as the non-silent gaps between silences and returns a summary JSON with totals (silence count, silent/speech seconds, and percent silent).

## Setup
1. Use a self-hosted n8n instance, since the workflow relies on Execute Command (not available on n8n Cloud).
2. Install FFmpeg on the same machine/container running n8n and ensure the ffmpeg binary is available on the PATH.
3. Configure file access so n8n can write to /tmp (for example, set N8N_RESTRICT_FILE_ACCESS_TO to include /tmp) and keep nodes enabled (for example, start with NODES_EXCLUDE="[]").

## Requirements
- Standard ffmpeg with the silencedetect filter -- this ships in every mainline ffmpeg build, no libass or special compile flags needed

## Customization
- Adjust the -40dB threshold and minimum-silence-duration to match your source's noise floor -- a noisier recording usually needs a less negative threshold (e.g. -30dB) to avoid missing real silences

## Additional info
This exact silence/speech detection step is what powers real, non-estimated word timing in Render faceless vertical shorts's karaoke captions (search "Render faceless vertical shorts" on n8n.io) -- instead of a naive character-ratio guess, that template maps every word onto actual measured speech segments, then adds AI-generated images and voiceover for a finished $0/video vertical short.

## 🔗 Nodes Used

n8n Form Trigger, Read/Write Files from Disk

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
