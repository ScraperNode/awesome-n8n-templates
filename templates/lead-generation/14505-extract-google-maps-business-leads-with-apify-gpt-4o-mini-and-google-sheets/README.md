# 🎣 Extract Google Maps business leads with Apify, GPT-4o-mini and Google Sheets

> ⚡ **40 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who Is This For?
This workflow is designed for **business analysts, market researchers, lead generation specialists, and sales teams** who need to gather detailed business intelligence from Google Maps. It's particularly valuable for anyone conducting competitor analysis, building prospect lists, or researching local business landscapes.
## What This Workflow Does
This workflow functions as an **automated Google Maps data extraction and intelligence system** that:
1. **Searches for businesses** on Google Maps based on a specific query and location
2. **Extracts comprehensive data** for each listing, including name, rating, address, phone, website, and reviews
3. **Structures the raw data** into a clean, usable format for analysis
4. **Programmatically initiates the scraping process** using a dedicated, cloud-based scraping tool
5. **Monitors the scraping job** until completion, ensuring all data is captured
6. **Delivers the final dataset** in a structured JSON format, ready for integration into CRMs, spreadsheets, or other applications

## Key Features
* **On-Demand Data Extraction** – Can be triggered anytime to scrape fresh data from Google Maps
* **Comprehensive Data Points** – Captures a wide range of information including ratings, reviews, contact details, and URLs
* **Cloud-Powered Scraping** – Leverages a specialized, pre-built actor (`crawler-google-places`) from the Apify platform for reliable and efficient scraping
* **Automated Job Management** – Automatically starts, monitors, and waits for the scraping task to complete
* **Structured Output** – Delivers clean, structured JSON data that is easy to parse and use
* **Programmatic Control** – Manages the entire process through API calls, making it easy to integrate into other workflows

## Requirements & Setup
- **Apify Account & API Token**: Required to access and run the Google Maps scraping actor.
- **Apify Actor ID**: The specific ID for the `crawler-google-places` actor (`nwua9GuXXXXDL7ZDj`).
- **Apify Task ID**: An optional pre-configured task (`IldouXXXQalCKQpfO`) for consistent scraping parameters.
- **Input Parameters**: You need to provide the `searchString` (e.g., "restaurants near Islamic University") and other scraping options.

## Support & Help
- **WhatsApp**: [Chat on WhatsApp](https://wa.me/8801322827799)
- **Discord**: [SpaGreen Community](https://discord.gg/SsCChWEP)
- **Facebook Group**: [SpaGreen Support](https://www.facebook.com/groups/spagreenbd)
- **Website**: [https://spagreen.net](https://spagreen.net)
- **Developer Portfolio**: [Codecanyon SpaGreen](https://codecanyon.net/user/spagreen/portfolio)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Telegram, Microsoft Teams, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
