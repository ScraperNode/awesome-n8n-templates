# 📊 Track new Clutch agencies in Google Sheets using Apify

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This manual workflow uses Apify’s Clutch.co Listings Scraper to crawl a single public Clutch directory and writes newly observed agency profiles into Google Sheets, maintaining a “current” view, a per-run history log, and a run ledger with recovery support.

## How it works
1. Runs manually and reads the target Clutch directory URL, maximum items, charge limit, Google Spreadsheet ID, and optional resume run ID.
2. Validates the configuration and checks the destination Google Sheet, creating the required tabs and a temporary lock to prevent overlapping writes.
3. Reads and validates existing rows in the Current, History, and Runs tabs to ensure managed headers and safe row limits.
4. Starts a new Apify Actor run for the Clutch.co Listings Scraper (or loads a specified Apify run to resume) and records the run ID in the Google Sheets run log as a checkpoint.
5. Polls Apify until the run succeeds, then downloads the complete bounded dataset of scraped agency listings.
6. Normalizes and deduplicates agencies by Clutch profile slug, compares them to the Current tab, and prepares updates plus appended history observations and run log metrics.
7. Writes the updated Current view, appends History and Runs entries in Google Sheets, releases the lock tab, and outputs a run summary including the spreadsheet link.

## Setup
1. Add Apify API credentials and Google Sheets OAuth2 credentials for the HTTP requests.
2. Create an empty Google Sheets spreadsheet and paste its spreadsheet ID into the workflow configuration.
3. Set the target to a public Clutch directory URL (no query parameters) and adjust maxItems and maxChargeUsd to control dataset size and Apify spend.
4. (Optional) If a previous execution was interrupted, copy the saved Apify run ID into resumeRunId and ensure the temporary lock tab is removed only after confirming no execution is still running.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
