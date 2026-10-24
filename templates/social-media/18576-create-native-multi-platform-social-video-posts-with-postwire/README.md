# 📱 Create native multi-platform social video posts with PostWire

> ⚡ **37 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow takes a single video URL and a post idea, uses PostWire to generate platform-native captions, and publishes the video to TikTok, Instagram, and YouTube using your connected PostWire social accounts.

## How it works
1. Runs when you manually click “Test workflow” in n8n.
2. Sets the post idea, public MP4 video URL, target platforms (TikTok, Instagram, YouTube), and brand voice.
3. Calls the PostWire /api/generate endpoint to create a native caption draft for each selected platform.
4. Calls the PostWire /api/post endpoint to publish the video and per-platform captions to every connected account, setting TikTok privacy to SELF_ONLY by default.

## Setup
1. Create a PostWire account, connect your TikTok/Instagram/YouTube accounts in PostWire, and copy your PostWire API key.
2. In n8n, create an HTTP Header Auth credential with `Authorization: Bearer <your_postwire_key>` and select it on both HTTP Request steps.
3. Update the idea, `video_url` (must be a publicly reachable MP4), platforms array, and brand voice values to match your content and target networks.

## Requirements
- A PostWire account with your TikTok, Instagram and/or YouTube accounts connected via OAuth. The free tier (1 brand, 30 posts a month, no card) is enough to run this workflow.

## Customization
- Replace the manual trigger with a Schedule, RSS or Google Sheets trigger to run it unattended, change the platforms array to any mix of TikTok, Instagram, YouTube, Facebook, LinkedIn, X, Bluesky, Mastodon, Telegram, Discord and Reddit, or call POST /api/schedule with a run_at timestamp to queue the post instead of publishing it immediately.

## Additional info
The video URL must be a public MP4: TikTok and YouTube reject photo-only and text-only posts, so the workflow will fail on those two networks if you point it at an image. TikTok is set to SELF_ONLY so your first run stays private until you are happy with the output.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
