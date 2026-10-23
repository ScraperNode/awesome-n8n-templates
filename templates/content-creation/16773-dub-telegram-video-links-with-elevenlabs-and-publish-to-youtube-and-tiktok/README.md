# 🎬 Dub Telegram video links with ElevenLabs and publish to YouTube and TikTok

> ⚡ **76 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow accepts a video URL from Telegram, sends it to the ElevenLabs Dubbing API to generate a dubbed version in a target language, then uploads the result to Blotato to publish it on YouTube and TikTok and confirms completion back in Telegram.

## How it works
1. Triggers when a Telegram bot receives a message containing a video link.
2. Reads configuration values such as source/target language, speaker count, watermark/background-audio options, and default YouTube title and caption.
3. Creates an ElevenLabs dubbing job for the provided source URL and periodically checks the job status until it is complete or failed.
4. Stops with an error if ElevenLabs reports the dubbing job as failed.
5. Downloads the dubbed video/audio file from ElevenLabs and uploads the binary file to Blotato to get a public media URL.
6. Publishes the dubbed media to YouTube and TikTok via Blotato (marked as AI/synthetic media) and sends a success message back to the originating Telegram chat.

## Setup
1. Create a Telegram bot with BotFather, add a Telegram API credential in n8n, and select it for both the Telegram trigger and the Telegram notification step.
2. Create an ElevenLabs API key and configure an HTTP Header Auth credential (for example header `xi-api-key`) used by the three ElevenLabs HTTP requests.
3. Install/enable the Blotato community node, add a Blotato API credential, and select your connected YouTube and TikTok accounts in the two publish steps.
4. Update the Configuration values (target language, polling interval, YouTube title, and post caption) to match how you want posts to appear.

## Additional info
## Dub videos with ElevenLabs and publish them to YouTube and TikTok :

# 📥  [Open full documentation on Notion](https://automatisation.notion.site/Dub-a-video-with-ElevenLabs-and-publish-to-YouTube-TikTok-Course-material-38a3d6550fd981469f3bd1ca2c020da8)

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Stop and Error

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
