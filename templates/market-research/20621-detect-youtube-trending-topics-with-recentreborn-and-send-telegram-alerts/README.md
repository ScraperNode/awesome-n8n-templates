# 📊 Detect YouTube trending topics with RecentReborn and send Telegram alerts

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs hourly to search YouTube via the RecentReborn API for your configured topics, tracks new video volume against a rolling baseline, detects spikes and breakout phrases, and sends a ranked digest of notable changes to a Telegram chat.

## How it works
1. Runs every hour (or on manual execution) and loads topic and threshold settings.
2. Builds a search plan per topic (and optionally Shorts), enforcing a per-run credit budget and page caps.
3. Queries the RecentReborn YouTube search API page by page with a short delay, stopping when it reaches the last-seen watermark, hits caps, or the daily quota gets low.
4. Aggregates new results per topic, compares the current posting rate to a median baseline from recent runs, and classifies each topic as learning, rising, spiking, cooling, or normal.
5. Detects newcomer channels and extracts breakout words and phrases from video titles while applying stopwords and cooldowns to avoid repeat alerts.
6. Builds a single Telegram digest (splitting into multiple messages if needed) and sends it to your Telegram chat only when there is something to report (or always on manual runs).

## Setup
1. Create a RecentReborn API key and configure an HTTP Header Auth credential with `Authorization: Bearer <your-key>` for the RecentReborn HTTP request.
2. Add a Telegram bot credential and make sure the bot can message your target chat.
3. Update the configuration values (topics, thresholds, page/credit limits, and `telegramChatId`) in the workflow settings node before activating.
4. Run the workflow manually to validate API access and message delivery, then activate it so baseline history is saved across scheduled runs.

## Requirements
- A RecentReborn API account (app.recentreborn.com) with an API key

## Additional info
Visit https://recentreborn.com/developers for more tutorials and templates.

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
