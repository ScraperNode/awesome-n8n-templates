# 🎬 Create short social videos from Google Drive photos with Gemini and Hailuo

> ⚡ **0 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs every two hours to pick a new photo from Google Drive, generate motion and platform-specific captions with Google Gemini, animate the photo into a 6-second MiniMax Hailuo video, publish it to TikTok/Instagram/YouTube via PostWire, and log results to Google Sheets with Gmail alerts on failures.

## How it works
1. Runs every two hours and searches a specified Google Drive folder for image files, skipping HEIC/HEIF and GIF formats.
2. Selects one photo to process and moves it to an “Animated” Google Drive folder to prevent reprocessing.
3. Downloads the photo and sends it to Google Gemini to generate a motion prompt plus captions for TikTok, Instagram, and YouTube (including a YouTube Shorts title).
4. Combines the downloaded image with the generated plan and sends it to MiniMax Hailuo to create a 6-second image-to-video clip.
5. Publishes the rendered video to TikTok, Instagram Reels, and YouTube Shorts via PostWire using the platform-specific captions.
6. Aggregates the publishing results and appends a “posted” row to Google Sheets when all platforms succeed.
7. If rendering or posting fails for any platform, appends a “needs fix/partly posted” row to Google Sheets and emails the failure details via Gmail.

## Setup
1. Add credentials for Google Drive and Google Sheets, then select the source “To animate” folder, destination “Animated” folder, and the target spreadsheet/document and sheet name.
2. Add a Google Gemini API credential and ensure the selected Gemini model is available in your account.
3. Add a MiniMax credential for Hailuo and confirm billing/quotas for image-to-video generation.
4. Install and configure the PostWire community node, add your PostWire API key, and connect your TikTok, Instagram, and YouTube accounts in PostWire.
5. Add a Gmail credential and update the notification email address and any desired video style text in the workflow’s settings fields.
6. Create a Google Sheets log with columns: photo, file_link, status, posted_at, links, and note, matching the workflow’s append mappings.

## 🔗 Nodes Used

Google Sheets, Google Drive, Gmail, Schedule Trigger, Filter, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
