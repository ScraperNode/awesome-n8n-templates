# 📊 Send a daily tech and world news briefing from RSS and YouTube to Telegram

> ⚡ **169 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs daily to collect headlines from multiple RSS feeds and recent YouTube videos, cleans and deduplicates the results, formats them into an HTML morning briefing, and sends the briefing to a Telegram chat.

## How it works
1. Runs every day at 07:00 using a schedule trigger.
2. Fetches the latest items from TechCrunch, The Verge, BBC World/Asia, and The Hindu RSS feeds.
3. Searches YouTube for videos published in the last 24 hours and filters results to keep relevant AI/tech topics while excluding unwanted themes.
4. Combines RSS and YouTube items, removes duplicates, cleans text/HTML, detects a source label, and sorts stories by publish time.
5. Builds one or more Telegram-safe HTML messages containing a linked bullet list of the curated items.
6. Sends the briefing message(s) to the configured Telegram chat.

## Setup
1. Add YouTube Data API credentials for the YouTube search step.
2. Add a Telegram bot token credential and replace the Telegram chat ID with your target chat/channel.
3. Update the RSS feed URLs and YouTube search query/filters to match the sources and topics you want included.

## 🔗 Nodes Used

RSS Read, Telegram, YouTube, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
