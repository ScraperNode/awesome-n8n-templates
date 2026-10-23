# 📊 Review content ideas against existing pages with HasData, OpenAI and Google Sheets

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow evaluates a proposed content topic by crawling a sitemap-scoped set of your pages with HasData, comparing it with live Google SERP evidence, and using OpenAI to recommend whether to update an existing page, create a new one, or request review, storing results in Google Sheets.

## How it works
1. Runs manually and loads the configured site, sitemap scope, query, limits, and Google Sheets spreadsheet ID.
2. Reads the “Review queue” tab in Google Sheets to prevent re-analyzing ideas that already have an approval decision or an existing brief.
3. Fetches the XML sitemap (and up to the configured number of same-host child sitemaps), filters URLs by the path prefix, and selects up to the configured number of pages to inspect.
4. Uses HasData to scrape each selected page and extracts the main text content from the configured CSS selector.
5. Uses HasData to fetch Google organic SERP results (and related questions where available) for the same query and normalizes the evidence.
6. Sends the page excerpts and SERP evidence to OpenAI to produce a structured decision with supporting evidence and next actions, then validates that evidence links and quotes are consistent.
7. Appends or updates the matching row in Google Sheets with the decision, rationale, gaps, and a compact JSON evidence payload, or (in brief mode after approval) generates an OpenAI editorial brief and saves it back to the same row.

## Setup
1. Add HasData API credentials (including the HasData community node) and OpenAI API credentials in n8n.
2. Add Google Sheets OAuth credentials and create a spreadsheet with a “Review queue” tab using the headers referenced by the template.
3. In the Settings values, set your site URL, same-host XML sitemap URL, path prefix, content selector, query, and replace REPLACE_WITH_SPREADSHEET_ID with your spreadsheet ID.
4. Run in analyze mode first, then review the saved row in Google Sheets and set approval to APPROVED with decision create_new or update_existing before rerunning in brief mode.

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
