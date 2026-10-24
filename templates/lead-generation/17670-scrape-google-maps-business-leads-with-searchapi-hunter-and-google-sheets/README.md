# 🎣 Scrape Google Maps business leads with SearchApi, Hunter, and Google Sheets

> ⚡ **6 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs on demand or weekly to scrape Google Maps business listings via SearchApi.io, optionally enriches each business with an email using Hunter.io, and appends the resulting leads (name, contact details, ratings, and Maps link) to a Google Sheets spreadsheet.

## How it works
1. Runs manually or on a weekly schedule.
2. Builds Google Maps search queries by combining your configured business categories and locations and paginating each combination.
3. Scrapes live Google Maps results through SearchApi.io for each query and page.
4. Extracts and flattens the returned listings into one lead per business, deduplicating entries by place ID and deriving a website domain when available.
5. Optionally uses Hunter.io Domain Search to find email addresses for each business domain and attaches the highest-confidence email to the lead.
6. Appends all leads to a Google Sheets worksheet with the mapped lead fields.

## Setup
1. Install the community node package `@searchapi/n8n-nodes-searchapi` and add your SearchApi.io API credential to the SearchApi node.
2. Add a Google Sheets OAuth credential and select the target spreadsheet and worksheet in the Google Sheets node.
3. Create a header row in your sheet matching the workflow fields (business, category, location, type, address, phone, website, email, rating, reviews, maps_url, place_id).
4. (Optional) Add a Hunter.io API credential to the Hunter node, or remove the Hunter and email-attach steps if you don’t want email enrichment.
5. Update the categories (comma-separated) and locations (semicolon-separated) values in the Settings step, and adjust the pagination depth in the query-building code if you need more results.

## 🔗 Nodes Used

Google Sheets, Hunter, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
