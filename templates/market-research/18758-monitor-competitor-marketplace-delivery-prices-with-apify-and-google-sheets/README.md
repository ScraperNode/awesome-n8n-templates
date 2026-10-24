# 📊 Monitor competitor marketplace delivery prices with Apify and Google Sheets

> ⚡ **7 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs on demand to scrape competitor product listings and prices from DoorDash and Instacart using Apify, then writes the results (name, price, currency, location, keyword) into Google Sheets for easy tracking by location and search term.

## How it works
1. Starts when you manually execute the workflow.
2. Generates a list of location and keyword pairs to monitor.
3. Loops through each location/keyword pair and runs the Apify E-commerce Scraping Tool actor to fetch top delivery marketplace results from DoorDash and Instacart.
4. Adds the source location and keyword back onto each scraped item to keep results traceable.
5. Reduces each item to name, price, currency, location, and keyword.
6. Appends new rows or updates existing rows in Google Sheets, matching on the product Name column.

## Setup
1. Add an Apify OAuth2/API token credential and ensure the workflow can run the `apify/e-commerce-scraping-tool` actor.
2. Add a Google Sheets OAuth2 credential and select the target spreadsheet (documentId) and worksheet tab (sheetName).
3. Edit the locations and keywords list in the code step to match the cities/addresses and search terms you want to track.
4. Ensure your Google Sheet has columns named Name, Price, Currency, Location, and Keyword, with Name used as the matching key for updates.

## Requirements
- Apify account

## Customization
- Swap the manual trigger for a Schedule Trigger to refresh prices daily or weekly. Extend the marketplace list in the Actor input to add Uber Eats or Grubhub, raise `maxDeliveryResults` for broader coverage, or replace Google Sheets with a database node to feed prices into a BI tool.

## 🔗 Nodes Used

Google Sheets

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
