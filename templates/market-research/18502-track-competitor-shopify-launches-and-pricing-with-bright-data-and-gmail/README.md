# 📊 Track competitor Shopify launches and pricing with Bright Data and Gmail

> ⚡ **2 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs daily to fetch your Shopify catalog and a competitor’s Shopify catalog via Bright Data, compares their product pricing against your price range, and emails a digest through Gmail highlighting newly seen products, sell-outs, and how their prices sit relative to yours.

## How it works
1. Runs every day on a schedule.
2. Fetches `/products.json` from both your Shopify store and the competitor’s store through Bright Data Web Unlocker.
3. Parses each catalog into normalized product records (price range, stock status, product type, published date, and product URL) and stops with an error if a store does not return Shopify JSON.
4. Compares each competitor product’s price against your min/max price band for the same product type, falling back to your whole-catalog price range when types don’t match.
5. Checks an n8n Data Table to keep only competitor products that have not been reported before and stores their unique product keys for future runs.
6. Builds an HTML report (or a “nothing new” message) and sends it to the configured recipient using Gmail.

## Setup
1. Create a Bright Data Web Unlocker zone and add an HTTP Header Auth credential for the Bright Data API.
2. Add a Gmail credential that is allowed to send emails from the account you want to use.
3. Create an n8n Data Table named `shopify_products_seen` with a `product_key` column.
4. Update the Settings values for `your_store`, `competitor_store`, `email_to`, and `unlocker_zone`, and optionally adjust `new_within_days`, `max_products_reported`, and `currency_symbol`.

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
