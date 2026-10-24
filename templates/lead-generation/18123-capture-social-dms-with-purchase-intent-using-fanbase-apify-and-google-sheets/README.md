# 🎣 Capture social DMs with purchase intent using FanBase, Apify and Google Sheets

> ⚡ **2 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs every 15 minutes to scan your socials with FanBase Copilot DMs for purchase-intent messages, enriches matched fans by resolving their social handle via FanBase CRM and scraping their Instagram profile with Apify, then writes or updates a lead row in Google Sheets.

## How it works
1. Runs every 15 minutes on a schedule.
2. Reads a saved timestamp watermark from an n8n data table and queries FanBase MCP for new DM activity since that time (or the last 24 hours on the first run).
3. Filters the returned events to DMs only, detects purchase intent via keyword matching, keeps one lead per fan, and generates a reply link for the conversation.
4. Updates the watermark in the data table so the next run only scans newer messages.
5. Pulls two pages of FanBase MCP CRM data, merges them, and joins each intent lead to its CRM profile to resolve the fan’s handle and profile URL.
6. Runs the Apify actor apify/instagram-profile-scraper for each resolved handle to retrieve profile details like bio, follower count, and external links.
7. Builds a normalized lead record (including an extracted email when available) and appends or updates the matching row in a Google Sheets Leads tab using fan_id as the unique key.

## Setup
1. Create and select a FanBase MCP OAuth2 credential for https://api.copilot.fanbase.gg/mcp on the DM query and CRM lookup steps.
2. Create an n8n data table with string columns key and value, select it in the watermark read/write steps, and use the key funnel_last_ts for the stored timestamp.
3. Add an Apify API token credential and ensure the workflow can run the apify/instagram-profile-scraper actor.
4. Add a Google Sheets OAuth2 credential, paste your target spreadsheet URL, and create a Leads sheet with the required header columns used by the workflow.
5. Review and tune the purchase-intent keyword list and, if needed, increase the number of CRM pages fetched to cover your full FanBase CRM.

## Requirements
- FanBase MCP
- Google API
- Apify API (Free account)

## Additional info
This is a base build for a GTM Engineering stack we use internally to qualify leads and scrape direct to CRM - the nodes can be changed out to your product stack however keeping FanBase MCP means less of a setup on API's as it connects to TikTok,Instagram,X and Twtich all in one package

## 🔗 Nodes Used

Google Sheets, Schedule Trigger, Data table, MCP Client

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
