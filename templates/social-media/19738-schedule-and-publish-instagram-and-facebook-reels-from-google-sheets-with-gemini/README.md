# 📱 Schedule and publish Instagram and Facebook Reels from Google Sheets with Gemini

> ⚡ **83 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs every five minutes to pick the next due PENDING Reel from Google Sheets, generate Instagram and Facebook captions with Google Gemini, publish the video to Instagram Reels and Facebook Reels via the Meta Graph API, and then mark the item as POSTED in the sheet.

## How it works
1. Runs every five minutes on a schedule trigger.
2. Reads the next queued Reel from a Google Sheets “Queue” tab and keeps only items whose scheduled publish date/time (Asia/Kolkata) is due and whose status is PENDING.
3. Sends the video URL and content ID to Google Gemini to generate JSON output containing an Instagram caption and a Facebook caption.
4. Creates an Instagram Reel media container with the video URL and the generated Instagram caption.
5. Waits 30 seconds, checks the Instagram processing status, and publishes the Reel to Instagram when it is ready.
6. Starts a Facebook Reels upload session, uploads the video by URL, and publishes it with the generated Facebook description.
7. Updates the matching row in Google Sheets by setting status to POSTED.

## Setup
1. Connect Google Sheets OAuth credentials and set the spreadsheet/document ID and “Queue” sheet to the one that contains your posting queue.
2. Add a Google Gemini (PaLM) API key credential for the caption-generation step.
3. Add a Meta/Facebook Graph API credential with permissions to publish Reels, and set the correct Instagram Business Account ID and Facebook Page ID used in the publishing requests.
4. Ensure your Google Sheet has columns id, cloudinary_url (public video URL), publish_date (DD-MM-YYYY), publish_time (HH:mm), and status (use PENDING/POSTED), and that times are intended for the Asia/Kolkata timezone.

## Requirements
- Requirements
- n8n
- Google Sheets
- Google Gemini API
- Meta Developer App
- Instagram Professional Account
- Facebook Page
- Public Video URL / Cloudinary URL

## 🔗 Nodes Used

Google Sheets, HTTP Request, Facebook Graph API, Schedule Trigger, Filter, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
