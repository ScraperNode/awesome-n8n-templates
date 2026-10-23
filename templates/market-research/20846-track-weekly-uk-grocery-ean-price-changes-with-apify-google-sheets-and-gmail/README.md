# 📊 Track weekly UK grocery EAN price changes with Apify, Google Sheets and Gmail

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs every Monday to price a fixed list of grocery EANs using the UK Supermarket Price Scraper on Apify, stores weekly price history in Google Sheets, compares results with the most recent prior week, and emails you via Gmail only when prices move beyond a configurable percentage threshold.

## How it works
1. Runs every Monday at 08:00 on a schedule trigger.
2. Builds and validates a basket request from the EAN list (deduplicated and limited to 200 items) and routes invalid lists to an email problem report.
3. Sends the basket to the Apify Actor Standby `/basket` endpoint to retrieve weekly-snapshot prices (optionally including loyalty prices).
4. Validates the HTTP response and snapshot freshness, continuing only when usable pricing data is returned and otherwise emailing a plain-English problem report.
5. Flattens the basket pricing response into one row per retailer and matched EAN, then reads the full existing price history from Google Sheets.
6. Compares this week’s effective prices against the latest earlier week per retailer and EAN, prepares rows to append (if the week is not already recorded), and calculates price-move alerts based on the configured threshold.
7. Appends new rows to Google Sheets and, when there are significant movers or items no longer priced, sends an HTML alert email via Gmail.

## Setup
1. Create an Apify API token with account-level permission to run Actors and add it as an HTTP Header Auth credential using `Authorization: Bearer <token>`.
2. Add a Google Sheets OAuth2 credential, set `sheetDocumentId` and `sheetName` in the Settings node, and ensure the target sheet tab has the required header columns in the correct order.
3. Add a Gmail OAuth2 credential and set the alert recipient email address in `alertTo` in the Settings node.
4. Update the EAN list, `thresholdPct`, and `includeLoyalty` options in the Settings node, then run the workflow once manually to record a baseline week before activating the schedule.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
