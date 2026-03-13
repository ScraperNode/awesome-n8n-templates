# 🔧 Monitor commodity markets with Apify, DeepL translation & sector impact analysis

> ⚡ **104 views** · 🔧 [Miscellaneous](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Stay ahead of commodity market movements with automated news collection, translation, and sector impact analysis. This workflow monitors Oil, Gold, and Grain markets from global English sources, translates them to Japanese using DeepL, and delivers categorized alerts showing which business sectors are affected.

## Who is this for

- Trading company staff and procurement managers affected by raw material prices
- CFD and commodity futures traders
- Economists and market researchers tracking inflation indicators
- Anyone who needs early warning on geopolitical risks affecting commodities

## What this workflow does

1. Fetches latest news every 4 hours for three commodity categories using Apify
2. Categorizes news and identifies impacted business sectors automatically
3. Translates headlines and summaries from English to Japanese using DeepL
4. Adds unit conversion notes (barrel, troy ounce, bushel) for easier understanding
5. Formats a comprehensive report with sector impact tags
6. Delivers alerts to Discord, Telegram, and Gmail simultaneously

## How to set up

1. Get your Apify API token from apify.com (Settings → Integrations → API)
2. Replace the token placeholder in all HTTP Request nodes
3. Add DeepL API credentials (free tier: 500,000 chars/month)
4. Configure at least one notification channel
5. Set your Telegram Chat ID and email address
6. Activate the workflow

## Requirements

- Apify account (free tier available)
- DeepL API key (free tier available)
- At least one notification channel (Discord, Telegram, or Gmail)

## 🔗 Nodes Used

HTTP Request, Telegram, Discord, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
