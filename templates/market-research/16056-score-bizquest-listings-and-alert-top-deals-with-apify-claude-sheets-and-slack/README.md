# 📊 Score BizQuest listings and alert top deals with Apify, Claude, Sheets and Slack

> ⚡ **5 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This scheduled workflow scrapes BizQuest listings via an Apify API, deduplicates them against a Google Sheet, scores buyer fit with Anthropic Claude, and for high-fit deals generates broker outreach copy and sends a formatted alert to Slack while logging all scored listings to Google Sheets.

## How it works
1. Runs daily on a cron schedule (default 5:00 AM).
2. Sends a POST request to the Apify BizQuest scraper task using your buy-box filters and normalizes the returned listings, estimating SDE as 10% of revenue when missing.
3. Sorts listings by SDE, keeps the top 100, and processes them one by one.
4. Checks Google Sheets for the listing link and skips any listing that already exists.
5. Uses Anthropic Claude (Haiku) to score buyer fit (1–5) and output a short rationale and confidence level for each new listing.
6. Appends low-scoring deals (1–3) to Google Sheets for audit tracking.
7. For deals scoring 4–5, uses Anthropic Claude (Sonnet) to draft a broker outreach message, appends the enriched row to Google Sheets, and posts a Slack message with the deal details and copy-ready outreach text.

## Setup
1. Add credentials for Google Sheets (OAuth2), Slack (OAuth2), and Anthropic.
2. Create a Google Sheet with matching columns (including Link, Fit Score, Fit Rationale, Fit Confidence, and Broker Message) and replace YOUR_GOOGLE_SHEET_ID in both Google Sheets nodes.
3. Update the Apify task API URL in the HTTP request node and ensure it points to your BizQuest scraper task.
4. Edit the buy-box fields (buyBox text, keyword, cashFlowMin, priceMax, listingAgeDays) and set the target Slack user/channel ID for alerts.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
