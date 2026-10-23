# 📊 Monitor TikTok creator growth with Apify, Google Sheets, and Telegram

> ⚡ **21 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs manually or every Monday to monitor a TikTok creator watchlist by scraping profile metrics with Apify, logging snapshots in Google Sheets, and sending baseline or change alerts to Telegram.

## How it works
1. Runs on a manual trigger or on a weekly schedule every Monday at 09:00.
2. Reads the active creator watchlist and alert thresholds from a Google Sheets “Creators” tab and validates/normalizes the TikTok handles.
3. Starts an Apify Actor run using [FetchCat TikTok Profile Scraper](https://apify.com/fetch_cat/tiktok-profile-scraper) and downloads the latest public profile metrics from the resulting dataset.
4. Normalizes the scraped metrics and compares them with the previous values stored in the Google Sheets “Current Profiles” tab to calculate follower/like/video changes and qualification status.
5. Sends a formatted Telegram message when this is the first baseline snapshot or when meaningful growth/decline or qualification changes are detected.
6. Appends a dated row per creator to the Google Sheets “Snapshot History” tab and upserts the latest metrics into the “Current Profiles” tab.

## Setup
1. Add [FetchCat TikTok Profile Scraper](https://apify.com/fetch_cat/tiktok-profile-scraper) to your Apify account and create an API token. In n8n, create an HTTP Header Auth credential with header Authorization and value Bearer YOUR_APIFY_TOKEN, then select it in both Apify HTTP Request steps.
2. Make a copy of the [TikTok Creator Growth Tracker spreadsheet template](https://docs.google.com/spreadsheets/d/1bs2Nh_ewe0yrIVbDB0NX9Gc1GgOdOGuJe-7tNXSXSkA/edit?usp=sharing). Connect Google Sheets OAuth2 in n8n, select your copy in every Sheets node, and keep the Creators, Current Profiles, and Snapshot History tab names and headers unchanged.
3. Create a Telegram bot with [BotFather](https://t.me/BotFather), add its token as an n8n Telegram credential, and replace the chat ID with your destination group or channel. Make sure the bot is allowed to post there.
4. Populate the “Creators” tab with active TikTok handles/URLs plus optional labels, follower min/max limits, and alert thresholds, then run once manually to create the baseline before enabling the schedule.

## Requirements
- n8n Cloud or self-hosted n8n; an Apify account with [FetchCat TikTok Profile Scraper](https://apify.com/fetch_cat/tiktok-profile-scraper); an Apify API token; Google Sheets OAuth2 access; a Telegram bot and destination chat; and your own copy of the [growth tracker spreadsheet](https://docs.google.com/spreadsheets/d/1bs2Nh_ewe0yrIVbDB0NX9Gc1GgOdOGuJe-7tNXSXSkA/edit?usp=sharing).

## Customization
- Add or pause TikTok handles in the Creators tab, assign labels, set follower qualification ranges, and choose per-creator growth or follower-gain alert thresholds. You can also change the Monday 09:00 schedule and Telegram destination in n8n.

## Additional info
Before configuring the workflow, make your own copy of the [TikTok Creator Growth Tracker spreadsheet](https://docs.google.com/spreadsheets/d/1bs2Nh_ewe0yrIVbDB0NX9Gc1GgOdOGuJe-7tNXSXSkA/edit?usp=sharing). Use that copy in every Google Sheets node and preserve the Creators, Current Profiles, and Snapshot History tabs and headers. The first manual run creates a baseline and sends a Telegram baseline message. Later runs alert only when a configured growth, decline, follower-gain, or qualification threshold is reached; quiet runs still update both data tabs. The workflow uses [FetchCat TikTok Profile Scraper](https://apify.com/fetch_cat/tiktok-profile-scraper), does not require OpenAI, and should be configured with current Actor pricing in mind.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
