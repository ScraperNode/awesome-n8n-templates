# 🎣 Enrich Google Maps business leads with Scrapeer and Google Sheets

> ⚡ **81 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs a saved Scrapeer Google Maps Leads flow on a daily schedule (or manually), enriches each business with detail-page data, and appends the normalized lead fields to a Google Sheets tab.

## How it works
1. Runs either manually or every day at 08:00 using the schedule trigger.
2. Sets the Google Maps search parameters (search query, location, max results) and the target spreadsheet name for the run.
3. Calls Scrapeer to run a selected Google Maps Leads flow with those input variables and waits for the results.
4. Attaches the original search context to the Scrapeer output for traceability.
5. Parses and deduplicates the returned leads, normalizes fields like rating and review count, and formats phone numbers as sheet-safe text.
6. Appends one row per lead to Google Sheets with columns such as name, category, rating, reviews, address, phone, website, and Google Maps URL.

## Setup
1. Create (or choose) a Google Sheets spreadsheet with a “Leads” tab and columns: Scraped At, Search Query, Location, Name, Category, Rating, Reviews, Address, Phone, Website, and Google Maps URL.
2. Add a Google Sheets Service Account credential in n8n and select the target spreadsheet and sheet tab in the Google Sheets append step.
3. Create and save a Scrapeer Flow based on the Google Maps Leads template, then add your Scrapeer API credential and select that Flow in the Scrapeer step.
4. Update the searchQuery, location, maxResults, and spreadsheetName values to match your lead generation needs, then enable the daily schedule when you are ready.

## 🔗 Nodes Used

Google Sheets, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
