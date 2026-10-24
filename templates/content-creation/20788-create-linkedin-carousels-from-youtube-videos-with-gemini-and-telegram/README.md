# 🎬 Create LinkedIn carousels from YouTube videos with Gemini and Telegram

> ⚡ **14 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow takes a YouTube URL, pulls the video transcript (or falls back to the title and description), uses Google Gemini to generate an 8-slide LinkedIn carousel and caption, validates and improves the outputs, then delivers the result via Telegram and email while logging each run to Google Sheets.

## How it works
1. Starts when you manually run the workflow and provide a YouTube video URL.
2. Extracts the video ID and requests the transcript from Supadata, falling back to YouTube Data API video title and description if no transcript is found.
3. Sends the source text to Google Gemini to generate an 8-slide LinkedIn carousel as a JSON array.
4. Validates the carousel JSON and, if it is malformed, asks Google Gemini to repair it and retries validation.
5. Uses Google Gemini to write a LinkedIn caption with hashtags and then rates/revises it until the virality score is 8 or higher.
6. Sends the final caption and slide-by-slide carousel copy to Telegram and email, generates a cover image via Pollinations and posts it to Telegram, and appends run details to a Google Sheets tracking sheet.

## Setup
1. Add credentials for Supadata (HTTP Header Auth with header name `x-api-key`), YouTube Data API, and Google Gemini.
2. Create a Telegram bot, add your Telegram credentials, and replace the hard-coded chat ID in both Telegram send steps.
3. Configure SMTP credentials for the email step and set the recipient address.
4. Connect Google Sheets credentials, replace `YOUR_GOOGLE_SHEET_ID`, and ensure the `Carousels` sheet exists with columns for Date, Video ID, Slide Count, Virality Score, and Status.
5. Replace the placeholder `VIDEO_ID_HERE` URL value with the YouTube link you want to process (or adapt it to accept input dynamically).

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Telegram, YouTube

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
