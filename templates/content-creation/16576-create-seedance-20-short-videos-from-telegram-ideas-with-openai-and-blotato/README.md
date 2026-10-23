# 🎬 Create Seedance 2.0 short videos from Telegram ideas with OpenAI and Blotato

> ⚡ **117 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow takes a video idea sent via Telegram, uses OpenAI to generate a Seedance 2.0-ready prompt plus platform-specific captions, creates the video through AtlasCloud’s Seedance API, then publishes it to TikTok, Instagram, and YouTube using Blotato and confirms back in Telegram.

## How it works
1. Receives a video idea as a Telegram message.
2. Uses OpenAI (via an agent) to generate a structured JSON payload containing a Seedance 2.0 text-to-video prompt plus TikTok and Instagram captions and a YouTube title and description.
3. Submits the prompt to AtlasCloud’s Seedance 2.0 video generation API and requests a 5-second video.
4. Polls AtlasCloud every 30 seconds until the video generation status returns completed/succeeded.
5. Extracts the final video URL and pairs it with the generated captions and YouTube metadata.
6. Publishes the video to TikTok, Instagram, and YouTube via [Blotato](https://blotato.com/?ref=firas), then sends a Telegram confirmation message.

## Setup
1. Create a Telegram bot and add Telegram credentials, then ensure the trigger and confirmation nodes use the correct bot and chat settings.
2. Add an OpenAI API credential and select a chat model (configured for gpt-4o-mini) for prompt and caption generation.
3. Create an [AtlasCloud](https://www.atlascloud.ai/?ref=8QKPJE) API key and configure an HTTP Header Auth credential (including Content-Type: application/json and your Authorization header), then select it in both AtlasCloud HTTP requests.
4. Install and enable the Blotato community node (requires self-hosted n8n or n8n Cloud with Verified Community Nodes enabled), add your Blotato API credentials, and connect/select the correct TikTok, Instagram, and YouTube accounts in each publish step.
5. Optionally adjust the video duration in the AtlasCloud request body and tweak the agent instructions to change tone, language, or hashtag limits.

## Additional info
# 📥  [Open full documentation on Notion](https://automatisation.notion.site/Generate-Funny-AI-videos-with-Seedance-2-0-and-auto-publish-to-TikTok-Instagram-and-YouTube-with-Bl-3883d6550fd98140b54bddf8df59ff88)

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
