# 📊 Track TikTok Shop viral products and inventory daily with Apify

> ⚡ **2 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs daily (or manually) to scrape TikTok Shop bestsellers via Apify, selects the top-selling product from your keyword searches, then inspects that winner’s live SKU stock and recent reviews and outputs a formatted alert message.

## How it works
1. Runs on a daily 9 AM schedule or on demand via manual trigger.
2. Uses Apify’s TikTok Shop Search Scraper to pull bestseller product results for the configured search queries.
3. Sorts the scraped products by sold count and selects the top “winner,” keeping the top 3 for reference.
4. Uses Apify’s TikTok Shop Product Scraper to fetch the winner’s product details, including SKU stock and a small set of reviews.
5. Formats the product and inventory details into a ready-to-send alert message for downstream destinations like chat or spreadsheets.

## Setup
1. Add an Apify API token credential in n8n.
2. Update the Apify actor input in the search step (keywords, countryCode, minSold, and maxResultsPerQuery) to match your niche.
3. Verify the product inspection step receives a valid TikTok Shop product URL/ID for the selected winner and adjust review limits if needed.
4. Optionally connect the final formatted alert output to Slack, email, Google Sheets, Notion, or another destination node to deliver or store the alert.

## 🔗 Nodes Used

Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
