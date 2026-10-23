# 🎬 Create captioned podcast audiogram clips with Zvid, ElevenLabs, and OpenRouter

> ⚡ **1 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
For podcasters and content teams: turn the newest RSS episode into captioned vertical audiogram clips using ElevenLabs transcription, OpenRouter highlight selection and Zvid rendering.

## How it works
1. Run manually or daily to select the newest audio episode from your RSS feed.
2. Download a bounded sample and check its actual size before transcription; the default sample is 4 MiB.
3. ElevenLabs Scribe supplies word timestamps for accurate captions and clip boundaries.
4. Upload the same audio to Zvid, then let OpenRouter select moments using transcript word positions.
5. Build and validate each branded audiogram and obtain its render-credit quote.
6. With dryRun=true, return editor drafts and quotes; AI and transcription charges may still apply.
7. By default, render clips sequentially, retry explicit capacity rejections within a deadline, and return completed MP4s.

## Setup
1. Install @zvid/n8n-nodes-zvid from Settings → Community nodes before configuring credentials. A workspace owner/admin may need to install it.
2. Create a Zvid API credential at https://app.zvid.io/api-keys with Base URL https://api.zvid.io. Select it on every Zvid node and Upload episode audio.
3. Connect ElevenLabs Header Auth named xi-api-key, with Speech to Text permission, to Transcribe (Scribe).
4. Connect OpenRouter to Pick moments. Set feedUrl, showNameOverride, handle and branding in Config.
5. Test manually. dryRun=false renders and spends Zvid credits. Keep maxAudioBytes within your plan and use media you have permission to repurpose.

## Requirements
- An n8n workspace supporting community nodes, Zvid render credits, ElevenLabs Speech to Text and OpenRouter access. Highlights are limited to the transcribed sample.

## Customization
- Adjust colors, fonts, clip count, clip duration and sample limits in Config.

## Additional info
Open Watch video → Binary → data → View and select each clip. Social publishing is not included. Multipart audio upload uses HTTP Request because the published Zvid node lacks that operation. Setup guide: https://github.com/Zvid-io/zvid-n8n/blob/master/workflows/podcast-audiogram-clips.md

## 🔗 Nodes Used

HTTP Request, RSS Read, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
