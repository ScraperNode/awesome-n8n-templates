# 📊 Save Amazon reviews to Notion with ScraperAPI and OpenAI GPT-5 Mini

> ⚡ **6 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs every Monday to scrape recent Amazon product reviews via ScraperAPI, uses OpenAI to classify sentiment and feature tags, and then saves each new review into a Notion database with structured properties and a formatted page body.

## How it works
1. Runs every Monday at 8am and loads a configured watchlist of Amazon ASINs plus Notion and locale settings.
2. Fetches Amazon product data (including recent reviews) for each ASIN using ScraperAPI.
3. Extracts reviews from each response and only forwards reviews that have not been seen in previous runs, capped per ASIN.
4. Sends each new review to OpenAI to return a JSON sentiment label, 1–4 feature tags, and a one-sentence summary.
5. Normalizes the AI output, clips long review text to fit Notion limits, and converts the review date into an ISO date.
6. Creates a new page in the target Notion database for each review, filling properties like Sentiment, Stars, Feature tags, Product, Review date, and metadata.

## Setup
1. Add ScraperAPI credentials and ensure the ScraperAPI Amazon Product (SDE) endpoint is available for your account.
2. Add Notion API credentials, share the target database with your Notion integration, and copy the database ID into the watchlist and setup configuration.
3. Manually run the “Run once — set up Notion columns” path to create/ensure the required Notion database properties (Sentiment, Stars, Feature tags, Product, Review date, Verified, Reviewer, ASIN, AI summary).
4. Add an OpenAI API credential and confirm the selected chat model is available in your OpenAI account.
5. Update the ASIN list, locale settings (tld and countryCode), and the max new reviews per ASIN to match your products and desired volume.

## 🔗 Nodes Used

HTTP Request, Notion, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
