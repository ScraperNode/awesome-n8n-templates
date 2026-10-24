# 📊 Track Amazon keyword prices daily with Scrapewise and Google Sheets

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs daily to search Amazon for a list of keywords using Scrapewise and appends each product’s price and metadata (ASIN, rating, reviews, link) to Google Sheets to build a dated price history.

## How it works
1. Runs every day at 07:00 on a schedule.
2. Loads your configured Amazon search keywords, marketplace, and page count.
3. Calls Scrapewise’s `search_amazon` tool to retrieve Amazon search results or a background job ID for larger requests.
4. If Scrapewise returns a running job, waits 30 seconds and then fetches the completed results using Scrapewise’s `get_results` tool.
5. Normalizes the Scrapewise response into one item per product and adds a `checkedAt` date field.
6. Appends the daily product rows (Date, Title, ASIN, Price, Rating, Reviews, Link) to a Google Sheets tab to create a price log over time.

## Setup
1. Create a Scrapewise API key and add it to n8n as an HTTP Bearer Auth credential used by the Scrapewise calls.
2. Connect a Google Sheets OAuth2 credential and set the target spreadsheet ID and tab name in the Google Sheets append step.
3. Update the keyword list, Amazon marketplace code (for example `de` or `com`), and pages/quote settings in the configuration step.
4. Adjust the schedule time and the wait duration if your Scrapewise jobs need longer to complete.

## 🔗 Nodes Used

Google Sheets, Schedule Trigger, MCP Client

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
