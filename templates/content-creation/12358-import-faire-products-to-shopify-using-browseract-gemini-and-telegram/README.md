# 🎬 Import Faire products to Shopify using BrowserAct, Gemini, and Telegram

> ⚡ **25 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Import products from Faire to Shopify using BrowserAct, Gemini and Telegram

This workflow acts as an automated dropshipping assistant. It allows you to send product links from Faire.com to a Telegram bot, which then scrapes the product data, rewrites it for SEO using AI, and imports it directly into your Shopify store—handling images, pricing, and descriptions automatically.

## Target Audience
Dropshippers, e-commerce store owners, and inventory managers sourcing products from Faire.

## How it works
1. **Receive Link**: You send a Faire product URL to your **Telegram** bot.
2. **Analyze Input**: An **AI Agent** classifies your message to determine if it's a product import request or just a chat.
3. **Scrape Product**: **BrowserAct** executes a background task to scrape the product's title, description, price, and images from the provided URL.
4. **Human Verification (CAPTCHA)**: If the scraper hits a CAPTCHA, the workflow pauses and alerts you on Telegram. Once you solve it, the workflow resumes automatically.
5. **AI Enhancement**: A second **AI Agent** (using Google Gemini) rewrites the product title and description to be SEO-friendly and sales-oriented, formatting it in HTML.
6. **Sync to Shopify**: The workflow creates the product in **Shopify**, adds the correct variant pricing/SKU, and uploads all scraped images.

## How to set up
1. **Configure Credentials**: Connect your **Telegram**, **Shopify**, **BrowserAct**, and **Google Gemini** accounts in n8n.
2. **Prepare BrowserAct**: Ensure the **Product Importer Bot for Shopify** template is saved in your BrowserAct account.
3. **Configure Telegram**: Ensure your bot is created via BotFather and the API token is added to the Telegram credentials.
4. **Activate**: Turn on the workflow.
5. **Test**: Send a Faire product link to your bot to start the import process.

## Requirements
* **BrowserAct** account with the **Product Importer Bot for Shopify** template.
* **Shopify** account (Access Token with write_products permission).
* **Telegram** account (Bot Token).
* **Google Gemini** account.

## How to customize the workflow
1. **Change Pricing Logic**: Add a **Set** node before the "Add Price" node to increase the scraped price by a percentage (markup) before importing.
2. **Translate Content**: Modify the system prompt in the **Analyzing Products** agent to translate the description into another language during the rewrite.
3. **Add More Fields**: Update the **Analyzing Products** agent to extract additional data like "Material" or "Dimensions" and map them to Shopify Metafields.

## Need Help?
* [How to Find Your BrowserAct API Key & Workflow ID](https://www.youtube.com/watch?v=pDjoZWEsZlE)
* [How to Connect n8n to BrowserAct](https://www.youtube.com/watch?v=RoYMdJaRdcQ)
* [How to Use & Customize BrowserAct Templates](https://www.youtube.com/watch?v=CPZHFUASncY)

---
### Workflow Guidance and Showcase Video

* #### [How to Build a Shopify Product Importer with n8n & BrowserAct (No-Code)](https://youtu.be/1Q9-XGlaoFA)

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Shopify, AI Agent, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
