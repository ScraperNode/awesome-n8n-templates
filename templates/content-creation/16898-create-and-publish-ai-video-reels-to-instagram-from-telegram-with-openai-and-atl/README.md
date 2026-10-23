# 🎬 Create and publish AI video reels to Instagram from Telegram with OpenAI and AtlasCloud

> ⚡ **302 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow turns a Telegram message into an AI-generated vertical video using AtlasCloud Seedance 2.0, generates an Instagram-ready caption with OpenAI, publishes the reel via Blotato, and sends a Telegram confirmation with the published video URL.

## How it works
1. Triggers when a new message is received by your Telegram bot.
2. Uses OpenAI to expand the message into a short, visually descriptive 9:16 text-to-video prompt.
3. Sends the prompt to AtlasCloud (Seedance 2.0) to generate a vertical video with the configured size, duration, and FPS.
4. Waits and polls AtlasCloud for the prediction status until the video completes.
5. Uses OpenAI to write a playful Instagram caption with 3–5 hashtags based on the video prompt.
6. Publishes the generated video URL as an Instagram Reel through [Blotato](https://blotato.com/?ref=firas)  using the generated caption.
7. Sends a Telegram message confirming the Reel is published and includes the final video URL.

## Setup
1. Create a Telegram bot and add your Telegram credentials to both the trigger and the notification steps.
2. Add an OpenAI API credential and select it for both prompt and caption generation.
3. Create an AtlasCloud API key and configure an HTTP header auth credential (Authorization: Bearer <key>) for the video generation and status requests.
4. Install/enable the Blotato community node, connect your Blotato account and Instagram account, and select the target account in the publish step.
5. Review the Configuration values (model, width/height, duration, FPS, and polling interval) to match your desired Reel format and runtime.

## Additional info
## Publish AI video reels to Instagram from Telegram messages

# 📥  [Open full documentation on Notion](https://automatisation.notion.site/Publish-AI-video-reels-to-Instagram-from-Telegram-Seedance-2-0-3963d6550fd981a19f30d9b037a51915)

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
