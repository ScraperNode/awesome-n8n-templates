# 🎣 Qualify Google Maps leads with ScrapeHero, OpenAI, and Google Sheets

> ⚡ **5 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow manually scrapes Google Maps business listings via ScrapeHero, paginates through results, deduplicates and normalizes each listing, enriches each business with an OpenAI lead-qualification score, and appends the structured results to Google Sheets.

## How it works
1. Starts when you run the workflow manually.
2. Sends the configured Google Maps search query to ScrapeHero and repeatedly follows the returned next-page URL until pagination ends or the max page limit is reached.
3. Combines results from all pages, splits them into individual businesses, normalizes key Google Maps fields, and removes duplicates.
4. Sends each unique listing and your target service description to OpenAI to produce a structured lead qualification (score, quality, fit, and recommended action).
5. Merges the original Google Maps listing data with the structured AI output and parses it into a single flattened record.
6. Appends one enriched business lead per row to a Google Sheets worksheet.

## Setup
1. Add a ScrapeHero credential with API access and ensure the ScrapeHero Google Maps Search API is enabled for your account.
2. Add an OpenAI credential for the Chat Model used in the workflow (gpt4o-mini) or change the model to one available in your account.
3. Add a Google Sheets credential, then set the target spreadsheet document URL/ID and sheet tab for the append operation.
4. Update the Google Maps search text, targetService, and maxPages values in the search-configuration step before running the workflow.

## 🔗 Nodes Used

Google Sheets, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
