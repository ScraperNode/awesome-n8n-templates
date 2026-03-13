# 📊 Discover viral social media trends with Gemini Flash & Apify scraping

> ⚡ **818 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.

## Description

## How it works
This workflow is a professional-grade market intelligence tool designed to bridge the gap between search interest and social media engagement. It automates the end-to-end process of trend discovery and content strategy.

1. **Detection:** Polls Google Trends RSS daily for rising regional search queries.
2. **Parallel Extraction:** Concurrently triggers industrial-grade **Apify** actors to scrape TikTok, Instagram, and X (Twitter) without the risk of account bans.
3. **Data Aggregation:** Uses custom JavaScript logic to clean and merge disparate data points, optimizing them for LLM processing.
4. **AI Analysis:** **Google Gemini Flash** analyzes the data to identify core topics, sentiment, and trend strength.
5. **Granular Delivery:** Delivers individual, structured reports for each identified trend directly to **Discord** via Webhooks.

## Set up steps
1. **API Credentials:** Prepare your **Apify API Token** and **Google Gemini API Key**.
2. **Discord Setup:** Create a Webhook in your Discord server and paste the URL into the Discord node.
3. **Regional Configuration:** Set your target country code (e.g., `JP`, `ID`, `US`) in the **"Edit Fields"** node at the start of the workflow.
4. **Node Settings:** Ensure all scraper nodes are set to "Continue on Fail" to maintain workflow resilience.

## Requirements
* Apify Account.
* Google Gemini API Key.
* Discord Server for report delivery.

## 🔗 Nodes Used

HTTP Request, Discord, Schedule Trigger, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
