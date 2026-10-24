# 🔧 Post TikTok, YouTube Shorts and Instagram Reels with Airtable, OpenAI and Google

> ⚡ **238 views** · 🔧 [Miscellaneous](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs on a schedule, pulls the next publish-ready video from Airtable, uses OpenAI, Google Gemini, and CloudConvert to generate a transcript, title, description, tags, and hashtags, then uploads to YouTube Shorts, posts an Instagram Reel via Meta Graph API, and queues TikTok publishing via Google Sheets.

## How it works
1. Runs on a schedule (or manually) and waits a random number of minutes to stagger posting.
2. Searches Airtable for content marked Publish = true and Status = “In Publish Queue”, then selects a single record to process.
3. Downloads the video, converts it to MP3 with CloudConvert, and transcribes the audio with OpenAI.
4. Uses OpenAI and Google Gemini to extract a main keyword, generate a YouTube-optimized title, and create YouTube tags, hashtags, and a full YouTube description, then derives a shorter content-only caption for Instagram/TikTok.
5. Uploads the video to tmpfiles.org to generate a direct file URL and updates the Airtable record with the generated metadata and set Status = “Published”.
6. Uploads the video to YouTube with the generated title, description, and tags.
7. Creates and publishes an Instagram Reel via the Meta (Facebook) Graph API after a short wait to allow media processing.
8. Appends the Airtable Record ID to a Google Sheet used to trigger TikTok posting via an external automation.

## Setup
1. Create an Airtable base/table with the required fields (including File attachment, Publish, Status, and caption/tag fields) and add an Airtable personal access token in n8n.
2. Add OpenAI API credentials and ensure the workflow’s prompts/models match the models available in your account.
3. Add a CloudConvert OAuth2 connection for video-to-MP3 conversion.
4. Add a Meta (Facebook) Graph API credential with permissions for Instagram Reels publishing and set the correct Instagram account node ID.
5. Add YouTube OAuth2 credentials and confirm the target channel, category, region, and privacy settings.
6. Add Google Sheets OAuth2 credentials and update the spreadsheet/document ID used to pass Record IDs to your TikTok/Zapier process.

## 🔗 Nodes Used

Airtable, Google Sheets, HTTP Request, Facebook Graph API, YouTube, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
