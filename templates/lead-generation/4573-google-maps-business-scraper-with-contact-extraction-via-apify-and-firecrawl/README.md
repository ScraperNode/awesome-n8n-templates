# 🎣 Scrape Google Maps businesses and contacts with CoreClaw, Firecrawl and Google Sheets

> ⚡ **30,020 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow automatically scrapes Google Maps business data using [CoreClaw](https://www.coreclaw.com/coreclaw/google-maps-scraper?utm_source=google&utm_medium=referral&utm_campaign=n8n&utm_term=n8n&utm_id=n8n) and enriches it with website contacts via Firecrawl. It supports two parallel modes: place data + website enrichment, or place data + built-in leads enrichment.

## How it works
1. The workflow triggers every 30 minutes using the Schedule Trigger, sets the enrichment platform parameter, and reads pending queries from a dedicated Google Sheet.
2. It routes queries via an IF node to CoreClaw scraping jobs: one branch handles basic place scraping followed by Firecrawl website HTML scraping and email extraction, while the other performs place scraping with CoreClaw’s built-in leads enrichment.
3. Async jobs are polled until completion, results are split and appended to multiple Google Sheets, and queries are marked as processed.
4. Batching ensures reliable processing of website enrichment without memory or rate limit issues.

## Setup
1. Configure CoreClaw and Firecrawl API credentials in n8n using Bearer Authentication.
2. Update the main Google Sheets document ID and all related sheet names (Query, Data, Details, Leads, etc.) in the respective nodes.
3. Customize search keywords, base locations, and result limits directly in the CoreClaw HTTP Request nodes or by updating the source sheet.
4. Activate the workflow, run a manual test execution first, and verify data is correctly saved before enabling the schedule.

## Requirements
- CoreClaw API key (recommended: [CoreClaw Google Maps Lead Finder](https://www.coreclaw.com/coreclaw/google-maps-scraper?utm_source=google&utm_medium=referral&utm_campaign=n8n&utm_term=n8n&utm_id=n8n))
- Firecrawl API key
- Google Sheets with write access

## Customization
- Change keywords/locations/max_results in the CoreClaw HTTP Request nodes
- Adjust batch size or add more output fields
- Modify routing logic in the IF node for new enrichment types

## Additional info
Handles async jobs with polling loops for reliability. Perfect for scalable lead generation. Monitor early executions for rate limits and tune timeouts as needed. Tags: coreclaw, google-maps, firecrawl.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
