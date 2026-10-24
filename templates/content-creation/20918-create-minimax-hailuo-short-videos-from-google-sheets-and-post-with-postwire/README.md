# 🎬 Create MiniMax Hailuo short videos from Google Sheets and post with PostWire

> ⚡ **14 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs daily, pulls the next “ready” idea from Google Sheets, uses MiniMax to generate a short-form video plan and render a 9:16 Hailuo video, then publishes it to TikTok, Instagram Reels, and YouTube Shorts via PostWire and logs results back to the sheet.

## How it works
1. Runs every day at 10:00 and reads Google Sheets rows where the status is set to ready.
2. Takes the first available idea and updates the row status to generating to prevent duplicate processing.
3. Uses MiniMax (text) to turn the idea and style into a JSON plan containing a video prompt, caption idea, and a YouTube Shorts title.
4. Uses MiniMax Hailuo (text-to-video) to render a 6-second vertical (9:16) video and downloads the generated file.
5. Uses PostWire to publish the video to TikTok, Instagram, and YouTube with platform-aware captions and a YouTube title.
6. Writes the publishing links back to Google Sheets and marks the row as posted, or records the error details and emails a fix request via Gmail if any platform or the render fails.

## Setup
1. Add Google Sheets credentials and select the target spreadsheet and sheet in all Google Sheets nodes.
2. Create a sheet with columns such as idea, style, status, posted_at, links, note, and a row_number field used to update the correct row.
3. Add a MiniMax API credential for both the text planning and Hailuo video generation steps.
4. Install/configure the PostWire community node, create a PostWire account, connect TikTok/Instagram/YouTube, and add your PostWire API key credential.
5. Add a Gmail credential and set the notification email address in the Channel settings step.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, Filter, MiniMax

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
