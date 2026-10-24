# 🎣 Enrich Google Maps business and lead data with CoreClaw and Google Sheets

> ⚡ **96 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs every 30 minutes to start a [CoreClaw Google Maps](https://www.coreclaw.com/coreclaw/google-maps-scraper?utm_source=google&utm_medium=referral&utm_campaign=n8n&utm_term=n8n&utm_id=n8n) scraping and enrichment job, then saves the returned business details and enriched lead contacts into two Google Sheets tabs.

## How it works
1. Runs every 30 minutes on a schedule trigger.
2. Reads rows from a Google Sheets "Query" tab where the Status column is set to false.
3. Starts an asynchronous CoreClaw Google Maps Scraper run via the CoreClaw API using the configured search parameters.
4. Polls the CoreClaw run status until it returns succeeded.
5. Fetches the completed run results from CoreClaw and splits the list into individual places.
6. Appends each place’s business details (name, category, address, phone, website, emails, and social links) to a "CoreClaw Data" tab in Google Sheets.
7. Splits and appends each place’s leads_enrichment records (contact and company fields) to a "CoreClaw Leads" tab in Google Sheets.

## Setup
1. Create a Google Sheets OAuth2 connection and select the target spreadsheet and the "Query", "CoreClaw Data", and "CoreClaw Leads" sheets.
2. Create an HTTP Bearer Auth credential with your CoreClaw API token for the CoreClaw API requests.
3. Ensure your "Query" sheet includes a Status column with false for rows you want processed, and update the CoreClaw request body parameters (keywords, base_location, max_results, and lead settings) to match your use case.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
