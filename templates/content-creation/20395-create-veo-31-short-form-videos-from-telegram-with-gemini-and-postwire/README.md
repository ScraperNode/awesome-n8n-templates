# 🎬 Create Veo 3.1 short-form videos from Telegram with Gemini and PostWire

> ⚡ **3 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow listens for a text idea sent to a Telegram bot, uses Google Gemini to generate a Veo 3.1 prompt and platform-specific copy, renders an 8-second vertical video with Veo 3.1, uploads and publishes it to TikTok, Instagram Reels, and YouTube Shorts via PostWire, and logs results to Google Sheets.

## How it works
1. Triggers when your Telegram bot receives a new message and ignores empty messages or slash commands.
2. Replies in Telegram to confirm the render has started.
3. Uses Google Gemini to turn the idea into a Veo prompt plus captions/text for TikTok, Instagram, and YouTube (including a YouTube title).
4. Requests an upload URL from PostWire, generates an 8-second 9:16 clip with Veo 3.1, uploads the video to PostWire, and finalizes it to get a hosted video URL.
5. Sends the generated video back to the Telegram chat as a preview.
6. Publishes the video to TikTok, Instagram, and YouTube through PostWire using per-platform text and an idempotency key to avoid duplicate posts on retries.
7. Appends a success or failure record to Google Sheets and replies in Telegram with the published links or the required fixes for any platforms that failed.

## Setup
1. Create a Telegram bot with @BotFather, add the Telegram credentials in n8n, and (optionally) restrict usage to your chat ID in the Telegram trigger.
2. Add Google Gemini credentials with billing enabled for both Gemini text generation and Veo 3.1 video generation.
3. Create a PostWire account, connect TikTok/Instagram/YouTube, and configure an n8n HTTP Header Auth credential that sends `Authorization: Bearer <your PostWire API key>` for the PostWire requests.
4. Create/select a Google Sheets spreadsheet and worksheet with columns for date, idea, status, links, and note, then set the document and sheet in both Google Sheets append steps.
5. Adjust the target platforms list and Gemini system prompt if you want different networks or different caption/style output.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Telegram Trigger, Filter, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
