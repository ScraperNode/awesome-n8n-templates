# 🎣 Enrich Google Sheets domains with verified decision makers via Apify

> ⚡ **24 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow reads company domains queued in Google Sheets and enriches them with verified decision-maker contact details using the Apify Decision Maker Finder Actor, then writes classified results to a Results sheet and an audit trail to a Run_Log sheet.

## How it works
1. Runs manually and loads configuration values such as spreadsheet ID, target persona, batch size, and Apify polling limits.
2. Reads rows from a Google Sheets Inputs sheet, keeps only domains with a blank/READY status, normalizes and deduplicates them, and flags invalid rows.
3. Marks valid input rows as IN_PROGRESS in Google Sheets to lock the batch before starting Apify.
4. Starts the Apify Decision Maker Finder Actor with email verification enabled and a maximum run charge, then polls Apify until the run succeeds, fails, or reaches the polling limit.
5. Downloads the Apify dataset when the run succeeds and classifies every requested domain (including missing/empty Apify results) into outcomes like VERIFIED_DM_REVIEW or NO_BILLABLE_RESULT.
6. Upserts the per-domain contact output into the Google Sheets Results sheet and updates the original Inputs rows with the final classification, processed timestamp, and any error message.
7. Upserts a batch-level summary into the Google Sheets Run_Log sheet, and on failures writes a failed run log, marks affected Inputs rows with the failure class, and stops with an error.

## Setup
1. Create a copy of the template Google Sheets spreadsheet (with Inputs, Results, and Run_Log sheets) and keep the column headers as expected by the workflow.
2. Add Google Sheets OAuth credentials in n8n and select the same credential on all Google Sheets nodes.
3. Add an Apify API token as an n8n Bearer Auth credential (httpBearerAuth) and select it on all Apify HTTP Request steps.
4. Replace REPLACE_WITH_GOOGLE_SHEET_ID in the configuration step with your spreadsheet ID.
5. In the Inputs sheet, add domains with country (optional) and status READY, and adjust persona, max domains per run, maxTotalChargeUsd, and polling settings as needed before activating.

## Requirements
- n8n instance with Google Sheets OAuth
- Apify account and API token (Bearer Auth)
- Copy of the template Google Sheet: https://docs.google.com/spreadsheets/d/1CGxn1Z9Ton7rL4j2OTuN-4-vQoapsARf0r1iW8Ur5oE/copy
- Paid Apify usage for delivered results (review Actor pricing and set max_total_charge_usd)

## Customization
- Change persona (e.g. founder_ceo, sales_leader, finance_cfo)
- Change max_domains_per_run and max_total_charge_usd
- Change poll_interval_seconds / max_poll_count
- Rename sheet tabs in Set workflow configuration if needed
- Keep human review before outreach; contact data may be personal data

## Additional info
Named contacts are written to the Results tab; Inputs only stores queue status (READY → final classification).
Actor start POST is never auto-retried (START_UNKNOWN means check Apify Console before resetting the batch).
Default batch size is 5 domains for safe first runs.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Stop and Error

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
