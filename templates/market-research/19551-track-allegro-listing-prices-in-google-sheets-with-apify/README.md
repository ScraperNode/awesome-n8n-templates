# 📊 Track Allegro listing prices in Google Sheets with Apify

> ⚡ **1 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs an Apify Allegro Listings Scraper for a single Allegro.pl listing URL and writes current prices plus a run-by-run price history to Google Sheets, including baseline/price-change calculations and a run log with recovery support.

## How it works
1. Starts manually with a configured Allegro.pl seller/category/search URL, item limit, charge cap, target Google Sheets spreadsheet ID, and optional Apify run ID for recovery.
2. Reads the destination spreadsheet, creates the required tabs if missing, and adds a temporary lock sheet to prevent concurrent imports.
3. Loads existing “current”, “history”, and “runs” tables from Google Sheets and validates that headers and key columns match the template.
4. Either starts a new bounded Apify Actor run (with a maxTotalChargeUsd cap) or loads an existing Apify run for recovery, then saves the run ID to the Google Sheets run log as a checkpoint.
5. Polls Apify until the run succeeds, then retrieves the full dataset subject to the template’s 1,000-row safety bound. Empty, all-invalid, and oversized results stop for inspection.
6. Normalizes and deduplicates offers by Allegro offer ID (PLN only), calculates previous price, absolute/percent change, and observation type, and plans batch updates for both the “current” and “history” tabs plus the run log.
7. Writes the batch updates to Google Sheets, removes the lock sheet, and outputs a run summary including the spreadsheet URL.

## Setup
1. Install the official Apify integration in n8n. Create an Apify account and select your Apify API credential on every Apify request node. The template uses FalconScrape’s paid Allegro Listings Scraper: https://apify.com/piotrv1001/allegro-listings-scraper (build 0.0.18).
2. Create Google Sheets OAuth2 credentials and select them on every Google Sheets request node, with access to your destination spreadsheet.
3. Create an empty spreadsheet. In Configure search, enter its spreadsheet ID and one Polish Allegro listing URL. The default is 20 items and a $0.10 Actor charge cap. Run manually; Allegro Current, Allegro History and Allegro Runs are created automatically.
4. If recovering from an interrupted execution, set resumeRunId to the 17-character Apify run ID and ensure the spreadsheet is not actively being processed (remove the _ALLEGRO_WORKFLOW_LOCK sheet only after confirming no execution is running).

## Requirements
- Tested on self-hosted n8n 2.38.6 with Apify integration 0.7.0. Requires your own Apify and Google Sheets accounts. n8n Cloud and scheduled execution were not tested.

## Customization
- Choose one Polish seller, category or search listing URL; seller-page execution was tested live. Keep the same destination for comparable observations. Add personal notes in column P onward in Allegro Current.

## Additional info
The template is free; Apify runs and n8n hosting may incur charges. We maintain the paid Actor. Repeated observations can be billable even if prices do not change. This is a bounded sample, not complete market coverage. Only identical offer IDs and PLN prices are compared; prices exclude delivery. First observations are baselines, and missing offers remain last observed rather than being marked sold out. Replaying a run does not duplicate its history. Older runs stop to protect chronological comparisons. Archive to a new spreadsheet before the 5,000-row limits are reached. Manual execution only; avoid simultaneous executions or manual sorting/row edits during import.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
