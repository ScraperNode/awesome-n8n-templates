# 📊 Archive trending TikTok hashtags using TikTok, Airtable, and Apify

> ⚡ **516 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This template uses a community node (@apify/n8n-nodes-apify). It will not work without the required node installed.

## How it works
1. A monthly schedule trigger runs the workflow automatically without any manual intervention required.
2. An Apify Actor scrapes TikTok's top 100 trending hashtags for a specified country, defaulting to the United States.
3. Once scraping completes, the workflow fetches the full dataset containing hashtag metrics from Apify's result storage.
4. The dataset is split into individual items, and each hashtag is saved as a new record in Airtable with all relevant details.

## Setup
1. Go to Settings → Community Nodes on your n8n instance and install the @apify/n8n-nodes-apify community node before proceeding.
2. Create an Airtable base with a table named Trending Hashtags containing these columns: ID, Name, Country, Industry, Date Added, Publish Count, Video Views, Rank, and Status.
3. Add your Apify and Airtable credentials in the n8n Credential Manager before configuring any nodes.
4. Open the Run TikTok Hashtag Scraper node and optionally adjust country_code (e.g., "US" to "GB") and top100_period (e.g., "30" to "7") in the Custom Body to match your target market and timeframe.
5. Open the Save Hashtag to Airtable node, select your correct Airtable base, and confirm the Trending Hashtags table is selected as the target.
6. Save and activate the workflow — it will now run automatically every month and sync the latest trending hashtag data to Airtable.

## Requirements
- Installed community node: @apify/n8n-nodes-apify
- Apify account
- Airtable account with a structured base

## Customization
- Change Schedule : Modify the Start: Monthly Schedule node to run weekly or on another interval.
- Add Notifications : Attach a Slack or Discord node after the 4. Save Hashtag to Airtable node to alert your team when new data is added.
- Filter Hashtags : Use a Filter node after 3. Split Hashtags into Items to only save hashtags that meet specific conditions (e.g., over 1M video views).

## Additional info
Published by Fahmi Fahreza, Indonesia’s first official n8n Brand Ambassador and founder of WithMi Automation, built from real client implementations, not tutorials.
→ Let us build it for you: [withmiautomation.com](withmiautomation.com)
→ Learn to build it yourself: [academy.withmiautomation.com](academy.withmiautomation.com)
→ Bring Fahmi to your team (training, workshop, talkshow): [fahmiiireza.com](fahmiiireza.com)

## 🔗 Nodes Used

Airtable, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
