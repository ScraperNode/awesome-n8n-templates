# 📊 Log recent YouTube videos to Google Sheets with RecentReborn and Telegram alerts

> ⚡ **1 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
YouTube removed the 'Upload Date: Last Hour' filter. This workflow fills that gap, running hourly to search YouTube via the RecentReborn Search API, deduplicating results, and logging them to Google Sheets, with Telegram alerts on failure.

## How it works
1. Runs every hour on a schedule (or manually for testing).
2. Reads your comma-separated search terms and splits them into individual queries with shared settings like upload window and video type.
3. Calls the RecentReborn Search API for each query to retrieve recent YouTube video results uploaded within the last hour.
4. Validates that each API response includes a results list and sends a Telegram message when the request fails or the response format is unexpected.
5. Deduplicates videos by URL using workflow static data so only previously unseen videos from this run continue.
6. Appends new videos to Google Sheets or updates existing rows by matching on the url column.

## Setup
1. Create a RecentReborn API key and add it as an HTTP Bearer Auth credential used by the RecentReborn search request.
2. Connect your Google Sheets OAuth credential and set the target spreadsheet and sheet tab for the append/update action.
3. Connect a Telegram bot credential, set your Telegram chat ID in the workflow settings, and use it to receive error alerts.
4. Update the search terms (comma-separated) and optional filters (upload window, type, duration) in the configuration step, then run once manually before enabling the hourly schedule.

## Requirements
- A RecentReborn API account (app.recentreborn.com) with an API key

## Additional info
Visit https://recentreborn.com/developers for more tutorials and templates.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
