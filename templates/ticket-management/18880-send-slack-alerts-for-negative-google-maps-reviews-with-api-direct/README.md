# 🎫 Send Slack alerts for negative Google Maps reviews with API Direct

> ⚡ **0 views** · 🎫 [Ticket Management & Triage](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs every morning to find your Google Maps business listing with API Direct, fetch the newest reviews, and post new 1–3 star reviews to a Slack channel for fast team response.

## How it works
1. Runs every morning on a schedule.
2. Searches Google Maps via API Direct using a plain-text business query and keeps the top matching place.
3. Fetches the newest Google Maps reviews for that place via API Direct.
4. Deduplicates reviews by remembering previously seen review IDs in the workflow’s persistent static data.
5. Filters the remaining reviews to only those with a rating of 3 stars or lower.
6. Posts an alert to Slack with the rating, author, timestamp, review text snippet, whether the owner has replied, and a direct review link.

## Setup
1. Create an API Direct account, add your API Direct API key as n8n credentials, and select it in both API Direct nodes.
2. Connect a Slack account in n8n and select the destination channel for alerts.
3. Update the business search text (name and location) in the business settings so the workflow finds the correct Google Maps listing.
4. Activate the workflow so the “seen review” memory persists across scheduled runs.

## Requirements
- An API Direct API key (new accounts include free credit)
- A Slack workspace

## Customization
- Alert on 1-2 stars only (or all reviews) by editing the filter
- Monitor several locations by turning the Set node into a list and looping over it
- Swap Slack for Gmail, Discord, or Telegram — the review fields flow straight through

## Additional info
API Direct is a verified community node, available on n8n Cloud and self-hosted n8n — search "API Direct" in the nodes panel to install. One API key covers Twitter/X, Reddit, TikTok, Instagram, YouTube, Facebook, Threads, Truth Social and Google News/Maps/web search (58 operations), pay-as-you-go from $0.002/request.

## 🔗 Nodes Used

Slack, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
