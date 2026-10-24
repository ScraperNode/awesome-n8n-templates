# 🎣 Enrich company websites from Google Sheets with emails and phones using Apify

> ⚡ **2 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs manually to read company websites from Google Sheets, sends the unique domains to Apify’s Contact Details Scraper to extract contact details and social profiles, and then writes the enriched results back to a Google Sheets results sheet.

## How it works
1. Runs when you click Test workflow.
2. Reads rows from a Google Sheets worksheet and extracts website values from common columns (website/url/domain).
3. Normalizes the values to domains, removes duplicates, and builds a single list of unique websites.
4. Sends the website list to Apify’s Contact Details Scraper (actor jipdiW9Rwbp1Lruzx) with a configurable page limit and spend cap, and retrieves the resulting dataset.
5. Flattens the scraper output into one spreadsheet-friendly row per website (email, phones, socials, contact links, provider, and status).
6. Appends the flattened rows to a Google Sheets results worksheet.

## Setup
1. Add an Apify API token credential for the Apify community node and ensure you have access to the Contact Details Scraper actor (jipdiW9Rwbp1Lruzx).
2. Connect your Google Sheets account and set the input spreadsheet/worksheet in the Read operation.
3. Set the destination spreadsheet/worksheet in the Append operation and ensure it has columns that match (or can auto-map) the flattened output fields.
4. Optionally adjust maxPagesPerWebsite and maxCostUsd in the Settings step to control crawl depth and total spend.

## Requirements
- Apify account (free plan works). The Contact Details Scraper bills only for websites where an email or phone is found (about $3 per 1,000), and each run is capped by maxCostUsd. Google Sheets account.

## Customization
- Run it on a Schedule trigger to enrich new rows weekly, add a Filter to keep only rows with an email, or send the results to Airtable or your CRM instead of Google Sheets.

## Additional info
Uses the verified Apify community node (@apify/n8n-nodes-apify). On self-hosted n8n, install it from Settings > Community nodes. Contact details come only from public business websites; follow CAN-SPAM, GDPR and similar rules when contacting leads.

## 🔗 Nodes Used

Google Sheets

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
