# 🎬 Create UGC product ads from Google Sheets with Gemini, Nano Banana, Veo and PostWire

> ⚡ **1 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs daily, pulls the next “ready” product from Google Sheets, uses Google Gemini (Nano Banana image edit and Veo 3.1 video generation) to create UGC-style ad assets and copy, publishes them to Instagram/Facebook/TikTok/Reels/Shorts via PostWire, and logs results back to the sheet.

## How it works
1. Runs every day at 10:00.
2. Reads Google Sheets for the first row with status set to ready and a valid photo_url, then marks it as generating to claim it.
3. Uses Google Gemini to analyze the product photo and return a JSON “ad plan” containing a photo edit instruction, a Veo video prompt, and captions/titles for each platform.
4. Downloads the product photo, uses Gemini (Nano Banana) to generate a creator-style selfie image edit, and publishes the image to Instagram and Facebook through PostWire.
5. Uses Gemini (Veo 3.1) to generate an 8-second 9:16 selfie video and publishes it to TikTok, Instagram (Reels), and YouTube (Shorts) through PostWire.
6. Checks whether all publishes succeeded and either writes the published links and posted status to Google Sheets or logs an error note and emails the fix instructions via Gmail.

## Setup
1. Create and connect a Google Sheets spreadsheet (with columns like product, photo_url, benefit, audience, status, posted_at, links, and note) and set the document ID and sheet name in all Google Sheets nodes.
2. Add Google Gemini credentials for the Gemini analyze, image edit (gemini-2.5-flash-image), and Veo 3.1 video generation nodes.
3. Install and configure the PostWire community node, create a PostWire API credential, and connect your Instagram, Facebook, TikTok, and YouTube accounts in PostWire.
4. Add a Gmail credential and set the notification email address (and optionally creator/setting text) in the Ad settings values.
5. Populate your sheet with rows marked ready and a publicly accessible photo_url that starts with http so the workflow can download the product image.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger, Filter, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
