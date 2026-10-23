# 📱 Find and filter Instagram giveaways with RecentReborn and send to Telegram

> ⚡ **0 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs hourly (or manually) to search Instagram hashtags via the RecentReborn API, filters and ranks potential giveaway posts using configurable phrase and age/like rules, and sends each matching post to a Telegram chat while tracking what was already sent to avoid duplicates.

## How it works
1. Runs on an hourly schedule or when started manually.
2. Builds a capped list of hashtag and feed-type searches from your configuration.
3. Searches each Instagram hashtag feed through RecentReborn, pausing between requests and capturing any search errors without stopping the run.
4. Filters out posts that are too old, below the like threshold, already sent, missing required phrases, or containing excluded phrases, then ranks the remaining candidates by phrase matches and recency.
5. Sends each matching post as an HTML-formatted message to Telegram and optionally sends a single status alert if one or more searches failed.
6. Marks only successfully delivered posts as “seen” in workflow static data so they are not sent again, and fails the execution if Telegram rejects any giveaway messages so unsent posts are retried next run.

## Setup
1. Install the community node n8n-nodes-recentreborn and add a RecentReborn API credential with a plan that includes API access.
2. Create a Telegram bot with @BotFather, add a Telegram credential in n8n, and make sure the bot can message your target chat.
3. Replace telegramChatId in the Config node and adjust hashtags, feedTypes, phrase lists, and limits (post age, likes, messages per run, and delay between searches) to match your needs.

## Requirements
- A RecentReborn API account (app.recentreborn.com) with an API key


## Customization
- Visit https://recentreborn.com/developers for more tutorials and templates.

## 🔗 Nodes Used

Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
