# 📊 Build a Reddit no-API weekly digest with ScrapeOps and Google Sheets

> ⚡ **49 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Overview
This n8n template automates a weekly Reddit industry digest without the Reddit API. It scrapes top posts from selected subreddits via ScrapeOps Proxy, enriches them with full post text, deduplicates against Google Sheets, and generates a weekly summary - optionally emailed to your inbox.

## Who is this for?
- Developers and product teams monitoring industry trends on Reddit
- Marketers and founders tracking niche community conversations
- Analysts building automated weekly briefings from Reddit

## What problem does it solve?
Manually checking multiple subreddits weekly is time-consuming. This workflow runs automatically, scrapes top posts, removes duplicates, and delivers a clean weekly digest to Google Sheets and optionally your email.

## How it works
1. A weekly schedule triggers the workflow automatically.
2. ScrapeOps Proxy scrapes "Top of Week" from each subreddit on `old.reddit.com`.
3. Post metadata is parsed from HTML: title, URL, score, comments, author, timestamps.
4. Each post is fetched as JSON to extract the full `selftext` body.
5. Data is merged, normalized, and deduplicated against existing Sheet rows.
6. New posts are appended to the `posts` tab.
7. A weekly digest is written to `weekly_digest` and optionally emailed.

## Set up steps (~10–15 minutes)
1. Register for a free ScrapeOps API key: [https://scrapeops.io/app/register/n8n](https://scrapeops.io/app/register/n8n)
2. Add ScrapeOps credentials in n8n. Docs: [https://scrapeops.io/docs/n8n/overview/](https://scrapeops.io/docs/n8n/overview/)
3. Duplicate [this sheet](https://docs.google.com/spreadsheets/d/1rKuVREV4pedie7uAbuEcLvghNrAEeAjIPUBE6cQPleI/edit?usp=sharing) to copy Columns and Spreadsheet ID.
4. Connect Google Sheets and set your Spreadsheet ID in the Read, Append, and Digest nodes.
5. Update your subreddit list and week range in **Configure Subreddits & Week Range**.
6. Optional: configure the Send Email node with sender and recipient credentials.
7. Run once manually to confirm, then activate.

## Pre-conditions
- Active ScrapeOps account ([free tier](https://scrapeops.io/app/register/n8n)).
- ScrapeOps [community node installed](https://scrapeops.io/docs/n8n/overview/) in n8n.
- Google Sheets credentials configured in n8n
- A [Google Sheet](https://docs.google.com/spreadsheets/d/1rKuVREV4pedie7uAbuEcLvghNrAEeAjIPUBE6cQPleI/edit?gid=0#gid=0) with `posts` and `weekly_digest` tabs and correct column headers
- Optional: email credentials for the Send Email node

## Disclaimer
This template uses [ScrapeOps](https://n8n.io/integrations/scrapeops/) as a community node. You are responsible for complying with Reddit's Terms of Use, robots.txt directives, and applicable laws in your jurisdiction. Scraping targets may change at any time; adjust render, scroll, and wait settings and parsers as needed. Use responsibly and only for legitimate business purposes.

## 🔗 Nodes Used

Send Email, Google Sheets, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
