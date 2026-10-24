# 📊 Score Immoweb real estate deals with Gemini and log to Sheets and Slack

> ⚡ **34 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Youtube Video: https://youtu.be/FGzYp8k-ONY

This workflow runs daily or on demand to scrape Immoweb listings via Apify, compare them against historical prices stored in Google Sheets, and uses Google Gemini to label each listing as BUY/MAYBE/AVOID before logging results and sending Slack alerts for notable opportunities.

## How it works
1. Runs on a schedule (7:00) or manually to start the scan with predefined search and notification settings.
2. Calls the Apify Immoweb scraper API to fetch up to the configured number of listings, and posts a Slack warning if the scrape fails.
3. Loads previously seen listings from Google Sheets and combines them with the fresh scrape to de-duplicate, track price history, and calculate features like €/m², comparable medians, discounts, and anomaly flags.
4. Sends each new listing or price-changed listing to Google Gemini with a structured rubric to return a BUY/MAYBE/AVOID verdict, score, reasons, and red flags.
5. Merges the Gemini verdict back into each listing, builds formatted Slack and email-ready messages, and updates/creates the listing row in Google Sheets.
6. Sends a Slack alert for listings that are not rated AVOID and are either new or have at least the configured minimum price drop.

## Setup
1. Create an Apify account, add an API token as an HTTP Header Auth credential, and set the Immoweb search URL and maxItems values in the configuration step.
2. Set up a Google Sheets Service Account credential, share the target spreadsheet with the service account email, and update the sheet ID and sheet tab name used to store listing history.
3. Add a Google Gemini (Google PaLM) API credential for the Gemini model used to generate structured verdicts.
4. Add a Slack API credential and set the target channel name (and any channel ID value used for scrape-failure messages) in the configuration step.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger, Basic LLM Chain, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
