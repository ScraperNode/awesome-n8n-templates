# 📊 Monitor competitor pricing with Firecrawl, Anthropic, Airtable and Slack

> ⚡ **14 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs every 6 hours to monitor competitor product pages stored in Airtable, scrape current price and stock with Firecrawl, extract structured pricing with Anthropic, send priority-based alerts to Slack, and log changes to Google Sheets while syncing the latest values back to Airtable.

## How it works
1. A Schedule trigger fires every 6 hours and fetches your full competitor list from Airtable.
2. Each record is processed one at a time through a SplitInBatches loop.
3. Firecrawl scrapes the live product page and returns the content as Markdown.
4. The Anthropic API extracts structured pricing data (price, currency, stock status) using tool use. A built-in deduplication check skips items where nothing has changed since the last run.
5. Each item is assigned an alert priority — Critical, High, Medium, Info, or Skip — based on the price delta and stock change thresholds.
6. Critical and High events trigger an AI-generated countermeasure strategy followed by an immediate Slack alert. Medium events get a lighter Slack notification. Info items pass through silently. Skipped items return directly to the loop.
7. All actionable events update the Airtable record with the latest price and stock status, and append a timestamped row to Google Sheets for historical trend tracking.

## Setup
1. Connect credentials for Airtable, Firecrawl, Anthropic, Slack, and Google Sheets.
2. Replace the Airtable Base ID and Table ID with your own and ensure records include fields for Competitor Name, Product Name, Product URL, Last Price, and In Stock.
3. Set the Slack channel ID in both Slack message steps.
4. Set the Google Sheets document ID and sheet tab name used for the historical append log.

## Requirements
- Firecrawl API account (for product page scraping)
- Anthropic API key with access to claude-3-5-sonnet-20241022
- Airtable base with the required competitor table and fields
- Slack workspace with a channel configured for alerts
- Google Sheets document with a pre-created tab for historical logging

## Customization
- Adjust the schedule interval in the Every 6 Hours node to scan more or less frequently.
- Modify the priority thresholds in Extract Price & Build Delta — currently Critical is ≤ -15%, High is ≤ -5%.
- Update the Slack message templates in both Slack nodes to match your team's alert format.
- Extend the Google Sheets columns to capture additional fields such as currency or stock count.

## Additional info
- The deduplication logic compares both price and stock status against the previous run. If neither has changed, the item is skipped entirely and no write operations occur.
- If Firecrawl fails to return content or the Anthropic API returns no valid price, the item is marked _skip and passed back to the loop without crashing the workflow.
- The workflow does not include an error trigger node in this version. For production use, consider adding one to catch and log node-level failures.

## 🔗 Nodes Used

Airtable, Google Sheets, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
