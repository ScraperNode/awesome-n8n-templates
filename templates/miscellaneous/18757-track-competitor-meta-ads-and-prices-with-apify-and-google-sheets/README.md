# 🔧 Track competitor Meta ads and prices with Apify and Google Sheets

> ⚡ **11 views** · 🔧 [Miscellaneous](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs on demand to discover competitor Facebook pages, fetch their active ads, extract advertised product URLs, scrape product details and pricing via Apify, and then append or update one row per product in Google Sheets.

## How it works
1. Triggers manually to start a competitor research run.
2. Uses Apify’s Facebook Search Scraper to find Facebook pages for the configured categories and locations.
3. Aggregates the discovered page URLs and uses Apify’s Facebook Ads Library Scraper to pull active ads for those pages.
4. Extracts and aggregates product link URLs found in the ad cards.
5. Uses Apify’s E-commerce Scraping Tool to scrape each product page for name, description, price, currency, and an ID.
6. Appends or updates matching rows in Google Sheets using the product ID as the unique key.

## Setup
1. Add an Apify API token credential in n8n and select it in each Apify node.
2. Add a Google Sheets OAuth credential and select the target spreadsheet and sheet in the Google Sheets node.
3. Create a Google Sheet with columns for Product name, ID, Description, Price, and Currency (note the workflow maps to “Product name ” and “Currency ” with trailing spaces).
4. Update the Facebook Search Scraper input (categories, locations, and resultsLimit) to match your market and competitors.

## 🔗 Nodes Used

Google Sheets

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
