# 🔧 Track Mercado Libre Argentina offer prices with Apify and Google Sheets

> ⚡ **21 views** · 🔧 [Miscellaneous](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs a charge-capped Apify actor to scrape Mercado Libre Argentina search results and logs each listing’s ARS price into Google Sheets, maintaining a current snapshot, a per-run price history, and a run ledger for recovery.

## How it works
1. Runs manually with a configured Mercado Libre Argentina search term, item limit, charge cap, and target Google Sheets spreadsheet ID.
2. Reads the destination spreadsheet, creates the required tabs (Mercado Current, Mercado History, Mercado Runs), and adds a temporary lock sheet to prevent overlapping imports.
3. Starts a new Apify run of the FalconScrape Mercado Libre Listings Scraper (or loads an existing run when a resumeRunId is provided) and records the run ID in the Mercado Runs tab.
4. Polls Apify until the run succeeds, then fetches the completed dataset items.
5. Filters and normalizes offers to valid MLA listings with direct Mercado Libre URLs and ARS prices, then compares each offer ID against Mercado Current to calculate baselines and price changes.
6. Writes the latest prices to Mercado Current, appends observations to Mercado History, updates the Mercado Runs log, removes the lock sheet, and outputs a run summary.

## Setup
1. Add an Apify API token credential and a Google Sheets OAuth2 credential, and select them on the Apify and Google Sheets HTTP Request nodes.
2. Create a Google Sheets spreadsheet and paste its spreadsheet ID (not the full URL) into the spreadsheetId value in the configuration step.
3. Set the Mercado Libre search keyword, maxItems (1–100), and maxChargeUsd ($0.01–$1), and optionally provide a 17-character Apify resumeRunId to import an existing run instead of starting a new one.
4. Ensure the spreadsheet tabs and headers managed by the workflow are not edited manually, and delete a stale _MERCADO_WORKFLOW_LOCK sheet only after confirming no execution is still running.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
