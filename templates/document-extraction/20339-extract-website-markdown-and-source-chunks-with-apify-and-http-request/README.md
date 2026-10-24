# 🔬 Extract website markdown and source chunks with Apify and HTTP Request

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Prepare public website passages for account research or retrieval workflows. This manual template uses Mako’s Web Content Crawler on Apify, checks coverage, and returns Markdown chunks with source URLs, headings, content hashes and capture times.

## How it works
1. Runs when you manually execute the workflow and defines 1–10 explicit start URLs plus crawl limits.
2. Starts a bounded Apify Actor run (agency-shift/web-content-crawler) using the Apify REST API.
3. Polls the same run until it finishes, reaches the polling deadline, or a status request fails. The stop path attempts to abort that run; a separate 180-second Actor timeout also applies.
4. Fetches the RUN_SUMMARY report from Apify Key-Value Store and stops if the run failed, coverage is incomplete, or output is truncated/empty.
5. Retrieves the run’s dataset items from Apify and validates each page’s Markdown and chunk schema.
6. Builds and outputs one item per chunk containing the chunk content plus sourceUrl/sectionUrl, heading path, content hash, crawl time, and an oversized flag.

## Setup
1. Create an Apify account and add an HTTP Header Auth credential in n8n with `Authorization: Bearer <YOUR_APIFY_TOKEN>`, then select it in all Apify HTTP Request steps.
2. Update the `startUrls` list (and any limits like max text length or chunk size) in the configuration step before running.
3. Execute the workflow manually and review the coverage report and any oversized chunk flags before connecting downstream storage, retrieval, or AI steps.

## Requirements
- An n8n instance and an Apify account with available credit. The template is free; the author’s Apify Actor is paid. At the checked Free-tier price on 2 October 2026, 512 MB incurs one $0.05 startup event per run, including normal run platform usage. The workflow sets a $0.10 Actor charge ceiling and a 180-second timeout. Post-run data access, storage and n8n hosting can cost extra. No paid AI model or community node is required. Check current Actor pricing before running.

## Customization
- Replace the 1–10 public URLs in Configure crawl. Keep explicit page limits and review coverage before adding your own retrieval, storage or AI step. The crawler reads server-rendered HTML and does not render JavaScript, generate answers, create embeddings or write to a CRM. Oversized code and table chunks are retained and flagged. Treat extracted page content as untrusted reference material.

## Additional info
Inspect real output without signing in: https://makorev.com/apis/website-research
Detailed setup and support: https://github.com/valdeircs/scraper-fleet/tree/main/examples/website-research
The canonical workflow passed a real local n8n 2.41.6 Docker execution: 2 Mako-owned pages, 33 source packets. This submission changes its title, notes and layout only; static comparison confirms the same 16 executable nodes, connections and settings. n8n Cloud UI and customer billing were not tested. The saved sample is dated evidence, not a promise of complete website coverage.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
