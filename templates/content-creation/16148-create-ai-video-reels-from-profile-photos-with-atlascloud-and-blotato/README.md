# 🎬 Create AI video reels from profile photos with AtlasCloud and Blotato

> ⚡ **92 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow receives a webhook request, uses AtlasCloud (GPT Image 2 and HappyHorse) to turn a profile image into a short vertical video, then publishes the reel to TikTok and Instagram via Blotato.

## How it works
1. Receives a POST webhook containing an image prompt, a video prompt, and an optional caption.
2. Sends the profile image and prompt to AtlasCloud’s GPT Image 2 endpoint to generate an edited vertical image.
3. Polls AtlasCloud until the image job completes, then extracts the generated image URL or stops with an error if it fails.
4. Sends the generated image URL and video prompt to AtlasCloud’s HappyHorse image-to-video endpoint to create a short video.
5. Polls AtlasCloud until the video job completes, then extracts the generated video URL or stops with an error if it fails.
6. Uploads the video to Blotato and creates posts to the configured TikTok and Instagram accounts using the provided caption.

## Setup
1. Configure an AtlasCloud API key and replace the placeholder `Authorization: Bearer YOUR_API` header in all AtlasCloud HTTP requests.
2. Set the `profile_image_url` value to a publicly accessible image URL and ensure your webhook payload includes `prompt_video` (and optionally `prompt` and `caption`).
3. Add a Blotato API credential, connect your TikTok and Instagram accounts in Blotato, and replace `YOUR_ID_BLOTATO_TIKTOK` and `YOUR_ID_BLOTATO_INSTAGRAM` with the correct account IDs.
4. Copy the webhook URL from the Webhook Trigger node and configure the calling app/service to POST the required fields to it.

## 🔗 Nodes Used

HTTP Request, Webhook, Stop and Error

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
