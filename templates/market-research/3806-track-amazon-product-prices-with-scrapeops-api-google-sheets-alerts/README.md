# 📊 Track Amazon product prices with ScrapeOps API & Google Sheets alerts

> ⚡ **2,002 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Amazon Product Price Tracker

This workflow automatically monitors Amazon product prices, tracks price changes, and sends alerts when significant price fluctuations occur. Built with ScrapeOps' structured data API, it provides a reliable, maintenance-free solution for price tracking without worrying about anti-bot measures or complex selectors.

## What This Workflow Does

- Monitors multiple Amazon products simultaneously using their ASINs
- Calculates both absolute and percentage price changes
- Sends customizable email alerts when prices cross defined thresholds
- Maintains a historical record of all price data for trend analysis
- Updates a Google Sheets with the latest price information

## Prerequisites

- A ScrapeOps API key (register at https://scrapeops.io)
- Google account for Google Sheets integration
- SMTP email configuration for alerts

## Setup Instructions

1. **Spreadsheet Setup**
   - Make a copy of the template spreadsheet: https://docs.google.com/spreadsheets/d/1hRv-TBXrpN6rkIU65WorttNHt-IPWas_An0sF4Of39U
   - Add your Amazon product ASINs in the "Products to Monitor" sheet
   - Set your desired alert thresholds for price increases/decreases

2. **Workflow Configuration**
   - Add your ScrapeOps API key to the "Setup" node
   - Update the spreadsheet URL in the "Setup" node with YOUR copy
   - Configure your email settings for notifications
   - Adjust the schedule frequency as needed (default: hourly)

## How It Works

The workflow reads product ASINs from your Google Sheet, fetches current pricing data via ScrapeOps' Amazon Product API, calculates price changes, updates your spreadsheet, and sends alerts when price movements exceed your defined thresholds.

Unlike traditional web scrapers that break when websites change, this solution uses ScrapeOps' reliable API that handles all the complexity of Amazon data extraction, ensuring consistent results without maintenance.

## Additional Notes

- This workflow is ideal for deal hunters, price comparison services, and e-commerce analytics
- The alerting system can be extended to additional channels like Slack or Telegram
- ScrapeOps handles all anti-bot measures, proxy management, and parsing complexities

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
