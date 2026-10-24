# 📱 Repost watermark-free TikTok videos to YouTube via Telegram and Blotato

> ⚡ **960 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow listens for a TikTok URL sent to a Telegram bot, downloads the source video file without a watermark, uploads it to Blotato, publishes it to YouTube (and optionally TikTok), and then sends a confirmation message back on Telegram.

## How it works
1. Triggers when a Telegram bot receives a message containing a TikTok video URL.
2. Fetches the TikTok video page over HTTP using a custom User-Agent header.
3. Extracts the raw video playback URL and any required cookies from the page’s embedded JSON data.
4. Downloads the video file directly from TikTok using the extracted URL and cookies.
5. Uploads the downloaded video to [Blotato](https://blotato.com/?ref=firas) as a media asset.
6. Publishes the uploaded media to YouTube via [Blotato](https://blotato.com/?ref=firas) with the configured caption, title, and privacy settings (and can also publish to TikTok if enabled).
7. Sends a Telegram message to the original chat confirming the repost is complete.

## Setup
1. Connect your Telegram bot credentials and start the workflow so the Telegram trigger can receive messages.
2. Install and configure the Blotato community node, then add your [Blotato](https://blotato.com/?ref=firas) API credentials.
3. In Blotato, connect your YouTube account (and TikTok if you plan to enable it) and select the correct account IDs in the publishing steps.
4. Update the default caption, YouTube title, privacy settings, and AI-generated flag in the Configuration step as needed.

## Additional info
# Repost watermark-free TikTok videos to social media with Blotato

# 📥  [Open full documentation on Notion](https://automatisation.notion.site/Repost-watermark-free-TikTok-videos-to-social-media-with-Blotato-course-material-3983d6550fd981cca6decf915014630b)

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
