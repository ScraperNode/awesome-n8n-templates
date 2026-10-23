# 📊 Monitor hotel competitor rates on Booking.com and tiket.com with MrScraper, Gemini and Telegram

> ⚡ **1 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs daily to scrape competitor hotel rates from Booking.com and tiket.com using MrScraper, stores rate history in Google Sheets, generates an Indonesian summary with Google Gemini, and sends a combined watchlist and area market scan report to Telegram.

## How it works
1. Runs every day at 15:00 (Asia/Jakarta) and starts both the competitor watchlist scan and a Booking.com area search scan.
2. Reads competitor listings from Google Sheets and builds dated detail-page URLs for the next two weekends, routing Booking.com to structured scraping and tiket.com to rendered-page scraping.
3. Uses MrScraper to extract room types and prices from Booking.com, and uses MrScraper plus Google Gemini to extract room types and prices from tiket.com markdown.
4. Normalizes rates, compares them to the existing Google Sheets history to detect confirmed price-level changes, then appends all observations to the Rate_History sheet and upserts the latest values into Current_Status.
5. Builds a report that includes platform health, market cheapest prices per listing and date, sold-out detection, cross-platform comparisons, date-to-date comparisons, and multi-day price trends.
6. Scrapes the top listings from a Booking.com search results page for the configured city, extracts each listing’s cheapest rate, and appends the results to the Area_Scan sheet.
7. Uses Google Gemini to write a Telegram-friendly report (or falls back to a deterministic summary if Gemini fails) and sends a single combined message to a Telegram chat.

## Setup
1. Install the community node package n8n-nodes-mrscraper (self-hosted n8n) and add MrScraper API credentials.
2. Create a Google Sheets OAuth credential, make a spreadsheet with the required tabs (Listings, Rate_History, Current_Status, Area_Scan), and replace YOUR_GOOGLE_SHEET_ID in all Google Sheets nodes.
3. Populate the Listings sheet with competitor properties, including platform (booking.com or tiket.com) and the property detail URLs.
4. Add Google Gemini credentials for the Gemini nodes and ensure your API quota supports the daily extraction and report generation.
5. Create a Telegram bot and credential, then set YOUR_TELEGRAM_CHAT_ID in the Telegram node to the target user or group chat.
6. Optionally customize the monitored stay dates and city by editing WEEKEND_COUNT in the request builder and AREA_CITY/DAY_OFFSET in the area scan URL builder.

## Requirements
- Self-hosted n8n with the community node n8n-nodes-mrscraper
- MrScraper account and API token. The Free plan allows 10 parallel requests
- Google Sheets OAuth2 credential and a copy of the sheet template
- Gemini API key. 1 run uses up to 3 Gemini requests
- Telegram bot token from @BotFather and your chat ID

## Customization
- Platforms and stay dates: EXTRACTION_PATH and WEEKEND_COUNT in Build Requests
- Alert threshold: ALERT_THRESHOLD_PCT in Normalize Booking Rates and Normalize Markdown Rates
- Area scan city and check-in offset: AREA_CITY and DAY_OFFSET in Build Area Scan URL
- Report language: the report is in Indonesian. Edit the prompt in Gemini Write Report and the labels in Compose Telegram Message

## Additional info
Sheet template: https://docs.google.com/spreadsheets/d/1toPSjbY7JspOkHNheB7D3L-ezYAvjM7rBaFr8oHOdlI/copy
1 run checks 4 stay dates (the next 2 weekends) per listing. 10 listings = 40 page requests, plus 6 for the area scan.
MrScraper nodes use On Error: Continue. A failed page is saved with its status, and the run continues.

## 🔗 Nodes Used

Google Sheets, Telegram, Schedule Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
