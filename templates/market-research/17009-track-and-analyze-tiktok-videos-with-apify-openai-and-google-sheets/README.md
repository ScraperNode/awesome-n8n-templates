# 📊 Track and analyze TikTok videos with Apify, OpenAI, and Google Sheets

> ⚡ **85 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs daily (or manually) to fetch recent videos from a list of TikTok accounts via Apify, transcribes each video with OpenAI, generates content insights and translations, and then appends or updates one row per video in Google Sheets.

## How it works
1. Runs on a daily schedule (or manually) and loads configuration values like the date window, video limit, output language, and Apify actor.
2. Reads the TikTok usernames to monitor from the `accounts` tab in Google Sheets.
3. Calls the Apify TikTok Scraper API to retrieve the latest videos for each configured account.
4. Filters and normalizes the results to keep only videos published within the last N days and extracts metrics, captions, hashtags, and download URLs.
5. Downloads each video file and transcribes it with OpenAI speech-to-text.
6. Sends the transcription plus caption and hashtags to OpenAI to extract a hook, classify the content, infer the video format, and translate the transcription.
7. Writes the combined video metadata, transcription, and AI insights to the `insights` tab in Google Sheets using an append-or-update operation.

## Setup
1. Create a Google Sheets spreadsheet with an `accounts` sheet containing a `username` column (TikTok handles) and an `insights` sheet to store the results.
2. Add Google Sheets OAuth2 credentials in n8n and select your spreadsheet and the correct tabs in the read and write steps.
3. Add an Apify API token as an HTTP Header Auth credential and ensure the configured actor name matches the TikTok scraper you want to run.
4. Add an OpenAI API credential for transcription and analysis, and set the desired model, language, date window, and per-account result limit in the configuration values.
5. Test the workflow manually with a few accounts, then enable the schedule to run automatically at your chosen time.

## Additional info
## Track trending TikTok videos and save insights to Google Sheets

# 📥  [Open full documentation on Notion](https://automatisation.notion.site/Track-trending-TikTok-videos-and-save-insights-to-Google-Sheets-Course-39a3d6550fd981b489b2f881df718078)

## Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/doctor-firass/)

# MY NEW YOUTUBE CHANNEL
👉 [Subscribe to my new YouTube channel](https://www.youtube.com/@DrFiras_AI). Here I'll share videos and Shorts with practical tutorials and FREE templates for n8n.

[![The AI Doctor](https://www.dr-firas.com/the-ai-doctor.png)](https://www.youtube.com/@DrFiras_AI)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
