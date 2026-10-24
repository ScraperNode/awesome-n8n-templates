# 🎬 Create weekly RSS news roundup videos with Zvid, ElevenLabs, and OpenRouter

> ⚡ **0 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
For newsletter editors and niche content teams: turn recent RSS headlines into a narrated vertical news roundup. OpenRouter scripts up to five stories, ElevenLabs supplies narration, and Zvid renders source labels, stock footage, timed captions and optional music. Review the MP4 before sharing.

## How it works
1. Runs on a schedule every Friday at 4pm (or manually for testing).
2. Reads each configured RSS feed, then pools, deduplicates, and filters headlines to the configured lookback window.
3. Sends the pooled headlines to OpenRouter to select up to five stories and return a structured intro, blurbs, visual queries, and outro as JSON.
4. Uses Zvid stock search to find a matching video clip for each story and searches Zvid’s audio library for a background music track within the configured duration and file-size limits.
5. Generates ElevenLabs narration with timing data, converts it into word timings, and uploads the MP3 to Zvid for use in the video.
6. Builds a branded Zvid project JSON with countdown scenes, source labels, karaoke-style timed captions, optional music, and validates the payload with Zvid’s render validator.
7. With dryRun enabled, saves an editor draft and returns a credit quote. Otherwise, submits a render, polls until completion or timeout, and outputs the video URL. Open Watch video → Binary → data → View to review the completed MP4.

## Setup
1. Install `@zvid/n8n-nodes-zvid` from Settings → Community nodes before configuring credentials. A workspace owner/admin may need to install it. On n8n Cloud, the owner can install verified Zvid from the Nodes panel. Create a Zvid API credential using a key from https://app.zvid.io/api-keys and Base URL `https://api.zvid.io`; select it on every Zvid node and Upload voiceover.
2. Connect an OpenRouter API credential to Curate top five. Set `llmModel` in Config; the default is `openai/gpt-4.1-mini`.
3. Connect ElevenLabs Header Auth to Generate voiceover: header name `xi-api-key`, value your ElevenLabs key with Text to Speech permission. Choose an accessible `voiceId` and adjust voice settings in Config.
4. Set `feedUrls`, `niche`, `lookbackDays`, `brandName` and `ctaText` in Config. The default `dryRun: false` renders and spends Zvid credits. Set it to `true` for an editor draft and credit quote; OpenRouter and ElevenLabs may still charge.
5. Run manually and review the video, facts, source attribution and usage rights. Check the workflow timezone before activating the Friday 4pm schedule. Social publishing is not included.

## Requirements
- A Zvid account with render credits, an OpenRouter API key, an ElevenLabs key with Text to Speech permission, accessible public RSS feeds, and the installed Zvid node.

## Customization
- Change the niche, feed list, lookback window, branding colors, font, voice, target duration, captions and music volume in Config. Actual duration follows the generated narration.

## Additional info
All supported Zvid operations use the Zvid node. Multipart voice upload uses HTTP Request because the published node lacks that operation. Missing footage uses a branded panel; unavailable music can be skipped. The workflow stops if no usable feed stories are found. Verify the generated claims before publication.

## 🔗 Nodes Used

HTTP Request, RSS Read, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
