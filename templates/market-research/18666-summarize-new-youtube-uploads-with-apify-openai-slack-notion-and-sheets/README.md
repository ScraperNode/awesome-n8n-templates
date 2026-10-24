# 📊 Summarize new YouTube uploads with Apify, OpenAI, Slack, Notion and Sheets

> ⚡ **3 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow checks specified YouTube channels every hour using Apify’s YouTube Channel Monitor and posts a formatted Slack message for each newly published video, including the title, link, duration, and publish time.

## How it works
1. Runs every hour on a schedule.
2. Defines the list of YouTube channels to monitor and how many recent results to fetch per channel.
3. Uses Apify (dami_studio/youtube-channel-monitor) to retrieve uploads that are new since the last run.
4. Filters out any returned items that do not contain a valid video URL.
5. Deduplicates results by video ID to ensure each video triggers only one alert across executions.
6. Posts a Slack message to the selected channel with the channel name, video title, URL, duration in minutes, and publish timestamp.

## Setup
1. Create an Apify account and add an Apify API token credential in n8n.
2. Connect a Slack OAuth2 credential and select the Slack channel where alerts should be posted.
3. Replace the example channel list with the handles, channel IDs or URLs you want to watch, and set maxResultsPerChannel to suit how busy they are.

## 🔗 Nodes Used

Google Sheets, Slack, Notion, Schedule Trigger, Filter, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
