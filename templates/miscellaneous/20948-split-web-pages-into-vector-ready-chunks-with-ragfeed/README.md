# 🔧 Split web pages into vector-ready chunks with Ragfeed

> ⚡ **0 views** · 🔧 [Miscellaneous](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs manually to send a webpage URL to the Ragfeed scraping API, which returns the page content split into token-bounded text chunks, then outputs one n8n item per chunk ready for embedding and storage in a vector database.

## How it works
1. Runs when you execute the workflow manually.
2. Sets the target webpage URL and the maximum chunk size in tokens.
3. Sends a POST request to the Ragfeed API (/v2/scrape) to scrape the URL and return the content in chunk format.
4. Splits Ragfeed’s data.chunks array into one item per chunk so each record can be embedded or stored independently.

## Setup
1. Create an n8n Header Auth credential that sends an Authorization: Bearer <your Ragfeed API key> header.
2. Select that credential in the HTTP request that calls https://api.ragfeed.de/v2/scrape.
3. Update the URL and maxTokens values to match the page you want to process and your preferred chunk size.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
