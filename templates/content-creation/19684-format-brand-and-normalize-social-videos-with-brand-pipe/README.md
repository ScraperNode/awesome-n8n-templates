# 🎬 Format, brand, and normalize social videos with Brand-Pipe

> ⚡ **0 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Turns a raw AI or stock clip into a file YouTube Shorts, TikTok and Reels accept, without installing ffmpeg. Fits the video to 9:16, 1:1 or 16:9, adds your logo and normalises loudness to -14 LUFS via the Brand-Pipe API. Runs on n8n Cloud and the official Docker image.

## How it works
1. Starts when you run the workflow manually.
2. Sets the input parameters, including the source video URL, logo URL, target format (vertical/square/landscape), and whether to normalize audio.
3. Calls the Brand-Pipe /v1/process endpoint with your API key and an idempotency key to generate the branded, formatted video.
4. Checks whether the Brand-Pipe API response indicates success.
5. If successful, downloads the processed MP4 from the returned result URL and stores it in the binary property `video`.
6. If not successful, stops the execution and surfaces the error message returned by Brand-Pipe.

## Setup
1. Create an n8n HTTP Header Auth credential named `Brand-Pipe API Key` with header name `X-API-Key` and your Brand-Pipe API key as the value.
2. Replace the sample `video_url`, `logo_url`, `format`, and `audio_normalize` values with your own inputs (for example, the output URL from a video generation step and a publicly reachable logo URL).
3. Add a follow-up node to use the binary `video` output (for example, upload to YouTube/TikTok or store it in S3/Google Drive).

## Requirements
- A Brand-Pipe API key (paid service, 25 free videos to test, failed renders are refunded). Sign up at https://www.brand-pipe.com
- A source video and a logo reachable over HTTPS

## Customization
- Set "background": "blur" instead of black bars
- Cut a section with start_s and duration_s
- Burn in captions with subtitles (SRT/WebVTT text) or subtitles_url
- For clips longer than 60 seconds switch to POST /v1/jobs with a Wait node and callback_url, see the API reference

## Additional info
Rendering runs in Frankfurt, files are stored in the EU and deleted after 24 hours. The Idempotency-Key header makes "Retry On Fail" safe: a retried request that already rendered is not charged twice. API reference: https://www.brand-pipe.com/docs.html

## 🔗 Nodes Used

HTTP Request, Stop and Error

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
