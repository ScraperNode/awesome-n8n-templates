# 🎣 Generate verified local leads from Google Maps with Apify and Google Sheets

> ⚡ **100 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow uses Apify to scrape Google Maps business leads, verify their emails with a live SMTP check, and append only safe-to-send contacts to a Google Sheets spreadsheet.

## How it works
1. Starts when you manually run the workflow.
2. Calls the Apify Google Maps Lead Finder actor to search Google Maps for the configured queries and enrich results with email addresses.
3. Filters the results to keep only leads that include a non-empty primary email address.
4. Sends each primary email to the Apify Email Verifier actor to validate deliverability and return a safe-to-send flag and verification details.
5. Combines the original lead data with the corresponding email verification result.
6. Filters out any leads that are not marked safe to send.
7. Appends the remaining verified leads to a Google Sheets tab with business, contact, and email verification fields.

## Setup
1. Create an Apify personal API token and configure an HTTP Header Auth credential (Header name `Authorization`, value `Bearer <YOUR_APIFY_TOKEN>`) for both Apify HTTP requests.
2. Connect Google Sheets OAuth2 credentials and select your target spreadsheet and sheet tab in the append step.
3. Update the Apify Lead Finder request body (for example `queries`, `resultsDepth`, and `locationCode`) to match your target niche and location.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
