# 🎬 Create daily industry news avatar videos with Perplexity, Browserless, HeyGen, Telegram and Google Drive

> ⚡ **18 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs daily at 9 AM, uses Perplexity to compile industry news, optionally captures article screenshots via Browserless, and generates a HeyGen avatar video from a template. It then polls for completion, sends a Telegram notification, and archives the final video to Google Drive.

## How it works
1. Runs daily at 9 AM and sets the output mode (portrait/landscape) and background type (screenshot or inline_title).
2. If set to inline_title, it asks Perplexity for 4 ready-to-use stories (title, script, subtitle) and maps them into HeyGen template variables.
3. If set to screenshot, it asks Perplexity for up to 10 stories, validates article accessibility with Browserless scraping until it collects 4 reachable URLs, and prepares the final story list.
4. For the screenshot path, it screenshots each article with Browserless, uploads each image to HeyGen, and combines each story with its uploaded image URL.
5. It sends the assembled template variables to HeyGen to generate a template-based video (in test mode) with the configured dimensions.
6. It waits briefly, polls HeyGen until the video status is completed, and formats the final video metadata.
7. It posts an optional Telegram message with the HeyGen guest video link, downloads the final video file, and uploads it to a Google Drive folder (creating “HeyGen Videos” if needed).

## Setup
1. Add Perplexity API credentials for the Perplexity HTTP Request nodes.
2. Add HeyGen header-auth credentials and replace the HeyGen template ID(s) and test flag as needed for your account and production use.
3. Add Browserless query-auth credentials for the Browserless scrape and screenshot requests (required for the screenshot background path).
4. Add a Google Drive OAuth2 connection and set the target Drive and folder (or update the folder ID used for uploads).
5. Add Telegram bot credentials and update the chat ID if you want the Telegram notification step enabled.

## 🔗 Nodes Used

HTTP Request, Telegram, Google Drive, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
