# 📊 Aggregate daily tech trends from Hacker News, TechCrunch and YouTube into a Data Table

> ⚡ **45 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs twice daily to collect top stories from Hacker News, latest articles from TechCrunch RSS, and US YouTube Science & Technology trending videos, then stores normalized results in an n8n Data Table for use by downstream widget/webhook workflows.

## How it works
1. Runs on a schedule at midnight and 8am (server time).
2. Deletes any existing rows in the n8n Data Table for today’s date to avoid duplicates.
3. Fetches the current top story IDs from the Hacker News API, loads details for the top 20, and normalizes them into date/source/title/url/score/rank rows.
4. Reads the TechCrunch RSS feed, keeps the first 15 items, and normalizes them into the same schema (with score set to 0).
5. Calls the YouTube Data API v3 to retrieve the top 15 US “mostPopular” videos in category 28 and normalizes them with viewCount as the score.
6. Inserts the normalized rows from Hacker News, TechCrunch, and YouTube into the n8n Data Table.

## Setup
1. Create an n8n Data Table named `tech_trends` with columns: date (string), source (string), title (string), url (string), score (number), and rank (number).
2. Create a Google Cloud API key with the YouTube Data API v3 enabled and add an n8n HTTP Query Auth credential that sends it as the `key` query parameter.
3. Select that HTTP Query Auth credential in the YouTube request step and adjust the schedule times/timezone if needed.

## Requirements
- Serve Tech Trends via JSON Webhook for Desktop Widgets (Requires Collector) + Stream Tech Trends to SwiftBar macOS Menu Bar via n8n Webhook (Requires Collector)

## Customization
- Google Cloud API key with the YouTube Data API v3 (free)

## 🔗 Nodes Used

HTTP Request, RSS Read, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
