# 📊 Scrape Google search rankings into Google Sheets with ScrapeUnblocker

> ⚡ **10 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow manually runs a Google SERP scraper that reads keywords from Google Sheets, fetches Google search result pages via ScrapeUnblocker, extracts the top organic results, and writes the parsed ranks, titles, and snippets back to Google Sheets.

## How it works
1. Starts when you manually trigger the workflow.
2. Reads the list of keywords from a Google Sheets worksheet.
3. Processes the keywords in batches and builds a Google Search URL (with `num=10`) for each keyword.
4. Uses ScrapeUnblocker to fetch the HTML for each Google search results page.
5. Parses the HTML to extract organic result rank, title, URL, meta description snippet, an optional published date, and the scrape date.
6. Updates the Google Sheets worksheet with the extracted SERP data and continues until all keywords are processed.

## Setup
1. Add a Google Sheets credential and update the spreadsheet ID, worksheet/tab, and input column name (expects a `Keyword` field) to match your sheet.
2. Add your ScrapeUnblocker credentials and confirm the workflow can access `https://www.google.com/search` from your environment.
3. Ensure the target Google Sheet has columns that match the fields being written (at least `Keyword`, `Rank`, `Title`, `Meta Description`, and `Date`, and optionally `URL`).

## 🔗 Nodes Used

Google Sheets

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
