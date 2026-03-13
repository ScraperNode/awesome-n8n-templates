# 📊 Telegram shopping assistant: Amazon product search with Apify & OpenRouter AI

> ⚡ **1,008 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Automate Amazon searches to Telegram with AI-powered scraping
This workflow connects Amazon product lookups to Telegram using AI-enhanced scraping and automation. It lets users send a product name to a Telegram bot and instantly receive pricing, discount, and product links — all pulled dynamically from Amazon.

## Who’s it for
- Amazon affiliates
- Telegram shopping groups
- Product reviewers & resellers
- Deal-focused communities
- Anyone wanting fast price checks without browsing

## How it works
- Telegram Trigger receives messages from the user.
- AI Classifier (via OpenRouter & LangChain) detects whether the user is asking for a product.
- If yes, it sends the query to Apify's Amazon Scraper to fetch real product listings.
- The scraped data (price, discount, rating, link) is formatted into a Telegram response.
- If not a product query, an AI fallback response is sent instead.

## Requirements
- Telegram Bot Token
- Apify API Token
- OpenRouter API Key (or compatible LLM provider)

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, AI Agent, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
