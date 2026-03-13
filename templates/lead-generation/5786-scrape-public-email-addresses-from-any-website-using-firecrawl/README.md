# 🎣 Scrape public email addresses from any website using Firecrawl

> ⚡ **3,936 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who's it for

This template is perfect for sales professionals, marketers, and business developers who need to quickly gather contact information from company websites. Whether you're building prospect lists, researching potential partners, or collecting leads for outreach campaigns, this automation saves hours of manual email hunting.

## What it does

This workflow automatically discovers and extracts email addresses from any website by:

- Taking a website URL as input through a simple form
- Using Firecrawl's mapping API to find relevant pages (about, contact, team pages)
- Batch scraping those pages to extract email addresses
- Intelligently handling common email obfuscations like "(at)" and "(dot)"
- Returning a clean, deduplicated list of valid email addresses

The automation handles rate limiting, retries failed requests, and filters out invalid or hidden email addresses to ensure you get quality results.

## How to set up

1. **Get Firecrawl API access**: Sign up at [firecrawl.dev](https://firecrawl.dev) and obtain your API key
2. **Configure credentials**: In n8n, create a new HTTP Header Auth credential named "Firecrawl" with:
   - Header Name: `Authorization`
   - Header Value: `Bearer YOUR_API_KEY`
3. **Import the workflow**: Copy the workflow JSON into your n8n instance
4. **Test the form**: Activate the workflow and test with a sample website URL

## How to customize the workflow

**Search parameters**: Modify the `search` parameter in the map_website node to target different page types (currently searches for "about contact company authors team")

**Extraction limits**: Adjust the `limit` parameter to scrape more or fewer pages per website

**Retry logic**: The workflow includes retry logic with a 12-attempt limit - modify the `check_retry_count` node to change this

**Output format**: The `set_result` node formats the final output - customize this to match your preferred data structure

**Email validation**: The JSON schema in `start_batch_scrape` defines how emails are extracted - modify the prompt or schema for different extraction rules

The workflow is designed to be reliable and handle common edge cases like rate limiting and failed requests, making it production-ready for regular use.

## 🔗 Nodes Used

HTTP Request, Stop and Error, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
