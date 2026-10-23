# 📱 Repurpose YouTube Shorts from Telegram to Facebook, Instagram and TikTok with Apify and OpenAI

> ⚡ **104 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow listens for a YouTube Short link sent to a Telegram bot, downloads the video metadata and MP4 URL via Apify, generates a repost caption with OpenAI, uploads the video to Blotato, publishes it as a Facebook Reel, Instagram Reel, and TikTok post, then confirms back in Telegram.

## How it works
1. Triggers when a message containing a YouTube Short URL is received by your Telegram bot.
2. Sends the URL to an Apify YouTube downloader actor to retrieve the Short’s title and direct MP4 format URLs.
3. Selects the best MP4 with audio up to the configured resolution and uploads it to Blotato to get a stable hosted media URL.
4. Uses OpenAI (via the LangChain agent) to generate a short caption from the video title using your caption rules.
5. Publishes the hosted video and generated caption to Facebook (as a Reel), Instagram (as a Reel), and TikTok via [Blotato](https://blotato.com/?ref=firas), continuing even if one platform publish fails.
6. Sends a Telegram message confirming the publishes and includes the caption that was used.

## Setup
1. Create a Telegram bot and add its token as an n8n Telegram credential, then start a chat with the bot so it can receive messages.
2. Add an Apify API token as an n8n HTTP Header Auth credential (Authorization: Bearer YOUR_TOKEN) and keep the Apify actor endpoint as configured in the HTTP Request.
3. Add your OpenAI API key as an OpenAI credential and set the model name in the Configuration values if you want to change it.
4. Install and authenticate the Blotato community node, connect your Facebook Page, Instagram account, and TikTok account in Blotato, and select the correct account/page IDs in the three publish steps.
5. Review the Configuration values (video quality and caption instructions) and activate the workflow, then send a YouTube Short link to the Telegram bot.

## Additional info
# 📥  [Open full documentation on Notion](https://automatisation.notion.site/Repurpose-YouTube-Shorts-to-Facebook-Instagram-and-TikTok-from-Telegram-3883d6550fd98102b8fdce55f36e0a95)

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
