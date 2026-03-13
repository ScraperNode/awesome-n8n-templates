# 🎬 Convert Reddit threads into short vertical videos with AI

> ⚡ **2,916 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.

## Description

# Convert Reddit threads into short vertical videos with AI

## Who is this for?

This workflow is ideal for:
- **Content creators** and **video editors** automating short-form content production
- **Reddit storytellers** converting text posts into engaging TikTok, YouTube Shorts, or Reels
- **Social media managers** repurposing community discussions into visual narratives

## What problem is this solving?

Manually converting Reddit posts into vertical video content is time-consuming:
- You have to read, summarize, write a script
- Generate TTS
- Find stock footage
- Edit everything in a timeline

This workflow automates the full pipeline. It converts any Reddit thread into a polished video with:
- TTS narration
- Subtitle overlays
- B-roll from Pexels
- Automatic rendering via Shotstack

## What this workflow does

This workflow:
1. **Extracts Reddit post and comments** via Reddit API
2. **Summarizes the thread into structured clips** using OpenAI
3. **Generates search queries** for each clip for stock footage
4. **Queries Pexels API** for relevant vertical videos
5. **Generates TTS audio** for each clip using OpenAI Whisper
6. **Creates subtitles** matching the audio
7. **Uploads footage/audio to Shotstack**
8. **Renders a full vertical video (720x1280)** with synced TTS, subtitles, and b-roll
9. **Returns a final video URL**

## Setup

- Create accounts and API keys for:
  - [Reddit Developer App](https://www.reddit.com/prefs/apps)
  - [OpenAI](https://platform.openai.com/)
  - [Pexels](https://www.pexels.com/api/)
  - [Shotstack](https://shotstack.io/)
- Add credentials in n8n:
  - Reddit (HTTP Basic Auth)
  - OpenAI (API Key)
  - Shotstack (HTTP Header Auth)
  - Pexels (HTTP Header Auth)
- Trigger via webhook or manual node. The input must include:
  ```json
  {
    "voice": "nova",
    "ttsSpeed": 1,
    "videoLength": 60,
    "redditLink": "https://www.reddit.com/r/example/comments/example_id/example_title"
  }
  ```

## How to customize this workflow

- **Tweak OpenAI prompts** to change tone or clip granularity
- **Change stock source** by swapping Pexels for another API
- **Adjust TTS voices** or languages by modifying the `voice` field
- **Modify video styling** (fonts, colors, fit modes) in the timeline construction code node
- **Control duration** by editing the character length formula in the `Limit comments length` node

## Additional Notes

- All stock videos are selected to match clip themes using generalized keywords to avoid API misses
- Includes `wait` nodes to ensure Shotstack's async upload/render processes complete before proceeding
- Annotated with **sticky notes** explaining major sections like TTS, Reddit input, and media timeline
- Avoids community nodes to ensure cloud compatibility

## Template Category
**AI**, **Marketing**, **Building Blocks**, **Other (Content Creation)**

## 🔗 Nodes Used

HTTP Request, Rename Keys, Webhook, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
