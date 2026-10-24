# 🎬 Approve short-form AI videos for TikTok, Reels and Shorts with Gemini, Veo and Telegram

> ⚡ **24 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow watches Google Sheets for new video ideas, uses Google Gemini to generate a Veo 3.1 short, sends it to Telegram for approval, and when approved publishes it to TikTok, Instagram Reels, and YouTube Shorts via PostWire while logging results back to Google Sheets.

## How it works
1. Triggers when a new row is added to a Google Sheets document.
2. Filters to rows that contain an idea and have an empty status so only unprocessed ideas continue.
3. Uses Google Gemini to turn the idea into a Veo prompt plus platform-specific captions and a YouTube title/description.
4. Requests an upload URL from PostWire, generates an 8‑second 9:16 video with Veo 3.1, uploads the file to PostWire, and finalizes it to get a media URL.
5. Sends the rendered video and captions to Telegram and waits for an Approve or Decline response.
6. If approved, publishes the video to TikTok, Instagram, and YouTube via PostWire with per-platform text and title, then updates Google Sheets and sends either the published links or any required fixes back to Telegram.
7. If declined, updates the Google Sheets row to declined with a timestamp note.

## Setup
1. Create a PostWire account, connect your TikTok/Instagram/YouTube accounts, and add an HTTP Header Auth credential in n8n with `Authorization: Bearer <your PostWire API key>` for the PostWire HTTP requests.
2. Add Google Sheets OAuth credentials and select the target document and sheet in the trigger and all Google Sheets update steps, ensuring columns exist for `idea`, `status`, `links`, and `note`.
3. Add Google Gemini credentials with billing enabled and ensure the workflow has access to the Gemini model used for planning and the Veo 3.1 model used for video generation.
4. Create a Telegram bot, add Telegram credentials in n8n, and replace `YOUR_CHAT_ID` with your chat ID so approvals and results are delivered to the right conversation.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Google Sheets Trigger, Filter, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
