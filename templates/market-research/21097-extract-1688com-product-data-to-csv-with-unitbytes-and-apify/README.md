# 📊 Extract 1688.com product data to CSV with UnitBytes and Apify

> ⚡ **1 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs daily to scrape 1688.com wholesale listings with the UnitBytes 1688 Scraper on Apify, normalizes key fields from the results, and exports the extracted items to a CSV file for easy import into tools like Google Sheets or Airtable.

## How it works
1. Runs every 24 hours on a schedule.
2. Sets the Apify API token and the actor input (search queries, max items, detail level, and proxy settings).
3. Calls the UnitBytes 1688 Scraper actor on Apify via its run-sync endpoint to fetch scraped dataset items as JSON.
4. Normalizes each returned record into a flat set of fields (such as id, offerId, url, title, page, and position).
5. Converts the normalized results into a CSV file named `1688-scraper-dataset-export.csv`.

## Setup
1. Create an Apify account, get your Apify API token, and replace `YOUR_APIFY_API_TOKEN` in the input step.
2. Update the actor input parameters (for example `queries`, `maxItems`, `detailLevel`, and `proxyConfiguration`) to match what you want to scrape.
3. If you want the results in Google Sheets, Airtable, or another destination, add the corresponding n8n node after the CSV export and configure its credentials and target resource.

## Requirements
- YOUR_APIFY_API_TOKEN

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
