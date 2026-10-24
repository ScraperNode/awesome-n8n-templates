# 📊 Track Coupang product-option prices in Google Sheets with Apify

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs manually to scrape Coupang listing option prices via an Apify Actor and stores the latest prices, full price history, and run checkpoints in Google Sheets to track changes over time.

## How it works
1. Runs when you execute the workflow manually and reads the search keyword, max items, max Apify charge, Google Sheets spreadsheet ID, and optional Apify resume run ID.
2. Validates the configuration and confirms access to the target Google Sheets spreadsheet.
3. Creates (if missing) the “Coupang Current”, “Coupang History”, and “Coupang Runs” sheets and adds a temporary lock sheet to prevent overlapping writes.
4. Either resumes the specified Apify run or starts a new charge-capped run of the Apify “FalconScrape Coupang Listings Scraper”, then records the run ID in the “Coupang Runs” tab as a checkpoint.
5. Polls Apify until the run succeeds, then downloads the completed dataset of scraped offers.
6. Normalizes and deduplicates offers by product-and-option ID, calculates price deltas vs. the previous observation for the same option, and writes updates to “Coupang Current” plus appended observations to “Coupang History” and the final status to “Coupang Runs”.
7. Removes the temporary lock sheet and outputs a run summary including counts of added/updated rows, rejected rows, and price changes, plus a link to the spreadsheet.

## Setup
1. Add an Apify API credential and select it on the Apify HTTP Request steps used to start/resume runs, poll status, and fetch dataset items.
2. Add a Google Sheets OAuth2 credential and select it on the Google Sheets API HTTP Request steps used to read the spreadsheet and batch update values.
3. Create an empty Google Sheets spreadsheet and paste its spreadsheet ID (not the full URL) into the workflow configuration.
4. Set your Coupang search keyword and adjust “maxItems” and “maxChargeUsd” to control scrape size and cost, and optionally provide a previous Apify run ID in “resumeRunId” to resume an interrupted import.

## Requirements
- An Apify account, the official Apify integration for the Apify API credential, and a Google account with Google Sheets OAuth2 access.

## Customization
- Keep one search keyword per spreadsheet. Adjust maxItems and maxChargeUsd only after reviewing the first capped run; archive before a managed tab reaches 5,000 rows.

## Additional info
The template is free; Apify Actor runs and n8n hosting may incur charges. Prices are observations of the same product-and-option ID in KRW, not title matches. Missing offers are not assumed sold out; listed sales prices can exclude shipping, coupons, or member conditions.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
