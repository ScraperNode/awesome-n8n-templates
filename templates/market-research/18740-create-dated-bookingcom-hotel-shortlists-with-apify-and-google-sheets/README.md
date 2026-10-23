# 📊 Create dated Booking.com hotel shortlists with Apify and Google Sheets

> ⚡ **2 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs a Booking.com hotel search via an Apify Actor for a specific destination and date range, verifies the Actor output and pay‑per‑event charges, then upserts a dated, filterable shortlist of properties into Google Sheets using a stable key per property, dates, and currency.

## How it works
1. Runs manually or on a daily schedule trigger.
2. Validates the destination, check-in/check-out dates, guest settings, language/currency/sort options, run limits, Google Sheets target, and the maximum allowed Apify charge before starting.
3. Runs the Luminar Booking Hotels Scraper Actor on Apify once with a configured maximum total charge.
4. Checks the Apify run status and fetches the Actor’s documented OUTPUT summary via HTTP to confirm coverage state and authoritative pay‑per‑event accounting.
5. Retrieves all items from the Apify dataset (properties plus a single coverage record) using bounded pagination and reconciles counts against the summary.
6. Builds a stable upsert key from the canonical Booking.com property path (with fallbacks), check-in, check-out, and currency, and prepares one row per property.
7. Upserts the prepared rows into Google Sheets and returns a receipt, or returns an explicit no-write receipt when the result is empty, partial, failed, or invalid.

## Setup
1. Install the Apify community node and add an Apify OAuth2 credential for running the Actor and reading its dataset.
2. Add a Google Sheets OAuth2 credential and create or choose a spreadsheet and sheet tab to receive the shortlist.
3. Update the settings for destination, check-in/check-out (replace the placeholders), currency/language/sort options, and the spreadsheet ID and sheet name.
4. Copy the expected header row into the target Google Sheets tab and refresh the Google Sheets node so the column mapping matches.
5. Set an appropriate maxCostPerRunUsd value to cap Apify charges, run the workflow manually to verify the output and receipt, then enable the schedule if needed.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
