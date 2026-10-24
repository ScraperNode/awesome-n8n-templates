# 📊 Track Temu product prices with Apify and Google Sheets

> ⚡ **5 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
![Temu workflow canvas](https://raw.githubusercontent.com/bulatovicluka1989-rgb/luminar-apify-examples/main/actors/temu-product-scraper-price-monitor/n8n-demo/workflow.png)

Track a short watchlist of exact Temu products in Google Sheets. Repeat checks update existing rows with current prices and factual changes.

## How it works
1. Start manually with one to five exact Temu goods IDs.
2. Validate the market, stable monitoring scope, Sheet destination and charge cap before paid work.
3. Start the pinned Luminar Temu Actor once on Apify.
4. Poll that same run; stop if it fails or exceeds wait limits.
5. Check coverage, complete delivered rows and estimated Actor event cost before writing.
6. Upsert each product by deterministic upsertKey. Missing prices remain blank; incomplete results stop delivery.
7. Return a delivery receipt. The Sheet is a current register, not permanent price history.

## Setup
1. Create an Apify Header Auth credential: Authorization with value Bearer followed by your token. Select it on all four HTTP Request nodes.
2. Connect Google Sheets OAuth2 on the Sheets node using an account that can edit your destination.
3. Create a Temu Watch tab and import the exact companion sheet-header.csv as its first row.
4. Enter goods IDs, supported market, spreadsheet ID and stable scope in Product watch settings. Replace every placeholder.
5. Start with one product and the default $0.10 Actor cap. Inspect your Sheet, then repeat sequentially.

## Requirements
- n8n, an editable Google spreadsheet and an Apify account with usage balance. Built-in nodes are sufficient. Apify usage is charged separately; no credits are included.

## Customization
- Customize the supported market, destination or watchlist. Keep scope stable for repeated checks and match Sheet updates only by upsertKey.

## Additional info
[Header CSV and setup guide](https://github.com/bulatovicluka1989-rgb/luminar-apify-examples/tree/main/actors/temu-product-scraper-price-monitor/n8n-demo)

[Open the Luminar Temu Actor](https://apify.com/luminar/temu-product-scraper-price-monitor)

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
