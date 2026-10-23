# 📊 Scrape product prices and send GPT-4o-mini insights to Google Sheets and Gmail

> ⚡ **58 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs daily at 9 AM to scrape product titles and prices from a target website, store the results in Google Sheets, generate price statistics and an OpenAI GPT-4o-mini market insight, and email a formatted report with a CSV attachment via Gmail.

## How it works
1. Runs every day at 9:00 using a schedule trigger.
2. Fetches the target webpage HTML over HTTP and extracts all product blocks with CSS selectors.
3. Splits the extracted product blocks into individual items, then parses each product’s title and price and sorts the list by price in descending order.
4. Cleans the price into a numeric field and adds the current scrape date to each product record.
5. Appends the product rows to a Google Sheets tab and, in parallel, calculates min/max/average price plus top and bottom price lists for analysis.
6. Sends the compiled price context to OpenAI (GPT-4o-mini) to generate a short plain-text market insight.
7. Converts the scraped product list into a CSV file, then emails the stats and AI insight with the CSV attached using Gmail.

## Setup
1. Update the target URL and the CSS selectors used to extract product blocks, titles, and prices to match the site you want to scrape.
2. Add an OpenAI credential and ensure the workflow can access the GPT-4o-mini model.
3. Add Google Sheets OAuth credentials, set the spreadsheet ID, and create a “Products” sheet with columns for Title, Price, and Scraped Date.
4. Add Gmail OAuth credentials and set the recipient email address used to send the daily report.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
