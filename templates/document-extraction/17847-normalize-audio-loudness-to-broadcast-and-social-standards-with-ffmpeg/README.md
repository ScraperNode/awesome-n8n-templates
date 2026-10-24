# 🔬 Normalize audio loudness to broadcast and social standards with FFmpeg

> ⚡ **3 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow collects an uploaded audio file via an n8n form and uses FFmpeg’s loudnorm filter to measure and normalize loudness to a selected LUFS target, returning the normalized audio file along with a parsed report of input/output loudness and true peak.

## How it works
1. Receives an audio file upload and a target loudness selection from an n8n Form Trigger.
2. Creates a unique per-run temp directory and derives input/output file paths and the numeric LUFS target from the form submission.
3. Writes the uploaded audio file to disk so it can be processed by FFmpeg.
4. Runs FFmpeg with the loudnorm filter to measure input loudness/true peak and normalize the audio to the chosen LUFS target while outputting loudness stats as JSON.
5. Parses FFmpeg’s loudnorm JSON stats from stderr into a clean report with input/output LUFS, input/output true peak, and the configured target.
6. Reads the normalized audio file back from disk and outputs it together with the loudness report.

## Setup
1. Self-host n8n (n8n Cloud does not support Execute Command) and ensure the instance can run shell commands.
2. Install FFmpeg on the host running n8n and make sure `ffmpeg` is available on the PATH.
3. Start n8n with `NODES_EXCLUDE="[]"` and set `N8N_RESTRICT_FILE_ACCESS_TO="/tmp"` so the workflow can create and read files in `/tmp`.

## Requirements
- Standard ffmpeg with the loudnorm filter -- no libass, no extra compile flags; any mainline build works

## Customization
- The dropdown covers the 4 common broadcast/social LUFS targets (-14/-16/-19/-23) -- add your own preset by editing the dropdown options and passing that value straight to the loudnorm filter's I= parameter

## Additional info
This exact FFmpeg loudnorm command is the audio-mastering step already running inside Render faceless vertical shorts (search "Render faceless vertical shorts" on n8n.io) -- that template chains topic-to-script generation, AI images, Edge TTS voiceover, karaoke captions, and this loudness normalization into one finished vertical short for $0/video.

## 🔗 Nodes Used

n8n Form Trigger, Read/Write Files from Disk

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
