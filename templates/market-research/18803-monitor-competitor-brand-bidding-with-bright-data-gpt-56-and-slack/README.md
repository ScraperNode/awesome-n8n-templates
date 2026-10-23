# 📊 Monitor competitor brand bidding with Bright Data, GPT-5.6 and Slack

> ⚡ **5 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs every morning to scrape Google paid search ads for your brand queries using Bright Data, logs all sightings to Google Sheets, tracks advertiser history in an n8n Data Table, and uses OpenAI (GPT-5.6) to classify notable changes before sending alerts and digests to Slack.

## How it works
1. Runs every day at 07:00 and loads your brand, markets, query modifiers, and Slack/channel settings.
2. Builds a fixed grid of brand search queries per market (including city-level location) and calls the Bright Data SERP API for each Google results page.
3. Extracts advertisers from both the top and bottom ad blocks, deduplicates results per query/location, and keeps the workflow alive even when no ads are returned.
4. Compares the current sweep to an n8n Data Table roster to increment sightings, detect new advertisers or headline rewrites, and mark advertisers as missing or stopped after a configurable number of missed sweeps.
5. Appends all real ad sightings to a Google Sheets “sightings” tab and upserts the updated roster metrics back into the Data Table.
6. Sends only new, rewritten, or newly stopped rival ads to OpenAI (GPT-5.6) to label intent and summarize the creative, then routes items into an escalation (brand named in ad copy), a digest (other notable changes), or a quiet lane.
7. Posts a single consolidated Slack message for the escalation or digest lane, or does nothing when there are no noteworthy changes.

## Setup
1. Create a Bright Data SERP zone and add an HTTP Header Auth credential in n8n, then set the zone name in the workflow settings.
2. Add OpenAI credentials (for the GPT-5.6 model) and Slack credentials, and set the target Slack channel name in the settings.
3. Create an n8n Data Table named `brand_bidding` with the columns `watch_key`, `advertiser`, `query`, `country`, `location`, `first_seen`, `last_seen`, `sweeps_seen`, `misses`, and `last_headline`.
4. Create a Google Sheet with a `sightings` tab, connect Google Sheets credentials, and replace the spreadsheet URL/ID in the Google Sheets append step.
5. Update the Settings values for your brand name, your owned domains, authorized partner domains, query modifiers, markets (`country=City,Region,Country`), and thresholds like `max_queries` and `gone_after`.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger, Filter, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
