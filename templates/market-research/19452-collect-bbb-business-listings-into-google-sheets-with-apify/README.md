# 📊 Collect BBB business listings into Google Sheets with Apify

> ⚡ **1 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs a bounded Better Business Bureau (BBB) search via Apify’s BBB Advanced Scraper and imports the resulting business listings into Google Sheets, updating existing rows by BBB profile URL and logging each scrape run for replay and recovery.

## How it works
1. Runs manually and reads the configured search term, location, distance, Google Sheets spreadsheet ID, optional Apify resume run ID, and a maximum Apify charge.
2. Connects to Google Sheets to validate the destination spreadsheet, create the required tabs if missing, and acquire a temporary lock to prevent concurrent imports.
3. Either resumes the specified Apify Actor run or starts a new bounded run of the Apify BBB Advanced Scraper with the configured search parameters and charge cap.
4. Saves a “PROCESSING” checkpoint for the run in the Google Sheets run log and polls Apify until the Actor run succeeds.
5. Downloads the completed Apify dataset, validates item count limits, normalizes fields, and deduplicates businesses by BBB profile URL.
6. Writes new and updated business rows to BBB Businesses and saves the import summary in BBB Runs. Replaying an imported run preserves its successful log entry. The workflow then releases its lock and returns a summary.

## Setup
1. Install the official @apify/n8n-nodes-apify integration, add your Apify API credential, and select it on every Apify request node.
2. Add your Google Sheets OAuth2 credential and select it on every Google request node. Create a destination spreadsheet you can edit; self-hosted n8n requires a Google Cloud OAuth client.
3. In the workflow’s configuration step, set the search term, location, distance in miles, max charge in USD, and paste the Google Sheets spreadsheet ID (not the full URL).
4. For recovery, confirm no execution is active, inspect the Apify run, delete only the stale _BBB_WORKFLOW_LOCK tab, and set resumeRunId to that existing run ID. This reuses the dataset without another paid scrape.
5. Keep the managed columns in BBB Businesses and BBB Runs unchanged. Store your own notes in column Q onward of BBB Businesses. Run manually before considering a schedule.

## Requirements
- Tested on self-hosted n8n 2.38.5 with @apify/n8n-nodes-apify 0.7.0, an Apify account with sufficient balance, and Google Sheets edit access. Cloud execution has not been tested.

## Customization
- Change the search, location, distance and charge cap in Configure search. The default cap is $0.04 per new Actor run. This manual-first template accepts at most 1000 dataset rows and 5000 rows per managed tab.

## Additional info
The template is free; Apify Actor runs and n8n hosting may cost money. FalconScrape maintains the paid BBB Advanced Scraper used here: https://apify.com/piotrv1001/bbb-advanced-scraper

Results are bounded observations, not an exhaustive directory. First-seen dates describe observations, not business creation dates. The run-log charge is an estimate, not a customer invoice. Empty or failed results stop for inspection. Stopping n8n does not automatically abort an Apify run.

On failure, inspect the run and confirm no execution remains active before removing _BBB_WORKFLOW_LOCK. Recover with resumeRunId; never blindly retry an uncertain paid start request.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
