# 🎣 Discover and enrich B2B leads with Google Places and Google Sheets

> ⚡ **0 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow collects B2B prospects by searching Google Places for a niche and location, then safely enriches each business by scraping its website (optionally respecting robots.txt) to extract contact details and social links, and upserts verified records into Google Sheets.

## How it works
1. Starts from a manual run or a public n8n Form submission that captures niche, city, country, result limit, scraping depth, and robots.txt preference.
2. Validates and normalizes the inputs, builds the Google Places text query, and initializes pagination state.
3. Calls the Google Places API (Text Search) and paginates through results until it reaches the configured maximum or hits a controlled stop condition.
4. For each returned place, prepares a per-business enrichment job, normalizes and validates the website domain to prevent unsafe requests, and optionally fetches and evaluates robots.txt before scraping.
5. Requests the business homepage and a small set of internal pages (basic or expanded depth) to extract emails, phone numbers, WhatsApp links, social profiles, and selected JSON-LD fields with source URLs.
6. Builds a verified prospect record with confidence and status labels, keeps only the permanent schema, and upserts it into Google Sheets using Place ID or (if missing) the normalized domain as the deduplication key.
7. Produces an execution summary with counts by status (complete, partial, blocked, no website, and controlled errors).

## Setup
1. Create a Google Places API key and set it as the environment variable GOOGLE_PLACES_API_KEY in your n8n instance.
2. Connect Google Sheets credentials and replace CONFIGURE_SPREADSHEET_ID with your target spreadsheet ID.
3. Ensure your spreadsheet has a sheet named “Prospectos” with columns matching the workflow’s output fields (including Place ID and Dominio normalizado for upserts).
4. If using the form trigger, copy the generated form URL path (descubridor-prospectos-b2b) and share it with users who will submit prospecting requests.

## 🔗 Nodes Used

Google Sheets, HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
