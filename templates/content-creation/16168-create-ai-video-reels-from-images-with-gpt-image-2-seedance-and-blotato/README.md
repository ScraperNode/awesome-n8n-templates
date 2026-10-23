# 🎬 Create AI video reels from images with GPT Image 2, Seedance and Blotato

> ⚡ **263 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow receives a webhook with an image-edit prompt, a video-motion prompt, and a caption, generates a stylized image with AtlasCloud (OpenAI GPT Image 2) and a vertical video with AtlasCloud (ByteDance Seedance 2.0), then publishes the result to Facebook, TikTok, and Instagram via Blotato.

## How it works
1. Receives a POST webhook request containing `prompt`, `prompt_video`, and an optional `caption`.
2. Sends the prompt and a configured source image URL to AtlasCloud’s OpenAI GPT Image 2 edit endpoint to generate a new image.
3. Polls AtlasCloud until the image job completes (or stops with an error on failure) and extracts the generated image URL.
4. Sends the generated image URL and motion prompt to AtlasCloud’s ByteDance Seedance 2.0 image-to-video endpoint to render a 9:16 video.
5. Polls AtlasCloud until the video job completes (or stops with an error on failure) and extracts the generated video URL.
6. Publishes the generated media and caption to TikTok and Instagram via Blotato, and posts the generated image to a configured Facebook page via Blotato.

## Setup
1. Add your AtlasCloud API key by replacing the `Authorization: Bearer YOUR_API_HERE` header value in all AtlasCloud HTTP requests.
2. Set the source `profile_image_url` (the input image URL) and provide your target Blotato account IDs (Facebook page/account, TikTok, and Instagram) in the configuration values.
3. Connect your Blotato API credentials and ensure your Blotato account is linked to the Facebook Page, TikTok account, and Instagram account you want to publish to.
4. Copy the webhook URL from n8n and configure your calling app to POST `prompt`, `prompt_video`, and `caption` to it.

## 🔗 Nodes Used

HTTP Request, Webhook, Stop and Error

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
