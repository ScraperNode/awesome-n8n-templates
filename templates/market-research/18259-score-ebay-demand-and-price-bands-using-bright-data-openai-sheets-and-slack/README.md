# 📊 Score eBay demand and price bands using Bright Data, OpenAI, Sheets and Slack

> ⚡ **20 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs weekly to scrape eBay search results via Bright Data, score listings by demand within condition-based price bands, extract product details and write a sourcing brief with OpenAI, then logs the results to Google Sheets and posts a ranked digest to Slack.

## How it works
1. Runs weekly on a schedule and loads a comma-separated list of eBay search keywords plus scoring and output settings.
2. Triggers a Bright Data eBay discovery scrape for each keyword and polls the snapshot status until the dataset is ready.
3. Downloads the listings and computes a demand score per listing by comparing sold count and price against the median in each keyword-and-condition band, incorporating watchers, carts, offers, and remaining stock.
4. Reads previously logged listings from Google Sheets and filters out any items reported within the last 30 days, then keeps the top N new picks.
5. Uses OpenAI to extract structured product details (brand, model, product type, key features, bundle flag) from each listing’s title and specifications, then generates a short sourcing brief from the ranked set.
6. Appends one row per selected listing to Google Sheets and posts a formatted digest (with top picks and the brief) to the configured Slack channel.

## Setup
1. Add a Bright Data API key as an HTTP Header Auth credential and ensure it can access the Bright Data datasets API endpoints used by the workflow.
2. Add OpenAI credentials for the GPT-5.6 model used to extract product details and write the sourcing brief.
3. Connect Google Sheets credentials, create a spreadsheet with a sheet named “Listings”, and set the spreadsheet URL in the configuration.
4. Connect Slack credentials and set the target channel name in the configuration node.
5. Update the search keywords and tuning parameters (listings per keyword, minimum units sold, minimum demand score, picks per run, and revisit window) before activating the schedule.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
