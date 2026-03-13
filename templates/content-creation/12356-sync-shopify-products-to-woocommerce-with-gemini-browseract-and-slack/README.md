# 🎬 Sync Shopify products to WooCommerce with Gemini, BrowserAct and Slack

> ⚡ **89 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Sync Shopify products to WooCommerce with AI enhancement

This workflow automates the process of synchronizing your Shopify catalog to WooCommerce, enriching product data along the way. It uses AI to identify the best external sources (like Amazon or G2) for additional product details, scrapes that data using BrowserAct, synthesizes a high-converting description, and then pushes the enhanced product to your WooCommerce store.

## Target Audience
Dropshippers, e-commerce store owners managing multiple storefronts, and digital marketers looking to automate product data enrichment.

## How it works
1. **Fetch Products**: The workflow starts by retrieving all products from your **Shopify** store.
2. **Classify & Research**: An **AI Agent** analyzes each product title to determine the best source for external data (e.g., physical goods -&gt; Amazon, software -&gt; G2).
3. **Scrape Data**: **BrowserAct** executes a background task to scrape the target site for specifications, reviews, and images.
4. **Enhance Content**: A second **AI Agent** (acting as a copywriter) processes the scraped data to write a compelling HTML description, generate a logical SKU, and format image lists.
5. **Sync to WooCommerce**: The workflow checks if the product already exists in **WooCommerce** via SKU check. If not, it creates a new product with the enriched data.
6. **Error Handling**: If product creation fails, a notification is sent to **Slack**.

## How to set up
1. **Configure Credentials**: Connect your **Shopify**, **WooCommerce**, **Slack**, **BrowserAct**, and **Google Gemini** accounts in n8n.
2. **Prepare BrowserAct**: Ensure the **Shopify to WooCommerce Multi-Store Sync** template is saved in your BrowserAct account.
3. **Configure Notifications**: Open the **Notify user** and **Send Error** nodes to select your preferred Slack channel.
4. **Activate**: Run the workflow manually to start the sync.

## Requirements
* **BrowserAct** account with the **Shopify to WooCommerce Multi-Store Sync** template.
* **Shopify** account (Access Token).
* **WooCommerce** account (API Key/Secret).
* **Google Gemini** account.
* **Slack** account.

## How to customize the workflow
1. **Filter Products**: Add logic after the "Get many products" node to only sync specific collections or tags.
2. **Change AI Persona**: Modify the system prompt in the **Create Product** agent to change the tone of the product descriptions (e.g., more technical vs. more salesy).
3. **Add More Sources**: Update the **Analyze the Products** agent to include other data sources like eBay or Best Buy.

## Need Help?
* [How to Find Your BrowserAct API Key & Workflow ID](https://www.youtube.com/watch?v=pDjoZWEsZlE)
* [How to Connect n8n to BrowserAct](https://www.youtube.com/watch?v=RoYMdJaRdcQ)
* [How to Use & Customize BrowserAct Templates](https://www.youtube.com/watch?v=CPZHFUASncY)

---
### Workflow Guidance and Showcase Video

* #### [One-Click Shopify to WooCommerce Sync with n8n & AI 🛒](https://youtu.be/Ad-Wy9bNVGw)

## 🔗 Nodes Used

Slack, WooCommerce, Shopify, AI Agent, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
