# 📊 Track TikTok keyword trends with API Direct, Google Sheets and Slack

> ⚡ **9 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs every morning to search TikTok for recent videos matching a keyword via API Direct, logs new results to Google Sheets, and sends a Slack alert when a video’s play count exceeds a configurable viral threshold.

## How it works
1. Runs every morning on a schedule.
2. Sets the target TikTok keyword and the viral play-count threshold.
3. Searches TikTok for the most recent videos from the last 24 hours using API Direct.
4. Skips videos that have already been logged in previous active runs by tracking seen URLs.
5. Appends each new video’s date, author, title, URL, and engagement metrics to a Google Sheets trend log.
6. Sends a Slack channel message for any newly found video whose play count meets or exceeds the viral threshold.

## Setup
1. Add an API Direct credential (API key) and ensure the TikTok “Search TikTok videos” step uses it.
2. Connect Google Sheets OAuth credentials and select the target spreadsheet and sheet in the append step.
3. Create a Google Sheet with columns: `date, author, title, url, plays, likes, shares, comments`.
4. Connect Slack credentials and choose the channel to receive breakout alerts.
5. Update the keyword and viral threshold values in the keyword settings step, then activate the workflow so the seen-video memory persists between runs.

## Requirements
- An API Direct API key (new accounts include free credit)
- A Google account for Sheets
- A Slack workspace (for breakout alerts)

## Customization
- Switch the search to Instagram, YouTube, or Twitter/X by changing the resource on the search node
- Tune the viral threshold per niche — 100k plays is huge for B2B, small for dance
- Track engagement rate instead: alert when likes/plays is unusually high

## Additional info
API Direct is a verified community node, available on n8n Cloud and self-hosted n8n — search "API Direct" in the nodes panel to install. One API key covers Twitter/X, Reddit, TikTok, Instagram, YouTube, Facebook, Threads, Truth Social and Google News/Maps/web search (58 operations), pay-as-you-go from $0.002/request.

## 🔗 Nodes Used

Google Sheets, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
