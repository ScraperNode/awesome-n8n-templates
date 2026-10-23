# 📊 Rank co-used Instagram hashtags from a form with RecentReborn

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow collects recent Instagram posts for a user-provided hashtag using RecentReborn, calculates and ranks co-used hashtags across distinct accounts, and returns an interactive results page (table, pairs, graph, CSV) via an n8n Form completion screen.

## How it works
1. Receives a submission from an n8n Form (or runs manually with default values from a configuration step).
2. Cleans and validates the hashtag, sample size, and optional exclude list and returns a form error screen if the input is invalid.
3. Uses RecentReborn to search Instagram posts for the hashtag up to the requested limit, retrying temporary failures with exponential backoff and turning API errors into user-readable messages.
4. Deduplicates and filters the returned posts (including repost and hashtag-stuffing checks), then counts and ranks co-used hashtags by distinct accounts, posts, and like-based metrics and also calculates frequently co-occurring hashtag pairs.
5. Builds an HTML results page that includes summary cards, warnings, a sortable/filterable ranking table, a hashtag set to copy, a pairs list, a network graph, a post list, and a CSV export.
6. If the run was started from the form, displays the generated HTML as the form completion screen; otherwise it leaves the results available in the execution data.

## Setup
1. Install the community node `n8n-nodes-recentreborn` on a self-hosted n8n instance and restart n8n if required.
2. Create and select a RecentReborn API credential (API key from app.recentreborn.com with API access) for the Instagram hashtag search step.
3. Open the n8n Form trigger, copy its production URL, and share it with users who should run analyses (optionally enable form authentication to control credit usage).
4. Review and adjust defaults and limits in the Config step (for example max sample size, retry settings, exclude list, minimum accounts per hashtag, and output sizes).

## Requirements
- A RecentReborn API account (app.recentreborn.com) with an API key

## Customization
- Visit https://recentreborn.com/developers for more tutorials and templates.

## 🔗 Nodes Used

n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
