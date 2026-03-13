# 🔬 Convert URL HTML to markdown format and get page links

> ⚡ **4,710 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

## Use Case
Transform web pages into AI-friendly markdown format:
- You need to process webpage content for LLM analysis
- You want to extract both content and links from web pages
- You need clean, formatted text without HTML markup
- You want to respect API rate limits while crawling pages

## What this Workflow Does
The workflow uses Firecrawl.dev API to process webpages:
- Converts HTML content to markdown format
- Extracts all links from each webpage
- Handles API rate limiting automatically
- Processes URLs in batches from your database

## Setup
1. Create a [Firecrawl.dev](https://www.firecrawl.dev/) account and get your API key
2. Add your Firecrawl API key to the HTTP Request node's Authorization header
3. Connect your URL database to the input node (column name must be "Page") or edit the array in `Example fields from data source`
4. Configure your preferred output database connection

## How to Adjust it to Your Needs
- Modify input source to pull URLs from different databases
- Adjust rate limiting parameters if needed
- Customize output format for your specific use case


More templates and n8n workflows &gt;&gt;&gt; [@simonscrapes](https://www.youtube.com/@simonscrapes?sub_confirmation=1)

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
