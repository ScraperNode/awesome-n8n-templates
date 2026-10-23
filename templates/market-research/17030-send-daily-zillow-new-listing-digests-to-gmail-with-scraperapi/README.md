# 📊 Send daily Zillow new-listing digests to Gmail with ScraperAPI

> ⚡ **22 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow monitors Zillow searches using ScraperAPI’s AI Parser, stores seen listings in n8n Data Tables, and emails a daily HTML digest of newly found listings via Gmail.

## How it works
1. Runs on a daily 9AM schedule or manually to check for new listings across saved Zillow search URLs.
2. Loads all search configurations from an n8n Data Table and processes them one at a time.
3. Uses ScraperAPI AI Parser to scrape each Zillow search results page and extract listing fields like address, price, beds, baths, and URL.
4. Filters the scraped listings against the search thresholds and compares them to previously logged ZPIDs in an n8n Data Table to identify new listings.
5. Writes each newly discovered listing into the “seen” Data Table to prevent duplicate alerts in future runs.
6. Retrieves all listings first seen today, builds an HTML digest grouped by search name, and sends it as a Gmail email.

## Setup
1. Create n8n Data Tables access (or enable Data Tables in your n8n instance) and run the manual initialization trigger once to create and seed the zillow_searches and zillow_seen tables.
2. Add your ScraperAPI credentials, run the “Create Parser” manual trigger once, and copy the resulting parser ID into the ScraperAPI parse step (replace `REPLACE_WITH_PARSER_ID`).
3. Add your Gmail OAuth2 credentials and set the recipient email address in the Gmail send step.
4. Update the Zillow search URLs and filter fields in the zillow_searches table to match the locations and criteria you want to monitor.

## 🔗 Nodes Used

Gmail, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
