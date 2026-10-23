# 🎬 Create and approve Facebook and Instagram image posts via Telegram and Gemini

> ⚡ **51 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow turns a Telegram message into an approved AI-generated image post by using Google Gemini for captions and prompts, Cloudflare Workers AI for image generation, Google Drive for hosting, and the Facebook Graph API to publish to a Facebook Page and Instagram.

## How it works
1. Triggers when a new Telegram message arrives, ignores empty messages and commands, and loads your brand context and Meta account IDs.
2. Sends the request to Google Gemini to generate a JSON response containing an image prompt and a ready-to-post caption.
3. Sends the caption to Telegram for approval and, if rejected, regenerates once before flagging the request for manual review.
4. When approved, generates a square image with Cloudflare Workers AI (Flux), converts it to a 1440×1440 JPEG, uploads it to Google Drive, and makes the file publicly accessible.
5. Sends an image preview to Telegram for approval and, if rejected, regenerates once before stopping and requesting manual review.
6. If approved, posts the image and caption to your Facebook Page and creates and publishes an Instagram media container via the Facebook Graph API, polling until the container is ready.
7. Appends a published log entry (timestamp, prompt, image URL, status) to a Google Sheets tab.

## Setup
1. Create and connect a Telegram bot credential, then start a chat with the bot so it can receive messages.
2. Add a Google Gemini API key as an HTTP Header Auth credential (x-goog-api-key) for the Gemini request.
3. Add a Cloudflare Workers AI API token as an HTTP Header Auth credential, and replace YOUR_CLOUDFLARE_ACCOUNT_ID in the image-generation request URL.
4. Connect Google Drive OAuth and choose the target folder for uploads, noting the workflow makes images public so Meta can fetch them by URL.
5. Connect Google Sheets OAuth, set YOUR_GOOGLE_SHEET_ID, and create a tab named “Log” with columns timestamp, prompt, image_url, and status.
6. Connect a Facebook Graph API credential with permissions to post to your Facebook Page and Instagram Business account, and fill in your Facebook Page ID and Instagram user ID in the brand context settings.

## 🔗 Nodes Used

Edit Image, Google Sheets, HTTP Request, Telegram, Telegram Trigger, Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
