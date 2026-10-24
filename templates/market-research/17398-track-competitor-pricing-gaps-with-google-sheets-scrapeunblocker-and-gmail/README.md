# 📊 Track competitor pricing gaps with Google Sheets, ScrapeUnblocker and Gmail

> ⚡ **5 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs on a schedule to read competitor product URLs and your price from Google Sheets, scrapes each competitor page using ScrapeUnblocker, calculates price differences and stock status, writes results back to the sheet, and sends a Gmail alert when a competitor undercuts you.

## How it works
1. Runs on a schedule.
2. Reads rows from a Google Sheets spreadsheet containing competitor product URLs and your baseline price.
3. Iterates through each competitor URL and fetches the live page HTML using ScrapeUnblocker with a US proxy.
4. Extracts the product name, price (Rs.), and stock status from the scraped HTML.
5. Compares the competitor price to your price to calculate the price gap and percentage difference and flags when the competitor undercuts you while in stock.
6. Updates the corresponding row in Google Sheets with the competitor price, stock status, price gap, product name, and last-checked timestamp.
7. Sends a Gmail email alert with the pricing details when the competitor is undercutting you.

## Setup
1. Connect Google Sheets credentials and update the spreadsheet ID and sheet tab used for reading and updating rows.
2. Ensure your Google Sheet includes columns for Competitor URL, Your Price, and row_number, plus output columns like Competitor Price, Stock Status, Price Gap, Product Name, and Last Checked.
3. Add your ScrapeUnblocker credentials (API key/account) to the ScrapeUnblocker node.
4. Connect Gmail credentials and set the recipient email address in the email alert step.
5. Adjust the schedule interval and, if needed, update the HTML parsing logic to match your competitor sites and currency format.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
