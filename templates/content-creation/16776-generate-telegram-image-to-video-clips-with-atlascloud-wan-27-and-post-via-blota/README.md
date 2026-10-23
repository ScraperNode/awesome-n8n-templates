# 🎬 Generate Telegram image-to-video clips with AtlasCloud WAN 2.7 and post via Blotato to TikTok, Instagram, Facebook

> ⚡ **81 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow listens for a Telegram message containing a photo and caption, generates an image-to-video clip via AtlasCloud (WAN 2.7), then publishes the resulting video to TikTok, Instagram, and Facebook using Blotato and sends a confirmation back on Telegram.

## How it works
1. Triggers when a Telegram bot receives a message with a photo and caption.
2. Extracts the caption as the video prompt/caption, sets duration and resolution, and downloads the attached photo from Telegram.
3. Uploads the photo to AtlasCloud and starts an image-to-video generation job using the WAN 2.7 model.
4. Waits briefly, then polls AtlasCloud for the generation status until it returns completed/succeeded.
5. Uses the returned video URL and caption to publish the video to TikTok, Instagram, and a Facebook page via Blotato.
6. Sends a Telegram message back to the original chat confirming publishing and includes the generated video link.

## Setup
1. Create/select Telegram bot credentials and use the bot to receive photo messages and send confirmations.
2. Add an AtlasCloud API key as an HTTP Header Auth credential (Bearer token) and select it on the two AtlasCloud HTTP Request steps.
3. Install and enable the Blotato community node, connect your Blotato account, and select the target TikTok/Instagram accounts and Facebook page.
4. Review and adjust the configuration values (model, duration, resolution, and caption mapping) to match your desired output.

## Additional info
## Generate AI videos from a photo and publish to TikTok, Instagram and Facebook

# 📥  [Open full documentation on Notion](https://automatisation.notion.site/Generate-AI-videos-from-a-photo-and-publish-to-TikTok-Instagram-and-Facebook-38c3d6550fd98187b948d5c3927d6376)

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
