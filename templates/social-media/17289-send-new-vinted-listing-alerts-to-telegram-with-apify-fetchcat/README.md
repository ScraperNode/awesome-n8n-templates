# 📱 Send new Vinted listing alerts to Telegram with Apify FetchCat

> ⚡ **58 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs on an hourly schedule (or manually) to scrape the newest Vinted listings via the Apify FetchCat actor, filters matches by your saved search criteria, deduplicates previously sent results using an n8n Data Table ledger, and sends new-listing alerts to a Telegram chat.

## How it works
1. Runs on an hourly schedule or starts manually for testing.
2. Creates (if needed) an n8n Data Table used as a delivery ledger and loads your Vinted search criteria (domain, query, audience, price range, brands, sizes, colors, and result limit).
3. Validates and normalizes the search settings, then builds one or more Apify actor inputs (for example, splitting searches by brand terms when no brand IDs are provided).
4. Calls the Apify FetchCat Vinted search actor and downloads the resulting dataset items.
5. Normalizes the returned listings, applies the configured price/brand/size/color matching logic, and stops early with a no-match payload when nothing passes all filters.
6. Removes listings that were already delivered by checking the delivery ledger, batches the remaining results, and formats HTML Telegram messages.
7. Sends the formatted alerts to Telegram and records each delivered listing in the ledger so it is not sent again.

## Setup
1. Add [FetchCat Vinted Search Scraper](https://apify.com/fetch_cat/vinted-search-scraper) to your Apify account and create an Apify API token. In n8n, create one HTTP Header Auth credential with header Authorization and value Bearer YOUR_APIFY_TOKEN, then select it in both Apify HTTP Request nodes.
2. Create a Telegram bot with [BotFather](https://t.me/BotFather), add the token as an n8n Telegram credential, and add or message the bot in the destination chat. Enter that chat ID in the Telegram node and make sure the bot is allowed to post.
3. Edit the Vinted search parameters (domain, search text, audience, price limits, allowed brands/sizes/colors, and maxResults) to match what you want to monitor.
4. Adjust the schedule interval and confirm the workflow timezone if you want alerts more or less frequently.
5. Run the workflow once manually to populate the delivery ledger and verify that messages render correctly with Telegram’s HTML parse mode.

## Requirements
- [FetchCat Vinted Search Scraper](https://apify.com/fetch_cat/vinted-search-scraper) on Apify; an Apify API token; a Telegram bot and destination chat; n8n Data Tables; n8n 2.26.8 or newer.

## Customization
- Choose a Vinted marketplace domain, search text, audience, price range, brands, sizes, color keywords, and 1-50 results per run. The default is 10 results every hour; adjust the schedule from every 15 minutes to once daily. Numeric brand or catalog IDs provide more exact filtering when available.

## Additional info
The first successful run sends current matching listings; later runs send only listing IDs not already recorded in the delivery ledger. More frequent schedules, more results, and multiple brand-name searches increase Apify and n8n execution costs, so review current Actor pricing before activation. The workflow monitors public listings only: it never buys an item, contacts a seller, or signs into Vinted. Public view counts may be unavailable and are omitted rather than shown as zero.

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
