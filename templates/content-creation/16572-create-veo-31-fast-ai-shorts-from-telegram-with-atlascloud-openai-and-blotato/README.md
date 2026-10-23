# 🎬 Create Veo 3.1 Fast AI shorts from Telegram with AtlasCloud, OpenAI and Blotato

> ⚡ **70 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow turns a Telegram message into a short AI-generated video using AtlasCloud (Google Veo 3.1 Fast), generates an SEO-friendly title with OpenAI, publishes the video to YouTube and TikTok via Blotato, and sends a confirmation back to Telegram.

## How it works
1. Triggers when you send a new message to your Telegram bot with a video idea.
2. Sets the Veo model, video duration, and prompt based on the Telegram message.
3. Starts video generation on AtlasCloud and polls the render status every 30 seconds until it completes.
4. Uses OpenAI (GPT-4o-mini) to generate a short, SEO-friendly title in the same language as the prompt.
5. Publishes the rendered video URL and generated title to YouTube via [Blotato](https://blotato.com/?ref=firas).
6. Publishes the same video and title to TikTok via Blotato and sends a Telegram confirmation with the title and video URL.

## Setup
1. Create a Telegram bot with BotFather and add Telegram credentials, then start a chat with the bot so it can receive messages.
2. Add an AtlasCloud API key as HTTP Header Auth and ensure the AtlasCloud endpoints are reachable for both the create and status requests.
3. Add an OpenAI API key for the title generation step.
4. Install and enable the Blotato community node (or ensure community nodes are allowed), add your Blotato API credentials, and select your YouTube and TikTok account IDs in the two publish steps.

## Additional info
# 📥  [Open full documentation on Notion](https://automatisation.notion.site/Support-de-cours-G-n-rer-des-vid-os-IA-Veo-3-1-Fast-et-publier-sur-YouTube-TikTok-depuis-Teleg-3883d6550fd981688380e402d010276f?source=copy_link)

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
