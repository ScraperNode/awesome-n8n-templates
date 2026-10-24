# 📊 Send Amazon price drop alerts with Google Sheets, ScrapeUnblocker, and Gmail

> ⚡ **105 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow checks Amazon product pages on a 4-hour schedule (or manually), extracts the current title and price via ScrapeUnblocker, logs results to Google Sheets, and sends a Gmail alert when a product’s price drops below the threshold stored in the sheet.

## How it works
1. Runs every 4 hours (or when manually executed) to start a price-check cycle.
2. Reads the list of tracked products (including Product URL and Price Threshold) from a Google Sheets spreadsheet.
3. Loops through each product and uses ScrapeUnblocker to fetch the Amazon product page HTML.
4. Parses the HTML to extract the product title and price and converts the price into a numeric value for comparison.
5. Updates the corresponding row in Google Sheets with the latest check date, extracted title, and price values.
6. Compares the current numeric price to the stored threshold and, if the price is lower, sends a Gmail email with the product and price details.

## Setup
1. Add your Google Sheets OAuth credentials and update the spreadsheet ID and sheet/tab name used to read and update the Products list.
2. Add your ScrapeUnblocker credentials and ensure the workflow uses each row’s Product URL (not a hard-coded URL) when scraping.
3. Add your Gmail credentials and replace the recipient address in the Gmail step.
4. Ensure your Google Sheet has columns for Product URL, Price Threshold, and a numeric price field (for example, price_clean) plus fields to store the last checked date and last price/title.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
