# 📊 Score Instagram hashtag engagement with Apify, Telegram, and Airtable

> ⚡ **52 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs daily to fetch Instagram hashtag posts via the Apify API, computes a weighted engagement score, then sends a top-10 HTML report to Telegram and upserts the scored posts into Airtable.

## How it works
1. Runs on a 24-hour schedule.
2. Loads a predefined list of hashtags to monitor and sets how many posts to fetch per hashtag.
3. Calls the Apify Instagram Hashtag Scraper API to retrieve recent posts for each hashtag.
4. Normalizes the returned post data (URL, author, caption, and metrics) and filters out empty API responses.
5. Deduplicates posts across hashtags, calculates a weighted engagement score, and ranks the results to keep the top 10.
6. Formats the ranked posts into an HTML message and sends the engagement report to a Telegram chat.
7. Upserts the scored post records into Airtable using the post ID as the unique key.

## Setup
1. Set an Apify API token as the `APIFY_TOKEN` environment variable (or update the HTTP request to use your token).
2. Add a Telegram bot credential, set `TELEGRAM_CHAT_ID`, and ensure the bot can post to the target chat.
3. Add an Airtable credential, set `AIRTABLE_BASE_ID` and `AIRTABLE_TABLE_ID`, and ensure the table contains fields matching the post properties (including `id` for upserts).
4. Update the hashtag list (and optionally the per-hashtag post limit) in the code step that defines the monitored hashtags.
5. Adjust the schedule interval if you want the workflow to run more or less frequently.

## 🔗 Nodes Used

Airtable, HTTP Request, Telegram, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
