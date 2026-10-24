# 📊 Track hotel rate positioning with Bright Data, GPT-5.6, Google Sheets and Slack

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs every Monday to scrape Google Hotels rates via Bright Data for four future check-in dates, calculates your property’s price position against a star-banded comp set, appends the results to Google Sheets, and posts a short GPT-5.6 summary to Slack.

## How it works
1. Runs every Monday morning on a schedule.
2. Builds a four-date Google Hotels search grid from your settings (market term, stay length, guests, country/currency, and date horizons) and triggers a single Bright Data dataset job with all inputs.
3. Polls Bright Data until the snapshot is ready (or a maximum poll limit is reached) and then downloads the full rate snapshot.
4. Cleans and filters the results by removing sponsored booking options and excluding out-of-band properties by star rating, then computes per-date comp-set quartiles, your cheapest rate, your rank, and your channel spread.
5. Sends the computed per-date stats to GPT-5.6 (OpenAI) to generate a short narrative note without inventing new numbers or recommending a new rate.
6. Appends one row per date to a Google Sheets “Rates” tab and posts a single combined digest message to the configured Slack channel.

## Setup
1. Create a Bright Data Web Scraper API header-auth credential and ensure it has access to the Google Hotels dataset used by the workflow.
2. Add an OpenAI (Chat) credential for the GPT-5.6 model, plus Google Sheets OAuth credentials and a Slack OAuth credential.
3. Update the Settings values (property name, market search term, horizons in `nights_ahead`, star band, and Slack channel), keeping `accommodation_type` and `sort_by` exactly as expected (case-sensitive).
4. Replace the Google Sheets document URL/ID in the Google Sheets append step and ensure the spreadsheet has a sheet/tab named “Rates” with columns that match the fields being appended.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
