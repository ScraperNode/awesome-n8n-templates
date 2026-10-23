# 🎬 Create voiceover MP3s and karaoke subtitles using Edge TTS and FFmpeg

> ⚡ **73 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This self-hosted workflow takes text and a selected language from an n8n form, generates an MP3 voiceover using the Edge TTS CLI, analyzes the audio with FFmpeg/FFprobe to detect real pauses, and outputs a matching .ass karaoke subtitle file with word-by-word timing.

## How it works
1. Receives text and a language selection from an n8n form submission.
2. Maps the selected language to a specific Microsoft Edge TTS voice name.
3. Writes the submitted text to a temporary file and uses the `edge-tts` CLI to generate an MP3 voiceover.
4. Runs FFprobe to read the audio duration and FFmpeg `silencedetect` to find silence start/end markers.
5. Calculates word-level timestamps that allocate timing to speech segments (excluding detected silences) and aligns sentences to pause-separated speech groups when possible.
6. Builds an Advanced SubStation Alpha (.ass) subtitle file with `\k` karaoke tags and line wrapping based on character width.
7. Saves the .ass subtitle file to disk alongside the generated MP3 for download or use in a video editor.

## Setup
1. Use a self-hosted n8n instance with the Execute Command node enabled and file access configured to allow writing under `/tmp`.
2. Install `edge-tts` on the n8n host (for example via `pipx install edge-tts`) and ensure the `edge-tts` command is on the PATH.
3. Install FFmpeg and FFprobe on the n8n host and ensure `ffmpeg` and `ffprobe` are on the PATH.
4. If needed, update the voice mapping to match your desired languages/voices by editing the language-to-voice map in the workflow.

## Requirements
- Self-hosted n8n. This uses the Execute Command node, which n8n Cloud does not allow.

## Customization
- Add a language by adding one row to the VOICES map in the Pick the Edge TTS voice node. Run edge-tts --list-voices to see all 300+ voices.

## Additional info
There are no credentials to configure and nothing is billed. Edge TTS is the Read Aloud voice built into Microsoft Edge, reachable from the open-source edge-tts CLI, so a voiceover costs nothing regardless of how much text you send.

Why the timing is done this way: most caption workflows divide the clip length evenly across the words. Edge TTS audio is roughly a quarter silence (a lead-in, about a second of pause at every full stop, a tail), so that stretches every word and the highlight drifts behind the voice. This workflow measures the real pauses with silencedetect and lays the words out on speech time only, then anchors each sentence to the audio it is actually spoken in, so a sentence starts on its first syllable rather than a second early.

Known limits: Chinese, Japanese and Thai are not supported, because the line splitter needs whitespace between words. Karaoke timing within a sentence is proportional to word length, not true per-word timings from the engine.

Two environment variables matter on n8n v2 or the file steps fail quietly: NODES_EXCLUDE="[]" (Execute Command is disabled by default) and N8N_RESTRICT_FILE_ACCESS_TO="/tmp" (file writes are locked to ~/.n8n-files by default). On macOS /tmp is a symlink to /private/tmp and n8n resolves the real path, so list both: "/tmp;/private/tmp".

This voiceover + karaoke step is one piece of a larger pipeline. Render faceless vertical shorts (https://n8n.io/workflows/17566-render-faceless-vertical-shorts-with-gemini-or-claude-edge-tts-and-ffmpeg/) chains this exact TTS/timing logic together with script generation, AI images and FFmpeg rendering into one workflow that goes from topic to finished vertical video.

## 🔗 Nodes Used

n8n Form Trigger, Read/Write Files from Disk

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
