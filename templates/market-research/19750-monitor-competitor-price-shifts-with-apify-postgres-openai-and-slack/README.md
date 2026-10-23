# 📊 Monitor competitor price shifts with Apify, Postgres, OpenAI, and Slack

> ⚡ **20 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs every morning to scrape competitor product pages with Apify, store daily price snapshots in Postgres/Supabase, detect unusual price moves using SQL views, and post actionable repricing commentary (plus scraping health warnings) to a Slack channel.

## How it works
1. Every morning it reads your list of competitor product URLs and sends them to the Apify E-commerce Scraping Tool, which handles anti-bot, proxies and per-retailer extraction. There is no scraper to maintain here.
2. A normalize step reduces per-retailer differences to one shape. Prices are parsed without assuming a locale, so 1.299,99 and $1,299.99 both read correctly. Currency is stored as an ISO code rather than a symbol. Stock keeps three states, because "not reported" is not the same as "out of stock".
3. One row per product per day goes to Postgres. A view compares today against the trailing 30-day average and the 90-day low and reports transitions, not states, so a rival who cuts a price and holds it is reported once rather than every morning. It stays silent for the first 14 days, because a baseline of one day is noise.
4. An AI agent turns what moved into a recommendation and posts it to Slack. A second branch reports which URLs returned nothing, so a broken page cannot look like a quiet market.

## Setup
1. Add the Apify community node. On n8n Cloud, search for it on the canvas; your instance owner must have verified community nodes enabled. Self-hosted, install @apify/n8n-nodes-apify under Settings, Community nodes.
2. Run the schema in supabase_schema.sql (linked in the sticky note) against Postgres 15 or later. It creates a private schema with RLS enabled, so the table is never exposed through Supabase's Data API.
3. Add credentials: Apify, Postgres, a chat model, Slack.
4. Open Pages to watch and replace the example URLs with yours, and set your Slack channel.
5. Check your instance timezone. The schedule says 06:00 and n8n reads that in the instance timezone.
6. Run once manually and confirm a row landed in pricing.price_history.

## Requirements
- An Apify account. 
- Postgres 15 or later, or a Supabase project. Version 15 is the floor because the views use security_invoker.
- A chat model credential and a Slack workspace.

## Customization
- The detection thresholds live in one SQL view: the 5% band against the 30-day average, the 90-day low and high, and the 14-day baseline gate. Change them there and the agent's behaviour follows, because detection is deterministic and the model only writes.
- Swap Slack for email, Sheets or a webhook by replacing one node. To watch a category rather than fixed products, run the Actor in keyword mode once to harvest URLs, then pin them: keyword results drift daily and cannot produce a price series.

## 🔗 Nodes Used

Postgres, Slack, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
