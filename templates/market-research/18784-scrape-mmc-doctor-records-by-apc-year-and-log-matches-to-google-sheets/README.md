# 📊 Scrape MMC doctor records by APC year and log matches to Google Sheets

> ⚡ **2 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow manually scrapes the MMC MeRITS registered doctor directory, filters doctors by a target APC year, and writes matched records to Google Sheets while rate-limiting requests and saving a resume state so it can continue from the last processed page and row.

## How it works
1. Starts when you run the workflow manually and sets the target APC year and the maximum number of matches to collect in a run.
2. Loads the last saved page and row index from n8n workflow static data to resume where the previous run stopped.
3. Requests the current results page from the MMC MeRITS registeredDoctor search and parses the HTML to extract doctor IDs, rows, and the total number of pages.
4. Iterates through each row on the page, fetching each doctor’s detail page from MMC MeRITS and extracting fields like full name, qualification, provisional registration date, registration number, APC year, and place of practice.
5. If the extracted APC year matches the configured target year, appends or updates the doctor record in Google Sheets.
6. After each doctor, increments and persists progress, waits briefly to rate-limit requests, and stops when the daily match target is reached; otherwise it advances to the next page until all pages are exhausted.

## Setup
1. Add a Google Sheets OAuth2 credential and select the target spreadsheet and sheet where matched doctor details should be appended/updated.
2. Update the configuration values for the target APC year and the per-run match limit to suit your filtering needs.
3. Run the workflow once to initialize the saved resume state, and clear the workflow’s static data if you want to restart scraping from page 1.

## Requirements
- n8n instance (self-hosted or cloud)
- Google Sheets account with OAuth2 credential connected
- A destination spreadsheet with headers: Name, Qualification, Date of Provisional Registration, Full Registration Number, APC Year, Place of Practice
- No login/API key needed for MMC MeRITS itself — it's a public register

## Customization
- Target APC year to filter by (editable in the Config node, e.g. 2026)
- Daily match limit — how many matching doctors to collect per run before stopping (default 10)
- Rate-limit delay between requests (default 0.7s) — increase if you hit errors
- Resume position is saved automatically between runs, so re-running continues from where it left off with no duplicates

## Additional info
Scrapes Malaysia's MMC MeRITS public doctor register (merits.mmc.gov.my), scanning the 
full list page by page since the site has no server-side year filter. Each doctor's detail 
page is checked against a target APC year; matches are written to Google Sheets. Designed 
to run incrementally (e.g. once daily) progress is persisted via workflow static data, so 
each run picks up exactly where the last one stopped without rescanning or duplicating records. 
Total register size is ~197,000 doctors, so a full sweep for a given year may take multiple runs.

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
