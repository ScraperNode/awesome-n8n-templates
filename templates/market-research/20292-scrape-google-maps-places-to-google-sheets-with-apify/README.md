# 📊 Scrape Google Maps places to Google Sheets with Apify

> ⚡ **86 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow takes a city and search query, scrapes matching Google Maps places using Apify’s Google Maps Scraper, and writes the results (name, rating, reviews, category, address, website, and link) into a newly created Google Sheets spreadsheet.

## How it works
1. Starts when you manually execute the workflow.
2. Sets the search parameters (city, query, and maximum number of places to collect).
3. Creates a new Google Sheets spreadsheet with a “Places” tab named after the search.
4. Runs the Apify Google Maps Scraper actor to collect places matching the query in the specified city.
5. Appends one row per place to Google Sheets with key details including rating, reviews, address, website, category, and Google Maps URL.

## Setup
1. Open Scrape Google Maps with Apify and connect your Apify account with OAuth2. A free Apify account is enough to run the Google Maps Scraper Actor (compass/crawler-google-places).
2. Open Create the spreadsheet and sign in with Google. Add places to the sheet reuses the same Google Sheets credential.
3. In Search settings, set city, query, and maxPlaces.
4. Click Execute workflow, then open spreadsheetUrl in the output of Create the spreadsheet to see your results.

## Requirements
- An Apify account (the free plan works). 
- A Google account with access to Google Sheets.

## Customization
- Raise maxPlaces for longer lists.
- Add a Schedule Trigger to refresh the sheet every week.
- Swap in any other Actor from Apify Store.

## 🔗 Nodes Used

Google Sheets

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
