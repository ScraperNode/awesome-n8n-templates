# ✨ Auto-caption & post videos to Instagram & TikTok with Submagic, Postiz & OpenAI

> ⚡ **1,935 views** · ✨ [AI & LLMs](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.

## Description

# 🎥 Auto-Caption & Autopost Videos to Instagram & TikTok

## Description
Automate your short-form content pipeline! This workflow takes any video uploaded to a specific Google Drive folder, generates engaging captions with Submagic, and then auto-posts the finished video (with AI-generated captions) directly to Instagram or TikTok via Postiz. Captions are further refined with OpenAI for brand-ready social text. Finally, each published video is logged into a Google Sheet for tracking.

👉 Watch step-by-step build of this workflow on: www.youtube.com/@automatewithmarc

## How It Works

Google Drive Trigger – Detects new video uploads.

Submagic API – Adds styled captions automatically.

Wait + Poll – Monitors job status until the captioned video is ready.

Download Video – Retrieves the finished captioned video.

Upload to Postiz – Sends the file to Postiz for multi-platform posting.

Caption Agent (OpenAI) – Generates optimized Instagram/TikTok captions.

Post to Instagram/TikTok – Publishes the video with caption.

Update Log – Saves video details, captions, and status into Google Sheets.

## Why You’ll Love It

⚡ Hands-off publishing — videos go from raw to posted automatically.

📝 AI captions + Submagic styling — engaging text and visual consistency.

📊 Content tracking — every post logged in Google Sheets.

🎯 Perfect for Reels & TikToks — optimized for fast workflows and social reach.

## Requirements

- Google Drive account
- Submagic API key
- Postiz account (for IG/TikTok posting)
- OpenAI API key (for caption generation)
- Google Sheets account

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
