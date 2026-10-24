# 🎬 Create vertical AI videos from web articles with OpenAI, Seedance and Blotato

> ⚡ **129 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow accepts an article URL from Telegram, extracts the page text, uses OpenAI to generate a Seedance 2.0 video prompt plus platform-specific captions, creates a vertical video via the AtlasCloud Seedance API, then publishes it to TikTok, Instagram, and YouTube through Blotato and confirms back on Telegram.

## How it works
1. Receives a message in Telegram containing a web article URL.
2. Fetches the web page HTML, strips it to plain text, and truncates the extracted content for prompting.
3. Uses OpenAI to turn the URL and extracted text into a Seedance 2.0 text-to-video prompt plus TikTok and Instagram captions and a YouTube title and description.
4. Submits the generated prompt to the AtlasCloud Seedance 2.0 generateVideo API with the configured duration, resolution, and FPS.
5. Polls the AtlasCloud prediction endpoint on a wait interval until the video status returns completed/succeeded.
6. Publishes the resulting video URL to TikTok, Instagram, and YouTube via [Blotato](https://blotato.com/?ref=firas) using the generated captions and YouTube metadata.
7. Sends a Telegram confirmation message that includes the video title and the final video URL.

## Setup
1. Create a Telegram bot with @BotFather, add Telegram credentials in n8n, and use the bot to receive messages.
2. Add an OpenAI API credential for the GPT-4.1-mini chat model used to generate the prompt and captions.
3. Create an [AtlasCloud](https://www.atlascloud.ai/?ref=8QKPJE)  API key and configure an HTTP Header Auth credential (Authorization: Bearer <key>) for the two AtlasCloud HTTP requests.
4. Install and enable the [Blotato](https://blotato.com/?ref=firas) community node (self-hosted n8n or n8n Cloud with Verified Community Nodes), connect your TikTok/Instagram/YouTube accounts in [Blotato](https://blotato.com/?ref=firas), and select the correct account IDs in each publish step.
5. Adjust the configuration values (Seedance model, duration, 720×1280 size, FPS, output language, and polling wait time) to match your desired output.

## Additional info
# 📥  [Open full documentation on Notion](https://automatisation.notion.site/Turn-web-articles-into-AI-videos-with-Seedance-2-0-and-publish-to-TikTok-Instagram-and-YouTube-EN-3893d6550fd9815c9c4bd0b679d7ec68)

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
