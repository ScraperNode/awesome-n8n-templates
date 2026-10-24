# 🎣 Enrich Google Maps business leads with emails using SerpApi and Airtable

> ⚡ **44 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow pulls Google Maps business results from SerpApi based on search queries stored in Airtable, visits each business website to extract contact emails, and adds the enriched business records back into Airtable.

## How it works
1. Runs manually and searches Airtable for Google Maps scrape queries (search term and GPS coordinates).
2. Paginates each query (start offsets) and calls SerpApi’s Google Maps Search API to fetch local business results.
3. Cleans and deduplicates the SerpApi results, then keeps only businesses that include a website URL.
4. Generates a prioritized list of pages to check per website (homepage plus common /contact and /about variations) and requests each page over HTTP with redirects enabled.
5. Extracts email addresses from the returned HTML, filters out placeholders and suspicious/system emails, and stops further page checks once a valid email is found (or records a “Website Down”/no-email outcome).
6. Merges the extracted email back into the original Google Maps business data, removes unneeded fields, and upserts the final record into Airtable.

## Setup
1. Add a SerpApi credential and ensure your SerpApi plan supports Google Maps Search API requests.
2. Add an Airtable Personal Access Token credential with access to the bases/tables used for “Google Maps Scrape Queries” (input) and “Google Maps Scraping” (output).
3. Update the Airtable base/table IDs and the expected fields for the query table (for example, “Search Query” and “GPS Coordinates”).
4. Review the Airtable upsert matching field (position) and adjust it if you need a different unique key to prevent unwanted overwrites.

## 🔗 Nodes Used

Airtable, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
