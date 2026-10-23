# 📊 Monitor Telegram channel intelligence with Apify, OpenAI, Google Sheets, and Telegram

> ⚡ **38 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs hourly (or manually) to scrape posts from public Telegram channels via Apify, batch-scores them with OpenAI against an intelligence goal, saves qualified items to Google Sheets, and sends a short digest to a Telegram chat while preventing duplicate delivery.

## How it works
1. Runs on an hourly schedule or is started manually and ensures a delivery-ledger table exists to track what has already been processed.
2. Reads the list of public Telegram channel handles plus analysis thresholds and limits, validates the inputs, and builds the Apify Actor request payload.
3. Starts [FetchCat Telegram Channel Posts Scraper](https://apify.com/fetch_cat/telegram-channel-posts-scraper), downloads the resulting dataset, normalizes the post fields, and generates a stable key for every post.
4. Filters out posts that are already recorded in the delivery ledger and sends the remaining posts to OpenAI in one structured batch for relevance scoring, summaries, and “why it matters” notes.
5. Keeps only posts that meet the minimum relevance score, then upserts them into a Google Sheets tab and formats a Telegram digest of the top items.
6. Sends the digest to a Telegram chat and records all evaluated post keys in the delivery ledger so future runs skip them.

## Setup
1. Add [FetchCat Telegram Channel Posts Scraper](https://apify.com/fetch_cat/telegram-channel-posts-scraper) to your Apify account and create an API token. In n8n, create an HTTP Header Auth credential with header Authorization and value Bearer YOUR_APIFY_TOKEN, then select it in both Apify HTTP Request steps.
2. Add an OpenAI API credential and select a model for the batch analysis node.
3. Make your own copy of the [Telegram Intelligence spreadsheet template](https://docs.google.com/spreadsheets/d/1RA0Q_rszBkrqFUDjdVX5YUeL3XgB8i_iqHjNENVIxJI/edit?usp=sharing). Connect Google Sheets OAuth in n8n, select your copied spreadsheet and its Telegram Intelligence tab, and keep the tab name and row-one headers unchanged.
4. Create a Telegram bot with [BotFather](https://t.me/BotFather), connect its token as an n8n Telegram credential, and set the destination chat ID for the digest. Make sure the bot is allowed to post in that chat or channel.
5. Update the channel handles, intelligence goal, relevance threshold, and per-run limits in the configuration step before enabling the hourly schedule.

## Requirements
- n8n Cloud or self-hosted n8n; an Apify account with [FetchCat Telegram Channel Posts Scraper](https://apify.com/fetch_cat/telegram-channel-posts-scraper); an Apify API token; an OpenAI API credential; Google Sheets OAuth; a Telegram bot and destination chat; public channel handles; and your own copy of the [Telegram Intelligence spreadsheet](https://docs.google.com/spreadsheets/d/1RA0Q_rszBkrqFUDjdVX5YUeL3XgB8i_iqHjNENVIxJI/edit?usp=sharing).

## Customization
- Change the public channel handles, intelligence goal, minimum relevance score, maximum posts per channel and per run, and maximum alerts per digest in the numbered configuration node. Keep the default hourly schedule for timely monitoring, or change it to daily to reduce executions and cost.

## Additional info
Before running the workflow, make your own copy of the [Telegram Intelligence spreadsheet template](https://docs.google.com/spreadsheets/d/1RA0Q_rszBkrqFUDjdVX5YUeL3XgB8i_iqHjNENVIxJI/edit?usp=sharing) and preserve its Telegram Intelligence tab name and row-one headers. The workflow uses [FetchCat Telegram Channel Posts Scraper](https://apify.com/fetch_cat/telegram-channel-posts-scraper) for public posts and one structured OpenAI batch per non-empty run. It records evaluated post keys only after the Google Sheets write and Telegram delivery succeed, preventing lost or duplicate alerts. Private channels and content unavailable to public web visitors cannot be monitored.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Schedule Trigger, OpenAI, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
