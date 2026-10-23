# 🔬 Start ScraperAPI crawler jobs from webhooks and store results in data tables

> ⚡ **25 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow starts a ScraperAPI crawler job from an incoming webhook request and stores each crawled page returned via a callback webhook into an n8n Data Table.

## How it works
1. Receives a POST request on a webhook with crawl inputs like startUrl, optional includeRegexp, and optional maxDepth.
2. Builds ScraperAPI crawler parameters, including defaults (includeRegexp scoped to the start URL, maxDepth 1, country code, and render setting) and a callback URL for results.
3. Creates a ScraperAPI crawler job and returns the job details in the webhook response.
4. Receives per-page crawl results from ScraperAPI on a second webhook callback endpoint.
5. Filters out job-summary payloads and failed page fetches, then extracts each page’s URL, markdown content, status code, and scrape timestamp.
6. Upserts the parsed page results into an n8n Data Table named crawl_results keyed by URL.

## Setup
1. Create and connect your ScraperAPI credentials in n8n so the workflow can create crawler jobs.
2. Run the manual storage setup once (or ensure it exists) to create the crawl_results Data Table with the required columns.
3. Replace the CALLBACK_URL in the crawl-parameter code with your “Receive crawl results” production webhook URL, and send crawl requests to the “Receive crawl request” webhook URL.

## 🔗 Nodes Used

Webhook, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
