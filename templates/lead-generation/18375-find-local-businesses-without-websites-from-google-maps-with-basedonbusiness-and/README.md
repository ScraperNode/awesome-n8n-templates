# 🎣 Find local businesses without websites from Google Maps with BasedOnBusiness and Google Sheets

> ⚡ **146 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow collects Google Maps business leads via BasedOnBusiness, filters out any listings that already have a website, and appends the remaining prospects to Google Sheets using a short input form for category, location, and lead count.

## How it works
1. Receives form submissions that specify a business category, city, country code, and the number of leads to collect.
2. Validates and normalizes the inputs to prevent invalid searches.
3. Starts a BasedOnBusiness Google Maps scraping job and uses an idempotency key to avoid duplicate billing on retries.
4. Polls BasedOnBusiness every 15 seconds until the job status is done, stopping with an error if it fails, is cancelled, or runs longer than 15 minutes.
5. Downloads up to 500 results from BasedOnBusiness, splits them into individual businesses, and keeps only listings where the website field is empty.
6. Prepares lead fields (including a direct Google Maps URL) and appends one row per prospect to a selected Google Sheets worksheet.

## Setup
1. Create a BasedOnBusiness account and add an HTTP Bearer Auth credential in n8n with your API key (with scrapes:read and scrapes:write scopes).
2. Connect a Google Sheets account in n8n and select the target spreadsheet and worksheet in the Google Sheets append step.
3. Ensure your sheet has matching column headers (Business Name, Phone, Address, Category, Rating, Reviews, Google Maps URL, City, Country) before running the workflow.

## Requirements
- A BasedOnBusiness account and an API key with the scrapes:read and scrapes:write scopes — https://www.basedonb.com/en/docs

## Customization
- Swap Google Sheets for your CRM — every lead field is built in the single Prepare Lead Fields node. Or change the filter to target a low rating or few reviews instead, and the same workflow becomes a reputation-management prospector.

## Additional info
A search costs BasedOnBusiness credits equal to the number of leads you request, not the number of businesses that survive the website filter, so start small. Businesses without a website rarely publish an email address, so phone is the contact channel for these prospects.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Filter, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
