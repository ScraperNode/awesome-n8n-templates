# 🔬 Fetch and cache web pages with Bright Data Web Unlocker and data tables

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This sub-workflow is triggered by other n8n workflows to scrape a URL via Bright Data Web Unlocker, serving results from an n8n Data Table cache when fresh and returning a consistent response object with status, content, and error details.

## How it works
1. Triggers when another n8n workflow calls it as a sub-workflow and passes a URL plus optional format and max-age settings.
2. Validates the URL, normalizes the requested output format, and calculates the cache freshness window.
3. Checks an n8n Data Table cache for the exact URL and returns cached content immediately if it is present and still fresh.
4. On a cache miss, requests the page from Bright Data and inspects the body to detect Bright Data error envelopes, empty responses, or unusually thin content.
5. If the first fetch looks empty or too thin, retries the same Bright Data request with browser rendering enabled to handle JavaScript-heavy pages.
6. Returns a standardized result (including ok, from_cache, rendered, bytes, content, and error) and upserts the latest response into the Data Table for future calls.

## Setup
1. Create a Bright Data Web Unlocker zone and add an HTTP Header Auth credential in n8n for the Bright Data API.
2. Create an n8n Data Table named scrape_cache with at least url, status, content, and fetched_at columns.
3. Update the default unlocker zone name and any default values (format and max_age_minutes) in the workflow settings as needed.
4. In your calling workflow, use Execute Sub-workflow to run this workflow and pass url (and optionally format and max_age_minutes).

## 🔗 Nodes Used

HTTP Request, Execute Workflow Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
