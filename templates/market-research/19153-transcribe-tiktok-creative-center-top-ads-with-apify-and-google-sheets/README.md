# 📊 Transcribe TikTok Creative Center top ads with Apify and Google Sheets

> ⚡ **11 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow pulls top-performing TikTok ads from the TikTok Creative Center via Apify, transcribes each ad and extracts the first-3-seconds hook, then appends one row per ad (CTR, likes, duration, language, and transcript) to Google Sheets.

## How it works
1. Runs when you manually execute the workflow.
2. Sends your selected country, period, industry, and max ad count to Apify to start the TikTok Creative Center Top Ads scraper.
3. Polls the Apify run status until the scrape finishes and retrieves the run’s dataset ID.
4. Passes the dataset ID to a second Apify actor that generates transcripts, 3-second hooks, and ad performance metadata.
5. Sorts and reshapes the results into one clean table row per ad, including transcript word count and whether the item was charged.
6. Appends the prepared rows to a Google Sheets worksheet.

## Setup
1. Create an Apify token and add an HTTP Header Auth credential using `Authorization: Bearer YOUR_APIFY_TOKEN`, then select it on all Apify HTTP Request steps.
2. Add a Google Sheets OAuth credential and select the target spreadsheet and sheet for appending rows.
3. Update the configuration values (country code, period, industry, and maxAds) in the Config step to match what you want to pull from TikTok Creative Center.

## Requirements
- An Apify account and a Google account.

## Customization
- Change the industry or period to build a library per vertical.
- Sort by CTR in the Code node.
- Add a Schedule Trigger to refresh the top ads every week.

## Additional info
Who it's for: TikTok media buyers, UGC creators and creative strategists who want the scripts behind the ads that are already winning.

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
