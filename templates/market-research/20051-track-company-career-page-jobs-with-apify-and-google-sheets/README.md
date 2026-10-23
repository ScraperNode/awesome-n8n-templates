# 📊 Track company career-page jobs with Apify and Google Sheets

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs an Apify Company Career Page Scraper for a single company URL and logs job listings into Google Sheets, maintaining a “current jobs” view, a per-run history table, and a run ledger with safe locking and resume support.

## How it works
1. Runs manually and loads the target company career/ATS URL, job limit, charge cap, and Google Sheets spreadsheet ID.
2. Validates the configuration, reads the target Google Sheets file, creates the required tabs if missing, and adds a temporary lock sheet to prevent overlapping writes.
3. Reads and validates existing rows from the Career Current, Career History, and Career Runs tabs to ensure the expected schema and key uniqueness.
4. Starts a charge-capped Apify Actor run for the company career page (or resumes a provided Apify run ID) and records the run ID in the Career Runs tab as a checkpoint.
5. Polls Apify until the run succeeds, then fetches the complete dataset of scraped jobs.
6. Normalizes and deduplicates the job data, updates/creates rows in Career Current, appends per-run observations to Career History, and writes an import status entry to Career Runs.
7. Removes the lock sheet and outputs a summary with counts for baseline, new, refreshed, rejected, and replayed observations plus a link to the spreadsheet.

## Setup
1. Add Apify API credentials in n8n and ensure you have access to run the FalconScrape Company Career Page Scraper Actor (ID HiJYKx437rQqU6YMb).
2. Add Google Sheets OAuth2 credentials in n8n with permission to read and edit the destination spreadsheet.
3. Create an empty Google Sheets spreadsheet, copy its spreadsheet ID, and paste it into the workflow’s configuration along with the public HTTPS company career/ATS URL.
4. Optionally adjust maxJobs (1–100) and maxChargeUsd ($0.01–$1.00), and leave resumeRunId blank unless you are resuming a specific Apify run.
5. If a run is interrupted, confirm no execution is active, delete the _CAREER_WORKFLOW_LOCK sheet if it remains, and set resumeRunId to the saved Apify run ID from Career Runs before executing again.

## Requirements
- An n8n instance with the official Apify integration available, an Apify account, and a Google account with Sheets OAuth2 access.

## Customization
- Track one company URL per spreadsheet. Review maxJobs and the Actor charge cap after the first bounded run; keep your own notes in column S onward.

## Additional info
The template is free; Apify Actor runs and n8n hosting may incur charges. The first import is a baseline. NEW means first observed in this spreadsheet, not necessarily newly published. A missing job is not assumed closed. AI enrichment is disabled and scheduling is off.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
