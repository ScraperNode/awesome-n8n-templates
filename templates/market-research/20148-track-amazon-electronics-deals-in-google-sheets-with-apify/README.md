# 📊 Track Amazon Electronics deals in Google Sheets with Apify

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs an Apify Actor to scrape a bounded list of Amazon.com Electronics deals and writes replay-safe results to Google Sheets, maintaining a current snapshot, a per-run history log, and a run ledger with recovery details.

## How it works
1. Starts manually and reads the target domain, max items, max Apify charge, Google Spreadsheet ID, and optional Apify run ID to resume.
2. Validates the configuration, then reads the destination spreadsheet and creates the managed tabs plus a temporary lock tab to prevent overlapping writes.
3. Loads the specified Apify run for recovery or starts a new bounded run of FalconScrape’s “Amazon Today’s Deals Scraper” for the Amazon Electronics collection.
4. Saves a checkpoint of the Apify run ID into the Google Sheets run log and polls Apify until the Actor run finishes successfully.
5. Fetches the completed dataset from Apify, normalizes and validates items (including ASINs and product URLs), and determines which deals are baseline, new, refreshed, or replayed.
6. Batch-writes the latest “current” deal rows, appends per-run observations to the history tab, updates the run ledger in Google Sheets, and then removes the temporary lock tab.

## Setup
1. Create an Apify API credential in n8n and ensure you have access to the Actor ID `ZcBW1sGJAcEXxBrej` (FalconScrape’s Amazon Today’s Deals Scraper).
2. Create a Google Sheets OAuth2 credential in n8n with access to your destination spreadsheet.
3. Create an empty Google Spreadsheet, paste its spreadsheet ID into the workflow configuration, and keep `target` set to `amazon.com`.
4. Set `maxItems` (1–100) and `maxChargeUsd` ($0.01–$1) to control dataset size and Apify spend, and optionally set `resumeRunId` to resume a previously saved run.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
