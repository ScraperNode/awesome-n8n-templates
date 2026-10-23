# 📊 Score Zillow investment properties with ScrapeUnblocker, Gemini, and Google Sheets

> ⚡ **11 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs every 4 hours to scrape Zillow listings from a defined search URL using ScrapeUnblocker, deduplicates them against an existing Google Sheet, and uses Google Gemini to rate each new property as an investment before logging the results back to Google Sheets.

## How it works
1. Runs every 4 hours on a schedule.
2. Reads previously saved Zillow listings from Google Sheets to use their URLs for deduplication.
3. Scrapes the configured Zillow search results page via ScrapeUnblocker and extracts listing details from the page’s schema.org JSON-LD.
4. Filters out listings whose URLs already exist in the Google Sheet and keeps only new listings.
5. Processes each new listing one by one and asks Google Gemini to generate a 1–10 investment rating with a one-sentence reason.
6. Appends each scored listing (address, URL, price, beds, sqft, location, scrape time, and AI output) to the same Google Sheet.

## Setup
1. Add Google Sheets credentials and select the target spreadsheet and sheet for both reading existing rows and appending new results.
2. Add ScrapeUnblocker credentials and confirm the proxy country and CSS selector settings match the Zillow page you want to scrape.
3. Add Google Gemini credentials in the Google Gemini Chat Model node.
4. Update the Zillow search URL in the Set Search URL step to your desired region, filters, and map bounds.

## 🔗 Nodes Used

Google Sheets, Schedule Trigger, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
