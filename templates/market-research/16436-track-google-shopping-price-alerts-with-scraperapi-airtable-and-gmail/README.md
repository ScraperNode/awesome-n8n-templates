# 📊 Track Google Shopping price alerts with ScraperAPI, Airtable and Gmail

> ⚡ **73 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs every morning, reads an active watchlist from Airtable, scrapes Google Shopping results via ScraperAPI, and writes offer snapshots back to Airtable for price history. It then compiles today’s below-target matches and sends an HTML alert digest using Gmail.

## How it works
1. Runs every day at 8:00 AM on a schedule.
2. Reads all active watchlist entries from Airtable.
3. For each watchlist query, uses ScraperAPI to fetch Google Shopping results and flattens the response into individual offers with a scrape timestamp and an alert flag when price is at or below the target.
4. Appends each offer snapshot (query, title, merchant, price, link, and metadata) to an Airtable results table.
5. Searches Airtable for today’s result rows where the alert flag is true.
6. Builds an HTML digest that keeps the cheapest alerting offer per query and, if any alerts exist, sends the digest by email through Gmail.

## Setup
1. Connect your Airtable credentials and select the base/table for the watchlist and the base/table where offer snapshots should be created.
2. Ensure your Airtable watchlist table includes at least {active} (checkbox), {query} (text), and {target_price} (number) fields, and your results table includes fields matching the workflow’s mappings (query, product_title, merchant, price, currency, link, product_id, scraped_at, is_alert).
3. Add your ScraperAPI credential and confirm Google Shopping scraping is enabled for your account.
4. Connect your Gmail account, set the recipient address in the email node, and optionally adjust the daily schedule time to your preference.

## 🔗 Nodes Used

Airtable, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
