# 📊 Send Walmart and Target stock and price-drop alerts from Google Sheets to Slack using Scrapio

> ⚡ **19 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow checks a Google Sheets watchlist of Walmart and Target products every hour via Scrapio, posts Slack alerts when items restock or drop in price, logs each check to a history sheet, and sends a weekly Slack digest summarizing the last 7 days.

## How it works
1. Runs every hour on a schedule and reads your product watchlist from Google Sheets.
2. Routes each watchlist row by retailer and fetches the latest product availability and price from Scrapio for Walmart or Target.
3. Compares the current in-stock status and price to the previous values stored in the watchlist to detect “back in stock” and “price dropped” events.
4. Posts a Slack message when a product comes back in stock.
5. Posts a Slack message when a product’s price drops.
6. Appends each check result to a Google Sheets history log and updates the watchlist row with the latest in-stock status and price.
7. Runs weekly on a separate schedule, reads the history sheet for the last 7 days, aggregates restocks and price drops, and posts a summary digest to Slack.

## Setup
1. Add a Scrapio credential (and enable the Commerce add-on in Scrapio) so the workflow can fetch Walmart and Target product data.
2. Create and connect a Google Sheets spreadsheet with a watchlist sheet (including retailer, product_id, title, last_in_stock, last_price) and a history sheet that matches the appended fields, then set the document and sheet names in all Google Sheets steps.
3. Add a Slack credential and select the channel IDs for the back-in-stock alert, price-drop alert, and weekly digest messages.

## 🔗 Nodes Used

Google Sheets, Slack, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
