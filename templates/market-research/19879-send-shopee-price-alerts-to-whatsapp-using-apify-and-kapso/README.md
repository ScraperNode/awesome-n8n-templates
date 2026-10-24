# 📊 Send Shopee price alerts to WhatsApp using Apify and Kapso

> ⚡ **16 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Automates Shopee price monitoring for competitive analysis.

You can set up alerts by submitting a Shopee product or search URL and your WhatsApp number. On your configured schedule, n8n scrapes the Shopee results, finds the 3 lowest-priced products, and sends a price report directly to WhatsApp using Kapso.

## How it works
1. Submit a Shopee URL and WhatsApp number through the alert form.
2. n8n stores the alert in an n8n Data Table and prevents duplicate alerts.
3. The workflow runs automatically based on the configured schedule.
4. n8n retrieves all saved Shopee alerts and processes them one by one.
5. Each Shopee URL is scraped using Apify to collect product data.
6. Products are sorted by price and the 3 lowest-priced products are selected.
7. A price report containing the product name, Shopee URL, and price is sent to WhatsApp using Kapso.
8. The process repeats automatically for all configured alerts.

## Setup
1. Set up the n8n Data Table for storing Shopee alerts.
2. Connect your Apify account for Shopee data scraping.
3. Configure your Kapso API credentials.
4. Configure the workflow schedule.
5. Activate the workflow.
6. Submit Shopee URLs and WhatsApp numbers through the provided alert form.
7. The workflow will automatically send competitive price reports based on your schedule.

## Requirements
- n8n
- n8n Data Tables
- Apify account
- Kapso account
- WhatsApp number
- A Shopee URL to monitor

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, n8n Form Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
