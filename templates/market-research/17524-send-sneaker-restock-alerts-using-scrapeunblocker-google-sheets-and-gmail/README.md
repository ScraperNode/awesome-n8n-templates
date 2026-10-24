# 📊 Send sneaker restock alerts using ScrapeUnblocker, Google Sheets, and Gmail

> ⚡ **7 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs on a frequent schedule to read monitored product URLs from Google Sheets, scrape each product page with ScrapeUnblocker, detect stock-status changes, update the sheet with the latest details, and send a restock alert email via Gmail.

## How it works
1. Runs on a minute-based schedule trigger.
2. Reads product URLs and the last known status for each item from a Google Sheets tab.
3. Loops through the rows and fetches each product page’s HTML using ScrapeUnblocker with a US proxy.
4. Extracts product name, price, stock status, available quantity, and rating from the HTML and compares the current status to the previous status.
5. When the status changes, updates the corresponding Google Sheets row with the latest status, price, and last-checked timestamp.
6. Sends an HTML restock alert email via Gmail with the product details and a link to the product page.

## Setup
1. Add Google Sheets credentials and point the workflow to your spreadsheet and the Products sheet, ensuring columns like Product URL, Last Known Status, and row_number exist.
2. Configure ScrapeUnblocker credentials and confirm the target product pages are accessible with your chosen proxy country settings.
3. Add Gmail credentials and replace the "YOUR EMAIL" recipient value with your target email address.
4. Adjust the schedule interval to match how often you want to check availability and to stay within scraping and email limits.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
