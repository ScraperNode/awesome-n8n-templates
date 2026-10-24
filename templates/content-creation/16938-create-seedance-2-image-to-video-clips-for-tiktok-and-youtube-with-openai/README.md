# 🎬 Create Seedance 2 image-to-video clips for TikTok and YouTube with OpenAI

> ⚡ **120 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow listens for a Telegram photo message, uploads the image to AtlasCloud to generate a Seedance 2.0 image-to-video clip, uses OpenAI to create a short SEO title, then publishes the video to YouTube and TikTok via Blotato and sends a confirmation back to Telegram.

## How it works
1. Receives a Telegram message containing an image and uses the caption as the video prompt.
2. Uploads the image to [AtlasCloud](https://www.atlascloud.ai/?ref=8QKPJE) and starts a ByteDance Seedance 2.0 image-to-video generation job with the configured duration, resolution, aspect ratio, and FPS.
3. Polls AtlasCloud at a set interval until the generation status is completed or succeeded.
4. Sends the prompt to OpenAI to generate a single short, optimized title for the video.
5. Publishes the rendered video URL to YouTube through [Blotato](https://blotato.com/?ref=firas) using the generated title.
6. Publishes the same video to TikTok through Blotato and sends a Telegram message with the title and video link.

## Setup
1. Connect a Telegram bot credential and send photos with captions to the bot to trigger the workflow.
2. Create an AtlasCloud API header-auth credential (Authorization: Bearer <key>) and select it in the AtlasCloud upload, generate, and status HTTP requests.
3. Add an OpenAI API credential for the title generation step and choose the model you want to use.
4. Add a Blotato API credential, then select your YouTube and TikTok accounts in the two publishing steps.
5. Review the configuration values (model, duration, resolution, aspect ratio, FPS, and poll interval) to match your target output and platform requirements.

## Additional info
## Generate videos from images with Seedance 2 and publish to TikTok and YouTube

# 📥  [Open full documentation on Notion](https://automatisation.notion.site/Generate-videos-from-images-with-Seedance-2-and-publish-to-TikTok-and-YouTube-Course-support-EN-3983d6550fd981cf93a0e58a970e4bf1)

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
