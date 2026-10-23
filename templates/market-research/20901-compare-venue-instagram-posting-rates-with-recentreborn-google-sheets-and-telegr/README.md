# 📊 Compare venue Instagram posting rates with RecentReborn, Google Sheets and Telegram

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow benchmarks Instagram posting activity for your venues vs competitors using RecentReborn data, stores samples and new posts in Google Sheets, and sends weekly reports and alerts to Telegram, optionally adding an OpenAI-based caption summary.

## How it works
1. Receives venue submissions via an n8n form (or runs on a 4-hour schedule/manual test run) and loads shared configuration values.
2. For setup submissions, searches RecentReborn for matching Instagram locations, lets you select the correct location IDs, and saves them to the Venues tab in Google Sheets as own venue or competitor.
3. On scheduled/manual runs, reads active venues from the Venues sheet, caps the run size, and sends a Telegram reminder if no venues are configured.
4. For each venue, calls RecentReborn to fetch the newest posts (respecting delays and quota limits) and calculates an estimated posting rate from post timestamps.
5. Appends per-venue samples and any newly seen posts to the Samples and Posts tabs in Google Sheets, then updates each venue’s watermark and last status in the Venues tab.
6. When the weekly report window is due, aggregates the last N days of Samples/Posts, optionally summarizes captions with OpenAI, and sends a ranked report plus any alerts to Telegram.

## Setup
1. Create a RecentReborn API credential using HTTP Header Auth (Authorization: Bearer <key>) with API access enabled.
2. Create a Google Sheet with Venues, Samples, and Posts tabs (including the expected header columns) and add a Google Sheets OAuth2 credential.
3. Add a Telegram bot credential, set your target chat ID, and paste the sheet URL and chat ID into the configuration values.
4. (Optional) Add an OpenAI API credential and enable AI reporting in the config to include caption-based themes and summaries.
5. Copy the Venue Setup Form production URL (and optionally save it in setupFormUrl) and use it to add your own venues and competitors before activating the schedule.

## Requirements
- A RecentReborn API account (app.recentreborn.com) with an API key

## Additional info
Visit https://recentreborn.com/developers for more tutorials and templates.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
