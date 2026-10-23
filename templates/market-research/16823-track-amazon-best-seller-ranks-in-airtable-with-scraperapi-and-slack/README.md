# 📊 Track Amazon best seller ranks in Airtable with ScraperAPI and Slack

> ⚡ **31 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs daily at 8am to read an ASIN watchlist from Airtable, fetch each Amazon product’s Best Sellers Rank via ScraperAPI, store rank history back in Airtable, and post a consolidated Slack alert when a product’s rank change exceeds a configured threshold.

## How it works
1. Runs every morning at 8am on a schedule.
2. Searches Airtable for active watchlist items and processes them one at a time.
3. Fetches each product’s Amazon data from ScraperAPI using the ASIN.
4. Parses the Best Sellers Rank text into a numeric rank, calculates the change versus the previous saved rank, and flags items that exceed the watchlist threshold.
5. Creates a new rank-history record in Airtable and updates the watchlist item with the latest rank and check time.
6. Searches Airtable for today’s flagged rank-history records, builds a single digest message, and posts it to a Slack channel if any alerts exist.

## Setup
1. Add Airtable credentials and select the Base/Table for both the watchlist search, the rank-history create step, the watchlist update step, and the “today’s alerts” search.
2. Ensure your Airtable schema includes a Watchlist table with fields like `active`, `asin`, `label`, `rank_threshold`, `last_rank`, and `last_checked_at`, plus a Rank History table with fields like `asin`, `rank`, `delta`, `previous_rank`, `category`, `is_alert`, `direction`, and `checked_at`.
3. Add your ScraperAPI credentials.
4. Add Slack credentials, choose the target channel, and verify the Slack message destination can be posted to by the connected app.

## Requirements
- ScraperAPI account, Airtable account

## 🔗 Nodes Used

Airtable, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
