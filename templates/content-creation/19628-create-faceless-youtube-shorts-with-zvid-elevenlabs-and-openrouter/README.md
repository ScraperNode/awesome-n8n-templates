# 🎬 Create faceless YouTube shorts with Zvid, ElevenLabs and OpenRouter

> ⚡ **87 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow creates a narrated faceless YouTube Shorts video by generating a script with OpenRouter, synthesizing voiceover with ElevenLabs, assembling stock footage and optional music via Zvid, rendering the final MP4 in Zvid, and optionally uploading the result to YouTube.

## How it works
1. Runs on a daily schedule at 9am or starts manually.
2. Uses Channel Config and recent topics from production runs to guide an OpenRouter script with several narration scenes.
3. Splits the script into scenes, searches Zvid’s stock library for matching video clips per scene, and selects the best-fit clip for each one.
4. Searches Zvid’s stock library for background music by tag, checks candidate files are downloadable and under the configured size limit, and picks one track or proceeds without music.
5. Generates narration and character-level alignment with ElevenLabs, converts the alignment into word timings, and uploads the MP3 to Zvid.
6. Assembles a Zvid project with scene cuts aligned to the narration timings, karaoke-style captions, branding, transitions, and an optional outro, then validates the project payload.
7. By default, submits a Zvid render job, waits for completion, downloads the MP4, and makes it available in Watch video. Optional YouTube upload is disabled by default. Setting dryRun to true instead saves an editor draft and returns a render quote.

## Setup
1. Before configuring Zvid credentials, install @zvid/n8n-nodes-zvid from Settings → Community nodes. A workspace owner/admin may need to install it. On n8n Cloud, the owner can search for Zvid in the Nodes panel and install the verified integration. Create a Zvid API credential with a key from https://app.zvid.io/api-keys and Base URL https://api.zvid.io; select it on the Zvid nodes and Upload voiceover.
2. Add an OpenRouter API credential and set the model ID in Channel Config (for example `openai/gpt-4.1-mini`).
3. Add an ElevenLabs HTTP Header Auth credential with `xi-api-key`, and set the `voiceId` and TTS settings in Channel Config.
4. Customize Channel Config: niche, audience, channel handle, voice, target duration, and branding. Run manually with dryRun: false (the default); this renders a video and spends Zvid credits. Open Watch video → Binary → data → View to review the MP4. Set dryRun: true for an optional editor draft and quote; OpenRouter and ElevenLabs usage can still incur charges.
5. YouTube publishing is optional: connect YouTube OAuth2, enable the YouTube Data API, and set uploadToYouTube: true when ready. The default privacy is private. Activate the daily schedule after reviewing the output.

## Requirements
- An n8n workspace with the verified Zvid integration installed, Zvid render credits, OpenRouter access, and ElevenLabs text-to-speech access for your selected voice. YouTube OAuth2 is only required for optional uploads.

## Customization
- Change the niche, audience, channel handle, voice, scene count, caption colors and animation, transitions, or outro in Channel Config. Review factual claims before publishing.

## Additional info
All supported Zvid operations use the official Zvid node. The Upload voiceover step uses HTTP Request with the same Zvid API credential because the published node does not expose multipart uploads. No separate stock-library account is required.

## 🔗 Nodes Used

HTTP Request, YouTube, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
