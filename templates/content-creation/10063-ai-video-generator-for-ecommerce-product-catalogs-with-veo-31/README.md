# 🎬 AI video generator for eCommerce product catalogs with Veo 3.1

> ⚡ **2,564 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# AI Video Generator for eCommerce Product Catalogs

Transform static product images from any online store into engaging animated videos using Google's Veo 3.1 AI. Simply submit a catalog page URL and automatically generate professional product showcase videos where models pose and move to display clothing and fashion items from multiple angles - perfect for elevating product pages with dynamic content that increases conversion rates.

## How it works

* **Submit any eCommerce catalog page URL** through a simple web form (works with Shopify, WooCommerce, and most online stores)
* **Automatically scrapes product listings** using Firecrawl to extract product titles and high-quality images
* **Batch processes product images** with intelligent iteration through your catalog inventory
* **Generates 8-second animated videos** using Google Veo 3.1 where models wearing the clothing strike multiple poses to showcase fit and style
* **Polls for completion status** and automatically downloads finished videos when ready
* **Organizes assets in Google Drive** with source images and output videos in a structured folder system

The workflow creates professional product videos that show garments from different angles with natural model movements, giving shoppers a much better sense of how items look and fit compared to static photos alone.

## Set up steps

1. **Connect API credentials**: Firecrawl account for web scraping, Google Gemini/Veo API for video generation, Google Drive for asset storage
2. **Create Google Drive output folder** where source images and generated videos will be automatically saved
3. **Configure folder ID** in the workflow to point to your designated Drive location
4. **Adjust product limit** (optional) to control how many catalog items to process per run
5. **Deploy the form webhook** to get your submission URL for catalog page processing

**Time investment**: ~15-20 minutes for API setup and configuration, then just submit catalog URLs to automatically generate video content for your entire product line.

**Requirements**: Firecrawl account for web scraping, Google Cloud account with Veo 3.1 API access (currently in preview), Google Drive account. Works best with fashion and apparel catalogs.

**Note**: Video generation takes approximately 10 seconds per product as Veo processes each request. The workflow includes automatic polling to handle the async video generation process.

## 🔗 Nodes Used

HTTP Request, Google Drive, n8n Form Trigger, Convert to File, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
