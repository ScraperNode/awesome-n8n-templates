# 🎣 Monitor Instagram location posts and build creator leads in Google Sheets with Telegram alerts

> ⚡ **1 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow lets you pick Instagram locations via an n8n form, then every 30 minutes searches those locations through RecentReborn, logs new posts to Google Sheets, builds/upserts a creator lead list, and sends Telegram alerts for high-engagement posts, new regular creators, digests, and errors.

## How it works
1. Receives a location search term through an n8n Form trigger, looks up matching Instagram locations in RecentReborn, and lets you select which locations to monitor.
2. Saves the selected location IDs and names to the Google Sheets “Locations” tab without overwriting existing per-location monitoring state.
3. Runs every 30 minutes (or on manual execution), reads active locations and existing creators from Google Sheets, and sends a Telegram reminder if no active locations are configured.
4. For each active location, queries RecentReborn for recent location posts (up to three pages) and stops paging when posts are older than the stored cutoff time.
5. Deduplicates and filters results, appends newly discovered posts to the Google Sheets “Posts” tab, and upserts qualifying accounts into the “Creators” tab while preserving any existing “Outreach Status” edits.
6. Updates each location’s monitoring state in the Google Sheets “Locations” tab (watermark, recent post IDs, and run status) so the next run continues from the right point.
7. Sends Telegram messages for viral posts, creators who become “regulars,” an optional per-run digest, and combined warnings for any location searches or sheet writes that fail.

## Setup
1. Create a RecentReborn account and add an HTTP Header Auth credential with header name `Authorization` and value `Bearer YOUR_KEY` for the RecentReborn HTTP requests.
2. Create a Google Sheet with “Locations”, “Posts”, and “Creators” tabs, then connect your Google Sheets OAuth2 credential and set the sheet URL in the workflow configuration.
3. Create a Telegram bot, connect your Telegram credential, and set the target Telegram chat ID in the workflow configuration.
4. Publish the “Location Setup Form” and paste its production URL into `setupFormUrl`, then adjust thresholds (formats, like limits, regular threshold, digest) in the configuration before activating.

## Requirements
- A RecentReborn API account (app.recentreborn.com) with an API key

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Schedule Trigger, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
