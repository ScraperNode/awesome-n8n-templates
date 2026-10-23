# 📈 Track daily stock sentiment from Twitter and Yahoo Finance to Google Drive with Apify

> ⚡ **53 views** · 📈 [Crypto Trading & Stock Market](../)

> 💡 **Pro Tip** — Twitter's API is paid now, which makes simple data pulls expensive. [ScraperNode](https://scrapernode.com/twitter) is a community node that scrapes [Twitter profiles](https://scrapernode.com/twitter/scrapers/profiles) and [posts](https://scrapernode.com/twitter/scrapers/posts) without needing API access.
>
> <a href="https://scrapernode.com/twitter"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs daily and uses Apify to scrape stock-related tweets and fetch Yahoo Finance ticker data, then packages each dataset as a date-stamped JSON file and uploads both files to a chosen Google Drive folder.

## How it works
1. Runs every day at 9:00 AM on a schedule.
2. Uses Apify’s Twitter (X.com) Scraper Unlimited actor to collect recent tweets matching the configured cashtags and keywords.
3. Uses Apify’s Yahoo Finance actor to fetch current data for the configured list of stock tickers.
4. Aggregates the tweet results and converts them into a single date-stamped JSON file.
5. Aggregates the stock results and converts them into a single date-stamped JSON file.
6. Uploads both JSON files to the specified Google Drive folder.

## Setup
1. Create an Apify credential in n8n using your Apify API token and select it in both Apify actor steps.
2. Create a Google Drive OAuth2 credential in n8n and select it in both Google Drive upload steps.
3. Set the target Google Drive folder ID in both upload steps (replace the placeholder value).
4. Update the Twitter search terms and Yahoo Finance tickers in the Apify actor inputs to match what you want to track.
5. Adjust the schedule time if you want the workflow to run at a different hour.

## Requirements
- Apify account

## Customization
- Swap the search terms and tickers to track any sector

## 🔗 Nodes Used

Google Drive, Schedule Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
