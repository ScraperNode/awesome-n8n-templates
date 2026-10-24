# 🎬 Create AI image and video posts from Telegram with GPT-4o, AtlasCloud and Blotato

> ⚡ **73 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow receives a post idea via Telegram, uses OpenAI (GPT-4o mini) to generate platform-specific copy plus image/video prompts, creates media through AtlasCloud (GPT Image 2 and Seedance 2.0), requests approvals in Telegram, and publishes the approved content to seven social platforms via Blotato.

## How it works
1. Triggers when a new Telegram message arrives with a post description.
2. Uses OpenAI (GPT-4o mini) to generate copy for X, LinkedIn, Facebook, Threads, Instagram, TikTok, and YouTube Shorts, plus an English image prompt and video prompt.
3. Sends the prompts to [AtlasCloud](https://www.atlascloud.ai/?ref=8QKPJE) to generate a square image (GPT Image 2) and a vertical short video (Seedance 2.0), polling each prediction until it completes.
4. Sends the generated image and video back to Telegram for preview and asks for approval, automatically regenerating the declined media.
5. Publishes the approved image to X, LinkedIn, Facebook, and Threads via  [Blotato](https://blotato.com/?ref=firas)  and confirms completion in Telegram.
6. Publishes the approved video to Instagram Reels, TikTok, and YouTube Shorts via  [Blotato](https://blotato.com/?ref=firas)  (with synthetic/AI flags enabled where configured) and confirms completion in Telegram.

## Setup
1. Create a Telegram bot with BotFather, add Telegram credentials in n8n, and start a chat with the bot so it can receive and reply to messages.
2. Add an OpenAI API credential and select it for the GPT-4o mini model used to generate the platform posts and prompts.
3. Create an HTTP Header Auth credential for AtlasCloud (Authorization: Bearer <API_KEY>) and select it on the AtlasCloud image/video generate and status-check HTTP requests.
4. Install/enable the  [Blotato](https://blotato.com/?ref=firas)  community node, add your Blotato credential, and select the correct account IDs (and Facebook Page ID) for each of the seven publish actions.
5. Update the values in the Configuration step (brand name, output language, models, image size/quality, and video duration/aspect ratio/resolution) to match your needs.

## Additional info
## Create AI image and video posts from Telegram and publish to 7 platforms

# 📥  [Open full documentation on Notion](https://automatisation.notion.site/Create-AI-image-and-video-posts-from-Telegram-and-publish-to-7-platforms-Course-support-3963d6550fd9814686ddfb15b306a876?source=copy_link)

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
