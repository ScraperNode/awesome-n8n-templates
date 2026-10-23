# 🔧 Compare Amazon prices with Google Shopping using Bright Data, OpenAI and Slack

> ⚡ **3 views** · 🔧 [Miscellaneous](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs every morning to scrape your watched Amazon product prices with Bright Data, compares them to the last saved snapshot in Google Sheets, checks Google Shopping for cheaper offers when changes occur, and uses OpenAI GPT-5.6 to post a concise price-movement brief to Slack.

## How it works
1. Runs daily on a schedule and loads a watchlist of Amazon product URLs and alert thresholds from the workflow configuration.
2. Sends the product URLs to Bright Data’s Amazon dataset scraper to collect the latest price, stock, seller, rating, and rank data.
3. Reads the existing `history` tab in Google Sheets, compares each product to its most recent prior snapshot, and flags price moves beyond the configured percentage thresholds, stock flips, or buy box seller changes.
4. Appends today’s full product snapshot to the Google Sheets `history` tab to create the baseline for the next run.
5. For products with flagged changes, queries Bright Data’s SERP API for Google Shopping results and extracts the cheapest plausible new-condition competing offers.
6. Uses OpenAI GPT-5.6 to write a sub-200-word Slack-ready brief grounded in the collected numbers and posts it to a Slack channel.

## Setup
1. Create a Bright Data account, set up access to the Amazon dataset scrape endpoint and a SERP API zone, and add an HTTP Header Auth credential with `Authorization: Bearer YOUR_KEY` for both Bright Data HTTP requests.
2. Create a Google Sheet with a `history` tab, add Google Sheets credentials in n8n, and paste the sheet URL into `history_sheet` in the workflow configuration.
3. Add an OpenAI credential that can access the `gpt-5.6-terra` model and a Slack credential with permission to post messages.
4. Update the Slack target channel (default `#price-watch`) and paste your Amazon product URLs (one per line) plus thresholds like `alert_drop_pct`, `alert_rise_pct`, and `max_products` in the workflow configuration.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
