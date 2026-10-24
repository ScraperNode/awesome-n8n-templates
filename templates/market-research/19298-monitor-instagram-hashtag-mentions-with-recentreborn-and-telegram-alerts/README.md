# 📊 Monitor Instagram hashtag mentions with RecentReborn and Telegram alerts

> ⚡ **17 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs on a schedule or manually to search recent Instagram posts by hashtag via the RecentReborn API, deduplicates mentions across runs, and sends Telegram alerts for new posts or error notifications when the API fails or returns an unexpected response.

## How it works
1. Runs every 15 minutes (or on manual test) and loads the configured comma-separated hashtag list and target Telegram chat ID.
2. Splits the hashtag list into individual searches and queries the RecentReborn API for each hashtag’s Instagram results.
3. Sends a Telegram warning if a hashtag search request fails.
4. Validates that each API response contains a `results` field and alerts via Telegram if the response format is unexpected.
5. Deduplicates posts by URL using stored workflow data and keeps only brand-new mentions across all tracked hashtags.
6. Sends a Telegram message for each new mention (author and post link) or, on manual tests with no new results, sends a single confirmation summary.

## Setup
1. Create a RecentReborn API key and add it as an HTTP Header Auth credential used by the RecentReborn hashtag search request.
2. Create a Telegram bot, add a Telegram credential in n8n, and set the chat ID used by the Telegram notification steps.
3. Update the hashtag list (comma-separated) and `telegramChatId` value in the configuration step before activating the workflow.
4. Enable the “Every 15 Minutes” schedule trigger if you want continuous monitoring, or use the manual trigger for testing.

## Requirements
- A RecentReborn API account (app.recentreborn.com) with an API key

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
