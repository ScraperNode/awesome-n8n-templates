# 🎬 Create Sora 2 short videos from Google Sheets and post with PostWire

> ⚡ **14 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs daily, pulls the next “ready” video idea from Google Sheets, uses OpenAI to draft a Sora 2 prompt and metadata, generates a vertical short with Sora 2, and publishes it to TikTok, Instagram Reels, and YouTube Shorts via PostWire while logging links or errors back to the sheet.

## How it works
1. Runs every day at 9:00 and reads Google Sheets rows where the status is set to "ready".
2. Takes the first available idea and updates the same row in Google Sheets to "generating" to prevent duplicate renders.
3. Uses OpenAI (text) to produce a JSON plan containing a Sora 2 video prompt, a caption idea, and a YouTube Shorts title.
4. Uses OpenAI Sora 2 (video) to generate a 9:16 clip at 720x1280 for the configured duration.
5. Uploads and publishes the generated video to TikTok, Instagram, and YouTube using PostWire, generating per-platform captions and setting the YouTube title.
6. Aggregates the publish results and updates the original Google Sheets row with post links and a "posted" status, or writes an error note and emails the fix details via Gmail if any platform fails.

## Setup
1. Add OpenAI credentials with access to both a chat model (for prompt planning) and the Sora 2 video model (for rendering).
2. Connect Google Sheets credentials and select the spreadsheet and sheet name in each Google Sheets step used to read and update rows.
3. Install and configure the PostWire community node, create a PostWire API credential, and connect your TikTok, Instagram, and YouTube accounts in PostWire.
4. Connect a Gmail account and set the notification email address (and optionally the default style and clip length) in the workflow’s channel settings.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, Filter, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
