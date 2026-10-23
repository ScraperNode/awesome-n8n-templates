# 🎣 Scrape and enrich Google Maps business leads with ScrapeUnblocker and Google Sheets

> ⚡ **14 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow scrapes Google Maps search results for a chosen keyword and city using ScrapeUnblocker, extracts and deduplicates business leads, reverse-geocodes each listing’s coordinates with OpenStreetMap Nominatim, and appends the enriched lead data to Google Sheets.

## How it works
1. Runs manually when you click Execute workflow.
2. Sets the target search keyword and city and builds the corresponding Google Maps search URL.
3. Uses ScrapeUnblocker to fetch the Google Maps results page HTML.
4. Parses the HTML to extract lead details such as business name, rating, review count, category, phone, website, and latitude/longitude.
5. Cleans the extracted leads (including normalizing phone numbers) and removes duplicates based on business name.
6. Sends each lead’s latitude/longitude to OpenStreetMap Nominatim Reverse Geocoding to retrieve a structured address, postcode, and a simple confidence flag.
7. Appends the enriched lead record to a Google Sheets worksheet.

## Setup
1. Add ScrapeUnblocker credentials in the ScrapeUnblocker node.
2. Add Google Sheets OAuth credentials and confirm the target spreadsheet, sheet name (Leads), and column mapping in the Google Sheets append step.
3. Update the keyword and city values to match your lead search, or replace them with dynamic inputs.
4. Ensure the OpenStreetMap Nominatim request includes a valid User-Agent header and adjust it to your contact details for compliance.

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
