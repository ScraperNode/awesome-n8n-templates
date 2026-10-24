# 📊 Track and classify Facebook ad angles with Apify, OpenAI, and Supabase

> ⚡ **8 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
>
> <a href="https://scrapernode.com/facebook"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow manually scrapes Facebook Ad Library results via Apify, normalizes each ad and extracts destinations, classifies the ad’s persuasion angle with OpenAI, stores ads and related Shopify product data in Supabase, and embeds ad copy into a Supabase vector store for semantic search.

## How it works
1. Starts when you manually run the workflow and defines the Facebook Ad Library search URL and maximum number of ads to scrape.
2. Runs the Apify Facebook Ad Library Scraper actor to collect ad details (copy, creatives, reach, and dates) from the provided search URL.
3. Normalizes each ad into a consistent row, unwraps Facebook redirect links to the real destination, derives the destination domain, and builds a Shopify probe URL.
4. Sends each ad’s text to OpenAI to label its primary persuasion angle (for example urgency, social proof, or problem solution).
5. Inserts the enriched ad record into a Supabase `ads` table and, for successfully inserted rows, embeds the ad copy with OpenAI embeddings into a Supabase `documents` vector store with metadata.
6. For ads with a valid Shopify probe URL, requests `/products.json` (or a specific `/products/<handle>.json`), deduplicates products by product ID, and inserts them into a Supabase `products` table.

## Setup
1. Create and select an Apify API token credential for the Apify node and ensure the workflow uses the `curious_coder/facebook-ads-library-scraper` actor.
2. Add an OpenAI API credential for both the ad-angle classification and embeddings steps.
3. Add a Supabase credential and create the `ads`, `products`, and `documents` tables in your Supabase project (with `pgvector` enabled for the vector store).
4. Update the Facebook Ad Library search URL and `maxAds` values in the dataset input step to match your keyword/country and desired scrape size.

## Requirements
- Apify, OpenAI and Supabase accounts.

## Customization
- Swap the Ad Library URL for a different keyword, country, or product category. Edit the classification prompt to use angle labels for your niche, or add a Slack node after **Insert ad row** to alert the team on a new high-reach ad.

## 🔗 Nodes Used

HTTP Request, Supabase, Filter, Embeddings OpenAI, Supabase Vector Store, Default Data Loader

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
