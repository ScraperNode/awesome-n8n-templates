# 🎬 Create WooCommerce products and WordPress posts from product links via Telegram and BrowserAct

> ⚡ **97 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Automate product creation from links to WordPress & WooCommerce using Telegram & BrowserAct

This workflow is a powerful e-commerce assistant that takes a raw product link (from any online store) and automatically creates optimized listings for your own platforms. It uses AI to write persuasive sales copy and blog articles, generates SEO-friendly image metadata, and syncs everything directly to WooCommerce and WordPress.

## Target Audience
Dropshippers, affiliate marketers, and e-commerce store owners who want to scale their product catalog and content marketing effortlessly.

## How it works
1. **Analyze Intent**: The workflow receives a message via **Telegram**. An **AI Agent** classifies it to see if it's a product link or a casual chat.
2. **Scrape Details**: If a link is detected, **BrowserAct** executes a background task to scrape the product's title, price, description, images, and reviews.
3. **AI Strategy**: A "Senior Copywriter" AI (using OpenAI/Gemini) processes the raw data. It writes a high-converting WooCommerce description (with HTML formatting), drafts an engaging blog post review, and generates SEO filenames/alt-text for all images.
4. **Sync to Store**:
    * **WooCommerce**: Creates the product, sets the price, and updates the description.
    * **WordPress**: Publishes the AI-written blog article reviewing the product.
5. **Optimize Images**: The workflow loops through every product image, updating them in WooCommerce with the new SEO-friendly metadata.

## How to set up
1. **Configure Credentials**: Connect your **Telegram**, **WooCommerce**, **WordPress**, **BrowserAct**, **Google Gemini**, and **OpenRouter** accounts in n8n.
2. **Prepare BrowserAct**: Ensure the **WordPress & WooCommerce Product Management** template is saved in your BrowserAct account.
3. **Configure Telegram**: Create a bot via BotFather and add the API token to your Telegram credentials.
4. **Activate**: Turn on the workflow.
5. **Test**: Send a product link (e.g., from AliExpress or Amazon) to your bot to see it magically appear in your store and blog.

## Requirements
* **BrowserAct** account with the **WordPress & WooCommerce Product Management** template.
* **WooCommerce** account (Consumer Key/Secret).
* **WordPress** account (Application Password).
* **Telegram** account (Bot Token).
* **Google Gemini** & **OpenRouter** accounts.

## How to customize the workflow
1. **Change Blog Tone**: Modify the system prompt in the **Generate response** agent to change the writing style (e.g., "Professional Reviewer" vs. "Hypebeast").
2. **Add Social Media**: Add a **Twitter** or **LinkedIn** node at the end to automatically tweet the new blog post link.
3. **Price Markup**: Add a **Code** node before the WooCommerce step to automatically increase the scraped price by a percentage (margin).

## Need Help?
* [How to Find Your BrowserAct API Key & Workflow ID](https://www.youtube.com/watch?v=pDjoZWEsZlE)
* [How to Connect n8n to BrowserAct](https://www.youtube.com/watch?v=RoYMdJaRdcQ)
* [How to Use & Customize BrowserAct Templates](https://www.youtube.com/watch?v=CPZHFUASncY)
---
### Workflow Guidance and Showcase Video

* #### [Automate WooCommerce: Auto-Import Products & Write Blog Posts with n8n 🚀](https://youtu.be/euLP9xdv7J0)

## 🔗 Nodes Used

Telegram, Telegram Trigger, Wordpress, WooCommerce, AI Agent, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
