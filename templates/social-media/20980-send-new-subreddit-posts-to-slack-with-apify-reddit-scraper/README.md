# 📱 Send new subreddit posts to Slack with Apify Reddit scraper

> ⚡ **0 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs every hour, scrapes new posts from one or more subreddits using Apify’s Reddit Scraper Actor, filters out non-post items and duplicates from previous runs, and sends each new post to a Slack channel.

## How it works
1. Runs every hour on a scheduled trigger.
2. Builds the scrape settings (subreddit list, lookback window, and maximum posts) from configured values.
3. Uses Apify (Reddit Scraper Actor) to fetch recent subreddit content posted within the lookback window.
4. Keeps only items that are Reddit posts and ignores other returned data types.
5. Skips posts that have already been sent in previous executions using the Reddit post ID.
6. Posts each new Reddit thread to Slack with the title, link, subreddit name, author, upvotes, and comment count.

## Setup
1. Install and enable the Apify community node (@apify/n8n-nodes-apify) if it is not already available in your n8n instance.
2. Create an Apify API token and add it as an Apify credential in n8n, then ensure the workflow points to your Apify account.
3. Add Slack credentials, select the target Slack channel in the message step, and confirm the bot/app can post to that channel.
4. Update the subreddit list, lookback window, and max post limit in the workflow settings to match your monitoring needs.

## Requirements
- An Apify account (the free plan covers small runs) and a Slack workspace

## Customization
- Change the subreddit list, the lookback window and the maximum posts in the Settings node. Swap the Slack node for Discord, Telegram or email.

## Additional info
Use this to replace Reddit RSS feeds, which Reddit turns off on 13 November 2026, and the Reddit node, which needs a Reddit API app (Reddit takes no new API access requests after 31 October 2026). This workflow needs no Reddit app, no OAuth and no API approval. Field mapping from RSS: link → postUrl, title → title, content → body, author → authorName.

## 🔗 Nodes Used

Slack, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
