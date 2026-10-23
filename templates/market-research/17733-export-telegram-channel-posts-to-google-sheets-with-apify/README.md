# 📊 Export Telegram channel posts to Google Sheets with Apify

> ⚡ **4 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs manually or daily at 09:00 to scrape public Telegram channel posts using Apify and upsert them into Google Sheets as one clean row per post, including links, timestamps, and engagement metrics.

## How it works
1. Runs manually or on a daily schedule at 09:00.
2. Reads the list of public Telegram channel handles and the maximum post limits per channel and per run.
3. Validates and normalizes the channel handles, then builds one batch input for [FetchCat Telegram Channel Posts Scraper](https://apify.com/fetch_cat/telegram-channel-posts-scraper).
4. Starts the Apify Actor run and waits for it to finish, then downloads the resulting dataset items.
5. Deduplicates posts and formats each item into spreadsheet-ready fields such as hyperlinks, dates, subscriber counts, and engagement metrics.
6. Appends or updates rows in Google Sheets using a stable “Post key” so reruns refresh existing posts instead of creating duplicates.

## Setup
1. Add [FetchCat Telegram Channel Posts Scraper](https://apify.com/fetch_cat/telegram-channel-posts-scraper) to your Apify account and create an API token. In n8n, create an HTTP Header Auth credential with header Authorization and value Bearer YOUR_APIFY_TOKEN, then select it in both Apify HTTP Request steps.
2. Make a copy of the [Telegram Posts spreadsheet template](https://docs.google.com/spreadsheets/d/1qyXxeGvLCn4jOfCzRvNPhm_fV5Q94E5k1asOIAB7q7k/edit?usp=sharing). Connect Google Sheets OAuth2 in n8n, select your copied spreadsheet and its Telegram Posts tab in the final Sheets node, and keep the tab name and row-one headers unchanged.
3. Replace the example public channel handles and choose Maximum Posts Per Channel and Maximum Posts Per Run. Run manually first, verify that links and date-time values work in your copied sheet, then publish the workflow only when you want the daily 09:00 schedule to start.

## Requirements
- n8n Cloud or self-hosted n8n; an Apify account with [FetchCat Telegram Channel Posts Scraper](https://apify.com/fetch_cat/telegram-channel-posts-scraper); an Apify API token; Google Sheets OAuth2 access; public Telegram channel handles; and your own copy of the [Telegram Posts spreadsheet](https://docs.google.com/spreadsheets/d/1qyXxeGvLCn4jOfCzRvNPhm_fV5Q94E5k1asOIAB7q7k/edit?usp=sharing).

## Customization
- Change the public channel handles, Maximum Posts Per Channel (1-100), Maximum Posts Per Run (1-500), daily schedule time, destination spreadsheet, or mapped output columns. Defaults are 10 posts per channel, 20 posts per run, and one run daily at 09:00.

## Additional info
Make your own copy of the [Telegram Posts spreadsheet template](https://docs.google.com/spreadsheets/d/1qyXxeGvLCn4jOfCzRvNPhm_fV5Q94E5k1asOIAB7q7k/edit?usp=sharing) before running the workflow. Rows are updated by a stable channel-and-post key, so reruns refresh public metrics without creating duplicates. The workflow uses [FetchCat Telegram Channel Posts Scraper](https://apify.com/fetch_cat/telegram-channel-posts-scraper), requires no OpenAI model, and reads public content only; it never joins channels, sends messages, or accesses private posts. Low result limits can miss posts published between runs, and Telegram may omit some counters. At the pricing used when this template was prepared, 20 posts once daily cost about USD 0.18 per month and hourly runs about USD 4.21; verify current Actor and n8n pricing before activation.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
