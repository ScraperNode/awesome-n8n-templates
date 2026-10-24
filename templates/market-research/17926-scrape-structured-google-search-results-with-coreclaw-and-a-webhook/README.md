# 📊 Scrape structured Google search results with CoreClaw and a webhook

> ⚡ **20 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow exposes a webhook that accepts a Google search query, runs the CoreClaw Google Search Scraper Worker via HTTP, and returns normalized organic results (title, URL, snippet, and position) as a structured JSON response.

## How it works
1. Receives a POST request on a webhook with a search query and optional country, language, and max_results values.
2. Validates and formats the incoming payload, applying defaults for country (us), language (en), and max_results (10).
3. Calls the CoreClaw Google Search Scraper Worker API with the formatted parameters using an API key from the CORECLAW_API_KEY environment variable.
4. Extracts the organic results from the CoreClaw response and normalizes each item to position, title, url, displayed_url, and snippet.
5. Returns a JSON webhook response containing the original query context, result count, and the normalized results array.

## Setup
1. Create a CoreClaw account and add your API key to n8n as an environment variable named CORECLAW_API_KEY.
2. Activate the workflow and copy the production webhook URL for the "google-search-scraper" endpoint.
3. Send a POST request to the webhook with a JSON body containing query (or q/keyword) and optionally country, language, and max_results.

## Additional info
Retrieve public web page data using the CoreClaw production-grade Web Data API: https://www.coreclaw.com/?utm_source=google&utm_medium=cpc&utm_campaign=n8&utm_term=&utm_id=n8

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
