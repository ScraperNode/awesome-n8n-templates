# 📊 Track Pracuj.pl job listings in Google Sheets with Apify

> ⚡ **3 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs a charge-capped Apify scraper for Pracuj.pl job listings based on a keyword and location, then writes and updates job observations, company-level counts, and a run ledger in Google Sheets with a locking mechanism to prevent overlapping imports.

## How it works
1. Runs manually and reads the configured Pracuj.pl search parameters (keyword, location, max items, charge cap, and target Google Sheets spreadsheet ID).
2. Validates the configuration, checks the destination Google Sheets file, creates the required tabs if missing, and applies a temporary lock sheet to prevent concurrent writes.
3. Reads and validates existing rows in the Pracuj Jobs, Pracuj Companies, and Pracuj Runs tabs to ensure headers, limits, and search scope are consistent.
4. Starts a new Apify Actor run for FalconScrape’s Pracuj.pl Job Offers Scraper (or loads an existing run when a resume run ID is provided) and records a PROCESSING checkpoint in the Pracuj Runs tab.
5. Polls Apify until the run succeeds, then downloads the full dataset of scraped listings.
6. Normalizes and deduplicates the job data and batch-updates Google Sheets by inserting new jobs or refreshing existing ones, appending per-company observation rows, and logging the run status.
7. Removes the temporary lock sheet and outputs a run summary including counts and a link to the spreadsheet.

## Setup
1. Add Apify API credentials in n8n and ensure the workflow can access the FalconScrape Pracuj.pl Job Offers Scraper Actor.
2. Add a Google Sheets OAuth2 credential and create an empty Google Sheets spreadsheet you can edit.
3. Paste the spreadsheet ID (not the full URL) into the workflow configuration, then set the keyword, location, maxItems, and maxChargeUsd values for your search.
4. Use one keyword/location per spreadsheet to keep baseline and “newly observed” semantics consistent across runs.
5. If recovering an interrupted execution, remove the _PRACUJ_WORKFLOW_LOCK sheet only after confirming no execution is active and set resumeRunId to the saved Apify run ID from the Pracuj Runs tab.

## Additional info
The first successful import is a BASELINE. Later NEW jobs are newly observed in this spreadsheet, not necessarily newly published; missing listings are not assumed closed. Company counts describe jobs per displayed employer in this bounded search, not headcount growth or hiring urgency. Start manually with 20 jobs and a $0.06 Actor charge cap. The template is free, but Apify runs and n8n hosting may incur charges.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
